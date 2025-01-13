<script lang="ts">
	import {page} from "$app/state";
	import {goto} from "$app/navigation";
	import type {ParsingConfiguration} from "./ParsingConfiguration.ts";
	import {modeSearchParamName} from "../modeSearchParamName.ts";
	import {sourceCodeSearchParamName} from "../sourceCodeSearchParamName.ts";
	import Animated from "./Animated.svelte";
	import Instant from "./Instant.svelte";
	import AbstractSyntaxTree from "./AbstractSyntaxTree.svelte";
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
		newUrl.searchParams.set(sourceCodeSearchParamName, event.target.value);
		await goto(newUrl, {
			keepFocus: true,
			invalidateAll: false,
		});
	}
	async function handleModeInputChange(
		event: Event &
			Readonly<{
				target: HTMLInputElement;
			}>,
	): Promise<void> {
		console.log(event);
		const newUrl = new URL(page.url);
		newUrl.searchParams.set(modeSearchParamName, event.target.value);
		await goto(newUrl, {
			keepFocus: true,
			invalidateAll: false,
		});
	}
</script>

<main>
	<textarea rows="10" oninput={handleSourceCodeTextAreaInput}
		>{parsingConfiguration.sourceCode}</textarea
	>
	<fieldset>
		<legend>Mode</legend>
		<div>
			<!-- <label>
				<input type="radio" name="mode" value="none" checked=
				None
			</label>
			<label>
				<input type="radio" name="mode" value="animated" />
				Animated
			</label> -->
			{#each ["none", "instant", "animated", "abstract-syntax-tree"] as mode}
				<label>
					<input
						type="radio"
						name="mode"
						value={mode}
						checked={mode === parsingConfiguration.mode}
						onchange={handleModeInputChange}
					/>
					{mode}
				</label>
			{/each}
		</div>
	</fieldset>
	{#if parsingConfiguration.mode === "instant"}
		<Instant sourceCode={parsingConfiguration.sourceCode} />
	{/if}
	{#if parsingConfiguration.mode === "animated"}
		<Animated sourceCode={parsingConfiguration.sourceCode} />
	{/if}
	{#if parsingConfiguration.mode === "abstract-syntax-tree"}
		<AbstractSyntaxTree sourceCode={parsingConfiguration.sourceCode} />
	{/if}
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
