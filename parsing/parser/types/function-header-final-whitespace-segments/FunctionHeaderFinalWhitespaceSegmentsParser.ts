import type {ClosingCurlyBracketCharacter} from "../../../../characters/closing-curly-bracket/ClosingCurlyBracketCharacter.ts";
import type {ClosingRoundBracketCharacter} from "../../../../characters/closing-round-bracket/ClosingRoundBracketCharacter.ts";
import type {ClosingSquareBracketCharacter} from "../../../../characters/closing-square-bracket/ClosingSquareBracketCharacter.ts";
import type {IdentifierCharacter} from "../../../../characters/identifier/IdentifierCharacter.ts";
import type {WhitespaceCharacter} from "../../../../characters/whitespace/WhitespaceCharacter.ts";
import type {Index} from "../../../../concrete-syntax-tree/index/Index.ts";
import {createBlockClosingBracketConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/block-closing-bracket/createBlockClosingBracketConcreteSyntaxTreeNode.ts";
import type {FunctionBodyConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/function-body/FunctionBodyConcreteSyntaxTreeNode.ts";
import {createFunctionHeaderKnownSegmentClosingBracketConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/function-header-known-segment-closing-bracket/createFunctionHeaderKnownSegmentClosingBracketConcreteSyntaxTreeNode.ts";
import {createFunctionHeaderUnknownSegmentClosingBracketConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/function-header-unknown-segment-closing-bracket/createFunctionHeaderUnknownSegmentClosingBracketConcreteSyntaxTreeNode.ts";
import {createFunctionConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/function/createFunctionConcreteSyntaxTreeNode.ts";
import type {FunctionConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/function/FunctionConcreteSyntaxTreeNode.ts";
import {createFunctionsSeparatedRestFunctionsConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/functions-separated-rest-functions/createFunctionsSeparatedRestFunctionsConcreteSyntaxTreeNode.ts";
import type {FunctionsSeparatedRestFunctionsConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/functions-separated-rest-functions/FunctionsSeparatedRestFunctionsConcreteSyntaxTreeNode.ts";
import {createFunctionsConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/functions/createFunctionsConcreteSyntaxTreeNode.ts";
import type {FunctionsConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/functions/FunctionsConcreteSyntaxTreeNode.ts";
import {createIdentifierSegmentConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/identifier-segment/createIdentifierSegmentConcreteSyntaxTreeNode.ts";
import {createIdentifierSegmentsConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/identifier-segments/createIdentifierSegmentsConcreteSyntaxTreeNode.ts";
import {createSourceFileContentConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/source-file-content/createSourcefileContentConcreteSyntaxTreeNode.ts";
import type {SourceFileContentConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/source-file-content/SourceFileContentConcreteSyntaxTreeNode.ts";
import {createWhitespaceSegmentConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/whitespace-segment/createWhitespaceSegmentConcreteSyntaxTreeNode.ts";
import {createWhitespaceSegmentsConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/whitespace-segments/createWhitespaceSegmentsConcreteSyntaxTreeNode.ts";
import type {WhitespaceSegmentsConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/whitespace-segments/WhitespaceSegmentsConcreteSyntaxTreeNode.ts";
import {createWhitespaceConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/whitespace/createWhitespaceConcreteSyntaxTreeNode.ts";
import type {WhitespaceConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/whitespace/WhitespaceConcreteSyntaxTreeNode.ts";
import type {Parser} from "../../Parser.ts";
import {BlockContentParser} from "../block-content/BlockContentParser.ts";
import {FunctionHeaderKnownSegmentContentParser} from "../function-header-known-segment-content/FunctionHeaderKnownSegmentContentParser.ts";
import {FunctionHeaderUnknownSegmentContentParser} from "../function-header-unknown-segment-content-parser/FunctionHeaderUnknownSegmentContentParser.ts";
import {FunctionHeaderWordSegmentIdentifierSegmentsParser} from "../function-header-word-segment-identifier-segments/FunctionHeaderWordSegmentIdentifierSegmentsParser.ts";
export class FunctionHeaderFinalWhitespaceSegmentsParser implements Parser {
	private readonly functionHeaderFinalWhitespaceSegments: WhitespaceSegmentsConcreteSyntaxTreeNode;
	private readonly functionBody: FunctionBodyConcreteSyntaxTreeNode;
	private readonly functionsRestFunctions:
		| FunctionsSeparatedRestFunctionsConcreteSyntaxTreeNode
		| null
		| FunctionsConcreteSyntaxTreeNode;
	private readonly sourceFileContentFinalWhitespace: WhitespaceConcreteSyntaxTreeNode | null;
	public constructor(
		functionHeaderFinalWhitespaceSegmentsStartingIndex: Index,
		functionHeaderFinalWhitespaceSegments: WhitespaceSegmentsConcreteSyntaxTreeNode,
		functionHeaderFinalWhitespaceEndingIndex: Index,
		functionHeaderEndingIndex: Index,
		functionBodyStartingIndex: Index,
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
		this.functionHeaderFinalWhitespaceSegmentsStartingIndex =
			functionHeaderFinalWhitespaceSegmentsStartingIndex;
		this.functionHeaderFinalWhitespaceSegments = functionHeaderFinalWhitespaceSegments;
		this.functionHeaderFinalWhitespaceEndingIndex = functionHeaderFinalWhitespaceEndingIndex;
		this.functionHeaderEndingIndex = functionHeaderEndingIndex;
		this.functionBodyStartingIndex = functionBodyStartingIndex;
		this.functionBody = functionBody;
		this.functionEndingIndex = functionEndingIndex;
		this.functionsRestFunctions = functionsRestFunctions;
		this.functionsEndingIndex = functionsEndingIndex;
		this.sourceFileContentFinalWhitespace = sourceFileContentFinalWhitespace;
		this.sourceFileContentEndingIndex = sourceFileContentEndingIndex;
	}
	private readonly functionBodyStartingIndex: Index;
	private readonly functionHeaderEndingIndex: Index;
	private readonly functionHeaderFinalWhitespaceSegmentsStartingIndex: Index;
	private readonly functionHeaderFinalWhitespaceEndingIndex: Index;
	private readonly functionEndingIndex: Index;
	private readonly functionsEndingIndex: Index;
	private readonly sourceFileContentEndingIndex: Index;
	public parseWhitespace(
		character: WhitespaceCharacter,
		index: Index,
	): FunctionHeaderFinalWhitespaceSegmentsParser {
		const newfunctionHeaderFinalWhitespaceSegmentsFirstSegment =
			createWhitespaceSegmentConcreteSyntaxTreeNode(character, index);
		const newFunctionHeaderFinalWhitespaceSegments = createWhitespaceSegmentsConcreteSyntaxTreeNode(
			newfunctionHeaderFinalWhitespaceSegmentsFirstSegment,
			this.functionHeaderFinalWhitespaceSegments,
			{
				starting: index,
				ending: this.functionHeaderFinalWhitespaceEndingIndex,
			},
		);
		const functionHeaderFinalWhitespaceSegmentsParser =
			new FunctionHeaderFinalWhitespaceSegmentsParser(
				index,
				newFunctionHeaderFinalWhitespaceSegments,
				this.functionHeaderFinalWhitespaceEndingIndex,
				this.functionHeaderEndingIndex,
				this.functionBodyStartingIndex,
				this.functionBody,
				this.functionEndingIndex,
				this.functionsRestFunctions,
				this.functionsEndingIndex,
				this.sourceFileContentFinalWhitespace,
				this.sourceFileContentEndingIndex,
			);
		return functionHeaderFinalWhitespaceSegmentsParser;
	}
	public parseOpeningSquareBracket(): never {
		throw new Error("Method not implemented.");
	}
	public parseClosingSquareBracket(
		character: ClosingSquareBracketCharacter,
		index: Index,
	): FunctionHeaderUnknownSegmentContentParser {
		const functionHeaderUnknownSegmentClosingBracket =
			createFunctionHeaderUnknownSegmentClosingBracketConcreteSyntaxTreeNode(character, index);
		const functionHeaderFinalWhitespace = createWhitespaceConcreteSyntaxTreeNode(
			this.functionHeaderFinalWhitespaceSegments,
			{
				starting: this.functionHeaderFinalWhitespaceSegmentsStartingIndex,
				ending: this.functionHeaderFinalWhitespaceEndingIndex,
			},
		);
		const functionHeaderUnknownSegmentContentParser = new FunctionHeaderUnknownSegmentContentParser(
			functionHeaderUnknownSegmentClosingBracket,
			index,
			null,
			index,
			functionHeaderFinalWhitespace,
			this.functionHeaderEndingIndex,
			this.functionBody,
			this.functionEndingIndex,
			this.functionsRestFunctions,
			this.functionsEndingIndex,
			this.sourceFileContentFinalWhitespace,
			this.sourceFileContentEndingIndex,
		);
		return functionHeaderUnknownSegmentContentParser;
	}
	public parseOpeningCurlyBracket(): never {
		throw new Error("Method not implemented.");
	}
	public parseClosingCurlyBracket(
		character: ClosingCurlyBracketCharacter,
		index: Index,
	): BlockContentParser {
		const blockClosingBracket = createBlockClosingBracketConcreteSyntaxTreeNode(character, index);
		const function_ = createFunctionConcreteSyntaxTreeNode(null, this.functionBody, {
			starting: this.functionBodyStartingIndex,
			ending: this.functionEndingIndex,
		});
		const functionHeaderFinalWhitespace = createWhitespaceConcreteSyntaxTreeNode(
			this.functionHeaderFinalWhitespaceSegments,
			{
				starting: this.functionHeaderFinalWhitespaceSegmentsStartingIndex,
				ending: this.functionHeaderFinalWhitespaceEndingIndex,
			},
		);
		const functionsSeparatedRestFunctionsFunctions = createFunctionsConcreteSyntaxTreeNode(
			function_,
			this.functionsRestFunctions,
			{
				starting: this.functionBodyStartingIndex,
				ending: this.functionsEndingIndex,
			},
		);
		const functionsSeparatedRestFunctions =
			createFunctionsSeparatedRestFunctionsConcreteSyntaxTreeNode(
				functionHeaderFinalWhitespace,
				functionsSeparatedRestFunctionsFunctions,
				{
					starting: this.functionHeaderFinalWhitespaceSegmentsStartingIndex,
					ending: this.functionsEndingIndex,
				},
			);
		const blockContentParser = new BlockContentParser(
			blockClosingBracket,
			index,
			[] as const,
			index,
			index,
			functionsSeparatedRestFunctions,
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
	): FunctionHeaderKnownSegmentContentParser {
		const functionKnownSegmentClosingBracket =
			createFunctionHeaderKnownSegmentClosingBracketConcreteSyntaxTreeNode(character, index);
		const functionHeaderFinalWhitespace = createWhitespaceConcreteSyntaxTreeNode(
			this.functionHeaderFinalWhitespaceSegments,
			{
				starting: this.functionHeaderFinalWhitespaceSegmentsStartingIndex,
				ending: this.functionHeaderFinalWhitespaceEndingIndex,
			},
		);
		const functionHeaderKnownSegmentContentParser = new FunctionHeaderKnownSegmentContentParser(
			functionKnownSegmentClosingBracket,
			index,
			null,
			index,
			functionHeaderFinalWhitespace,
			this.functionHeaderEndingIndex,
			this.functionBody,
			this.functionEndingIndex,
			this.functionsRestFunctions,
			this.functionsEndingIndex,
			this.sourceFileContentFinalWhitespace,
			this.sourceFileContentEndingIndex,
		);
		return functionHeaderKnownSegmentContentParser;
	}
	public parseIdentifier(
		character: IdentifierCharacter,
		index: Index,
	): FunctionHeaderWordSegmentIdentifierSegmentsParser {
		const functionHeaderWordSegmentIdentifierSegmentsFirstSegment =
			createIdentifierSegmentConcreteSyntaxTreeNode(character, index);
		const functionHeaderWordSegmentIdentifierSegments =
			createIdentifierSegmentsConcreteSyntaxTreeNode(
				functionHeaderWordSegmentIdentifierSegmentsFirstSegment,
				null,
				{
					starting: index,
					ending: index,
				},
			);
		const functionHeaderFinalWhitespace = createWhitespaceConcreteSyntaxTreeNode(
			this.functionHeaderFinalWhitespaceSegments,
			{
				starting: this.functionHeaderFinalWhitespaceSegmentsStartingIndex,
				ending: this.functionHeaderFinalWhitespaceEndingIndex,
			},
		);
		const functionHeaderWordSegmentIdentifierSegmentsParser =
			new FunctionHeaderWordSegmentIdentifierSegmentsParser(
				index,
				functionHeaderWordSegmentIdentifierSegments,
				index,
				index,
				index,
				null,
				index,
				functionHeaderFinalWhitespace,
				this.functionHeaderEndingIndex,
				this.functionBody,
				this.functionEndingIndex,
				this.functionsRestFunctions,
				this.functionsEndingIndex,
				this.sourceFileContentFinalWhitespace,
				this.sourceFileContentEndingIndex,
			);
		return functionHeaderWordSegmentIdentifierSegmentsParser;
	}
	public parseOperator(): never {
		throw new Error("Method not implemented.");
	}
	public finalize(): SourceFileContentConcreteSyntaxTreeNode {
		const function_: FunctionConcreteSyntaxTreeNode = createFunctionConcreteSyntaxTreeNode(
			null,
			this.functionBody,
			{
				starting: this.functionBodyStartingIndex,
				ending: this.functionEndingIndex,
			},
		);
		const functions: FunctionsConcreteSyntaxTreeNode = createFunctionsConcreteSyntaxTreeNode(
			function_,
			this.functionsRestFunctions,
			{
				starting: this.functionBodyStartingIndex,
				ending: this.functionsEndingIndex,
			},
		);
		const functionHeaderFinalWhitespace = createWhitespaceConcreteSyntaxTreeNode(
			this.functionHeaderFinalWhitespaceSegments,
			{
				starting: this.functionHeaderFinalWhitespaceSegmentsStartingIndex,
				ending: this.functionHeaderFinalWhitespaceEndingIndex,
			},
		);
		const sourceFileContent: SourceFileContentConcreteSyntaxTreeNode =
			createSourceFileContentConcreteSyntaxTreeNode(
				functionHeaderFinalWhitespace,
				functions,
				this.sourceFileContentFinalWhitespace,
				{
					starting: this.functionHeaderFinalWhitespaceSegmentsStartingIndex,
					ending: this.sourceFileContentEndingIndex,
				},
			);
		return sourceFileContent;
	}
}
