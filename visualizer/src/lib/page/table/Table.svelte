<script lang="ts">
	import type {SupportedConcreteSyntaxTreeNode} from "../../../../../concrete-syntax-tree/SupportedConcreteSyntaxTreeNode.ts";
	import type {Level} from "./Level.ts";
	import {traverseLevelwise} from "./traverseLevelwise.ts";
	import {parse} from "../../../../../parsing/parse.ts";
	const {
		sourceCode,
	}: Readonly<{
		sourceCode: string;
	}> = $props();
	const sourceCodeCharacters = $derived(sourceCode.split(""));
	const concreteSyntaxTree = $derived(parse(sourceCodeCharacters));
	$effect(() => {
		console.log(concreteSyntaxTree);
	});
	const levels: readonly Level[] = $derived([...traverseLevelwise(concreteSyntaxTree)]);
	type EmptyCell = Readonly<{
		kind: "empty";
		span: number;
	}>;
	type LeafCell = Readonly<{
		kind: "leaf";
		typeName: string;
	}>;
	type BranchCell = Readonly<{
		kind: "branch";
		typeName: string;
		span: number;
	}>;
	function computeCells(
		nodes: readonly [SupportedConcreteSyntaxTreeNode, ...SupportedConcreteSyntaxTreeNode[]],
		maximalIndex: number,
	): readonly (EmptyCell | LeafCell | BranchCell)[] {
		const cells: (EmptyCell | LeafCell | BranchCell)[] = [];
		switch (nodes[0].kind) {
			case "leaf": {
				if (nodes[0].index !== 0) {
					cells.push({
						span: nodes[0].index,
						kind: "empty",
					} as const satisfies EmptyCell);
				}
				cells.push({
					typeName: nodes[0].typeName,
					kind: "leaf",
				} as const satisfies LeafCell);
				break;
			}
			case "branch": {
				if (nodes[0].spanIndexes.starting !== 0) {
					cells.push({
						span: nodes[0].spanIndexes.starting,
						kind: "empty",
					} as const satisfies EmptyCell);
				}
				cells.push({
					typeName: nodes[0].typeName,
					span: nodes[0].spanIndexes.ending - nodes[0].spanIndexes.starting + 1,
					kind: "branch",
				} as const satisfies BranchCell);
				break;
			}
		}
		let currentNode = nodes[0];
		let currentNodeEndingIndex =
			currentNode.kind === "leaf" ? currentNode.index : currentNode.spanIndexes.ending;
		for (const node of nodes.slice(1)) {
			switch (node.kind) {
				case "leaf": {
					if (node.index !== currentNodeEndingIndex + 1) {
						cells.push({
							span: node.index - currentNodeEndingIndex - 1,
							kind: "empty",
						} as const satisfies EmptyCell);
					}
					cells.push({
						typeName: node.typeName,
						kind: "leaf",
					} as const satisfies LeafCell);
					currentNodeEndingIndex = node.index;
					break;
				}
				case "branch":
					if (node.spanIndexes.starting !== currentNodeEndingIndex + 1) {
						cells.push({
							span: node.spanIndexes.starting - currentNodeEndingIndex - 1,
							kind: "empty",
						} as const satisfies EmptyCell);
					}
					cells.push({
						typeName: node.typeName,
						span: node.spanIndexes.ending - node.spanIndexes.starting + 1,
						kind: "branch",
					} as const satisfies BranchCell);
					currentNodeEndingIndex = node.spanIndexes.ending;
					break;
			}
			currentNode = node;
		}
		if (currentNodeEndingIndex !== maximalIndex) {
			cells.push({
				span: maximalIndex - currentNodeEndingIndex,
				kind: "empty",
			} as const satisfies EmptyCell);
		}
		return cells;
	}
</script>

<div>
	<table>
		<thead>
			<tr>
				{#each sourceCode as character, index (index)}
					<th><span>{index}</span></th>
				{/each}
			</tr>
			<tr>
				{#each sourceCode as character, index (index)}
					<th><span>{JSON.stringify(character).slice(1, -1)}</span></th>
				{/each}
			</tr>
		</thead>
		<tbody>
			{#each levels as level (level.number)}
				<tr>
					{#each computeCells(level.nodes, sourceCodeCharacters.length - 1) as cell, index (index)}
						<td
							colspan={cell.kind === "empty" || cell.kind === "branch" ? cell.span : null}
							class:empty={cell.kind === "empty"}
						>
							{#if cell.kind === "branch" || cell.kind === "leaf"}
								<span>
									{cell.typeName}
								</span>
							{/if}
						</td>
					{/each}
				</tr>
			{/each}
		</tbody>
	</table>
</div>

<style lang="scss">
	div {
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
