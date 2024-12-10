import type {IdentifierCharacter} from "../../../../characters/identifier/IdentifierCharacter.ts";
import type {OpeningRoundBracketCharacter} from "../../../../characters/opening-round-bracket/OpeningRoundBracketCharacter.ts";
import type {WhitespaceCharacter} from "../../../../characters/whitespace/WhitespaceCharacter.ts";
import type {Index} from "../../../../concrete-syntax-tree/index/Index.ts";
import type {FunctionBodyConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/function-body/FunctionBodyConcreteSyntaxTreeNode.ts";
import type {FunctionHeaderKnownSegmentClosingBracketConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/function-header-known-segment-closing-bracket/FunctionHeaderKnownSegmentClosingBracketConcreteSyntaxTreeNode.ts";
import {createFunctionHeaderKnownSegmentConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/function-header-known-segment/createFunctionHeaderKnownSegmentConcreteSyntaxTreeNode.ts";
import type {FunctionHeaderKnownSegmentConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/function-header-known-segment/FunctionHeaderKnownSegmentConcreteSyntaxTreeNode.ts";
import {createFunctionHeaderKnownStartingSegmentsConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/function-header-known-starting-segments/createFunctionHeaderKnownStartingSegmentsConcreteSyntaxTreeNode.ts";
import type {FunctionHeaderKnownStartingSegmentsConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/function-header-known-starting-segments/FunctionHeaderKnownStartingSegmentsConcreteSyntaxTreeNode.ts";
import type {FunctionHeaderSegmentsSeparatedRestSegmentsConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/function-header-segments-separated-rest-segments/FunctionHeaderSegmentsSeparatedRestSegmentsConcreteSyntaxTreeNode.ts";
import type {FunctionHeaderUnknownStartingSegmentsConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/function-header-unknown-starting-segments/FunctionHeaderUnknownStartingSegmentsConcreteSyntaxTreeNode.ts";
import type {FunctionHeaderWordStartingSegmentsConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/function-header-word-starting-segments/FunctionHeaderWordStartingSegmentsConcreteSyntaxTreeNode.ts";
import type {FunctionsSeparatedRestFunctionsConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/functions-separated-rest-functions/FunctionsSeparatedRestFunctionsConcreteSyntaxTreeNode.ts";
import type {FunctionsConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/functions/FunctionsConcreteSyntaxTreeNode.ts";
import {createIdentifierSegmentsConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/identifier-segments/createIdentifierSegmentsConcreteSyntaxTreeNode.ts";
import {createWhitespaceSegmentConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/whitespace-segment/createWhitespaceSegmentConcreteSyntaxTreeNode.ts";
import {createWhitespaceSegmentsConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/whitespace-segments/createWhitespaceSegmentsConcreteSyntaxTreeNode.ts";
import type {WhitespaceSegmentsConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/whitespace-segments/WhitespaceSegmentsConcreteSyntaxTreeNode.ts";
import type {WhitespaceConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/whitespace/WhitespaceConcreteSyntaxTreeNode.ts";
import type {Parser} from "../../Parser.ts";
import {FunctionHeaderKnownSegmentContentFinalWhitespaceSegmentsParser} from "../function-header-known-segment-content-final-whitespace-segments/FunctionHeaderKnownSegmentContentFinalWhitespaceSegmentsParser.ts";
import {FunctionHeaderSegmentsParser} from "../function-header-segments/FunctionHeaderSegmentsParser.ts";
import {createFunctionHeaderKnownSegmentOpeningBracketConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/function-header-known-segment-opening-bracket/createFunctionHeaderKnownSegmentOpeningBracketConcreteSyntaxTreeNode.ts";
import {createIdentifierSegmentConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/identifier-segment/createIdentifierSegmentConcreteSyntaxTreeNode.ts";
import {FunctionHeaderKnownSegmentContentIdentifierSegmentsParser} from "../function-header-known-segment-content-identifier-segments/FunctionHeaderKnownSegmentContentIdentifierSegmentsParser.ts";
export class FunctionHeaderKnownSegmentContentParser implements Parser {
	private readonly functionHeaderKnownSegmentClosingBracket: FunctionHeaderKnownSegmentClosingBracketConcreteSyntaxTreeNode;
	private readonly functionHeaderKnownStartingSegmentRestSegments:
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
		functionHeaderKnownSegmentClosingBracket: FunctionHeaderKnownSegmentClosingBracketConcreteSyntaxTreeNode,
		functionHeaderKnownSegmentEndingIndex: Index,
		functionHeaderKnownStartingSegmentRestSegments:
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
		this.functionHeaderKnownSegmentClosingBracket = functionHeaderKnownSegmentClosingBracket;
		this.functionHeaderKnownSegmentEndingIndex = functionHeaderKnownSegmentEndingIndex;
		this.functionHeaderKnownStartingSegmentRestSegments =
			functionHeaderKnownStartingSegmentRestSegments;
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
	private readonly functionEndingIndex: Index;
	private readonly functionHeaderEndingIndex: Index;
	private readonly functionHeaderSegmentsEndingIndex: Index;
	private readonly functionsEndingIndex: Index;
	private readonly functionHeaderKnownSegmentEndingIndex: Index;
	private readonly sourceFileContentEndingIndex: Index;
	public parseWhitespace(
		character: WhitespaceCharacter,
		index: Index,
	): FunctionHeaderKnownSegmentContentFinalWhitespaceSegmentsParser {
		const functionHeaderKnownSegmentContentFinalWhitespaceSegmentsFirstSegment =
			createWhitespaceSegmentConcreteSyntaxTreeNode(character, index);
		const functionHeaderKnownSegmentContentFinalWhitespaceSegments: WhitespaceSegmentsConcreteSyntaxTreeNode =
			createWhitespaceSegmentsConcreteSyntaxTreeNode(
				functionHeaderKnownSegmentContentFinalWhitespaceSegmentsFirstSegment,
				null,
				{
					starting: index,
					ending: index,
				},
			);
		const functionHeaderKnownSegmentContentFinalWhitespaceSegmentsParser =
			new FunctionHeaderKnownSegmentContentFinalWhitespaceSegmentsParser(
				index,
				functionHeaderKnownSegmentContentFinalWhitespaceSegments,
				index,
				index,
				this.functionHeaderKnownSegmentClosingBracket,
				this.functionHeaderKnownSegmentEndingIndex,
				this.functionHeaderKnownStartingSegmentRestSegments,
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
		return functionHeaderKnownSegmentContentFinalWhitespaceSegmentsParser;
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
		const functionHeaderKnownSegment: FunctionHeaderKnownSegmentConcreteSyntaxTreeNode =
			createFunctionHeaderKnownSegmentConcreteSyntaxTreeNode(
				functionHeaderKnownSegmentOpeningBracket,
				null,
				this.functionHeaderKnownSegmentClosingBracket,
				{
					starting: index,
					ending: this.functionHeaderKnownSegmentEndingIndex,
				},
			);
		const functionHeaderKnownStartingSegments: FunctionHeaderKnownStartingSegmentsConcreteSyntaxTreeNode =
			createFunctionHeaderKnownStartingSegmentsConcreteSyntaxTreeNode(
				functionHeaderKnownSegment,
				this.functionHeaderKnownStartingSegmentRestSegments,
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
	public parseIdentifier(
		character: IdentifierCharacter,
		index: Index,
	): FunctionHeaderKnownSegmentContentIdentifierSegmentsParser {
		const functionHeaderKnownSegmentContentIdentifierSegmentsFirstSegment =
			createIdentifierSegmentConcreteSyntaxTreeNode(character, index);
		const functionHeaderKnownSegmentContentIdentifierSegments =
			createIdentifierSegmentsConcreteSyntaxTreeNode(
				functionHeaderKnownSegmentContentIdentifierSegmentsFirstSegment,
				null,
				{
					starting: index,
					ending: index,
				},
			);
		const functionHeaderKnownSegmentContentIdentifierSegmentsParser =
			new FunctionHeaderKnownSegmentContentIdentifierSegmentsParser(
				index,
				functionHeaderKnownSegmentContentIdentifierSegments,
				index,
				null,
				index,
				this.functionHeaderKnownSegmentClosingBracket,
				this.functionHeaderKnownSegmentEndingIndex,
				this.functionHeaderKnownStartingSegmentRestSegments,
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
		throw new Error(".");
	}
	public finalize(): never {
		throw new Error(".");
	}
}
