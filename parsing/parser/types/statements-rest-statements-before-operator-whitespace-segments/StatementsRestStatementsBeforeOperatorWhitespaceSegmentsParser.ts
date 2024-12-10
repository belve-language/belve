import type {ClosingCurlyBracketCharacter} from "../../../../characters/closing-curly-bracket/ClosingCurlyBracketCharacter.ts";
import type {ClosingRoundBracketCharacter} from "../../../../characters/closing-round-bracket/ClosingRoundBracketCharacter.ts";
import type {ClosingSquareBracketCharacter} from "../../../../characters/closing-square-bracket/ClosingSquareBracketCharacter.ts";
import type {IdentifierCharacter} from "../../../../characters/identifier/IdentifierCharacter.ts";
import type {WhitespaceCharacter} from "../../../../characters/whitespace/WhitespaceCharacter.ts";
import type {Index} from "../../../../concrete-syntax-tree/index/Index.ts";
import type {BlockClosingBracketConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/block-closing-bracket/BlockClosingBracketConcreteSyntaxTreeNode.ts";
import {createBlockClosingBracketConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/block-closing-bracket/createBlockClosingBracketConcreteSyntaxTreeNode.ts";
import {createFunctionCallKnownSegmentClosingBracketConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/function-call-known-segment-closing-bracket/createFunctionCallKnownSegmentClosingBracketConcreteSyntaxTreeNode.ts";
import {createFunctionCallUnknownSegmentClosingBracketConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/function-call-unknown-segment-closing-bracket/createFunctionCallUnknownSegmentClosingBracketConcreteSyntaxTreeNode.ts";
import type {FunctionsSeparatedRestFunctionsConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/functions-separated-rest-functions/FunctionsSeparatedRestFunctionsConcreteSyntaxTreeNode.ts";
import type {FunctionsConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/functions/FunctionsConcreteSyntaxTreeNode.ts";
import {createIdentifierSegmentConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/identifier-segment/createIdentifierSegmentConcreteSyntaxTreeNode.ts";
import {createIdentifierSegmentsConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/identifier-segments/createIdentifierSegmentsConcreteSyntaxTreeNode.ts";
import type {OperatorConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/operator/OperatorConcreteSyntaxTreeNode.ts";
import {createStatementsRestStatementsConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/statements-rest-statements/createStatementsRestStatementsConcreteSyntaxTreeNode.ts";
import type {StatementsRestStatementsConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/statements-rest-statements/StatementsRestStatementsConcreteSyntaxTreeNode.ts";
import type {StatementsConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/statements/StatementsConcreteSyntaxTreeNode.ts";
import {createWhitespaceSegmentConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/whitespace-segment/createWhitespaceSegmentConcreteSyntaxTreeNode.ts";
import {createWhitespaceSegmentsConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/whitespace-segments/createWhitespaceSegmentsConcreteSyntaxTreeNode.ts";
import type {WhitespaceSegmentsConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/whitespace-segments/WhitespaceSegmentsConcreteSyntaxTreeNode.ts";
import {createWhitespaceConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/whitespace/createWhitespaceConcreteSyntaxTreeNode.ts";
import type {WhitespaceConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/whitespace/WhitespaceConcreteSyntaxTreeNode.ts";
import type {Parser} from "../../Parser.ts";
import {BlockContentParser} from "../block-content/BlockContentParser.ts";
import {FunctionCallKnownSegmentContentParser} from "../function-call-known-segment-content/FunctionCallKnownSegmentContentParser.ts";
import {FunctionCallUnknownSegmentContentParser} from "../function-call-unknown-segment-content/FunctionCallUnknownSegmentContentParser.ts";
import {FunctionCallWordSegmentIdentifierSegmentsParser} from "../function-call-word-segment-identifier-segments/FunctionCallWordSegmentIdentifierSegmentsParser.ts";
export class StatementsRestStatementsBeforeOperatorWhitespaceSegmentsParser implements Parser {
	private readonly statementsRestStatementsBeforeOperatorWhitespaceSegmentsStartingIndex: Index;
	private readonly statementsRestStatementsBeforeOperatorWhitespaceSegments: WhitespaceSegmentsConcreteSyntaxTreeNode;
	private readonly statementsRestStatementsBeforeOperatorWhitespaceSegmentsEndingIndex: Index;
	private readonly statementsRestStatementsOperator: OperatorConcreteSyntaxTreeNode;
	private readonly statementsRestStatementsAfterOperatorWhitespace: WhitespaceConcreteSyntaxTreeNode | null;
	private readonly statementsRestStatementsStatements: StatementsConcreteSyntaxTreeNode;
	private readonly statementsEndingIndex: Index;
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
		statementsRestStatementsBeforeOperatorWhitespaceSegmentsStartingIndex: Index,
		statementsRestStatementsBeforeOperatorWhitespaceSegments: WhitespaceSegmentsConcreteSyntaxTreeNode,
		statementsRestStatementsBeforeOperatorWhitespaceSegmentsEndingIndex: Index,
		statementsRestStatementsBeforeOperatorWhitespaceEndingIndex: Index,
		statementsRestStatementsOperator: OperatorConcreteSyntaxTreeNode,
		statementsRestStatementsAfterOperatorWhitespace: WhitespaceConcreteSyntaxTreeNode | null,
		statementsRestStatementsStatements: StatementsConcreteSyntaxTreeNode,
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
		this.statementsRestStatementsBeforeOperatorWhitespaceSegmentsStartingIndex =
			statementsRestStatementsBeforeOperatorWhitespaceSegmentsStartingIndex;
		this.statementsRestStatementsBeforeOperatorWhitespaceSegments =
			statementsRestStatementsBeforeOperatorWhitespaceSegments;
		this.statementsRestStatementsBeforeOperatorWhitespaceSegmentsEndingIndex =
			statementsRestStatementsBeforeOperatorWhitespaceSegmentsEndingIndex;
		this.statementsRestStatementsBeforeOperatorWhitespaceEndingIndex =
			statementsRestStatementsBeforeOperatorWhitespaceEndingIndex;
		this.statementsRestStatementsOperator = statementsRestStatementsOperator;
		this.statementsRestStatementsAfterOperatorWhitespace =
			statementsRestStatementsAfterOperatorWhitespace;
		this.statementsRestStatementsStatements = statementsRestStatementsStatements;
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
	private readonly statementsRestStatementsBeforeOperatorWhitespaceEndingIndex: Index;
	private readonly functionBodyEndingIndex: Index;
	private readonly functionEndingIndex: Index;
	private readonly functionsEndingIndex: Index;
	private readonly sourceFileContentEndingIndex: Index;
	public parseWhitespace(
		character: WhitespaceCharacter,
		index: Index,
	): StatementsRestStatementsBeforeOperatorWhitespaceSegmentsParser {
		const newStatementsRestStatementsBeforeOperatorWhitespaceSegmentsFirstSegment =
			createWhitespaceSegmentConcreteSyntaxTreeNode(character, index);
		const newStatementsRestStatementsBeforeOperatorWhitespaceSegments =
			createWhitespaceSegmentsConcreteSyntaxTreeNode(
				newStatementsRestStatementsBeforeOperatorWhitespaceSegmentsFirstSegment,
				this.statementsRestStatementsBeforeOperatorWhitespaceSegments,
				{
					starting: index,
					ending: this.statementsRestStatementsBeforeOperatorWhitespaceSegmentsEndingIndex,
				},
			);
		const statementsRestStatementsBeforeOperatorWhitespaceSegmentsParser =
			new StatementsRestStatementsBeforeOperatorWhitespaceSegmentsParser(
				index,
				newStatementsRestStatementsBeforeOperatorWhitespaceSegments,
				this.statementsRestStatementsBeforeOperatorWhitespaceSegmentsEndingIndex,
				this.statementsRestStatementsBeforeOperatorWhitespaceEndingIndex,
				this.statementsRestStatementsOperator,
				this.statementsRestStatementsAfterOperatorWhitespace,
				this.statementsRestStatementsStatements,
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
		return statementsRestStatementsBeforeOperatorWhitespaceSegmentsParser;
	}
	public parseOpeningSquareBracket(): never {
		throw new Error("Unexpected opening square bracket character.");
	}
	public parseClosingSquareBracket(
		character: ClosingSquareBracketCharacter,
		index: Index,
	): FunctionCallUnknownSegmentContentParser {
		const functionCallUnknownSegmentClosingBracket =
			createFunctionCallUnknownSegmentClosingBracketConcreteSyntaxTreeNode(character, index);
		const statementsRestStatementsBeforeOperatorWhitespace = createWhitespaceConcreteSyntaxTreeNode(
			this.statementsRestStatementsBeforeOperatorWhitespaceSegments,
			{
				starting: this.statementsRestStatementsBeforeOperatorWhitespaceSegmentsStartingIndex,
				ending: this.statementsRestStatementsBeforeOperatorWhitespaceEndingIndex,
			},
		);
		const statementsRestStatements = createStatementsRestStatementsConcreteSyntaxTreeNode(
			statementsRestStatementsBeforeOperatorWhitespace,
			this.statementsRestStatementsOperator,
			this.statementsRestStatementsAfterOperatorWhitespace,
			this.statementsRestStatementsStatements,
			{
				starting: this.statementsRestStatementsBeforeOperatorWhitespaceSegmentsStartingIndex,
				ending: this.statementsEndingIndex,
			},
		);
		const functionCallUnknownSegmentContentParser = new FunctionCallUnknownSegmentContentParser(
			functionCallUnknownSegmentClosingBracket,
			index,
			null,
			index,
			index,
			statementsRestStatements,
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
		return functionCallUnknownSegmentContentParser;
	}
	public parseOpeningCurlyBracket(): never {
		throw new Error("Unexpected opening curly bracket character.");
	}
	public parseClosingCurlyBracket(character: ClosingCurlyBracketCharacter, index: Index) {
		const blockClosingBracket = createBlockClosingBracketConcreteSyntaxTreeNode(character, index);
		const statementsRestStatementsBeforeOperatorWhitespace = createWhitespaceConcreteSyntaxTreeNode(
			this.statementsRestStatementsBeforeOperatorWhitespaceSegments,
			{
				starting: this.statementsRestStatementsBeforeOperatorWhitespaceSegmentsStartingIndex,
				ending: this.statementsRestStatementsBeforeOperatorWhitespaceEndingIndex,
			},
		);
		const statementsRestStatements = createStatementsRestStatementsConcreteSyntaxTreeNode(
			statementsRestStatementsBeforeOperatorWhitespace,
			this.statementsRestStatementsOperator,
			this.statementsRestStatementsAfterOperatorWhitespace,
			this.statementsRestStatementsStatements,
			{
				starting: this.statementsRestStatementsBeforeOperatorWhitespaceSegmentsStartingIndex,
				ending: this.statementsEndingIndex,
			},
		);
		const newBlockStack = [
			[
				statementsRestStatements,
				this.statementsEndingIndex,
				this.blockContentFinalWhitespace,
				this.blockContentEndingIndex,
				this.blockClosingBracket,
				this.blockEndingIndex,
			],
			...this.blockStack,
		] as const satisfies readonly (readonly [
			statementsRestStatements: StatementsRestStatementsConcreteSyntaxTreeNode | null,
			statementsEndingIndex: Index,
			finalWhitespace: WhitespaceConcreteSyntaxTreeNode | null,
			contentEndingIndex: Index,
			closingBracket: BlockClosingBracketConcreteSyntaxTreeNode,
			endingIndex: Index,
		])[];
		const blockContentParser = new BlockContentParser(
			blockClosingBracket,
			index,
			newBlockStack,
			this.functionBodyEndingIndex,
			this.functionEndingIndex,
			this.functionsRestFunctions,
			this.functionsEndingIndex,
			this.sourceFileContentFinalWhitespace,
			this.sourceFileContentEndingIndex,
		);
		return blockContentParser;
	}
	public parseOpeningRoundBracket(): never {
		throw new Error("Unexpected opening round bracket character.");
	}
	public parseClosingRoundBracket(
		character: ClosingRoundBracketCharacter,
		index: Index,
	): FunctionCallKnownSegmentContentParser {
		const functionCallKnownSegmentClosingBracket =
			createFunctionCallKnownSegmentClosingBracketConcreteSyntaxTreeNode(character, index);
		const statementsRestStatements: StatementsRestStatementsConcreteSyntaxTreeNode =
			createStatementsRestStatementsConcreteSyntaxTreeNode(
				null,
				this.statementsRestStatementsOperator,
				this.statementsRestStatementsAfterOperatorWhitespace,
				this.statementsRestStatementsStatements,
				{
					starting: this.statementsRestStatementsBeforeOperatorWhitespaceSegmentsStartingIndex,
					ending: this.statementsEndingIndex,
				},
			);
		const functionCallKnownSegmentContentParser = new FunctionCallKnownSegmentContentParser(
			functionCallKnownSegmentClosingBracket,
			index,
			null,
			index,
			index,
			statementsRestStatements,
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
		return functionCallKnownSegmentContentParser;
	}
	public parseIdentifier(
		character: IdentifierCharacter,
		index: Index,
	): FunctionCallWordSegmentIdentifierSegmentsParser {
		const functionCallWordSegmentIdentifierSegmentsFirstSegment =
			createIdentifierSegmentConcreteSyntaxTreeNode(character, index);
		const functionCallWordSegmentIdentifierSegments =
			createIdentifierSegmentsConcreteSyntaxTreeNode(
				functionCallWordSegmentIdentifierSegmentsFirstSegment,
				null,
				{
					starting: index,
					ending: index,
				},
			);
		const statementsRestStatementsBeforeOperatorWhitespace = createWhitespaceConcreteSyntaxTreeNode(
			this.statementsRestStatementsBeforeOperatorWhitespaceSegments,
			{
				starting: this.statementsRestStatementsBeforeOperatorWhitespaceSegmentsStartingIndex,
				ending: this.statementsRestStatementsBeforeOperatorWhitespaceEndingIndex,
			},
		);
		const statementsRestStatements = createStatementsRestStatementsConcreteSyntaxTreeNode(
			statementsRestStatementsBeforeOperatorWhitespace,
			this.statementsRestStatementsOperator,
			this.statementsRestStatementsAfterOperatorWhitespace,
			this.statementsRestStatementsStatements,
			{
				starting: this.statementsRestStatementsBeforeOperatorWhitespaceSegmentsStartingIndex,
				ending: this.statementsEndingIndex,
			},
		);
		const functionCallWordSegmentIdentifierSegmentsParser =
			new FunctionCallWordSegmentIdentifierSegmentsParser(
				index,
				functionCallWordSegmentIdentifierSegments,
				index,
				index,
				index,
				null,
				index,
				index,
				statementsRestStatements,
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
		return functionCallWordSegmentIdentifierSegmentsParser;
	}
	public parseOperator(): never {
		throw new Error("Unexpected operator character");
	}
	public finalize(): never {
		throw new Error("Unexpected end of input.");
	}
}
