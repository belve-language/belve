import type {ClosingCurlyBracketCharacter} from "../../../../characters/closing-curly-bracket/ClosingCurlyBracketCharacter.ts";
import type {WhitespaceCharacter} from "../../../../characters/whitespace/WhitespaceCharacter.ts";
import type {Index} from "../../../../concrete-syntax-tree/index/Index.ts";
import {createBlockClosingBracketConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/block-closing-bracket/createBlockClosingBracketConcreteSyntaxTreeNode.ts";
import {createWhitespaceSegmentConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/whitespace-segment/createWhitespaceSegmentConcreteSyntaxTreeNode.ts";
import {createWhitespaceSegmentsConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/whitespace-segments/createWhitespaceSegmentsConcreteSyntaxTreeNode.ts";
import type {Parser} from "../../Parser.ts";
import {BlockContentParser} from "../block-content/BlockContentParser.ts";
import {SourceFileContentFinalWhitespaceSegmentsParser} from "../source-file-content-final-whitespace-segments/SourceFileContentFinalWhitespaceSegmentsParser.ts";
export class SourceFileContentParser implements Parser {
	public parseWhitespace(
		character: WhitespaceCharacter,
		index: Index,
	): SourceFileContentFinalWhitespaceSegmentsParser {
		const sourceFileContentFinalWhitespaceSegmentsFirstSegment =
			createWhitespaceSegmentConcreteSyntaxTreeNode(character, index);
		const sourceFileContentFinalWhitespaceSegments = createWhitespaceSegmentsConcreteSyntaxTreeNode(
			sourceFileContentFinalWhitespaceSegmentsFirstSegment,
			null,
			{
				starting: index,
				ending: index,
			},
		);
		const sourceFileContentFinalWhitespaceSegmentsParser =
			new SourceFileContentFinalWhitespaceSegmentsParser(
				index,
				sourceFileContentFinalWhitespaceSegments,
				index,
				index,
				index,
			);
		return sourceFileContentFinalWhitespaceSegmentsParser;
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
	public parseClosingCurlyBracket(
		character: ClosingCurlyBracketCharacter,
		index: Index,
	): BlockContentParser {
		const blockClosingBracket = createBlockClosingBracketConcreteSyntaxTreeNode(character, index);
		const blockContentParser = new BlockContentParser(
			blockClosingBracket,
			index,
			[] as const,
			index,
			index,
			null,
			index,
			null,
			index,
		);
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
