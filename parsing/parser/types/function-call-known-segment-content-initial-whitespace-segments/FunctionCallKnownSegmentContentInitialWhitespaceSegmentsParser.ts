import type {OpeningRoundBracketCharacter} from "../../../../characters/opening-round-bracket/OpeningRoundBracketCharacter.ts";
import type {WhitespaceCharacter} from "../../../../characters/whitespace/WhitespaceCharacter.ts";
import type {Index} from "../../../../concrete-syntax-tree/index/Index.ts";
import type {BlockClosingBracketConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/block-closing-bracket/BlockClosingBracketConcreteSyntaxTreeNode.ts";
import type {FunctionCallKnownSegmentClosingBracketConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/function-call-known-segment-closing-bracket/FunctionCallKnownSegmentClosingBracketConcreteSyntaxTreeNode.ts";
import {createFunctionCallKnownSegmentContentConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/function-call-known-segment-content/createFunctionCallKnownSegmentContentConcreteSyntaxTreeNode.ts";
import {createFunctionCallKnownSegmentOpeningBracketConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/function-call-known-segment-opening-bracket/createFunctionCallKnownSegmentOpeningBracketConcreteSyntaxTreeNode.ts";
import {createFunctionCallKnownSegmentConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/function-call-known-segment/createFunctionCallKnownSegmentConcreteSyntaxTreeNode.ts";
import {createFunctionCallKnownStartingSegmentsConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/function-call-known-starting-segments/createFunctionCallKnownStartingSegmentsConcreteSyntaxTreeNode.ts";
import type {FunctionCallKnownStartingSegmentsConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/function-call-known-starting-segments/FunctionCallKnownStartingSegmentsConcreteSyntaxTreeNode.ts";
import type {FunctionCallSegmentsSeparatedRestSegmentsConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/function-call-segments-separated-rest-segments/FunctionCallSegmentsSeparatedRestSegmentsConcreteSyntaxTreeNode.ts";
import type {FunctionCallUnknownStartingSegmentsConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/function-call-unknown-starting-segments/FunctionCallUnknownStartingSegmentsConcreteSyntaxTreeNode.ts";
import type {FunctionCallWordStartingSegmentsConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/function-call-word-starting-segments/FunctionCallWordStartingSegmentsConcreteSyntaxTreeNode.ts";
import type {FunctionsSeparatedRestFunctionsConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/functions-separated-rest-functions/FunctionsSeparatedRestFunctionsConcreteSyntaxTreeNode.ts";
import type {FunctionsConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/functions/FunctionsConcreteSyntaxTreeNode.ts";
import type {IdentifierConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/identifier/IdentifierConcreteSyntaxTreeNode.ts";
import type {StatementsRestStatementsConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/statements-rest-statements/StatementsRestStatementsConcreteSyntaxTreeNode.ts";
import {createWhitespaceSegmentConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/whitespace-segment/createWhitespaceSegmentConcreteSyntaxTreeNode.ts";
import {createWhitespaceSegmentsConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/whitespace-segments/createWhitespaceSegmentsConcreteSyntaxTreeNode.ts";
import type {WhitespaceSegmentsConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/whitespace-segments/WhitespaceSegmentsConcreteSyntaxTreeNode.ts";
import {createWhitespaceConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/whitespace/createWhitespaceConcreteSyntaxTreeNode.ts";
import type {WhitespaceConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/whitespace/WhitespaceConcreteSyntaxTreeNode.ts";
import type {Parser} from "../../Parser.ts";
import {FunctionCallSegmentsParser} from "../function-call-segments-parser/FunctionCallSegmentsParser.ts";
export class FunctionCallKnownSegmentContentInitialWhitespaceSegmentsParser implements Parser {
	private readonly functionCallKnownSegmentContentInitialWhitespaceSegments: WhitespaceSegmentsConcreteSyntaxTreeNode;
	private readonly functionCallKnownSegmentContentIdentifier: IdentifierConcreteSyntaxTreeNode;
	private readonly functionCallKnownSegmentContentFinalWhitespace: WhitespaceConcreteSyntaxTreeNode | null;
	private readonly functionCallKnownSegmentClosingBracket: FunctionCallKnownSegmentClosingBracketConcreteSyntaxTreeNode;
	private readonly functionCallKnownStartingSegmentsRestSegments:
		| FunctionCallKnownStartingSegmentsConcreteSyntaxTreeNode
		| FunctionCallUnknownStartingSegmentsConcreteSyntaxTreeNode
		| FunctionCallWordStartingSegmentsConcreteSyntaxTreeNode
		| null
		| FunctionCallSegmentsSeparatedRestSegmentsConcreteSyntaxTreeNode;
	private readonly statementsRestStatements: StatementsRestStatementsConcreteSyntaxTreeNode | null;
	private readonly blockContentFinalWhitespace: WhitespaceConcreteSyntaxTreeNode | null;
	private readonly blockContentEndingIndex: Index;
	private readonly blockClosingBracket: BlockClosingBracketConcreteSyntaxTreeNode;
	private readonly blockEndingIndex: Index;
	private readonly blockStack: readonly (readonly [
		statementsRestStatements: StatementsRestStatementsConcreteSyntaxTreeNode | null,
		statementsEndingIndex: Index,
		finalWhitespace: WhitespaceConcreteSyntaxTreeNode | null,
		contentEndingIndex: Index,
		closingBracket: BlockClosingBracketConcreteSyntaxTreeNode,
		endingIndex: Index,
	])[];
	private readonly functionsRestFunctions:
		| FunctionsSeparatedRestFunctionsConcreteSyntaxTreeNode
		| null
		| FunctionsConcreteSyntaxTreeNode;
	private readonly sourceFileContentFinalWhitespace: WhitespaceConcreteSyntaxTreeNode | null;
	public constructor(
		functionCallKnownSegmentContentInitialWhitespaceSegmentsStartingIndex: Index,
		functionCallKnownSegmentContentInitialWhitespaceSegments: WhitespaceSegmentsConcreteSyntaxTreeNode,
		functionCallKnownSegmentContentInitialWhitespaceSegmentsEndingIndex: Index,
		functionCallKnownSegmentContentInitialWhitespaceEndingIndex: Index,
		functionCallKnownSegmentContentIdentifier: IdentifierConcreteSyntaxTreeNode,
		functionCallKnownSegmentContentFinalWhitespace: WhitespaceConcreteSyntaxTreeNode | null,
		functionCallKnownSegmentContentEndingIndex: Index,
		functionCallKnownSegmentClosingBracket: FunctionCallKnownSegmentClosingBracketConcreteSyntaxTreeNode,
		functionCallKnownSegmentEndingIndex: Index,
		functionCallKnownStartingSegmentsRestSegments:
			| FunctionCallKnownStartingSegmentsConcreteSyntaxTreeNode
			| FunctionCallUnknownStartingSegmentsConcreteSyntaxTreeNode
			| FunctionCallWordStartingSegmentsConcreteSyntaxTreeNode
			| null
			| FunctionCallSegmentsSeparatedRestSegmentsConcreteSyntaxTreeNode,
		functionCallSegmentsEndingIndex: Index,
		functionCallEndingIndex: Index,
		statementsRestStatements: StatementsRestStatementsConcreteSyntaxTreeNode | null,
		statementsEndingIndex: Index,
		blockContentFinalWhitespace: WhitespaceConcreteSyntaxTreeNode | null,
		blockContentEndingIndex: Index,
		blockClosingBracket: BlockClosingBracketConcreteSyntaxTreeNode,
		blockEndingIndex: Index,
		blockStack: readonly (readonly [
			statementsRestStatements: StatementsRestStatementsConcreteSyntaxTreeNode | null,
			statementsEndingIndex: Index,
			finalWhitespace: WhitespaceConcreteSyntaxTreeNode | null,
			contentEndingIndex: Index,
			closingBracket: BlockClosingBracketConcreteSyntaxTreeNode,
			endingIndex: Index,
		])[],
		functionBodyEndingIndex: Index,
		functionEndingIndex: Index,
		functionsRestFunctions:
			| FunctionsSeparatedRestFunctionsConcreteSyntaxTreeNode
			| null
			| FunctionsConcreteSyntaxTreeNode,
		functionsEndingIndex: Index,
		sourceFileContentFinalWhitespace: WhitespaceConcreteSyntaxTreeNode | null,
		sourceFileContentEndingIndex: Index,
	) {
		this.functionCallKnownSegmentContentInitialWhitespaceSegmentsStartingIndex =
			functionCallKnownSegmentContentInitialWhitespaceSegmentsStartingIndex;
		this.functionCallKnownSegmentContentInitialWhitespaceSegments =
			functionCallKnownSegmentContentInitialWhitespaceSegments;
		this.functionCallKnownSegmentContentInitialWhitespaceSegmentsEndingIndex =
			functionCallKnownSegmentContentInitialWhitespaceSegmentsEndingIndex;
		this.functionCallKnownSegmentContentInitialWhitespaceEndingIndex =
			functionCallKnownSegmentContentInitialWhitespaceEndingIndex;
		this.functionCallKnownSegmentContentIdentifier = functionCallKnownSegmentContentIdentifier;
		this.functionCallKnownSegmentContentFinalWhitespace =
			functionCallKnownSegmentContentFinalWhitespace;
		this.functionCallKnownSegmentContentEndingIndex = functionCallKnownSegmentContentEndingIndex;
		this.functionCallKnownSegmentClosingBracket = functionCallKnownSegmentClosingBracket;
		this.functionCallKnownSegmentEndingIndex = functionCallKnownSegmentEndingIndex;
		this.functionCallKnownStartingSegmentsRestSegments =
			functionCallKnownStartingSegmentsRestSegments;
		this.functionCallSegmentsEndingIndex = functionCallSegmentsEndingIndex;
		this.functionCallEndingIndex = functionCallEndingIndex;
		this.statementsRestStatements = statementsRestStatements;
		this.statementsEndingIndex = statementsEndingIndex;
		this.blockContentFinalWhitespace = blockContentFinalWhitespace;
		this.blockContentEndingIndex = blockContentEndingIndex;
		this.blockClosingBracket = blockClosingBracket;
		this.blockEndingIndex = blockEndingIndex;
		this.blockStack = blockStack;
		this.functionBodyEndingIndex = functionBodyEndingIndex;
		this.functionEndingIndex = functionEndingIndex;
		this.functionsRestFunctions = functionsRestFunctions;
		this.functionsEndingIndex = functionsEndingIndex;
		this.sourceFileContentFinalWhitespace = sourceFileContentFinalWhitespace;
		this.sourceFileContentEndingIndex = sourceFileContentEndingIndex;
	}
	private readonly functionCallSegmentsEndingIndex: Index;
	private readonly functionCallEndingIndex: Index;
	private readonly functionCallKnownSegmentEndingIndex: Index;
	private readonly functionCallKnownSegmentContentEndingIndex: Index;
	private readonly functionCallKnownSegmentContentInitialWhitespaceSegmentsStartingIndex: Index;
	private readonly functionCallKnownSegmentContentInitialWhitespaceSegmentsEndingIndex: Index;
	private readonly functionCallKnownSegmentContentInitialWhitespaceEndingIndex: Index;
	private readonly statementsEndingIndex: Index;
	private readonly functionBodyEndingIndex: Index;
	private readonly functionEndingIndex: Index;
	private readonly functionsEndingIndex: Index;
	private readonly sourceFileContentEndingIndex: Index;
	public parseWhitespace(
		character: WhitespaceCharacter,
		index: Index,
	): FunctionCallKnownSegmentContentInitialWhitespaceSegmentsParser {
		const newFunctionCallKnownSegmentContentInitialWhitespaceSegmentsFirstSegment =
			createWhitespaceSegmentConcreteSyntaxTreeNode(character, index);
		const newFunctionCallKnownSegmentContentInitialWhitespaceSegments =
			createWhitespaceSegmentsConcreteSyntaxTreeNode(
				newFunctionCallKnownSegmentContentInitialWhitespaceSegmentsFirstSegment,
				this.functionCallKnownSegmentContentInitialWhitespaceSegments,
				{
					starting: index,
					ending: this.functionCallKnownSegmentContentInitialWhitespaceSegmentsEndingIndex,
				},
			);
		const functionCallKnownSegmentContentInitialWhitespaceSegmentsParser =
			new FunctionCallKnownSegmentContentInitialWhitespaceSegmentsParser(
				index,
				newFunctionCallKnownSegmentContentInitialWhitespaceSegments,
				this.functionCallKnownSegmentContentInitialWhitespaceSegmentsEndingIndex,
				this.functionCallKnownSegmentContentInitialWhitespaceEndingIndex,
				this.functionCallKnownSegmentContentIdentifier,
				this.functionCallKnownSegmentContentFinalWhitespace,
				this.functionCallKnownSegmentContentEndingIndex,
				this.functionCallKnownSegmentClosingBracket,
				this.functionCallKnownSegmentEndingIndex,
				this.functionCallKnownStartingSegmentsRestSegments,
				this.functionCallSegmentsEndingIndex,
				this.functionCallEndingIndex,
				this.statementsRestStatements,
				this.statementsEndingIndex,
				this.blockContentFinalWhitespace,
				this.blockContentEndingIndex,
				this.blockClosingBracket,
				this.blockEndingIndex,
				this.blockStack,
				this.functionBodyEndingIndex,
				this.functionEndingIndex,
				this.functionsRestFunctions,
				this.functionsEndingIndex,
				this.sourceFileContentFinalWhitespace,
				this.sourceFileContentEndingIndex,
			);
		return functionCallKnownSegmentContentInitialWhitespaceSegmentsParser;
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
	): FunctionCallSegmentsParser {
		const functionCallKnownSegmentOpeningBracket =
			createFunctionCallKnownSegmentOpeningBracketConcreteSyntaxTreeNode(character, index);
		const functionCallKnownSegmentContentInitialWhitespace = createWhitespaceConcreteSyntaxTreeNode(
			this.functionCallKnownSegmentContentInitialWhitespaceSegments,
			{
				starting: this.functionCallKnownSegmentContentInitialWhitespaceSegmentsStartingIndex,
				ending: this.functionCallKnownSegmentContentInitialWhitespaceEndingIndex,
			},
		);
		const functionCallKnownSegmentContent =
			createFunctionCallKnownSegmentContentConcreteSyntaxTreeNode(
				functionCallKnownSegmentContentInitialWhitespace,
				this.functionCallKnownSegmentContentIdentifier,
				this.functionCallKnownSegmentContentFinalWhitespace,
				{
					starting: this.functionCallKnownSegmentContentInitialWhitespaceSegmentsStartingIndex,
					ending: this.functionCallKnownSegmentContentEndingIndex,
				},
			);
		const functionCallKnownSegment = createFunctionCallKnownSegmentConcreteSyntaxTreeNode(
			functionCallKnownSegmentOpeningBracket,
			functionCallKnownSegmentContent,
			this.functionCallKnownSegmentClosingBracket,
			{
				starting: index,
				ending: this.functionCallKnownSegmentEndingIndex,
			},
		);
		const functionCallKnownStartingSegments =
			createFunctionCallKnownStartingSegmentsConcreteSyntaxTreeNode(
				functionCallKnownSegment,
				this.functionCallKnownStartingSegmentsRestSegments,
				{
					starting: index,
					ending: this.functionCallSegmentsEndingIndex,
				},
			);
		const functionCallSegmentsParser = new FunctionCallSegmentsParser(
			index,
			functionCallKnownStartingSegments,
			this.functionCallSegmentsEndingIndex,
			this.functionCallEndingIndex,
			this.statementsRestStatements,
			this.statementsEndingIndex,
			this.blockContentFinalWhitespace,
			this.blockContentEndingIndex,
			this.blockClosingBracket,
			this.blockEndingIndex,
			this.blockStack,
			this.functionBodyEndingIndex,
			this.functionEndingIndex,
			this.functionsRestFunctions,
			this.functionsEndingIndex,
			this.sourceFileContentFinalWhitespace,
			this.sourceFileContentEndingIndex,
		);
		return functionCallSegmentsParser;
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
