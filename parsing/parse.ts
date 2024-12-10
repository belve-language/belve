import {SourceFileContentParser} from "./parser/types/source-file-content/SourceFileContentParser.ts";
import {computeNewParser} from "./computing-new-parser/computeNewParser.ts";
import type {Parser} from "./parser/Parser.ts";
import type {ConcreteSyntaxTree} from "../concrete-syntax-tree/ConreteSyntaxTree.ts";
export function parse(characters: readonly string[]): ConcreteSyntaxTree {
	const charactersReversed: readonly string[] = characters.slice().reverse();
	let parser: Parser = new SourceFileContentParser();
	const charactersReversedEntries = charactersReversed.entries();
	for (const [index, character] of charactersReversedEntries) {
		parser = computeNewParser(character, parser, charactersReversed.length - index - 1);
	}
	const result: ConcreteSyntaxTree = parser.finalize();
	return result;
}
