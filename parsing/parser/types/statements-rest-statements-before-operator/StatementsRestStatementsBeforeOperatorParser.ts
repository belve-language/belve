import type {ClosingCurlyBracketCharacter} from "../../../../characters/closing-curly-bracket/ClosingCurlyBracketCharacter.ts";
import type {ClosingRoundBracketCharacter} from "../../../../characters/closing-round-bracket/ClosingRoundBracketCharacter.ts";
import type {ClosingSquareBracketCharacter} from "../../../../characters/closing-square-bracket/ClosingSquareBracketCharacter.ts";
import type {IdentifierCharacter} from "../../../../characters/identifier/IdentifierCharacter.ts";
import type {WhitespaceCharacter} from "../../../../characters/whitespace/WhitespaceCharacter.ts";
import {createIdentifierSegmentsConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/identifier-segments/createIdentifierSegmentsConcreteSyntaxTreeNode.ts";
import type {Parser} from "../../Parser.ts";
import {FunctionCallKnownSegmentContentParser} from "../function-call-known-segment-content/FunctionCallKnownSegmentContentParser.ts";
import {BlockContentParser} from "../block-content/BlockContentParser.ts";
import {createWhitespaceSegmentsConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/whitespace-segments/createWhitespaceSegmentsConcreteSyntaxTreeNode.ts";
import type {StatementsConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/statements/StatementsConcreteSyntaxTreeNode.ts";
import {FunctionCallUnknownSegmentContentParser} from "../function-call-unknown-segment-content/FunctionCallUnknownSegmentContentParser.ts";
import type {StatementsRestStatementsConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/statements-rest-statements/StatementsRestStatementsConcreteSyntaxTreeNode.ts";
import {createStatementsRestStatementsConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/statements-rest-statements/createStatementsRestStatementsConcreteSyntaxTreeNode.ts";
import type {FunctionsSeparatedRestFunctionsConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/functions-separated-rest-functions/FunctionsSeparatedRestFunctionsConcreteSyntaxTreeNode.ts";
import type {FunctionsConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/functions/FunctionsConcreteSyntaxTreeNode.ts";
import type {Index} from "../../../../concrete-syntax-tree/index/Index.ts";
import {createIdentifierSegmentConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/identifier-segment/createIdentifierSegmentConcreteSyntaxTreeNode.ts";
import type {WhitespaceConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/whitespace/WhitespaceConcreteSyntaxTreeNode.ts";
import {createWhitespaceSegmentConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/whitespace-segment/createWhitespaceSegmentConcreteSyntaxTreeNode.ts";
import {StatementsRestStatementsBeforeOperatorWhitespaceSegmentsParser} from "../statements-rest-statements-before-operator-whitespace-segments/StatementsRestStatementsBeforeOperatorWhitespaceSegmentsParser.ts";
import {createBlockClosingBracketConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/block-closing-bracket/createBlockClosingBracketConcreteSyntaxTreeNode.ts";
import {createFunctionCallUnknownSegmentClosingBracketConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/function-call-unknown-segment-closing-bracket/createFunctionCallUnknownSegmentClosingBracketConcreteSyntaxTreeNode.ts";
import {createFunctionCallKnownSegmentClosingBracketConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/function-call-known-segment-closing-bracket/createFunctionCallKnownSegmentClosingBracketConcreteSyntaxTreeNode.ts";
import type {OperatorConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/operator/OperatorConcreteSyntaxTreeNode.ts";
import type {BlockClosingBracketConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/block-closing-bracket/BlockClosingBracketConcreteSyntaxTreeNode.ts";
import {FunctionCallWordSegmentIdentifierSegmentsParser} from "../function-call-word-segment-identifier-segments/FunctionCallWordSegmentIdentifierSegmentsParser.ts";
export class StatementsRestStatementsBeforeOperatorParser implements Parser {
	private readonly statementsRestStatementsOperator: OperatorConcreteSyntaxTreeNode;
	private readonly statementsRestStatementsAfterOperatorWhitespace: WhitespaceConcreteSyntaxTreeNode | null;
	private readonly statementsRestStatementsStatements: StatementsConcreteSyntaxTreeNode;
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
		statementsRestStatementsOperatorIndex: Index,
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
		this.statementsRestStatementsOperatorIndex = statementsRestStatementsOperatorIndex;
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
	private readonly functionBodyEndingIndex: Index;
	private readonly functionEndingIndex: Index;
	private readonly statementsRestStatementsOperatorIndex: Index;
	private readonly statementsEndingIndex: Index;
	private readonly functionsEndingIndex: Index;
	private readonly sourceFileContentEndingIndex: Index;
	public parseWhitespace(character: WhitespaceCharacter, index: Index) {
		const statementsRestStatementsBeforeOperatorWhitespaceSegmentsFirstSegment =
			createWhitespaceSegmentConcreteSyntaxTreeNode(character, index);
		const statementsRestStatementsBeforeOperatorWhitespaceSegments =
			createWhitespaceSegmentsConcreteSyntaxTreeNode(
				statementsRestStatementsBeforeOperatorWhitespaceSegmentsFirstSegment,
				null,
				{
					starting: index,
					ending: index,
				},
			);
		const statementsRestStatementsBeforeOperatorWhitespaceSegmentsParser =
			new StatementsRestStatementsBeforeOperatorWhitespaceSegmentsParser(
				index,
				statementsRestStatementsBeforeOperatorWhitespaceSegments,
				index,
				index,
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
		throw new Error("Method not implemented.");
	}
	public parseClosingSquareBracket(
		character: ClosingSquareBracketCharacter,
		index: Index,
	): FunctionCallUnknownSegmentContentParser {
		const functionCallUnknownSegmentClosingBracket =
			createFunctionCallUnknownSegmentClosingBracketConcreteSyntaxTreeNode(character, index);
		const statementsRestStatements = createStatementsRestStatementsConcreteSyntaxTreeNode(
			null,
			this.statementsRestStatementsOperator,
			this.statementsRestStatementsAfterOperatorWhitespace,
			this.statementsRestStatementsStatements,
			{
				starting: this.statementsRestStatementsOperatorIndex,
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
		throw new Error("Method not implemented.");
	}
	public parseClosingCurlyBracket(character: ClosingCurlyBracketCharacter, index: Index) {
		const blockClosingBracket = createBlockClosingBracketConcreteSyntaxTreeNode(character, index);
		const statementsRestStatements = createStatementsRestStatementsConcreteSyntaxTreeNode(
			null,
			this.statementsRestStatementsOperator,
			this.statementsRestStatementsAfterOperatorWhitespace,
			this.statementsRestStatementsStatements,
			{
				starting: this.statementsRestStatementsOperatorIndex,
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
		throw new Error("Method not implemented.");
	}
	public parseClosingRoundBracket(
		character: ClosingRoundBracketCharacter,
		index: Index,
	): FunctionCallKnownSegmentContentParser {
		const functionCallKnownSegmentClosingBracket =
			createFunctionCallKnownSegmentClosingBracketConcreteSyntaxTreeNode(character, index);
		const statementsRestStatements = createStatementsRestStatementsConcreteSyntaxTreeNode(
			null,
			this.statementsRestStatementsOperator,
			this.statementsRestStatementsAfterOperatorWhitespace,
			this.statementsRestStatementsStatements,
			{
				starting: this.statementsRestStatementsOperatorIndex,
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
		const functionCallWordSegmentIdentifierSegmentsFirstIdentifier =
			createIdentifierSegmentConcreteSyntaxTreeNode(character, index);
		const functionCallWordSegmentIdentifierSegments =
			createIdentifierSegmentsConcreteSyntaxTreeNode(
				functionCallWordSegmentIdentifierSegmentsFirstIdentifier,
				null,
				{
					starting: index,
					ending: index,
				},
			);
		const statementsRestStatements = createStatementsRestStatementsConcreteSyntaxTreeNode(
			null,
			this.statementsRestStatementsOperator,
			this.statementsRestStatementsAfterOperatorWhitespace,
			this.statementsRestStatementsStatements,
			{
				starting: this.statementsRestStatementsOperatorIndex,
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
		throw new Error("Method not implemented.");
	}
	public finalize(): never {
		throw new Error("Method not implemented.");
	}
}
