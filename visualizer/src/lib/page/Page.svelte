<script lang="ts">
	import Table from "./table/Table.svelte";
	import {page} from "$app/state";
	import {goto} from "$app/navigation";
	import type {ParsingConfiguration} from "./ParsingConfiguration.ts";
	const {
		parsingConfiguration,
	}: Readonly<{
		parsingConfiguration: ParsingConfiguration;
	}> = $props();
	async function handleInput(
		event: InputEvent &
			Readonly<{
				target: HTMLTextAreaElement;
			}>,
	): Promise<void> {
		const newUrl = new URL(page.url);
		newUrl.searchParams.set("source-code", event.target.value);
		await goto(newUrl, {
			keepFocus: true,
		});
	}
</script>

<main>
	<textarea rows="10" oninput={handleInput}>{parsingConfiguration.sourceCode}</textarea>
	<Table sourceCode={parsingConfiguration.sourceCode}></Table>
</main>

<style lang="scss">
	main {
		display: flex;
		flex-direction: column;
		padding: 1rem;
		height: 100vh;
	}
	textarea {
		resize: vertical;
		flex-shrink: 0;
	}
</style>
