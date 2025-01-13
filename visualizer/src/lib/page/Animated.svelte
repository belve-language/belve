<script lang="ts">
	import {computeNewParser} from "../../../../parsing/computing-new-parser/computeNewParser.ts";
	import type {Parser} from "../../../../parsing/parser/Parser.ts";
	import {SourceFileContentParser} from "../../../../parsing/parser/types/source-file-content/SourceFileContentParser.ts";

	const {
		sourceCode,
	}: Readonly<{
		sourceCode: string;
	}> = $props();
	const sourceCodeCharacters = $derived(sourceCode.split(""));
	type AnimationData = Readonly<{
		parser: Parser;
		reversedCharactersLeft: readonly string[];
	}>;
	// type Animation = Readonly<{
	// 	data: AnimationData;
	// 	timeoutId: ReturnType<typeof setInterval>;
	// }>;
	class Animator {
		private animationData = $state<AnimationData>() as AnimationData;
		private readonly intevalId: ReturnType<typeof setInterval>;
		public constructor(characters: readonly string[]) {
			const parser = new SourceFileContentParser();
			const reversedCharacters: readonly string[] = characters.toReversed();
			this.animationData = {
				parser,
				reversedCharactersLeft: reversedCharacters,
			};
			// this.intevalId = setInterval(() => {
			// 	const {parser, reversedCharactersLeft} = this.animationData;
			// 	const [firstReversedCharactersLeft, ...restReversedCharactersLeft] = reversedCharactersLeft;
			// 	if (typeof firstReversedCharactersLeft === "undefined") {
			// 		clearInterval(this.intevalId);
			// 		return;
			// 	}
			// 	const index = reversedCharactersLeft.length - 1;
			// 	const newParser = computeNewParser(firstReversedCharactersLeft, parser, index);
			// 	this.animationData = {
			// 		parser: newParser,
			// 		reversedCharactersLeft: restReversedCharactersLeft,
			// 	};
			// }, 500);

			// $effect(() => {
			// 	return () => {
			// 		console.log("clearing interval");
			// 		clearInterval(this.intevalId);
			// 	};
			// });
		}
		public step(): void {
			const {parser, reversedCharactersLeft} = this.animationData;
			const [firstReversedCharactersLeft, ...restReversedCharactersLeft] = reversedCharactersLeft;
			if (typeof firstReversedCharactersLeft === "undefined") {
				return;
			}
			const index = reversedCharactersLeft.length - 1;
			const newParser = computeNewParser(firstReversedCharactersLeft, parser, index);
			this.animationData = {
				parser: newParser,
				reversedCharactersLeft: restReversedCharactersLeft,
			};
		}
		public get $animationData(): AnimationData {
			return this.animationData;
		}

		// TODO REPLACE WITH JUST FUNCTION CREATING
		// private readonly animation: Animation;
		// constructor(animationData: AnimationData) {
		// 	this.animationData = animationData;
		// 	this.animation = {
		// 		data: animationData,
		// 		timeoutId: setInterval(this.step.bind(this), 1000),
		// 	};
		// }
		// private step(): void {
		// 	const {parser, reversedCharactersLeft} = this.animation.data;
		// 	if (reversedCharactersLeft.length === 0) {
		// 		clearInterval(this.animation.timeoutId);
		// 		return;
		// 	}
		// 	const character = reversedCharactersLeft.pop();
		// 	this.animation.data.parser = computeNewParser(
		// 		character,
		// 		parser,
		// 		reversedCharactersLeft.length,
		// 	);
		// }
	}
	const animator = $derived(new Animator(sourceCodeCharacters));
	// $effect(function () {
	// 	if (parsingConfiguration.isAnimated) {
	// 		const characters: readonly string[] = parsingConfiguration.sourceCode.split("");
	// 		animator = new Animator(characters);

	// 		// const reversedCharactersEntries = reversedCharacters.entries();
	// 		// for (const [index, character] of reversedCharactersEntries) {
	// 		// 	parser = computeNewParser(character, parser, reversedCharacters.length - index - 1);
	// 		// }
	// 		// const result: ConcreteSyntaxTree = parser.finalize();
	// 	} else {
	// 		animator = null;
	// 	}
	// });
	function handleStepButtonClick(): void {
		animator.step();
	}
</script>

<section>
	<button onclick={handleStepButtonClick}>Step</button>
	<div>
		<pre>{#each sourceCodeCharacters as character, index (index)}<span
					class="character"
					class:character-smaller={character === "\n"}
					class:character--after={index > animator.$animationData.reversedCharactersLeft.length - 1}
					class:character--before={index <
						animator.$animationData.reversedCharactersLeft.length - 1}
					class:character--current={index ===
						animator.$animationData.reversedCharactersLeft.length - 1}
					>{JSON.stringify(character).slice(1, -1)}{#if character === "\n"}<br />{/if}</span
				>{/each}</pre>
		<pre>{animator.$animationData.parser.constructor.name}{JSON.stringify(
				animator.$animationData.parser,
				null,
				"\t",
			)}</pre>
	</div>
</section>

<style lang="scss">
	pre {
		line-height: 24px;
	}
	.character {
		border: 1px solid hsl(0, 0%, 60%);
		padding: 3px;
	}
	.character--before {
		background-color: hsl(0, 0%, 90%);
	}
	.character--current {
		background-color: lightgreen;
	}
	.character--after {
		background-color: gray;
	}
	.character-smaller {
		font-size: 0.4rem;
	}
</style>
