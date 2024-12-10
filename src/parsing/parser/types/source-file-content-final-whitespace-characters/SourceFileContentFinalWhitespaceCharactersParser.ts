import type {ClosingCurlyBracketCharacter} from "../../../../characters/ClosingCurlyBracketCharacter.ts";
import type {WhitespaceCharacter} from "../../../../characters/WhitespaceCharacter.ts";
import {createWhitespaceCharactersConcreteTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/whitespace-characters/createWhitespaceCharactersConcreteTreeNode.ts";
import type {WhitespaceCharactersConcreteTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/whitespace-characters/WhitespaceCharactersConcreteTreeNode.ts";
import type {Parser} from "../../Parser.ts";
import {BlockContentParser} from "../block-content/BlockContentParser.ts";

export class SourceFileContentFinalWhitespaceCharactersParser implements Parser {
	private readonly sourceFileContentFinalWhitespaceCharacters: WhitespaceCharactersConcreteTreeNode;

	public constructor(
		sourceFileContentFinalWhitespaceCharacters: WhitespaceCharactersConcreteTreeNode,
	) {
		this.sourceFileContentFinalWhitespaceCharacters = sourceFileContentFinalWhitespaceCharacters;
	}

	public finalize(): WhitespaceCharactersConcreteTreeNode {
		return this.sourceFileContentFinalWhitespaceCharacters;
	}

	public parseWhitespace(
		character: WhitespaceCharacter,
	): SourceFileContentFinalWhitespaceCharactersParser {
		const newSourceFileContentFinalWhitespaceCharacters: WhitespaceCharactersConcreteTreeNode =
			createWhitespaceCharactersConcreteTreeNode(
				character,
				this.sourceFileContentFinalWhitespaceCharacters,
			);

		const sourceFileContentFinalWhitespaceCharactersParser =
			new SourceFileContentFinalWhitespaceCharactersParser(
				newSourceFileContentFinalWhitespaceCharacters,
			);

		return sourceFileContentFinalWhitespaceCharactersParser;
	}

	public parseOpeningSquareBracket(): never {
		throw new Error("Opening square bracket should not be present in final whitespace characters.");
	}

	public parseClosingSquareBracket(): never {
		throw new Error("Closing square bracket should not be present in final whitespace characters.");
	}

	public parseOpeningCurlyBracket(): never {
		throw new Error("Opening curly bracket should not be present in final whitespace characters.");
	}

	public parseClosingCurlyBracket(character: ClosingCurlyBracketCharacter): BlockContentParser {
		const blockContentParser = new BlockContentParser(
			character,
			[],
			null,
			this.sourceFileContentFinalWhitespaceCharacters,
		);

		return blockContentParser;
	}

	public parseOpeningRoundBracket(): never {
		throw new Error("Opening round bracket should not be present in final whitespace characters.");
	}

	public parseClosingRoundBracket(): never {
		throw new Error("Closing round bracket should not be present in final whitespace characters.");
	}

	public parseIdentifier(): never {
		throw new Error("Identifier should not be present in final whitespace characters.");
	}

	public parseOperator(): never {
		throw new Error("Operator should not be present in final whitespace characters.");
	}
}
