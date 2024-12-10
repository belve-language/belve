import type {IdentifierCharacter} from "../../../../characters/identifier/IdentifierCharacter.ts";
import type {WhitespaceCharacter} from "../../../../characters/whitespace/WhitespaceCharacter.ts";
import {createIdentifierSegmentsConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/identifier-segments/createIdentifierSegmentsConcreteSyntaxTreeNode.ts";
import {createWhitespaceSegmentsConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/whitespace-segments/createWhitespaceSegmentsConcreteSyntaxTreeNode.ts";
import type {WhitespaceSegmentsConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/whitespace-segments/WhitespaceSegmentsConcreteSyntaxTreeNode.ts";
import type {Parser} from "../../Parser.ts";
import type {FunctionCallKnownStartingSegmentsConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/function-call-known-starting-segments/FunctionCallKnownStartingSegmentsConcreteSyntaxTreeNode.ts";
import type {FunctionCallSegmentsSeparatedRestSegmentsConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/function-call-segments-separated-rest-segments/FunctionCallSegmentsSeparatedRestSegmentsConcreteSyntaxTreeNode.ts";
import type {FunctionCallUnknownStartingSegmentsConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/function-call-unknown-starting-segments/FunctionCallUnknownStartingSegmentsConcreteSyntaxTreeNode.ts";
import type {FunctionCallWordStartingSegmentsConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/function-call-word-starting-segments/FunctionCallWordStartingSegmentsConcreteSyntaxTreeNode.ts";
import type {StatementsRestStatementsConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/statements-rest-statements/StatementsRestStatementsConcreteSyntaxTreeNode.ts";
import type {FunctionsSeparatedRestFunctionsConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/functions-separated-rest-functions/FunctionsSeparatedRestFunctionsConcreteSyntaxTreeNode.ts";
import type {FunctionsConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/functions/FunctionsConcreteSyntaxTreeNode.ts";
import type {FunctionCallUnknownSegmentClosingBracketConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/function-call-unknown-segment-closing-bracket/FunctionCallUnknownSegmentClosingBracketConcreteSyntaxTreeNode.ts";
import type {Index} from "../../../../concrete-syntax-tree/index/Index.ts";
import type {BlockClosingBracketConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/block-closing-bracket/BlockClosingBracketConcreteSyntaxTreeNode.ts";
import type {WhitespaceConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/whitespace/WhitespaceConcreteSyntaxTreeNode.ts";
import {createWhitespaceSegmentConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/whitespace-segment/createWhitespaceSegmentConcreteSyntaxTreeNode.ts";
import {createIdentifierSegmentConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/identifier-segment/createIdentifierSegmentConcreteSyntaxTreeNode.ts";
import {FunctionCallUnknownSegmentContentIdentifierSegmentsParser} from "../function-call-unknown-segment-content-identifier-segments/FunctionCallUnknownSegmentContentIdentifierSegmentsParser.ts";
import {createWhitespaceConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/whitespace/createWhitespaceConcreteSyntaxTreeNode.ts";
export class FunctionCallUnknownSegmentContentFinalWhitespaceSegmentsParser implements Parser {
	private readonly functionCallUnknownSegmentContentFinalWhitespaceSegments: WhitespaceSegmentsConcreteSyntaxTreeNode;
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
		functionCallUnknownSegmentContentFinalWhitespaceSegmentsStartingIndex: Index,
		functionCallUnknownSegmentContentFinalWhitespaceSegments: WhitespaceSegmentsConcreteSyntaxTreeNode,
		functionCallUnknownSegmentContentFinalWhitespaceSegmentsEndingIndex: Index,
		functionCallUnknownSegmentContentFinalWhitespaceEndingIndex: Index,
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
		this.functionCallUnknownSegmentContentFinalWhitespaceSegmentsStartingIndex =
			functionCallUnknownSegmentContentFinalWhitespaceSegmentsStartingIndex;
		this.functionCallUnknownSegmentContentFinalWhitespaceSegments =
			functionCallUnknownSegmentContentFinalWhitespaceSegments;
		this.functionCallUnknownSegmentContentFinalWhitespaceSegmentsEndingIndex =
			functionCallUnknownSegmentContentFinalWhitespaceSegmentsEndingIndex;
		this.functionCallUnknownSegmentContentFinalWhitespaceEndingIndex =
			functionCallUnknownSegmentContentFinalWhitespaceEndingIndex;
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
		this.functionBodyEndingIndex = functionBodyEndingIndex;
		this.functionEndingIndex = functionEndingIndex;
		this.functionsRestFunctions = functionsRestFunctions;
		this.functionsEndingIndex = functionsEndingIndex;
		this.sourceFileContentFinalWhitespace = sourceFileContentFinalWhitespace;
		this.sourceFileContentEndingIndex = sourceFileContentEndingIndex;
	}
	private readonly functionCallUnknownSegmentContentEndingIndex: Index;
	private readonly functionCallUnknownSegmentContentFinalWhitespaceSegmentsEndingIndex: Index;
	private readonly functionCallUnknownSegmentEndingIndex: Index;
	private readonly functionCallSegmentsEndingIndex: Index;
	private readonly functionCallEndingIndex: Index;
	private readonly statementsEndingIndex: Index;
	private readonly functionBodyEndingIndex: Index;
	private readonly functionEndingIndex: Index;
	private readonly functionsEndingIndex: Index;
	private readonly sourceFileContentEndingIndex: Index;
	private readonly functionCallUnknownSegmentContentFinalWhitespaceSegmentsStartingIndex: Index;
	private readonly functionCallUnknownSegmentContentFinalWhitespaceEndingIndex: Index;
	public parseWhitespace(
		character: WhitespaceCharacter,
		index: Index,
	): FunctionCallUnknownSegmentContentFinalWhitespaceSegmentsParser {
		const newFunctionCallUnknownSegmentContentFinalWhitespaceSegmentsFirstSegment =
			createWhitespaceSegmentConcreteSyntaxTreeNode(character, index);
		const newFunctionCallUnknownSegmentContentFinalWhitespaceSegments: WhitespaceSegmentsConcreteSyntaxTreeNode =
			createWhitespaceSegmentsConcreteSyntaxTreeNode(
				newFunctionCallUnknownSegmentContentFinalWhitespaceSegmentsFirstSegment,
				this.functionCallUnknownSegmentContentFinalWhitespaceSegments,
				{
					starting: index,
					ending: this.functionCallUnknownSegmentContentFinalWhitespaceEndingIndex,
				},
			);
		const functionCallUnknownSegmentContentFinalWhitespaceSegmentsParser =
			new FunctionCallUnknownSegmentContentFinalWhitespaceSegmentsParser(
				index,
				newFunctionCallUnknownSegmentContentFinalWhitespaceSegments,
				this.functionCallUnknownSegmentContentFinalWhitespaceSegmentsEndingIndex,
				this.functionCallUnknownSegmentContentFinalWhitespaceEndingIndex,
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
		return functionCallUnknownSegmentContentFinalWhitespaceSegmentsParser;
	}
	public parseOpeningSquareBracket(): never {
		throw new Error("Opening square bracket not allowed in unknown function call segment.");
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
		const functionCallUnknownSegmentContentIdentifierSegmentsFirstSegment =
			createIdentifierSegmentConcreteSyntaxTreeNode(character, index);
		const functionCallUnknownSegmentContentIdentifierSegments =
			createIdentifierSegmentsConcreteSyntaxTreeNode(
				functionCallUnknownSegmentContentIdentifierSegmentsFirstSegment,
				null,
				{
					starting: index,
					ending: index,
				},
			);
		const functionCallUnknownSegmentContentFinalWhitespace = createWhitespaceConcreteSyntaxTreeNode(
			this.functionCallUnknownSegmentContentFinalWhitespaceSegments,
			{
				starting: this.functionCallUnknownSegmentContentFinalWhitespaceSegmentsStartingIndex,
				ending: this.functionCallUnknownSegmentContentFinalWhitespaceEndingIndex,
			},
		);
		const functionCallUnknownSegmentContentIdentifierSegmentsParser =
			new FunctionCallUnknownSegmentContentIdentifierSegmentsParser(
				index,
				functionCallUnknownSegmentContentIdentifierSegments,
				index,
				index,
				functionCallUnknownSegmentContentFinalWhitespace,
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
		throw new Error("Operator not allowed in unknown function call segment.");
	}
	public finalize(): never {
		throw new Error("Unexpected end of input in unknown function call segment.");
	}
}
