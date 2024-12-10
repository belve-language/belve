import type {OpeningRoundBracketCharacter} from "../../../../characters/opening-round-bracket/OpeningRoundBracketCharacter.ts";
import type {WhitespaceCharacter} from "../../../../characters/whitespace/WhitespaceCharacter.ts";
import type {Index} from "../../../../concrete-syntax-tree/index/Index.ts";
import type {FunctionBodyConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/function-body/FunctionBodyConcreteSyntaxTreeNode.ts";
import type {FunctionHeaderKnownSegmentClosingBracketConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/function-header-known-segment-closing-bracket/FunctionHeaderKnownSegmentClosingBracketConcreteSyntaxTreeNode.ts";
import {createFunctionHeaderKnownSegmentContentConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/function-header-known-segment-content/createFunctionHeaderKnownSegmentContentConcreteSyntaxTreeNode.ts";
import type {FunctionHeaderKnownSegmentContentConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/function-header-known-segment-content/FunctionHeaderKnownSegmentContentConcreteSyntaxTreeNode.ts";
import {createFunctionHeaderKnownSegmentOpeningBracketConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/function-header-known-segment-opening-bracket/createFunctionHeaderKnownSegmentOpeningBracketConcreteSyntaxTreeNode.ts";
import {createFunctionHeaderKnownSegmentConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/function-header-known-segment/createFunctionHeaderKnownSegmentConcreteSyntaxTreeNode.ts";
import {createFunctionHeaderKnownStartingSegmentsConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/function-header-known-starting-segments/createFunctionHeaderKnownStartingSegmentsConcreteSyntaxTreeNode.ts";
import type {FunctionHeaderKnownStartingSegmentsConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/function-header-known-starting-segments/FunctionHeaderKnownStartingSegmentsConcreteSyntaxTreeNode.ts";
import type {FunctionHeaderSegmentsSeparatedRestSegmentsConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/function-header-segments-separated-rest-segments/FunctionHeaderSegmentsSeparatedRestSegmentsConcreteSyntaxTreeNode.ts";
import type {FunctionHeaderUnknownStartingSegmentsConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/function-header-unknown-starting-segments/FunctionHeaderUnknownStartingSegmentsConcreteSyntaxTreeNode.ts";
import type {FunctionHeaderWordStartingSegmentsConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/function-header-word-starting-segments/FunctionHeaderWordStartingSegmentsConcreteSyntaxTreeNode.ts";
import type {FunctionsSeparatedRestFunctionsConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/functions-separated-rest-functions/FunctionsSeparatedRestFunctionsConcreteSyntaxTreeNode.ts";
import type {FunctionsConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/functions/FunctionsConcreteSyntaxTreeNode.ts";
import type {IdentifierConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/identifier/IdentifierConcreteSyntaxTreeNode.ts";
import {createWhitespaceSegmentConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/whitespace-segment/createWhitespaceSegmentConcreteSyntaxTreeNode.ts";
import {createWhitespaceSegmentsConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/whitespace-segments/createWhitespaceSegmentsConcreteSyntaxTreeNode.ts";
import type {WhitespaceSegmentsConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/whitespace-segments/WhitespaceSegmentsConcreteSyntaxTreeNode.ts";
import {createWhitespaceConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/whitespace/createWhitespaceConcreteSyntaxTreeNode.ts";
import type {WhitespaceConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/whitespace/WhitespaceConcreteSyntaxTreeNode.ts";
import type {Parser} from "../../Parser.ts";
import {FunctionHeaderSegmentsParser} from "../function-header-segments/FunctionHeaderSegmentsParser.ts";
export class FunctionHeaderKnownSegmentContentInitialWhitespaceSegmentsParser implements Parser {
	private readonly functionHeaderKnownSegmentContentInitialWhitespaceSegments: WhitespaceSegmentsConcreteSyntaxTreeNode;
	private readonly functionHeaderKnownSegmentContentIdentifier: IdentifierConcreteSyntaxTreeNode;
	private readonly functionHeaderKnownSegmentContentFinalWhitespace: WhitespaceConcreteSyntaxTreeNode | null;
	private readonly functionHeaderKnownSegmentClosingBracket: FunctionHeaderKnownSegmentClosingBracketConcreteSyntaxTreeNode;
	private readonly functionHeaderKnownStartingSegmentsRestSegments:
		| FunctionHeaderKnownStartingSegmentsConcreteSyntaxTreeNode
		| FunctionHeaderUnknownStartingSegmentsConcreteSyntaxTreeNode
		| FunctionHeaderWordStartingSegmentsConcreteSyntaxTreeNode
		| null
		| FunctionHeaderSegmentsSeparatedRestSegmentsConcreteSyntaxTreeNode;
	private readonly functionHeaderFinalWhitespace: WhitespaceConcreteSyntaxTreeNode | null;
	private readonly functionBody: FunctionBodyConcreteSyntaxTreeNode;
	private readonly functionsRestFunctions:
		| FunctionsSeparatedRestFunctionsConcreteSyntaxTreeNode
		| null
		| FunctionsConcreteSyntaxTreeNode;
	private readonly sourceFileContentFinalWhitespace: WhitespaceConcreteSyntaxTreeNode | null;
	public constructor(
		functionHeaderKnownSegmentContentInitialWhitespaceSegmentsStartingIndex: Index,
		functionHeaderKnownSegmentContentInitialWhitespaceSegments: WhitespaceSegmentsConcreteSyntaxTreeNode,
		functionHeaderKnownSegmentContentInitialWhitespaceEndingIndex: Index,
		functionHeaderKnownSegmentContentIdentifier: IdentifierConcreteSyntaxTreeNode,
		functionHeaderKnownSegmentContentFinalWhitespace: WhitespaceConcreteSyntaxTreeNode | null,
		functionHeaderKnownSegmentClosingBracket: FunctionHeaderKnownSegmentClosingBracketConcreteSyntaxTreeNode,
		functionHeaderKnownSegmentEndingIndex: Index,
		functionHeaderKnownStartingSegmentsRestSegments:
			| FunctionHeaderKnownStartingSegmentsConcreteSyntaxTreeNode
			| FunctionHeaderUnknownStartingSegmentsConcreteSyntaxTreeNode
			| FunctionHeaderWordStartingSegmentsConcreteSyntaxTreeNode
			| null
			| FunctionHeaderSegmentsSeparatedRestSegmentsConcreteSyntaxTreeNode,
		functionHeaderSegmentsEndingIndex: Index,
		functionHeaderFinalWhitespace: WhitespaceConcreteSyntaxTreeNode | null,
		functionHeaderEndingIndex: Index,
		functionBody: FunctionBodyConcreteSyntaxTreeNode,
		functionEndingIndex: Index,
		functionsRestFunctions:
			| FunctionsSeparatedRestFunctionsConcreteSyntaxTreeNode
			| null
			| FunctionsConcreteSyntaxTreeNode,
		functionsEndingIndex: Index,
		sourceFileContentFinalWhitespace: WhitespaceConcreteSyntaxTreeNode | null,
		sourceFileContentEndingIndex: Index,
	) {
		this.functionHeaderKnownSegmentContentInitialWhitespaceSegmentsStartingIndex =
			functionHeaderKnownSegmentContentInitialWhitespaceSegmentsStartingIndex;
		this.functionHeaderKnownSegmentContentInitialWhitespaceSegments =
			functionHeaderKnownSegmentContentInitialWhitespaceSegments;
		this.functionHeaderKnownSegmentContentInitialWhitespaceEndingIndex =
			functionHeaderKnownSegmentContentInitialWhitespaceEndingIndex;
		this.functionHeaderKnownSegmentContentIdentifier = functionHeaderKnownSegmentContentIdentifier;
		this.functionHeaderKnownSegmentContentFinalWhitespace =
			functionHeaderKnownSegmentContentFinalWhitespace;
		this.functionHeaderKnownSegmentClosingBracket = functionHeaderKnownSegmentClosingBracket;
		this.functionHeaderKnownSegmentEndingIndex = functionHeaderKnownSegmentEndingIndex;
		this.functionHeaderKnownStartingSegmentsRestSegments =
			functionHeaderKnownStartingSegmentsRestSegments;
		this.functionHeaderSegmentsEndingIndex = functionHeaderSegmentsEndingIndex;
		this.functionHeaderFinalWhitespace = functionHeaderFinalWhitespace;
		this.functionHeaderEndingIndex = functionHeaderEndingIndex;
		this.functionBody = functionBody;
		this.functionEndingIndex = functionEndingIndex;
		this.functionsRestFunctions = functionsRestFunctions;
		this.functionsEndingIndex = functionsEndingIndex;
		this.sourceFileContentFinalWhitespace = sourceFileContentFinalWhitespace;
		this.sourceFileContentEndingIndex = sourceFileContentEndingIndex;
	}
	private readonly functionHeaderSegmentsEndingIndex: Index;
	private readonly functionHeaderKnownSegmentEndingIndex: Index;
	private readonly functionHeaderKnownSegmentContentInitialWhitespaceSegmentsStartingIndex: Index;
	private readonly functionHeaderKnownSegmentContentInitialWhitespaceEndingIndex: Index;
	private readonly functionHeaderEndingIndex: Index;
	private readonly functionEndingIndex: Index;
	private readonly functionsEndingIndex: Index;
	private readonly sourceFileContentEndingIndex: Index;
	public parseWhitespace(
		character: WhitespaceCharacter,
		index: Index,
	): FunctionHeaderKnownSegmentContentInitialWhitespaceSegmentsParser {
		const newFunctionHeaderKnownSegmentContentInitialWhitespaceSegmentsFirstSegment =
			createWhitespaceSegmentConcreteSyntaxTreeNode(character, index);
		const newFunctionHeaderKnownSegmentContentInitialWhitespaceSegments =
			createWhitespaceSegmentsConcreteSyntaxTreeNode(
				newFunctionHeaderKnownSegmentContentInitialWhitespaceSegmentsFirstSegment,
				this.functionHeaderKnownSegmentContentInitialWhitespaceSegments,
				{
					starting: index,
					ending: index,
				},
			);
		const functionHeaderKnownSegmentContentInitialWhitespaceSegmentsParser =
			new FunctionHeaderKnownSegmentContentInitialWhitespaceSegmentsParser(
				index,
				newFunctionHeaderKnownSegmentContentInitialWhitespaceSegments,
				this.functionHeaderKnownSegmentContentInitialWhitespaceEndingIndex,
				this.functionHeaderKnownSegmentContentIdentifier,
				this.functionHeaderKnownSegmentContentFinalWhitespace,
				this.functionHeaderKnownSegmentClosingBracket,
				this.functionHeaderKnownSegmentEndingIndex,
				this.functionHeaderKnownStartingSegmentsRestSegments,
				this.functionHeaderSegmentsEndingIndex,
				this.functionHeaderFinalWhitespace,
				this.functionHeaderEndingIndex,
				this.functionBody,
				this.functionEndingIndex,
				this.functionsRestFunctions,
				this.functionsEndingIndex,
				this.sourceFileContentFinalWhitespace,
				this.sourceFileContentEndingIndex,
			);
		return functionHeaderKnownSegmentContentInitialWhitespaceSegmentsParser;
	}
	public parseOpeningSquareBracket(): never {
		throw new Error(".");
	}
	public parseClosingSquareBracket(): never {
		throw new Error(".");
	}
	public parseOpeningCurlyBracket(): never {
		throw new Error(".");
	}
	public parseClosingCurlyBracket(): never {
		throw new Error(".");
	}
	public parseOpeningRoundBracket(
		character: OpeningRoundBracketCharacter,
		index: Index,
	): FunctionHeaderSegmentsParser {
		const functionHeaderKnownSegmentOpeningBracket =
			createFunctionHeaderKnownSegmentOpeningBracketConcreteSyntaxTreeNode(character, index);
		const functionHeaderKnownSegmentContentInitialWhitespace =
			createWhitespaceConcreteSyntaxTreeNode(
				this.functionHeaderKnownSegmentContentInitialWhitespaceSegments,
				{
					starting: this.functionHeaderKnownSegmentContentInitialWhitespaceSegmentsStartingIndex,
					ending: this.functionHeaderKnownSegmentContentInitialWhitespaceEndingIndex,
				},
			);
		const functionHeaderKnownSegmentContent: FunctionHeaderKnownSegmentContentConcreteSyntaxTreeNode =
			createFunctionHeaderKnownSegmentContentConcreteSyntaxTreeNode(
				functionHeaderKnownSegmentContentInitialWhitespace,
				this.functionHeaderKnownSegmentContentIdentifier,
				this.functionHeaderKnownSegmentContentFinalWhitespace,
				{
					starting: this.functionHeaderKnownSegmentContentInitialWhitespaceSegmentsStartingIndex,
					ending: this.functionHeaderKnownSegmentContentInitialWhitespaceEndingIndex,
				},
			);
		const funtionHeaderKnownSegment = createFunctionHeaderKnownSegmentConcreteSyntaxTreeNode(
			functionHeaderKnownSegmentOpeningBracket,
			functionHeaderKnownSegmentContent,
			this.functionHeaderKnownSegmentClosingBracket,
			{
				starting: index,
				ending: this.functionHeaderKnownSegmentEndingIndex,
			},
		);
		const functionHeaderKnownStartingSegments: FunctionHeaderKnownStartingSegmentsConcreteSyntaxTreeNode =
			createFunctionHeaderKnownStartingSegmentsConcreteSyntaxTreeNode(
				funtionHeaderKnownSegment,
				this.functionHeaderKnownStartingSegmentsRestSegments,
				{
					starting: index,
					ending: this.functionHeaderSegmentsEndingIndex,
				},
			);
		const functionHeaderSegmentsParser = new FunctionHeaderSegmentsParser(
			index,
			functionHeaderKnownStartingSegments,
			this.functionHeaderSegmentsEndingIndex,
			this.functionHeaderFinalWhitespace,
			this.functionHeaderEndingIndex,
			this.functionBody,
			this.functionEndingIndex,
			this.functionsRestFunctions,
			this.functionsEndingIndex,
			this.sourceFileContentFinalWhitespace,
			this.sourceFileContentEndingIndex,
		);
		return functionHeaderSegmentsParser;
	}
	public parseClosingRoundBracket(): never {
		throw new Error(".");
	}
	public parseIdentifier(): never {
		throw new Error(".");
	}
	public parseOperator(): never {
		throw new Error(".");
	}
	public finalize(): never {
		throw new Error(".");
	}
}
