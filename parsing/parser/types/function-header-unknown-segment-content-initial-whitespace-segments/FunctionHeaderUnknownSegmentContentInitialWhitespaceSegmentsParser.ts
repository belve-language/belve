import type {OpeningSquareBracketCharacter} from "../../../../characters/opening-square-bracket/OpeningSquareBracketCharacter.ts";
import type {WhitespaceCharacter} from "../../../../characters/whitespace/WhitespaceCharacter.ts";
import type {Index} from "../../../../concrete-syntax-tree/index/Index.ts";
import type {FunctionBodyConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/function-body/FunctionBodyConcreteSyntaxTreeNode.ts";
import type {FunctionHeaderKnownStartingSegmentsConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/function-header-known-starting-segments/FunctionHeaderKnownStartingSegmentsConcreteSyntaxTreeNode.ts";
import type {FunctionHeaderSegmentsSeparatedRestSegmentsConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/function-header-segments-separated-rest-segments/FunctionHeaderSegmentsSeparatedRestSegmentsConcreteSyntaxTreeNode.ts";
import type {FunctionHeaderUnknownSegmentClosingBracketConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/function-header-unknown-segment-closing-bracket/FunctionHeaderUnknownSegmentClosingBracketConcreteSyntaxTreeNode.ts";
import {createFunctionHeaderUnknownSegmentContentConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/function-header-unknown-segment-content/createFunctionHeaderUnknownSegmentContentConcreteSyntaxTreeNode.ts";
import type {FunctionHeaderUnknownSegmentContentConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/function-header-unknown-segment-content/FunctionHeaderUnknownSegmentContentConcreteSyntaxTreeNode.ts";
import {createFunctionHeaderUnknownSegmentOpeningBracketConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/function-header-unknown-segment-opening-bracket/createFunctionHeaderUnknownSegmentOpeningBracketConcreteSyntaxTreeNode.ts";
import {createFunctionHeaderUnknownSegmentConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/function-header-unknown-segment/createFunctionHeaderUnknownSegmentConcreteSyntaxTreeNode.ts";
import type {FunctionHeaderUnknownSegmentConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/function-header-unknown-segment/FunctionHeaderUnknownSegmentConcreteSyntaxTreeNode.ts";
import {createFunctionHeaderUnknownStartingSegmentsConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/function-header-unknown-starting-segments/createFunctionHeaderUnknownStartingSegmentsConcreteSyntaxTreeNode.ts";
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
export class FunctionHeaderUnknownSegmentContentInitialWhitespaceSegmentsParser implements Parser {
	private readonly functionHeaderUnknownSegmentContentInitialWhitespaceSegments: WhitespaceSegmentsConcreteSyntaxTreeNode;
	private readonly functionHeaderUnknownSegmentContentIdentifier: IdentifierConcreteSyntaxTreeNode;
	private readonly functionHeaderUnknownSegmentContentFinalWhitespace: WhitespaceConcreteSyntaxTreeNode | null;
	private readonly functionHeaderUnknownSegmentClosingBracket: FunctionHeaderUnknownSegmentClosingBracketConcreteSyntaxTreeNode;
	private readonly functionHeaderUnknownStartingSegmentsRestSegments:
		| FunctionHeaderKnownStartingSegmentsConcreteSyntaxTreeNode
		| FunctionHeaderUnknownStartingSegmentsConcreteSyntaxTreeNode
		| null
		| FunctionHeaderSegmentsSeparatedRestSegmentsConcreteSyntaxTreeNode
		| FunctionHeaderWordStartingSegmentsConcreteSyntaxTreeNode;
	private readonly functionHeaderFinalWhitespace: WhitespaceConcreteSyntaxTreeNode | null;
	private readonly functionBody: FunctionBodyConcreteSyntaxTreeNode;
	private readonly functionsRestFunctions:
		| FunctionsSeparatedRestFunctionsConcreteSyntaxTreeNode
		| null
		| FunctionsConcreteSyntaxTreeNode;
	private readonly sourceFileContentFinalWhitespace: WhitespaceConcreteSyntaxTreeNode | null;
	public constructor(
		functionHeaderUnknownSegmentContentInitialWhitespaceSegmentsStartingIndex: Index,
		functionHeaderUnknownSegmentContentInitialWhitespaceSegments: WhitespaceSegmentsConcreteSyntaxTreeNode,
		functionHeaderUnknownSegmentContentInitialWhitespaceEndingIndex: Index,
		functionHeaderUnknownSegmentContentIdentifier: IdentifierConcreteSyntaxTreeNode,
		functionHeaderUnknownSegmentContentFinalWhitespace: WhitespaceConcreteSyntaxTreeNode | null,
		functionHeaderUnknownSegmentContentEndingIndex: Index,
		functionHeaderUnknownSegmentClosingBracket: FunctionHeaderUnknownSegmentClosingBracketConcreteSyntaxTreeNode,
		functionHeaderUnknownSegmentEndingIndex: Index,
		functionHeaderUnknownStartingSegmentsRestSegments:
			| FunctionHeaderKnownStartingSegmentsConcreteSyntaxTreeNode
			| FunctionHeaderUnknownStartingSegmentsConcreteSyntaxTreeNode
			| null
			| FunctionHeaderSegmentsSeparatedRestSegmentsConcreteSyntaxTreeNode
			| FunctionHeaderWordStartingSegmentsConcreteSyntaxTreeNode,
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
		this.functionHeaderUnknownSegmentContentInitialWhitespaceSegmentsStartingIndex =
			functionHeaderUnknownSegmentContentInitialWhitespaceSegmentsStartingIndex;
		this.functionHeaderUnknownSegmentContentInitialWhitespaceSegments =
			functionHeaderUnknownSegmentContentInitialWhitespaceSegments;
		this.functionHeaderUnknownSegmentContentInitialWhitespaceEndingIndex =
			functionHeaderUnknownSegmentContentInitialWhitespaceEndingIndex;
		this.functionHeaderUnknownSegmentContentIdentifier =
			functionHeaderUnknownSegmentContentIdentifier;
		this.functionHeaderUnknownSegmentContentFinalWhitespace =
			functionHeaderUnknownSegmentContentFinalWhitespace;
		this.functionHeaderUnknownSegmentContentEndingIndex =
			functionHeaderUnknownSegmentContentEndingIndex;
		this.functionHeaderUnknownSegmentClosingBracket = functionHeaderUnknownSegmentClosingBracket;
		this.functionHeaderUnknownSegmentEndingIndex = functionHeaderUnknownSegmentEndingIndex;
		this.functionHeaderUnknownStartingSegmentsRestSegments =
			functionHeaderUnknownStartingSegmentsRestSegments;
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
	private readonly functionHeaderUnknownSegmentContentEndingIndex: Index;
	private readonly functionHeaderUnknownSegmentContentInitialWhitespaceSegmentsStartingIndex: Index;
	private readonly functionHeaderUnknownSegmentContentInitialWhitespaceEndingIndex: Index;
	private readonly functionHeaderUnknownSegmentEndingIndex: Index;
	private readonly functionHeaderSegmentsEndingIndex: Index;
	private readonly functionHeaderEndingIndex: Index;
	private readonly functionEndingIndex: Index;
	private readonly functionsEndingIndex: Index;
	private readonly sourceFileContentEndingIndex: Index;

	public parseWhitespace(
		character: WhitespaceCharacter,
		index: Index,
	): FunctionHeaderUnknownSegmentContentInitialWhitespaceSegmentsParser {
		const newFunctionHeaderUnknownSegmentContentInitialWhitespaceSegmentsFirstSegment =
			createWhitespaceSegmentConcreteSyntaxTreeNode(character, index);
		const newFunctionHeaderUnknownSegmentContentInitialWhitespaceSegments: WhitespaceSegmentsConcreteSyntaxTreeNode =
			createWhitespaceSegmentsConcreteSyntaxTreeNode(
				newFunctionHeaderUnknownSegmentContentInitialWhitespaceSegmentsFirstSegment,
				this.functionHeaderUnknownSegmentContentInitialWhitespaceSegments,
				{
					starting: index,
					ending: this.functionHeaderUnknownSegmentContentInitialWhitespaceEndingIndex,
				},
			);
		const functionHeaderUnknownSegmentContentInitialWhitespaceSegmentsParser =
			new FunctionHeaderUnknownSegmentContentInitialWhitespaceSegmentsParser(
				index,
				newFunctionHeaderUnknownSegmentContentInitialWhitespaceSegments,
				this.functionHeaderUnknownSegmentContentInitialWhitespaceEndingIndex,
				this.functionHeaderUnknownSegmentContentIdentifier,
				this.functionHeaderUnknownSegmentContentFinalWhitespace,
				this.functionHeaderUnknownSegmentContentEndingIndex,
				this.functionHeaderUnknownSegmentClosingBracket,
				this.functionHeaderUnknownSegmentEndingIndex,
				this.functionHeaderUnknownStartingSegmentsRestSegments,
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
		return functionHeaderUnknownSegmentContentInitialWhitespaceSegmentsParser;
	}
	public parseOpeningSquareBracket(
		character: OpeningSquareBracketCharacter,
		index: Index,
	): FunctionHeaderSegmentsParser {
		const functionHeaderUnknownSegmentOpeningBracket =
			createFunctionHeaderUnknownSegmentOpeningBracketConcreteSyntaxTreeNode(character, index);
		const functionHeaderUnknownSegmentContentInitialWhitespace =
			createWhitespaceConcreteSyntaxTreeNode(
				this.functionHeaderUnknownSegmentContentInitialWhitespaceSegments,
				{
					starting: this.functionHeaderUnknownSegmentContentInitialWhitespaceSegmentsStartingIndex,
					ending: this.functionHeaderUnknownSegmentContentInitialWhitespaceEndingIndex,
				},
			);
		const functionHeaderUnknownSegmentContent: FunctionHeaderUnknownSegmentContentConcreteSyntaxTreeNode =
			createFunctionHeaderUnknownSegmentContentConcreteSyntaxTreeNode(
				functionHeaderUnknownSegmentContentInitialWhitespace,
				this.functionHeaderUnknownSegmentContentIdentifier,
				this.functionHeaderUnknownSegmentContentFinalWhitespace,
				{
					starting: this.functionHeaderUnknownSegmentContentInitialWhitespaceSegmentsStartingIndex,
					ending: this.functionHeaderUnknownSegmentContentEndingIndex,
				},
			);
		const functionHeaderUnknownSegment: FunctionHeaderUnknownSegmentConcreteSyntaxTreeNode =
			createFunctionHeaderUnknownSegmentConcreteSyntaxTreeNode(
				functionHeaderUnknownSegmentOpeningBracket,
				functionHeaderUnknownSegmentContent,
				this.functionHeaderUnknownSegmentClosingBracket,
				{
					starting: index,
					ending: this.functionHeaderUnknownSegmentEndingIndex,
				},
			);
		const functionHeaderUnknownStartingSegments: FunctionHeaderUnknownStartingSegmentsConcreteSyntaxTreeNode =
			createFunctionHeaderUnknownStartingSegmentsConcreteSyntaxTreeNode(
				functionHeaderUnknownSegment,
				this.functionHeaderUnknownStartingSegmentsRestSegments,
				{
					starting: index,
					ending: this.functionHeaderSegmentsEndingIndex,
				},
			);
		const functionHeaderSegmentsParser = new FunctionHeaderSegmentsParser(
			index,
			functionHeaderUnknownStartingSegments,
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
	public parseClosingSquareBracket(): never {
		throw new Error("Not implemented.");
	}
	public parseOpeningCurlyBracket(): never {
		throw new Error("Not implemented.");
	}
	public parseClosingCurlyBracket(): never {
		throw new Error("Not implemented.");
	}
	public parseOpeningRoundBracket(): never {
		throw new Error("Not implemented.");
	}
	public parseClosingRoundBracket(): never {
		throw new Error("Not implemented.");
	}
	public parseIdentifier(): never {
		throw new Error("Not implemented.");
	}
	public parseOperator(): never {
		throw new Error("Not implemented.");
	}
	public finalize(): never {
		throw new Error("Not implemented.");
	}
}
