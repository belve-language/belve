<script lang="ts">
	import {parse} from "../../../../parsing/parse.ts";
	import {computeCells} from "./computeCells.ts";
	import type {Level} from "./Level.ts";
	import {traverseLevelwise} from "./traverseLevelwise.ts";
	const {
		sourceCode,
	}: Readonly<{
		sourceCode: string;
	}> = $props();
	const sourceCodeCharacters: readonly string[] = $derived(sourceCode.split(""));
	const parseResult = $derived(parse(sourceCodeCharacters));
</script>

<section>
	{#if parseResult === null}
		<p>There was nothing to parse.</p>
	{:else if parseResult.status === "error"}
		<p>{parseResult.error.message}</p>
	{:else if parseResult.status === "success"}
		{@const maximalIndex = parseResult.tree.spanIndexes.ending}
		{@const levels: readonly Level[] = [...traverseLevelwise(parseResult.tree)]}
		<table>
			<thead>
				<tr>
					{#each sourceCodeCharacters as character, index (index)}
						<th><span>{index}</span></th>
					{/each}
				</tr>
				<tr>
					{#each sourceCodeCharacters as character, index (index)}
						{@const escapedCharacter = JSON.stringify(character).slice(1, -1)}
						<th><span>{escapedCharacter}</span></th>
					{/each}
				</tr>
			</thead>
			<tbody>
				{#each levels as level (level.number)}
					{@const cells = computeCells(level.nodes, maximalIndex)}
					<tr>
						{#each cells as cell, index (index)}
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
