import type {IdentifierCharacter} from "../../../../characters/identifier/IdentifierCharacter.ts";
import type {OpeningRoundBracketCharacter} from "../../../../characters/opening-round-bracket/OpeningRoundBracketCharacter.ts";
import type {WhitespaceCharacter} from "../../../../characters/whitespace/WhitespaceCharacter.ts";
import type {Index} from "../../../../concrete-syntax-tree/index/Index.ts";
import type {FunctionBodyConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/function-body/FunctionBodyConcreteSyntaxTreeNode.ts";
import type {FunctionHeaderKnownSegmentClosingBracketConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/function-header-known-segment-closing-bracket/FunctionHeaderKnownSegmentClosingBracketConcreteSyntaxTreeNode.ts";
import {createFunctionHeaderKnownSegmentContentConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/function-header-known-segment-content/createFunctionHeaderKnownSegmentContentConcreteSyntaxTreeNode.ts";
import {createFunctionHeaderKnownSegmentOpeningBracketConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/function-header-known-segment-opening-bracket/createFunctionHeaderKnownSegmentOpeningBracketConcreteSyntaxTreeNode.ts";
import {createFunctionHeaderKnownSegmentConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/function-header-known-segment/createFunctionHeaderKnownSegmentConcreteSyntaxTreeNode.ts";
import {createFunctionHeaderKnownStartingSegmentsConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/function-header-known-starting-segments/createFunctionHeaderKnownStartingSegmentsConcreteSyntaxTreeNode.ts";
import type {FunctionHeaderKnownStartingSegmentsConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/function-header-known-starting-segments/FunctionHeaderKnownStartingSegmentsConcreteSyntaxTreeNode.ts";
import type {FunctionHeaderSegmentsSeparatedRestSegmentsConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/function-header-segments-separated-rest-segments/FunctionHeaderSegmentsSeparatedRestSegmentsConcreteSyntaxTreeNode.ts";
import type {FunctionHeaderUnknownStartingSegmentsConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/function-header-unknown-starting-segments/FunctionHeaderUnknownStartingSegmentsConcreteSyntaxTreeNode.ts";
import type {FunctionHeaderWordStartingSegmentsConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/function-header-word-starting-segments/FunctionHeaderWordStartingSegmentsConcreteSyntaxTreeNode.ts";
import type {FunctionsSeparatedRestFunctionsConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/functions-separated-rest-functions/FunctionsSeparatedRestFunctionsConcreteSyntaxTreeNode.ts";
import type {FunctionsConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/functions/FunctionsConcreteSyntaxTreeNode.ts";
import {createIdentifierSegmentConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/identifier-segment/createIdentifierSegmentConcreteSyntaxTreeNode.ts";
import {createIdentifierSegmentsConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/identifier-segments/createIdentifierSegmentsConcreteSyntaxTreeNode.ts";
import type {IdentifierSegmentsConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/identifier-segments/IdentifierSegmentsConcreteSyntaxTreeNode.ts";
import {createIdentifierConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/identifier/createIdentifierConcreteSyntaxTreeNode.ts";
import {createWhitespaceSegmentConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/whitespace-segment/createWhitespaceSegmentConcreteSyntaxTreeNode.ts";
import {createWhitespaceSegmentsConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/whitespace-segments/createWhitespaceSegmentsConcreteSyntaxTreeNode.ts";
import type {WhitespaceSegmentsConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/whitespace-segments/WhitespaceSegmentsConcreteSyntaxTreeNode.ts";
import type {WhitespaceConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/whitespace/WhitespaceConcreteSyntaxTreeNode.ts";
import type {Parser} from "../../Parser.ts";
import {FunctionHeaderKnownSegmentContentInitialWhitespaceSegmentsParser} from "../function-header-known-segment-content-initial-whitespace-segments/FunctionHeaderKnownSegmentContentInitialWhitespaceSegmentsParser.ts";
import {FunctionHeaderSegmentsParser} from "../function-header-segments/FunctionHeaderSegmentsParser.ts";
export class FunctionHeaderKnownSegmentContentIdentifierSegmentsParser implements Parser {
	private readonly functionHeaderKnownSegmentContentIdentifierSegments: IdentifierSegmentsConcreteSyntaxTreeNode;
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
		functionHeaderKnownSegmentContentIdentifierSegmentsStartingIndex: Index,
		functionHeaderKnownSegmentContentIdentifierSegments: IdentifierSegmentsConcreteSyntaxTreeNode,
		functionHeaderKnownSegmentContentIdentifierEndingIndex: Index,
		functionHeaderKnownSegmentContentFinalWhitespace: WhitespaceConcreteSyntaxTreeNode | null,
		functionHeaderKnownSegmentContentEndingIndex: Index,
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
		this.functionHeaderKnownSegmentContentIdentifierSegmentsStartingIndex =
			functionHeaderKnownSegmentContentIdentifierSegmentsStartingIndex;
		this.functionHeaderKnownSegmentContentIdentifierSegments =
			functionHeaderKnownSegmentContentIdentifierSegments;
		this.functionHeaderKnownSegmentContentIdentifierEndingIndex =
			functionHeaderKnownSegmentContentIdentifierEndingIndex;
		this.functionHeaderKnownSegmentContentFinalWhitespace =
			functionHeaderKnownSegmentContentFinalWhitespace;
		this.functionHeaderKnownSegmentContentEndingIndex =
			functionHeaderKnownSegmentContentEndingIndex;
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
	private readonly functionHeaderKnownSegmentContentEndingIndex: Index;
	private readonly functionHeaderKnownSegmentContentIdentifierSegmentsStartingIndex: Index;
	private readonly functionHeaderKnownSegmentContentIdentifierEndingIndex: Index;
	private readonly functionHeaderKnownSegmentEndingIndex: Index;
	private readonly functionHeaderSegmentsEndingIndex: Index;
	private readonly functionHeaderEndingIndex: Index;
	private readonly functionEndingIndex: Index;
	private readonly functionsEndingIndex: Index;
	private readonly sourceFileContentEndingIndex: Index;
	public parseWhitespace(
		character: WhitespaceCharacter,
		index: Index,
	): FunctionHeaderKnownSegmentContentInitialWhitespaceSegmentsParser {
		const functionHeaderKnownSegmentContentInitialWhitespaceSegmentsFirstSegment =
			createWhitespaceSegmentConcreteSyntaxTreeNode(character, index);
		const functionHeaderKnownSegmentContentInitialWhitespaceSegments: WhitespaceSegmentsConcreteSyntaxTreeNode =
			createWhitespaceSegmentsConcreteSyntaxTreeNode(
				functionHeaderKnownSegmentContentInitialWhitespaceSegmentsFirstSegment,
				null,
				{
					starting: index,
					ending: index,
				},
			);
		const functionHeaderKnownSegmentContentIdentifier = createIdentifierConcreteSyntaxTreeNode(
			this.functionHeaderKnownSegmentContentIdentifierSegments,
			{
				starting: this.functionHeaderKnownSegmentContentIdentifierSegmentsStartingIndex,
				ending: this.functionHeaderKnownSegmentContentIdentifierEndingIndex,
			},
		);
		const functionHeaderKnownSegmentContentInitialWhitespaceSegmentsParser =
			new FunctionHeaderKnownSegmentContentInitialWhitespaceSegmentsParser(
				index,
				functionHeaderKnownSegmentContentInitialWhitespaceSegments,
				index,
				functionHeaderKnownSegmentContentIdentifier,
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
		throw new Error("Not implemented.");
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
	public parseOpeningRoundBracket(
		character: OpeningRoundBracketCharacter,
		index: Index,
	): FunctionHeaderSegmentsParser {
		const functionHeaderKnownSegmentOpeningBracket =
			createFunctionHeaderKnownSegmentOpeningBracketConcreteSyntaxTreeNode(character, index);
		const functionHeaderKnownSegmentContentIdentifier = createIdentifierConcreteSyntaxTreeNode(
			this.functionHeaderKnownSegmentContentIdentifierSegments,
			{
				starting: this.functionHeaderKnownSegmentContentIdentifierSegmentsStartingIndex,
				ending: this.functionHeaderKnownSegmentContentIdentifierEndingIndex,
			},
		);
		const functionHeaderKnownSegmentContent =
			createFunctionHeaderKnownSegmentContentConcreteSyntaxTreeNode(
				null,
				functionHeaderKnownSegmentContentIdentifier,
				this.functionHeaderKnownSegmentContentFinalWhitespace,
				{
					starting: this.functionHeaderKnownSegmentContentIdentifierSegmentsStartingIndex,
					ending: this.functionHeaderKnownSegmentContentEndingIndex,
				},
			);
		const functionHeaderKnownSegment = createFunctionHeaderKnownSegmentConcreteSyntaxTreeNode(
			functionHeaderKnownSegmentOpeningBracket,
			functionHeaderKnownSegmentContent,
			this.functionHeaderKnownSegmentClosingBracket,
			{
				starting: index,
				ending: this.functionHeaderKnownSegmentEndingIndex,
			},
		);
		const functionHeaderKnownStartingSegments =
			createFunctionHeaderKnownStartingSegmentsConcreteSyntaxTreeNode(
				functionHeaderKnownSegment,
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
		throw new Error("Not implemented.");
	}
	public parseIdentifier(
		character: IdentifierCharacter,
		index: Index,
	): FunctionHeaderKnownSegmentContentIdentifierSegmentsParser {
		const newFunctionHeaderKnownSegmentContentIdentifierSegmentsFirstSegment =
			createIdentifierSegmentConcreteSyntaxTreeNode(character, index);
		const newFunctionHeaderKnownSegmentContentIdentifierSegments =
			createIdentifierSegmentsConcreteSyntaxTreeNode(
				newFunctionHeaderKnownSegmentContentIdentifierSegmentsFirstSegment,
				this.functionHeaderKnownSegmentContentIdentifierSegments,
				{
					starting: index,
					ending: this.functionHeaderKnownSegmentContentIdentifierEndingIndex,
				},
			);
		const functionHeaderKnownSegmentContentIdentifierSegmentsParser =
			new FunctionHeaderKnownSegmentContentIdentifierSegmentsParser(
				index,
				newFunctionHeaderKnownSegmentContentIdentifierSegments,
				this.functionHeaderKnownSegmentContentIdentifierEndingIndex,
				this.functionHeaderKnownSegmentContentFinalWhitespace,
				this.functionHeaderKnownSegmentContentEndingIndex,
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
		return functionHeaderKnownSegmentContentIdentifierSegmentsParser;
	}
	public parseOperator(): never {
		throw new Error("Not implemented.");
	}
	public finalize(): never {
		throw new Error("Not implemented.");
	}
}
