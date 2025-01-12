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
	async function handleSourceCodeTextAreaInput(
		event: InputEvent &
			Readonly<{
				target: HTMLTextAreaElement;
			}>,
	): Promise<void> {
		const newUrl = new URL(page.url);
		newUrl.searchParams.set("source-code", event.target.value);
		await goto(newUrl, {
			keepFocus: true,
			invalidateAll: false,
		});
	}
	async function handleAnimationCheckboxChange(
		event: InputEvent &
			Readonly<{
				target: HTMLInputElement;
			}>,
	): Promise<void> {
		const newUrl = new URL(page.url);
		newUrl.searchParams.set("animated", event.target.checked ? "yes" : "no");
		await goto(newUrl, {
			keepFocus: true,
			invalidateAll: false,
		});
	}
</script>

<main>
	<label>
		Animate:
		<input
			type="checkbox"
			checked={parsingConfiguration.isAnimated}
			oninput={handleAnimationCheckboxChange}
		/>
	</label>
	<textarea rows="10" oninput={handleSourceCodeTextAreaInput}
		>{parsingConfiguration.sourceCode}</textarea
	>
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
