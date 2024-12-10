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
import type {FunctionsSeparatedRestFunctionsConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/functions-separated-rest-functions/FunctionsSeparatedRestFunctionsConcreteSyntaxTreeNode.ts";
import {createFunctionsConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/functions/createFunctionsConcreteSyntaxTreeNode.ts";
import type {FunctionsConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/functions/FunctionsConcreteSyntaxTreeNode.ts";
import {createIdentifierSegmentConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/identifier-segment/createIdentifierSegmentConcreteSyntaxTreeNode.ts";
import {createIdentifierSegmentsConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/identifier-segments/createIdentifierSegmentsConcreteSyntaxTreeNode.ts";
import {createSourceFileContentConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/source-file-content/createSourcefileContentConcreteSyntaxTreeNode.ts";
import {createWhitespaceSegmentConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/whitespace-segment/createWhitespaceSegmentConcreteSyntaxTreeNode.ts";
import {createWhitespaceSegmentsConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/whitespace-segments/createWhitespaceSegmentsConcreteSyntaxTreeNode.ts";
import type {WhitespaceConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/whitespace/WhitespaceConcreteSyntaxTreeNode.ts";
import type {Parser} from "../../Parser.ts";
import {BlockContentParser} from "../block-content/BlockContentParser.ts";
import {FunctionHeaderFinalWhitespaceSegmentsParser} from "../function-header-final-whitespace-segments/FunctionHeaderFinalWhitespaceSegmentsParser.ts";
import {FunctionHeaderKnownSegmentContentParser} from "../function-header-known-segment-content/FunctionHeaderKnownSegmentContentParser.ts";
import {FunctionHeaderUnknownSegmentContentParser} from "../function-header-unknown-segment-content-parser/FunctionHeaderUnknownSegmentContentParser.ts";
import {FunctionHeaderWordSegmentIdentifierSegmentsParser} from "../function-header-word-segment-identifier-segments/FunctionHeaderWordSegmentIdentifierSegmentsParser.ts";
export class FunctionHeaderParser implements Parser {
	private readonly functionBodyStartingIndex: Index;
	private readonly functionBody: FunctionBodyConcreteSyntaxTreeNode;
	private readonly functionEndingIndex: Index;
	private readonly functionsRestFunctions:
		| FunctionsSeparatedRestFunctionsConcreteSyntaxTreeNode
		| null
		| FunctionsConcreteSyntaxTreeNode;
	private readonly functionsEndingIndex: Index;
	private readonly sourceFileContentFinalWhitespace: WhitespaceConcreteSyntaxTreeNode | null;
	public constructor(
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
		this.functionBodyStartingIndex = functionBodyStartingIndex;
		this.functionBody = functionBody;
		this.functionEndingIndex = functionEndingIndex;
		this.functionsRestFunctions = functionsRestFunctions;
		this.functionsEndingIndex = functionsEndingIndex;
		this.sourceFileContentFinalWhitespace = sourceFileContentFinalWhitespace;
		this.sourceFileContentEndingIndex = sourceFileContentEndingIndex;
	}
	private readonly sourceFileContentEndingIndex: Index;
	public parseWhitespace(character: WhitespaceCharacter, index: Index) {
		const functionHeaderFinalWhitespaceSegmentsFirstSegment =
			createWhitespaceSegmentConcreteSyntaxTreeNode(character, index);
		const functionHeaderFinalWhitespaceSegments = createWhitespaceSegmentsConcreteSyntaxTreeNode(
			functionHeaderFinalWhitespaceSegmentsFirstSegment,
			null,
			{
				starting: index,
				ending: index,
			},
		);
		const functionHeaderFinalWhitespaceSegmentsParser =
			new FunctionHeaderFinalWhitespaceSegmentsParser(
				index,
				functionHeaderFinalWhitespaceSegments,
				index,
				index,
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
		throw new Error("Not implemented.");
	}
	public parseClosingSquareBracket(
		character: ClosingSquareBracketCharacter,
		index: Index,
	): FunctionHeaderUnknownSegmentContentParser {
		const functionHeaderUnknownSegmentClosingBracket =
			createFunctionHeaderUnknownSegmentClosingBracketConcreteSyntaxTreeNode(character, index);
		const functionHeaderUnknownSegmentContentParser = new FunctionHeaderUnknownSegmentContentParser(
			functionHeaderUnknownSegmentClosingBracket,
			index,
			null,
			index,
			null,
			index,
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
		throw new Error("Not implemented.");
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
		const functions = createFunctionsConcreteSyntaxTreeNode(
			function_,
			this.functionsRestFunctions,
			{
				starting: this.functionBodyStartingIndex,
				ending: this.functionsEndingIndex,
			},
		);
		const functionBlockContentParser = new BlockContentParser(
			blockClosingBracket,
			index,
			[] as const,
			index,
			index,
			functions,
			this.functionsEndingIndex,
			this.sourceFileContentFinalWhitespace,
			this.sourceFileContentEndingIndex,
		);
		return functionBlockContentParser;
	}
	public parseOpeningRoundBracket(): never {
		throw new Error("Not implemented");
	}
	public parseClosingRoundBracket(
		character: ClosingRoundBracketCharacter,
		index: Index,
	): FunctionHeaderKnownSegmentContentParser {
		const functionHeaderKnownSegmentClosingBracket =
			createFunctionHeaderKnownSegmentClosingBracketConcreteSyntaxTreeNode(character, index);
		const functionHeaderKnownSegmentContentParser = new FunctionHeaderKnownSegmentContentParser(
			functionHeaderKnownSegmentClosingBracket,
			index,
			null,
			index,
			null,
			index,
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
		const functionHeaderWordSegmentIdentifierSegmentsParser =
			new FunctionHeaderWordSegmentIdentifierSegmentsParser(
				index,
				functionHeaderWordSegmentIdentifierSegments,
				index,
				index,
				index,
				null,
				index,
				null,
				index,
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
		throw new Error("Not implemented");
	}
	public finalize() {
		const function_ = createFunctionConcreteSyntaxTreeNode(null, this.functionBody, {
			starting: this.functionBodyStartingIndex,
			ending: this.functionEndingIndex,
		});
		const functions = createFunctionsConcreteSyntaxTreeNode(
			function_,
			this.functionsRestFunctions,
			{
				starting: this.functionBodyStartingIndex,
				ending: this.functionsEndingIndex,
			},
		);
		const sourceFileContent = createSourceFileContentConcreteSyntaxTreeNode(
			null,
			functions,
			this.sourceFileContentFinalWhitespace,
			{
				starting: this.functionBodyStartingIndex,
				ending: this.sourceFileContentEndingIndex,
			},
		);
		return sourceFileContent;
	}
}
