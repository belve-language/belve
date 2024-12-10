import type {ClosingCurlyBracketCharacter} from "../../../../characters/ClosingCurlyBracketCharacter.ts";
import type {WhitespaceCharacter} from "../../../../characters/WhitespaceCharacter.ts";
import {createWhitespaceCharactersConcreteTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/whitespace-characters/createWhitespaceCharactersConcreteTreeNode.ts";
import type {WhitespaceCharactersConcreteTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/whitespace-characters/WhitespaceCharactersConcreteTreeNode.ts";
import type {Parser} from "../../Parser.ts";
import {BlockContentParser} from "../block-content/BlockContentParser.ts";
import {SourceFileContentFinalWhitespaceCharactersParser} from "../source-file-content-final-whitespace-characters/SourceFileContentFinalWhitespaceCharactersParser.ts";

export class SourceFileContentParser implements Parser {
	public parseWhitespace(
		character: WhitespaceCharacter,
	): SourceFileContentFinalWhitespaceCharactersParser {
		const sourceFileContentFinalWhitespaceCharacters: WhitespaceCharactersConcreteTreeNode =
			createWhitespaceCharactersConcreteTreeNode(character, null);

		const sourceFileContentFinalWhitespaceCharactersParser =
			new SourceFileContentFinalWhitespaceCharactersParser(
				sourceFileContentFinalWhitespaceCharacters,
			);

		return sourceFileContentFinalWhitespaceCharactersParser;
	}

	public parseOpeningSquareBracket(): never {
		throw new Error("OpeningSquareBracketCharacter is not allowed in SourceFileContent.");
	}

	public parseClosingSquareBracket(): never {
		throw new Error("ClosingSquareBracketCharacter is not allowed in SourceFileContent.");
	}

	public parseOpeningCurlyBracket(): never {
		throw new Error("OpeningCurlyBracketCharacter is not allowed in SourceFileContent.");
	}

	public parseClosingCurlyBracket(character: ClosingCurlyBracketCharacter): BlockContentParser {
		const blockContentParser = new BlockContentParser(character, [], null, null);
		return blockContentParser;
	}

	public parseOpeningRoundBracket(): never {
		throw new Error("OpeningRoundBracketCharacter is not allowed in SourceFileContent.");
	}

	public parseClosingRoundBracket(): never {
		throw new Error("ClosingRoundBracketCharacter is not allowed in SourceFileContent.");
	}

	public parseIdentifier(): never {
		throw new Error("IdentifierCharacter is not allowed in SourceFileContent.");
	}

	public parseOperator(): never {
		throw new Error("OperatorCharacter is not allowed in SourceFileContent.");
	}

	public finalize(): null {
		return null;
	}
}
