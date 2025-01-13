<script lang="ts">
	import {parse} from "../../../../parsing/parse.ts";
	import {abstractifySyntaxTree} from "../../../../abstractifying/abstractifySyntaxTree.ts";
	import type {SourceFileContentAbstractSyntaxTreeNode} from "../../../../abstract-syntax-tree/tree-node-types/source-file-content/SourceFileContentAbstractSyntaxTreeNode.ts";
	const {
		sourceCode,
	}: Readonly<{
		sourceCode: string;
	}> = $props();
	const sourceCodeCharacters: readonly string[] = $derived(sourceCode.split(""));
	const parseResult = $derived(parse(sourceCodeCharacters));
	function betterJsonStringify<TypeName extends string, Children>(
		part: unknown,
		depth: number,
	): string {
		console.log(part);
		if (Array.isArray(part)) {
			return `[\n${part.map((p) => `${"\t".repeat(depth + 1)}${betterJsonStringify(p, depth + 1)},`).join("\n")}\n${"\t".repeat(depth)}]`;
		}
		if (typeof part === "object") {
			return `${part.typeName.slice(0, 1).toUpperCase()}${part.typeName.slice(1)}{\n${[
				...Object.entries(part.children),
			]
				.map(([k, v]) => `${"\t".repeat(depth + 1)}${k}: ${betterJsonStringify(v, depth + 1)},`)
				.join("\n")}\n${"\t".repeat(depth)}}`;
		}
		if (typeof part === "string") {
			return `"${part}"`;
		}
	}
</script>

<section>
	{#if parseResult === null}
		<p>There was nothing to parse.</p>
	{:else if parseResult.status === "error"}
		<p>{parseResult.error.message}</p>
	{:else if parseResult.status === "success"}
		{@const ast: SourceFileContentAbstractSyntaxTreeNode | null = abstractifySyntaxTree(parseResult.tree)}
		<pre>{betterJsonStringify(ast, 0)}</pre>
	{/if}
</section>

<style lang="scss">
	section {
		display: grid;
		overflow: auto;
		border: 1px solid black;
	}
	table {
		border-collapse: collapse;
	}
	thead {
		position: sticky;
		top: 0;
		z-index: 1;
	}
	th {
		background-color: lightgray;
	}
	th:not(:last-child):not(:first-child),
	td:not(:last-child):not(:first-child) {
		border-left: 1px solid black;
		border-right: 1px solid black;
	}
	thead > tr {
		border-bottom: 1px solid black;
	}
	tbody > tr:not(:last-child) {
		border-bottom: 1px solid black;
	}
	tbody > tr {
		border-top: 1px solid black;
	}
	tbody > tr > td:last-child:not(:first-child),
	thead > tr > th:last-child:not(:first-child) {
		border-left: 1px solid black;
	}
	tbody > tr > td:first-child:not(:last-child),
	thead > tr > th:first-child:not(:last-child) {
		border-right: 1px solid black;
	}
	th {
		position: relative;
	}
	th::before {
		content: "";
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		outline: 1px solid black;
	}
	th,
	td {
		padding: 0.25rem;
		position: relative;
	}
	th > span,
	td > span {
		position: sticky;
		left: 0;
	}
</style>
