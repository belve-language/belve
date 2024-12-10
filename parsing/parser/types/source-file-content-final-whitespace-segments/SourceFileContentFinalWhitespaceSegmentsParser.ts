import type {ClosingCurlyBracketCharacter} from "../../../../characters/closing-curly-bracket/ClosingCurlyBracketCharacter.ts";
import type {WhitespaceCharacter} from "../../../../characters/whitespace/WhitespaceCharacter.ts";
import type {Index} from "../../../../concrete-syntax-tree/index/Index.ts";
import {createBlockClosingBracketConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/block-closing-bracket/createBlockClosingBracketConcreteSyntaxTreeNode.ts";
import {createWhitespaceSegmentConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/whitespace-segment/createWhitespaceSegmentConcreteSyntaxTreeNode.ts";
import {createWhitespaceSegmentsConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/whitespace-segments/createWhitespaceSegmentsConcreteSyntaxTreeNode.ts";
import type {WhitespaceSegmentsConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/whitespace-segments/WhitespaceSegmentsConcreteSyntaxTreeNode.ts";
import {createWhitespaceConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/whitespace/createWhitespaceConcreteSyntaxTreeNode.ts";
import type {WhitespaceConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/whitespace/WhitespaceConcreteSyntaxTreeNode.ts";
import type {Parser} from "../../Parser.ts";
import {BlockContentParser} from "../block-content/BlockContentParser.ts";
export class SourceFileContentFinalWhitespaceSegmentsParser implements Parser {
	private readonly sourceFileContentEndingIndex: Index;
	private readonly sourceFileContentFinalWhitespaceSegments: WhitespaceSegmentsConcreteSyntaxTreeNode;
	public constructor(
		sourceFileContentFinalWhitespaceSegmentsStartingIndex: Index,
		sourceFileContentFinalWhitespaceSegments: WhitespaceSegmentsConcreteSyntaxTreeNode,
		sourceFileContentFinalWhitespaceSegmentsEndingIndex: Index,
		sourceFileContentFinalWhitespaceEndingIndex: Index,
		sourceFileContentEndingIndex: Index,
	) {
		this.sourceFileContentFinalWhitespaceSegmentsStartingIndex =
			sourceFileContentFinalWhitespaceSegmentsStartingIndex;
		this.sourceFileContentFinalWhitespaceSegments = sourceFileContentFinalWhitespaceSegments;
		this.sourceFileContentFinalWhitespaceSegmentsEndingIndex =
			sourceFileContentFinalWhitespaceSegmentsEndingIndex;
		this.sourceFileContentFinalWhitespaceEndingIndex = sourceFileContentFinalWhitespaceEndingIndex;
		this.sourceFileContentEndingIndex = sourceFileContentEndingIndex;
	}
	private readonly sourceFileContentFinalWhitespaceEndingIndex: Index;
	private readonly sourceFileContentFinalWhitespaceSegmentsStartingIndex: Index;
	private readonly sourceFileContentFinalWhitespaceSegmentsEndingIndex: Index;
	public finalize(): WhitespaceConcreteSyntaxTreeNode {
		const whitespace = createWhitespaceConcreteSyntaxTreeNode(
			this.sourceFileContentFinalWhitespaceSegments,
			{
				starting: this.sourceFileContentFinalWhitespaceSegmentsStartingIndex,
				ending: this.sourceFileContentFinalWhitespaceSegmentsEndingIndex,
			},
		);
		return whitespace;
	}
	public parseWhitespace(character: WhitespaceCharacter, index: Index) {
		const newSourceFileContentFinalWhitespaceSegmentsFirstSegment =
			createWhitespaceSegmentConcreteSyntaxTreeNode(character, index);
		const newSourceFileContentFinalWhitespaceSegments =
			createWhitespaceSegmentsConcreteSyntaxTreeNode(
				newSourceFileContentFinalWhitespaceSegmentsFirstSegment,
				this.sourceFileContentFinalWhitespaceSegments,
				{
					starting: index,
					ending: this.sourceFileContentFinalWhitespaceSegmentsEndingIndex,
				},
			);
		const sourceFileContentFinalWhitespaceSegmentsParser =
			new SourceFileContentFinalWhitespaceSegmentsParser(
				index,
				newSourceFileContentFinalWhitespaceSegments,
				this.sourceFileContentFinalWhitespaceSegmentsEndingIndex,
				this.sourceFileContentFinalWhitespaceEndingIndex,
				this.sourceFileContentEndingIndex,
			);
		return sourceFileContentFinalWhitespaceSegmentsParser;
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
	public parseClosingCurlyBracket(
		character: ClosingCurlyBracketCharacter,
		index: Index,
	): BlockContentParser {
		const blockClosingBracket = createBlockClosingBracketConcreteSyntaxTreeNode(character, index);
		const sourceFileContentFinalWhitespace = createWhitespaceConcreteSyntaxTreeNode(
			this.sourceFileContentFinalWhitespaceSegments,
			{
				starting: this.sourceFileContentFinalWhitespaceSegmentsStartingIndex,
				ending: this.sourceFileContentFinalWhitespaceEndingIndex,
			},
		);
		const blockContentParser = new BlockContentParser(
			blockClosingBracket,
			index,
			[] as const,
			index,
			index,
			null,
			index,
			sourceFileContentFinalWhitespace,
			this.sourceFileContentEndingIndex,
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
