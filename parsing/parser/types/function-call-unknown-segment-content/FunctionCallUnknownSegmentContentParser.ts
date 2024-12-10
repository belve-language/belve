import type {IdentifierCharacter} from "../../../../characters/identifier/IdentifierCharacter.ts";
import type {OpeningSquareBracketCharacter} from "../../../../characters/opening-square-bracket/OpeningSquareBracketCharacter.ts";
import type {WhitespaceCharacter} from "../../../../characters/whitespace/WhitespaceCharacter.ts";
import type {Index} from "../../../../concrete-syntax-tree/index/Index.ts";
import type {BlockClosingBracketConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/block-closing-bracket/BlockClosingBracketConcreteSyntaxTreeNode.ts";
import type {FunctionCallKnownStartingSegmentsConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/function-call-known-starting-segments/FunctionCallKnownStartingSegmentsConcreteSyntaxTreeNode.ts";
import type {FunctionCallSegmentsSeparatedRestSegmentsConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/function-call-segments-separated-rest-segments/FunctionCallSegmentsSeparatedRestSegmentsConcreteSyntaxTreeNode.ts";
import type {FunctionCallUnknownSegmentClosingBracketConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/function-call-unknown-segment-closing-bracket/FunctionCallUnknownSegmentClosingBracketConcreteSyntaxTreeNode.ts";
import {createFunctionCallUnknownSegmentOpeningBracketConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/function-call-unknown-segment-opening-bracket/createFunctionCallUnknownSegmentOpeningBracketConcreteSyntaxTreeNode.ts";
import {createFunctionCallUnknownSegmentConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/function-call-unknown-segment/createFunctionCallUnknownSegmentConcreteSyntaxTreeNode.ts";
import {createFunctionCallUnknownStartingSegmentsConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/function-call-unknown-starting-segments/createFunctionCallUnknownStartingSegmentsConcreteSyntaxTreeNode.ts";
import type {FunctionCallUnknownStartingSegmentsConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/function-call-unknown-starting-segments/FunctionCallUnknownStartingSegmentsConcreteSyntaxTreeNode.ts";
import type {FunctionCallWordStartingSegmentsConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/function-call-word-starting-segments/FunctionCallWordStartingSegmentsConcreteSyntaxTreeNode.ts";
import type {FunctionsSeparatedRestFunctionsConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/functions-separated-rest-functions/FunctionsSeparatedRestFunctionsConcreteSyntaxTreeNode.ts";
import type {FunctionsConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/functions/FunctionsConcreteSyntaxTreeNode.ts";
import {createIdentifierSegmentConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/identifier-segment/createIdentifierSegmentConcreteSyntaxTreeNode.ts";
import {createIdentifierSegmentsConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/identifier-segments/createIdentifierSegmentsConcreteSyntaxTreeNode.ts";
import type {StatementsRestStatementsConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/statements-rest-statements/StatementsRestStatementsConcreteSyntaxTreeNode.ts";
import {createWhitespaceSegmentsConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/whitespace-segments/createWhitespaceSegmentsConcreteSyntaxTreeNode.ts";
import type {WhitespaceConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/whitespace/WhitespaceConcreteSyntaxTreeNode.ts";
import type {Parser} from "../../Parser.ts";
import {FunctionCallSegmentsParser} from "../function-call-segments-parser/FunctionCallSegmentsParser.ts";
import {FunctionCallUnknownSegmentContentFinalWhitespaceSegmentsParser} from "../function-call-unknown-segment-content-final-whitespace-segments-parser/FunctionCallUnknownSegmentContentFinalWhitespaceSegmentsParser.ts";
import {createWhitespaceSegmentConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/whitespace-segment/createWhitespaceSegmentConcreteSyntaxTreeNode.ts";
import {FunctionCallUnknownSegmentContentIdentifierSegmentsParser} from "../function-call-unknown-segment-content-identifier-segments/FunctionCallUnknownSegmentContentIdentifierSegmentsParser.ts";
export class FunctionCallUnknownSegmentContentParser implements Parser {
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
	private readonly functionCallSegmentsEndingIndex: Index;
	private readonly functionCallEndingIndex: Index;
	private readonly functionCallUnknownSegmentEndingIndex: Index;
	private readonly statementsEndingIndex: Index;
	private readonly functionBodyEndingIndex: Index;
	private readonly functionEndingIndex: Index;
	private readonly functionsEndingIndex: Index;
	private readonly sourceFileContentEndingIndex: Index;
	public parseWhitespace(
		character: WhitespaceCharacter,
		index: Index,
	): FunctionCallUnknownSegmentContentFinalWhitespaceSegmentsParser {
		const functionCallUnknownSegmentContentFinalWhitespaceSegmentsFirstSegment =
			createWhitespaceSegmentConcreteSyntaxTreeNode(character, index);
		const functionCallUnknownSegmentContentFinalWhitespaceSegments =
			createWhitespaceSegmentsConcreteSyntaxTreeNode(
				functionCallUnknownSegmentContentFinalWhitespaceSegmentsFirstSegment,
				null,
				{
					starting: index,
					ending: index,
				},
			);
		const functionCallUnknownSegmentContentFinalWhitespaceSegmentsParser =
			new FunctionCallUnknownSegmentContentFinalWhitespaceSegmentsParser(
				index,
				functionCallUnknownSegmentContentFinalWhitespaceSegments,
				index,
				index,
				index,
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
	public parseOpeningSquareBracket(
		character: OpeningSquareBracketCharacter,
		index: Index,
	): FunctionCallSegmentsParser {
		const functionCallUnknownSegmentOpeningBracket =
			createFunctionCallUnknownSegmentOpeningBracketConcreteSyntaxTreeNode(character, index);
		const functionCallUnknownSegment = createFunctionCallUnknownSegmentConcreteSyntaxTreeNode(
			functionCallUnknownSegmentOpeningBracket,
			null,
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
		throw new Error("Unknown segment content cannot contain a closing square bracket.");
	}
	public parseOpeningCurlyBracket(): never {
		throw new Error("Unknown segment content cannot contain an opening curly bracket.");
	}
	public parseClosingCurlyBracket(): never {
		throw new Error("Unknown segment content cannot contain a closing curly bracket.");
	}
	public parseOpeningRoundBracket(): never {
		throw new Error("Unknown segment content cannot contain an opening round bracket.");
	}
	public parseClosingRoundBracket(): never {
		throw new Error("Unknown segment content cannot contain a closing round bracket.");
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
		const functionCallUnknownSegmentContentIdentifierSegmentsParser: FunctionCallUnknownSegmentContentIdentifierSegmentsParser =
			new FunctionCallUnknownSegmentContentIdentifierSegmentsParser(
				index,
				functionCallUnknownSegmentContentIdentifierSegments,
				index,
				index,
				null,
				index,
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
		throw new Error("Unknown segment content cannot contain an operator.");
	}
	public finalize(): never {
		throw new Error("Unknown segment content cannot be finalized.");
	}
}
