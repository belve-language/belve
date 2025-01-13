import type {ClosingCurlyBracketCharacter} from "../../../../characters/closing-curly-bracket/ClosingCurlyBracketCharacter.ts";
import type {ClosingRoundBracketCharacter} from "../../../../characters/closing-round-bracket/ClosingRoundBracketCharacter.ts";
import type {ClosingSquareBracketCharacter} from "../../../../characters/closing-square-bracket/ClosingSquareBracketCharacter.ts";
import type {IdentifierCharacter} from "../../../../characters/identifier/IdentifierCharacter.ts";
import type {OpeningCurlyBracketCharacter} from "../../../../characters/opening-curly-bracket/OpeningCurlyBracketCharacter.ts";
import type {WhitespaceCharacter} from "../../../../characters/whitespace/WhitespaceCharacter.ts";
import type {Index} from "../../../../concrete-syntax-tree/index/Index.ts";
import type {BlockClosingBracketConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/block-closing-bracket/BlockClosingBracketConcreteSyntaxTreeNode.ts";
import {createBlockClosingBracketConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/block-closing-bracket/createBlockClosingBracketConcreteSyntaxTreeNode.ts";
import {createBlockOpeningBracketConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/block-opening-bracket/createBlockOpeningBracketConcreteSyntaxTreeNode.ts";
import {createBlockConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/block/createBlockConcreteSyntaxTreeNode.ts";
import {createFunctionBodyConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/function-body/createFunctionBodyConcreteSyntaxTreeNode.ts";
import {createFunctionCallKnownSegmentClosingBracketConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/function-call-known-segment-closing-bracket/createFunctionCallKnownSegmentClosingBracketConcreteSyntaxTreeNode.ts";
import {createFunctionCallUnknownSegmentClosingBracketConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/function-call-unknown-segment-closing-bracket/createFunctionCallUnknownSegmentClosingBracketConcreteSyntaxTreeNode.ts";
import type {FunctionsSeparatedRestFunctionsConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/functions-separated-rest-functions/FunctionsSeparatedRestFunctionsConcreteSyntaxTreeNode.ts";
import type {FunctionsConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/functions/FunctionsConcreteSyntaxTreeNode.ts";
import {createIdentifierSegmentConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/identifier-segment/createIdentifierSegmentConcreteSyntaxTreeNode.ts";
import {createIdentifierSegmentsConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/identifier-segments/createIdentifierSegmentsConcreteSyntaxTreeNode.ts";
import type {StatementsRestStatementsConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/statements-rest-statements/StatementsRestStatementsConcreteSyntaxTreeNode.ts";
import {createStatementsConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/statements/createStatementsConcreteSyntaxTreeNode.ts";
import {createWhitespaceSegmentConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/whitespace-segment/createWhitespaceSegmentConcreteSyntaxTreeNode.ts";
import {createWhitespaceSegmentsConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/whitespace-segments/createWhitespaceSegmentsConcreteSyntaxTreeNode.ts";
import type {WhitespaceSegmentsConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/whitespace-segments/WhitespaceSegmentsConcreteSyntaxTreeNode.ts";
import type {WhitespaceConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/whitespace/WhitespaceConcreteSyntaxTreeNode.ts";
import type {Parser} from "../../Parser.ts";
import {BlockContentFinalWhitespaceSegmentsParser} from "../block-content-final-whitespace-segments/BlockContentFinalWhitespaceSegmentsParser.ts";
import {FunctionCallKnownSegmentContentParser} from "../function-call-known-segment-content/FunctionCallKnownSegmentContentParser.ts";
import {FunctionCallUnknownSegmentContentParser} from "../function-call-unknown-segment-content/FunctionCallUnknownSegmentContentParser.ts";
import {FunctionCallWordSegmentIdentifierSegmentsParser} from "../function-call-word-segment-identifier-segments/FunctionCallWordSegmentIdentifierSegmentsParser.ts";
import {FunctionHeaderParser} from "../function-header/FunctionHeaderParser.ts";
import {StatementsRestStatementsAfterOperatorParser} from "../statements-rest-statements-after-operator/StatementsRestStatementsAfterOperatorParser.ts";
export class BlockContentParser implements Parser {
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
	private readonly functionEndingIndex: Index;
	private readonly functionBodyEndingIndex: Index;
	private readonly functionsEndingIndex: Index;
	private readonly sourceFileContentEndingIndex: Index;
	public parseWhitespace(
		character: WhitespaceCharacter,
		index: Index,
	): BlockContentFinalWhitespaceSegmentsParser {
		const blockContentFinalWhitespaceSegmentsWhitespaceSegmentsFirstSegment =
			createWhitespaceSegmentConcreteSyntaxTreeNode(character, index);
		const blockContentFinalWhitespaceSegmentsWhitespaceSegments: WhitespaceSegmentsConcreteSyntaxTreeNode =
			createWhitespaceSegmentsConcreteSyntaxTreeNode(
				blockContentFinalWhitespaceSegmentsWhitespaceSegmentsFirstSegment,
				null,
				{
					starting: index,
					ending: index,
				},
			);
		const blockContentFinalWhitespaceSegmentsParser = new BlockContentFinalWhitespaceSegmentsParser(
			index,
			blockContentFinalWhitespaceSegmentsWhitespaceSegments,
			index,
			index,
			index,
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
		return blockContentFinalWhitespaceSegmentsParser;
	}
	public parseOpeningSquareBracket(): never {
		throw new Error("Not implemented.");
	}
	public parseClosingSquareBracket(
		character: ClosingSquareBracketCharacter,
		index: Index,
	): FunctionCallUnknownSegmentContentParser {
		const functionCallUnknownSegmentClosingBracket =
			createFunctionCallUnknownSegmentClosingBracketConcreteSyntaxTreeNode(character, index);
		const functionCallUnknownSegmentContentParser = new FunctionCallUnknownSegmentContentParser(
			functionCallUnknownSegmentClosingBracket,
			index,
			null,
			index,
			index,
			null,
			index,
			null,
			index,
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
	public parseOpeningCurlyBracket(
		character: OpeningCurlyBracketCharacter,
		index: Index,
	): FunctionHeaderParser | StatementsRestStatementsAfterOperatorParser {
		const blockOpeningBracket = createBlockOpeningBracketConcreteSyntaxTreeNode(character, index);
		const block = createBlockConcreteSyntaxTreeNode(
			blockOpeningBracket,
			null,
			this.blockClosingBracket,
			{
				starting: index,
				ending: this.blockEndingIndex,
			},
		);
		const [firstBlockStackEntry] = this.blockStack;
		if (typeof firstBlockStackEntry === "undefined") {
			const functionBody = createFunctionBodyConcreteSyntaxTreeNode(block, {
				starting: index,
				ending: this.functionBodyEndingIndex,
			});
			const functionHeaderParser = new FunctionHeaderParser(
				index,
				functionBody,
				this.functionEndingIndex,
				this.functionsRestFunctions,
				this.functionsEndingIndex,
				this.sourceFileContentFinalWhitespace,
				this.sourceFileContentEndingIndex,
			);
			return functionHeaderParser;
		}
		const statementsRestStatementsStatements = createStatementsConcreteSyntaxTreeNode(
			block,
			firstBlockStackEntry[0],
			{
				starting: index,
				ending: firstBlockStackEntry[1],
			},
		);
		const restBlockStackEntries: readonly (readonly [
			statementsRestStatements: StatementsRestStatementsConcreteSyntaxTreeNode | null,
			statementsEndingIndex: Index,
			finalWhitespace: WhitespaceConcreteSyntaxTreeNode | null,
			contentEndingIndex: Index,
			closingBracket: BlockClosingBracketConcreteSyntaxTreeNode,
			endingIndex: Index,
		])[] = this.blockStack.slice(1);
		const statementsRestStatementsAfterOperatorParser =
			new StatementsRestStatementsAfterOperatorParser(
				index,
				statementsRestStatementsStatements,
				firstBlockStackEntry[1],
				firstBlockStackEntry[2],
				firstBlockStackEntry[3],
				firstBlockStackEntry[4],
				firstBlockStackEntry[5],
				restBlockStackEntries,
				this.functionBodyEndingIndex,
				this.functionEndingIndex,
				this.functionsRestFunctions,
				this.functionsEndingIndex,
				this.sourceFileContentFinalWhitespace,
				this.sourceFileContentEndingIndex,
			);
		return statementsRestStatementsAfterOperatorParser;
	}
	public parseClosingCurlyBracket(
		character: ClosingCurlyBracketCharacter,
		index: Index,
	): BlockContentParser {
		const blockClosingBracket = createBlockClosingBracketConcreteSyntaxTreeNode(character, index);
		const newBlockStack = [
			[null, index, null, index, this.blockClosingBracket, this.blockEndingIndex],
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
		throw new Error("Not implemented.");
	}
	public parseClosingRoundBracket(
		character: ClosingRoundBracketCharacter,
		index: Index,
	): FunctionCallKnownSegmentContentParser {
		const functionCallKnownSegmentClosingBracket =
			createFunctionCallKnownSegmentClosingBracketConcreteSyntaxTreeNode(character, index);
		const functionCallKnownSegmentContentParser = new FunctionCallKnownSegmentContentParser(
			functionCallKnownSegmentClosingBracket,
			index,
			null,
			index,
			index,
			null,
			index,
			null,
			index,
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
				null,
				index,
				null,
				index,
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
		throw new Error("Not implemented.");
	}
	public finalize(): never {
		throw new Error("Not implemented.");
	}
}
