import type {ClosingRoundBracketCharacter} from "../../../../characters/closing-round-bracket/ClosingRoundBracketCharacter.ts";
import type {ClosingSquareBracketCharacter} from "../../../../characters/closing-square-bracket/ClosingSquareBracketCharacter.ts";
import type {IdentifierCharacter} from "../../../../characters/identifier/IdentifierCharacter.ts";
import type {OpeningCurlyBracketCharacter} from "../../../../characters/opening-curly-bracket/OpeningCurlyBracketCharacter.ts";
import type {OperatorCharacter} from "../../../../characters/operator/OperatorCharacter.ts";
import type {WhitespaceCharacter} from "../../../../characters/whitespace/WhitespaceCharacter.ts";
import type {Index} from "../../../../concrete-syntax-tree/index/Index.ts";
import type {BlockClosingBracketConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/block-closing-bracket/BlockClosingBracketConcreteSyntaxTreeNode.ts";
import {createBlockContentConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/block-content/createBlockContentConcreteSyntaxTreeNode.ts";
import {createBlockOpeningBracketConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/block-opening-bracket/createBlockOpeningBracketConcreteSyntaxTreeNode.ts";
import {createBlockConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/block/createBlockConcreteSyntaxTreeNode.ts";
import {createFunctionBodyConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/function-body/createFunctionBodyConcreteSyntaxTreeNode.ts";
import {createFunctionCallKnownSegmentClosingBracketConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/function-call-known-segment-closing-bracket/createFunctionCallKnownSegmentClosingBracketConcreteSyntaxTreeNode.ts";
import type {FunctionCallKnownStartingSegmentsConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/function-call-known-starting-segments/FunctionCallKnownStartingSegmentsConcreteSyntaxTreeNode.ts";
import type {FunctionCallSegmentsSeparatedRestSegmentsConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/function-call-segments-separated-rest-segments/FunctionCallSegmentsSeparatedRestSegmentsConcreteSyntaxTreeNode.ts";
import {createFunctionCallUnknownSegmentClosingBracketConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/function-call-unknown-segment-closing-bracket/createFunctionCallUnknownSegmentClosingBracketConcreteSyntaxTreeNode.ts";
import type {FunctionCallUnknownStartingSegmentsConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/function-call-unknown-starting-segments/FunctionCallUnknownStartingSegmentsConcreteSyntaxTreeNode.ts";
import {createFunctionCallWordSegmentConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/function-call-word-segment/createFunctionCallWordSegmentConcreteSyntaxTreeNode.ts";
import {createFunctionCallWordStartingSegmentsConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/function-call-word-starting-segments/createFunctionCallWordStartingSegmentsConcreteSyntaxTreeNode.ts";
import type {FunctionCallWordStartingSegmentsConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/function-call-word-starting-segments/FunctionCallWordStartingSegmentsConcreteSyntaxTreeNode.ts";
import {createFunctionCallConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/function-call/createFunctionCallConcreteSyntaxTreeNode.ts";
import type {FunctionsSeparatedRestFunctionsConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/functions-separated-rest-functions/FunctionsSeparatedRestFunctionsConcreteSyntaxTreeNode.ts";
import type {FunctionsConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/functions/FunctionsConcreteSyntaxTreeNode.ts";
import {createIdentifierSegmentConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/identifier-segment/createIdentifierSegmentConcreteSyntaxTreeNode.ts";
import {createIdentifierSegmentsConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/identifier-segments/createIdentifierSegmentsConcreteSyntaxTreeNode.ts";
import type {IdentifierSegmentsConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/identifier-segments/IdentifierSegmentsConcreteSyntaxTreeNode.ts";
import {createIdentifierConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/identifier/createIdentifierConcreteSyntaxTreeNode.ts";
import {createOperatorConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/operator/createOperatorConcreteSyntaxTreeNode.ts";
import type {StatementsRestStatementsConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/statements-rest-statements/StatementsRestStatementsConcreteSyntaxTreeNode.ts";
import {createStatementsConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/statements/createStatementsConcreteSyntaxTreeNode.ts";
import {createWhitespaceSegmentConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/whitespace-segment/createWhitespaceSegmentConcreteSyntaxTreeNode.ts";
import {createWhitespaceSegmentsConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/whitespace-segments/createWhitespaceSegmentsConcreteSyntaxTreeNode.ts";
import type {WhitespaceConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/whitespace/WhitespaceConcreteSyntaxTreeNode.ts";
import type {Parser} from "../../Parser.ts";
import {FunctionCallKnownSegmentContentParser} from "../function-call-known-segment-content/FunctionCallKnownSegmentContentParser.ts";
import {FunctionCallSegmentsSeparatedRestSegmentsInitialWhitespaceSegmentsParser} from "../function-call-segments-separated-rest-segments-initial-whitespace-segments/FunctionCallSegmentsSeparatedRestSegmentsInitialWhitespaceSegmentsParser.ts";
import {FunctionCallUnknownSegmentContentParser} from "../function-call-unknown-segment-content/FunctionCallUnknownSegmentContentParser.ts";
import {FunctionHeaderParser} from "../function-header/FunctionHeaderParser.ts";
import {StatementsRestStatementsAfterOperatorParser} from "../statements-rest-statements-after-operator/StatementsRestStatementsAfterOperatorParser.ts";
import {StatementsRestStatementsBeforeOperatorParser} from "../statements-rest-statements-before-operator/StatementsRestStatementsBeforeOperatorParser.ts";
export class FunctionCallWordSegmentIdentifierSegmentsParser implements Parser {
	private readonly functionCallWordSegmentIdentifierSegments: IdentifierSegmentsConcreteSyntaxTreeNode;
	private readonly functionCallWordStartingSegmentsRestSegments:
		| FunctionCallKnownStartingSegmentsConcreteSyntaxTreeNode
		| FunctionCallUnknownStartingSegmentsConcreteSyntaxTreeNode
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
		functionCallWordSegmentIdentifierSegmentsStartingIndex: Index,
		functionCallWordSegmentIdentifierSegments: IdentifierSegmentsConcreteSyntaxTreeNode,
		functionCallWordSegmentIdentifierSegmentsEndingIndex: Index,
		functionCallWordSegmentIdentifierEndingIndex: Index,
		functionCallWordSegmentEndingIndex: Index,
		functionCallWordStartingSegmentsRestSegments:
			| FunctionCallKnownStartingSegmentsConcreteSyntaxTreeNode
			| FunctionCallUnknownStartingSegmentsConcreteSyntaxTreeNode
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
		this.functionCallWordSegmentIdentifierSegmentsStartingIndex =
			functionCallWordSegmentIdentifierSegmentsStartingIndex;
		this.functionCallWordSegmentIdentifierSegments = functionCallWordSegmentIdentifierSegments;
		this.functionCallWordSegmentIdentifierSegmentsEndingIndex =
			functionCallWordSegmentIdentifierSegmentsEndingIndex;
		this.functionCallWordSegmentIdentifierEndingIndex =
			functionCallWordSegmentIdentifierEndingIndex;
		this.functionCallWordSegmentEndingIndex = functionCallWordSegmentEndingIndex;
		this.functionCallWordStartingSegmentsRestSegments =
			functionCallWordStartingSegmentsRestSegments;
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
	private readonly functionCallWordSegmentIdentifierSegmentsEndingIndex: Index;
	private readonly statementsEndingIndex: Index;
	private readonly functionCallEndingIndex: Index;
	private readonly functionBodyEndingIndex: Index;
	private readonly functionEndingIndex: Index;
	private readonly functionCallWordSegmentIdentifierSegmentsStartingIndex: Index;
	private readonly functionCallSegmentsEndingIndex: Index;
	private readonly functionCallWordSegmentIdentifierEndingIndex: Index;
	private readonly functionCallWordSegmentEndingIndex: Index;
	private readonly functionsEndingIndex: Index;
	private readonly sourceFileContentEndingIndex: Index;
	public parseWhitespace(
		character: WhitespaceCharacter,
		index: Index,
	): FunctionCallSegmentsSeparatedRestSegmentsInitialWhitespaceSegmentsParser {
		const functionCallSegmentsSeparatedRestSegmentsInitialWhitespaceSegmentsFirstSegment =
			createWhitespaceSegmentConcreteSyntaxTreeNode(character, index);
		const functionCallSegmentsSeparatedRestSegmentsInitialWhitespaceSegments =
			createWhitespaceSegmentsConcreteSyntaxTreeNode(
				functionCallSegmentsSeparatedRestSegmentsInitialWhitespaceSegmentsFirstSegment,
				null,
				{
					starting: index,
					ending: index,
				},
			);
		const functionCallWordSegmentIdentitier = createIdentifierConcreteSyntaxTreeNode(
			this.functionCallWordSegmentIdentifierSegments,
			{
				starting: this.functionCallWordSegmentIdentifierSegmentsStartingIndex,
				ending: this.functionCallWordSegmentIdentifierEndingIndex,
			},
		);
		const functionCallWordSegment = createFunctionCallWordSegmentConcreteSyntaxTreeNode(
			functionCallWordSegmentIdentitier,
			{
				starting: this.functionCallWordSegmentIdentifierSegmentsStartingIndex,
				ending: this.functionCallWordSegmentEndingIndex,
			},
		);
		const functionCallWordStartingSegments =
			createFunctionCallWordStartingSegmentsConcreteSyntaxTreeNode(
				functionCallWordSegment,
				this.functionCallWordStartingSegmentsRestSegments,
				{
					starting: this.functionCallWordSegmentIdentifierSegmentsStartingIndex,
					ending: this.functionCallSegmentsEndingIndex,
				},
			);
		const functionCallSegmentsSeparatedRestSegmentsInitialWhitespaceSegmentsParser =
			new FunctionCallSegmentsSeparatedRestSegmentsInitialWhitespaceSegmentsParser(
				index,
				functionCallSegmentsSeparatedRestSegmentsInitialWhitespaceSegments,
				index,
				index,
				this.functionCallWordSegmentIdentifierSegmentsStartingIndex,
				functionCallWordStartingSegments,
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
		return functionCallSegmentsSeparatedRestSegmentsInitialWhitespaceSegmentsParser;
	}
	public parseOpeningSquareBracket(): never {
		throw new Error(
			"FunctionCallWordSegmentIdentifierSegmentsParser.parseOpeningSquareBracket() should not be called.",
		);
	}
	public parseClosingSquareBracket(
		character: ClosingSquareBracketCharacter,
		index: Index,
	): FunctionCallUnknownSegmentContentParser {
		const functionCallUnknownSegmentClosingBracket =
			createFunctionCallUnknownSegmentClosingBracketConcreteSyntaxTreeNode(character, index);
		const functionCallWordSegmentIdentitier = createIdentifierConcreteSyntaxTreeNode(
			this.functionCallWordSegmentIdentifierSegments,
			{
				starting: this.functionCallWordSegmentIdentifierSegmentsStartingIndex,
				ending: this.functionCallWordSegmentIdentifierEndingIndex,
			},
		);
		const functionCallWordSegment = createFunctionCallWordSegmentConcreteSyntaxTreeNode(
			functionCallWordSegmentIdentitier,
			{
				starting: this.functionCallWordSegmentIdentifierSegmentsStartingIndex,
				ending: this.functionCallWordSegmentEndingIndex,
			},
		);
		const functionCallWordStartingSegments: FunctionCallWordStartingSegmentsConcreteSyntaxTreeNode =
			createFunctionCallWordStartingSegmentsConcreteSyntaxTreeNode(
				functionCallWordSegment,
				this.functionCallWordStartingSegmentsRestSegments,
				{
					starting: this.functionCallWordSegmentIdentifierSegmentsStartingIndex,
					ending: this.functionCallSegmentsEndingIndex,
				},
			);
		const functionCallUnknownSegmentContentParser = new FunctionCallUnknownSegmentContentParser(
			functionCallUnknownSegmentClosingBracket,
			index,
			functionCallWordStartingSegments,
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
		return functionCallUnknownSegmentContentParser;
	}
	public parseOpeningCurlyBracket(
		character: OpeningCurlyBracketCharacter,
		index: Index,
	): StatementsRestStatementsAfterOperatorParser | FunctionHeaderParser {
		const [firstBlockStackEntry] = this.blockStack;
		const functionCallWordSegmentIdentitier = createIdentifierConcreteSyntaxTreeNode(
			this.functionCallWordSegmentIdentifierSegments,
			{
				starting: this.functionCallWordSegmentIdentifierSegmentsStartingIndex,
				ending: this.functionCallWordSegmentIdentifierEndingIndex,
			},
		);
		const functionCallWordSegment = createFunctionCallWordSegmentConcreteSyntaxTreeNode(
			functionCallWordSegmentIdentitier,
			{
				starting: this.functionCallWordSegmentIdentifierSegmentsStartingIndex,
				ending: this.functionCallWordSegmentEndingIndex,
			},
		);
		const functionCallWordStartingSegments =
			createFunctionCallWordStartingSegmentsConcreteSyntaxTreeNode(
				functionCallWordSegment,
				this.functionCallWordStartingSegmentsRestSegments,
				{
					starting: this.functionCallWordSegmentIdentifierSegmentsStartingIndex,
					ending: this.functionCallSegmentsEndingIndex,
				},
			);
		const functionCall = createFunctionCallConcreteSyntaxTreeNode(
			functionCallWordStartingSegments,
			{
				starting: this.functionCallWordSegmentIdentifierSegmentsStartingIndex,
				ending: this.functionCallEndingIndex,
			},
		);
		const statements = createStatementsConcreteSyntaxTreeNode(
			functionCall,
			this.statementsRestStatements,
			{
				starting: this.functionCallWordSegmentIdentifierSegmentsStartingIndex,
				ending: this.statementsEndingIndex,
			},
		);
		const blockContent = createBlockContentConcreteSyntaxTreeNode(
			null,
			statements,
			this.blockContentFinalWhitespace,
			{
				starting: this.functionCallWordSegmentIdentifierSegmentsStartingIndex,
				ending: this.blockContentEndingIndex,
			},
		);
		const blockOpeningBracket = createBlockOpeningBracketConcreteSyntaxTreeNode(character, index);
		const block = createBlockConcreteSyntaxTreeNode(
			blockOpeningBracket,
			blockContent,
			this.blockClosingBracket,
			{
				starting: index,
				ending: this.blockEndingIndex,
			},
		);
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
		const blockStackRestEntries: readonly (readonly [
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
				blockStackRestEntries,
				this.functionBodyEndingIndex,
				this.functionEndingIndex,
				this.functionsRestFunctions,
				this.functionsEndingIndex,
				this.sourceFileContentFinalWhitespace,
				this.sourceFileContentEndingIndex,
			);
		return statementsRestStatementsAfterOperatorParser;
	}
	public parseClosingCurlyBracket(): never {
		throw new Error(
			"FunctionCallWordSegmentIdentifierSegmentsParser.parseClosingCurlyBracket() should not be called.",
		);
	}
	public parseOpeningRoundBracket(): never {
		throw new Error(
			"FunctionCallWordSegmentIdentifierSegmentsParser.parseOpeningRoundBracket() should not be called.",
		);
	}
	public parseClosingRoundBracket(
		character: ClosingRoundBracketCharacter,
		index: Index,
	): FunctionCallKnownSegmentContentParser {
		const functionCallKnownSegmentClosingBracket =
			createFunctionCallKnownSegmentClosingBracketConcreteSyntaxTreeNode(character, index);
		const functionCallWordSegmentIdentitier = createIdentifierConcreteSyntaxTreeNode(
			this.functionCallWordSegmentIdentifierSegments,
			{
				starting: this.functionCallWordSegmentIdentifierSegmentsStartingIndex,
				ending: this.functionCallWordSegmentIdentifierEndingIndex,
			},
		);
		const functionCallWordSegment = createFunctionCallWordSegmentConcreteSyntaxTreeNode(
			functionCallWordSegmentIdentitier,
			{
				starting: this.functionCallWordSegmentIdentifierSegmentsStartingIndex,
				ending: this.functionCallWordSegmentEndingIndex,
			},
		);
		const functionCallWordStartingSegments =
			createFunctionCallWordStartingSegmentsConcreteSyntaxTreeNode(
				functionCallWordSegment,
				this.functionCallWordStartingSegmentsRestSegments,
				{
					starting: this.functionCallWordSegmentIdentifierSegmentsStartingIndex,
					ending: this.functionCallSegmentsEndingIndex,
				},
			);
		const functionCallKnownSegmentContentParser = new FunctionCallKnownSegmentContentParser(
			functionCallKnownSegmentClosingBracket,
			index,
			functionCallWordStartingSegments,
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
		return functionCallKnownSegmentContentParser;
	}
	public parseIdentifier(
		character: IdentifierCharacter,
		index: Index,
	): FunctionCallWordSegmentIdentifierSegmentsParser {
		const newFunctionCallWordSegmentIdentifierSegmentsFirstSegment =
			createIdentifierSegmentConcreteSyntaxTreeNode(character, index);
		const newFunctionCallWordSegmentIdentifierSegments =
			createIdentifierSegmentsConcreteSyntaxTreeNode(
				newFunctionCallWordSegmentIdentifierSegmentsFirstSegment,
				this.functionCallWordSegmentIdentifierSegments,
				{
					starting: index,
					ending: this.functionCallWordSegmentIdentifierSegmentsEndingIndex,
				},
			);
		const functionCallWordSegmentIdentifierSegmentsParser =
			new FunctionCallWordSegmentIdentifierSegmentsParser(
				index,
				newFunctionCallWordSegmentIdentifierSegments,
				this.functionCallWordSegmentIdentifierSegmentsEndingIndex,
				this.functionCallWordSegmentIdentifierEndingIndex,
				this.functionCallWordSegmentEndingIndex,
				this.functionCallWordStartingSegmentsRestSegments,
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
		return functionCallWordSegmentIdentifierSegmentsParser;
	}
	public parseOperator(
		character: OperatorCharacter,
		index: Index,
	): StatementsRestStatementsBeforeOperatorParser {
		const operator = createOperatorConcreteSyntaxTreeNode(character, index);
		const functionCallWordSegmentIdentitier = createIdentifierConcreteSyntaxTreeNode(
			this.functionCallWordSegmentIdentifierSegments,
			{
				starting: this.functionCallWordSegmentIdentifierSegmentsStartingIndex,
				ending: this.functionCallWordSegmentIdentifierEndingIndex,
			},
		);
		const functionCallWordSegment = createFunctionCallWordSegmentConcreteSyntaxTreeNode(
			functionCallWordSegmentIdentitier,
			{
				starting: this.functionCallWordSegmentIdentifierSegmentsStartingIndex,
				ending: this.functionCallWordSegmentEndingIndex,
			},
		);
		const functionCallWordStartingSegment =
			createFunctionCallWordStartingSegmentsConcreteSyntaxTreeNode(
				functionCallWordSegment,
				this.functionCallWordStartingSegmentsRestSegments,
				{
					starting: this.functionCallWordSegmentIdentifierSegmentsStartingIndex,
					ending: this.functionCallSegmentsEndingIndex,
				},
			);
		const functionCall = createFunctionCallConcreteSyntaxTreeNode(functionCallWordStartingSegment, {
			starting: this.functionCallWordSegmentIdentifierSegmentsStartingIndex,
			ending: this.functionCallEndingIndex,
		});
		const statementsRestStatements = createStatementsConcreteSyntaxTreeNode(
			functionCall,
			this.statementsRestStatements,
			{
				starting: this.functionCallWordSegmentIdentifierSegmentsStartingIndex,
				ending: this.statementsEndingIndex,
			},
		);
		const statementsRestStatementsBeforeOperatorParser =
			new StatementsRestStatementsBeforeOperatorParser(
				index,
				operator,
				null,
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
		return statementsRestStatementsBeforeOperatorParser;
	}
	public finalize(): never {
		throw new Error(
			"FunctionCallWordSegmentIdentifierSegmentsParser.finalize() should not be called.",
		);
	}
}
