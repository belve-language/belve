import type {IdentifierCharacter} from "../../../../characters/identifier/IdentifierCharacter.ts";
import type {OpeningSquareBracketCharacter} from "../../../../characters/opening-square-bracket/OpeningSquareBracketCharacter.ts";
import {createIdentifierSegmentsConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/identifier-segments/createIdentifierSegmentsConcreteSyntaxTreeNode.ts";
import type {IdentifierSegmentsConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/identifier-segments/IdentifierSegmentsConcreteSyntaxTreeNode.ts";
import type {Parser} from "../../Parser.ts";
import {createFunctionCallUnknownSegmentContentConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/function-call-unknown-segment-content/createFunctionCallUnknownSegmentContentConcreteSyntaxTreeNode.ts";
import {FunctionCallSegmentsParser} from "../function-call-segments-parser/FunctionCallSegmentsParser.ts";
import type {FunctionCallUnknownStartingSegmentsConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/function-call-unknown-starting-segments/FunctionCallUnknownStartingSegmentsConcreteSyntaxTreeNode.ts";
import {createFunctionCallUnknownStartingSegmentsConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/function-call-unknown-starting-segments/createFunctionCallUnknownStartingSegmentsConcreteSyntaxTreeNode.ts";
import {createFunctionCallUnknownSegmentConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/function-call-unknown-segment/createFunctionCallUnknownSegmentConcreteSyntaxTreeNode.ts";
import type {FunctionCallKnownStartingSegmentsConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/function-call-known-starting-segments/FunctionCallKnownStartingSegmentsConcreteSyntaxTreeNode.ts";
import type {FunctionCallWordStartingSegmentsConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/function-call-word-starting-segments/FunctionCallWordStartingSegmentsConcreteSyntaxTreeNode.ts";
import type {FunctionCallSegmentsSeparatedRestSegmentsConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/function-call-segments-separated-rest-segments/FunctionCallSegmentsSeparatedRestSegmentsConcreteSyntaxTreeNode.ts";
import {createWhitespaceSegmentsConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/whitespace-segments/createWhitespaceSegmentsConcreteSyntaxTreeNode.ts";
import type {StatementsRestStatementsConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/statements-rest-statements/StatementsRestStatementsConcreteSyntaxTreeNode.ts";
import type {FunctionsSeparatedRestFunctionsConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/functions-separated-rest-functions/FunctionsSeparatedRestFunctionsConcreteSyntaxTreeNode.ts";
import type {FunctionsConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/functions/FunctionsConcreteSyntaxTreeNode.ts";
import type {Index} from "../../../../concrete-syntax-tree/index/Index.ts";
import type {FunctionCallUnknownSegmentClosingBracketConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/function-call-unknown-segment-closing-bracket/FunctionCallUnknownSegmentClosingBracketConcreteSyntaxTreeNode.ts";
import type {WhitespaceConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/whitespace/WhitespaceConcreteSyntaxTreeNode.ts";
import type {WhitespaceCharacter} from "../../../../characters/whitespace/WhitespaceCharacter.ts";
import {createWhitespaceSegmentConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/whitespace-segment/createWhitespaceSegmentConcreteSyntaxTreeNode.ts";
import {FunctionCallUnknownSegmentContentInitialWhitespaceSegmentsParser} from "../function-call-unknown-segment-content-initial-whitespace-segments/FunctionCallUnknownSegmentContentInitialWhitespaceSegmentsParser.ts";
import type {BlockClosingBracketConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/block-closing-bracket/BlockClosingBracketConcreteSyntaxTreeNode.ts";
import {createIdentifierConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/identifier/createIdentifierConcreteSyntaxTreeNode.ts";
import {createFunctionCallUnknownSegmentOpeningBracketConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/function-call-unknown-segment-opening-bracket/createFunctionCallUnknownSegmentOpeningBracketConcreteSyntaxTreeNode.ts";
import {createIdentifierSegmentConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/identifier-segment/createIdentifierSegmentConcreteSyntaxTreeNode.ts";
export class FunctionCallUnknownSegmentContentIdentifierSegmentsParser implements Parser {
	private readonly functionCallUnknownSegmentContentIdentifierSegments: IdentifierSegmentsConcreteSyntaxTreeNode;
	private readonly functionCallUnknownSegmentContentFinalWhitespace: WhitespaceConcreteSyntaxTreeNode | null;
	private readonly functionCallUnknownSegmentClosingBracket: FunctionCallUnknownSegmentClosingBracketConcreteSyntaxTreeNode;
	private readonly functionCallUnknownStartingSegmentsRestSegments:
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
		functionCallUnknownSegmentContentIdentifierSegmentsStartingIndex: Index,
		functionCallUnknownSegmentContentIdentifierSegments: IdentifierSegmentsConcreteSyntaxTreeNode,
		functionCallUnknownSegmentContentIdentifierSegmentsEndingIndex: Index,
		functionCallUnknownSegmentContentIdentifierEndingIndex: Index,
		functionCallUnknownSegmentContentFinalWhitespace: WhitespaceConcreteSyntaxTreeNode | null,
		functionCallUnknownSegmentContentEndingIndex: Index,
		functionCallUnknownSegmentClosingBracket: FunctionCallUnknownSegmentClosingBracketConcreteSyntaxTreeNode,
		functionCallUnknownSegmentEndingIndex: Index,
		functionCallUnknownStartingSegmentsRestSegments:
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
		this.functionCallUnknownSegmentContentIdentifierSegmentsStartingIndex =
			functionCallUnknownSegmentContentIdentifierSegmentsStartingIndex;
		this.functionCallUnknownSegmentContentIdentifierSegments =
			functionCallUnknownSegmentContentIdentifierSegments;
		this.functionCallUnknownSegmentContentIdentifierSegmentsEndingIndex =
			functionCallUnknownSegmentContentIdentifierSegmentsEndingIndex;
		this.functionCallUnknownSegmentContentIdentifierEndingIndex =
			functionCallUnknownSegmentContentIdentifierEndingIndex;
		this.functionCallUnknownSegmentContentFinalWhitespace =
			functionCallUnknownSegmentContentFinalWhitespace;
		this.functionCallUnknownSegmentContentEndingIndex =
			functionCallUnknownSegmentContentEndingIndex;
		this.functionCallUnknownSegmentClosingBracket = functionCallUnknownSegmentClosingBracket;
		this.functionCallUnknownSegmentEndingIndex = functionCallUnknownSegmentEndingIndex;
		this.functionCallUnknownStartingSegmentsRestSegments =
			functionCallUnknownStartingSegmentsRestSegments;
		this.functionCallSegmentsEndingIndex = functionCallSegmentsEndingIndex;
		this.functionCallEndingIndex = functionCallEndingIndex;
		this.statementsRestStatements = statementsRestStatements;
		this.statementsEndingIndex = statementsEndingIndex;
		this.blockContentFinalWhitespace = blockContentFinalWhitespace;
		this.blockContentEndingIndex = blockContentEndingIndex;
		this.blockClosingBracket = blockClosingBracket;
		this.blockEndingIndex = blockEndingIndex;
		this.blockStack = blockStack;
		this.functionsRestFunctions = functionsRestFunctions;
		this.functionBodyEndingIndex = functionBodyEndingIndex;
		this.functionEndingIndex = functionEndingIndex;
		this.functionsEndingIndex = functionsEndingIndex;
		this.sourceFileContentFinalWhitespace = sourceFileContentFinalWhitespace;
		this.sourceFileContentEndingIndex = sourceFileContentEndingIndex;
	}
	private readonly functionCallUnknownSegmentContentIdentifierSegmentsStartingIndex: Index;
	private readonly functionCallUnknownSegmentContentIdentifierSegmentsEndingIndex: Index;
	private readonly functionCallUnknownSegmentContentIdentifierEndingIndex: Index;
	private readonly functionCallUnknownSegmentContentEndingIndex: Index;
	private readonly functionCallUnknownSegmentEndingIndex: Index;
	private readonly functionCallSegmentsEndingIndex: Index;
	private readonly functionCallEndingIndex: Index;
	private readonly statementsEndingIndex: Index;
	private readonly functionBodyEndingIndex: Index;
	private readonly functionEndingIndex: Index;
	private readonly functionsEndingIndex: Index;
	private readonly sourceFileContentEndingIndex: Index;
	public parseWhitespace(
		character: WhitespaceCharacter,
		index: Index,
	): FunctionCallUnknownSegmentContentInitialWhitespaceSegmentsParser {
		const functionCallUnknownSegmentContentInitialWhitespaceSegmentsFirstSegment =
			createWhitespaceSegmentConcreteSyntaxTreeNode(character, index);
		const functionCallUnknownSegmentContentInitialWhitespaceSegments =
			createWhitespaceSegmentsConcreteSyntaxTreeNode(
				functionCallUnknownSegmentContentInitialWhitespaceSegmentsFirstSegment,
				null,
				{
					starting: index,
					ending: index,
				},
			);
		const functionCallUnknownSegmentContentIdentifier = createIdentifierConcreteSyntaxTreeNode(
			this.functionCallUnknownSegmentContentIdentifierSegments,
			{
				starting: this.functionCallUnknownSegmentContentIdentifierSegmentsStartingIndex,
				ending: this.functionCallUnknownSegmentContentIdentifierEndingIndex,
			},
		);
		const functionCallUnknownSegmentContentInitialWhitespaceSegmentsParser =
			new FunctionCallUnknownSegmentContentInitialWhitespaceSegmentsParser(
				index,
				functionCallUnknownSegmentContentInitialWhitespaceSegments,
				index,
				index,
				functionCallUnknownSegmentContentIdentifier,
				this.functionCallUnknownSegmentContentFinalWhitespace,
				this.functionCallUnknownSegmentContentEndingIndex,
				this.functionCallUnknownSegmentClosingBracket,
				this.functionCallUnknownSegmentEndingIndex,
				this.functionCallUnknownStartingSegmentsRestSegments,
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
		return functionCallUnknownSegmentContentInitialWhitespaceSegmentsParser;
	}
	public parseOpeningSquareBracket(
		character: OpeningSquareBracketCharacter,
		index: Index,
	): FunctionCallSegmentsParser {
		const functionCallUnknownSegmentOpeningBracket =
			createFunctionCallUnknownSegmentOpeningBracketConcreteSyntaxTreeNode(character, index);
		const functionCallUnknownSegmentContentIdentifier = createIdentifierConcreteSyntaxTreeNode(
			this.functionCallUnknownSegmentContentIdentifierSegments,
			{
				starting: this.functionCallUnknownSegmentContentIdentifierSegmentsStartingIndex,
				ending: this.functionCallUnknownSegmentContentIdentifierEndingIndex,
			},
		);
		const functionCallUnknownSegmentContent =
			createFunctionCallUnknownSegmentContentConcreteSyntaxTreeNode(
				null,
				functionCallUnknownSegmentContentIdentifier,
				this.functionCallUnknownSegmentContentFinalWhitespace,
				{
					starting: this.functionCallUnknownSegmentContentIdentifierSegmentsStartingIndex,
					ending: this.functionCallUnknownSegmentContentEndingIndex,
				},
			);
		const functionCallUnknownSegment = createFunctionCallUnknownSegmentConcreteSyntaxTreeNode(
			functionCallUnknownSegmentOpeningBracket,
			functionCallUnknownSegmentContent,
			this.functionCallUnknownSegmentClosingBracket,
			{
				starting: index,
				ending: this.functionCallUnknownSegmentEndingIndex,
			},
		);
		const functionCallUnknownStartingSegments =
			createFunctionCallUnknownStartingSegmentsConcreteSyntaxTreeNode(
				functionCallUnknownSegment,
				this.functionCallUnknownStartingSegmentsRestSegments,
				{
					starting: index,
					ending: this.functionCallSegmentsEndingIndex,
				},
			);
		const functionCallSegmentsParser = new FunctionCallSegmentsParser(
			index,
			functionCallUnknownStartingSegments,
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
	public parseClosingSquareBracket(): never {
		throw new Error("Closing square bracket not allowed in unknown function call segment.");
	}
	public parseOpeningCurlyBracket(): never {
		throw new Error("Opening curly bracket not allowed in unknown function call segment.");
	}
	public parseClosingCurlyBracket(): never {
		throw new Error("Closing curly bracket not allowed in unknown function call segment.");
	}
	public parseOpeningRoundBracket(): never {
		throw new Error("Opening round bracket not allowed in unknown function call segment.");
	}
	public parseClosingRoundBracket(): never {
		throw new Error("Closing round bracket not allowed in unknown function call segment.");
	}
	public parseIdentifier(
		character: IdentifierCharacter,
		index: Index,
	): FunctionCallUnknownSegmentContentIdentifierSegmentsParser {
		const newFunctionCallUnknownSegmentContentIdentifierSegmentsFirstSegment =
			createIdentifierSegmentConcreteSyntaxTreeNode(character, index);
		const newFunctionCallUnknownSegmentContentIdentifierSegments =
			createIdentifierSegmentsConcreteSyntaxTreeNode(
				newFunctionCallUnknownSegmentContentIdentifierSegmentsFirstSegment,
				this.functionCallUnknownSegmentContentIdentifierSegments,
				{
					starting: index,
					ending: this.functionCallUnknownSegmentContentIdentifierSegmentsEndingIndex,
				},
			);
		const functionCallUnknownSegmentContentIdentifierSegmentsParser =
			new FunctionCallUnknownSegmentContentIdentifierSegmentsParser(
				index,
				newFunctionCallUnknownSegmentContentIdentifierSegments,
				this.functionCallUnknownSegmentContentIdentifierSegmentsEndingIndex,
				this.functionCallUnknownSegmentContentIdentifierEndingIndex,
				this.functionCallUnknownSegmentContentFinalWhitespace,
				this.functionCallUnknownSegmentContentEndingIndex,
				this.functionCallUnknownSegmentClosingBracket,
				this.functionCallUnknownSegmentEndingIndex,
				this.functionCallUnknownStartingSegmentsRestSegments,
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
		return functionCallUnknownSegmentContentIdentifierSegmentsParser;
	}
	public parseOperator(): never {
		throw new Error("Unexpected operator in unknown function call segment.");
	}
	public finalize(): never {
		throw new Error("Unexpected end of input in unknown function call segment.");
	}
}
