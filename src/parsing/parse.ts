import {SourceFileContentParser} from "./parser/types/source-file-content/SourceFileContentParser.ts";
import {computeNewParser} from "./computing-new-parser/computeNewParser.ts";
import type {Parser} from "./parser/Parser.ts";

export function parseCharacters(characters: readonly string[]) {
	const charactersReversed: readonly string[] = characters.slice().reverse();

	let parser: Parser = new SourceFileContentParser();

	for (const character of charactersReversed) {
		parser = computeNewParser(character, parser);
	}

	const result = parser.finalize();
	return result;
}
