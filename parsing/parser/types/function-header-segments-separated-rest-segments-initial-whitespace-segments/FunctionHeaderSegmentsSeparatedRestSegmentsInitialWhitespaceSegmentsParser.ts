import type {ClosingCurlyBracketCharacter} from "../../../../characters/closing-curly-bracket/ClosingCurlyBracketCharacter.ts";
import type {ClosingRoundBracketCharacter} from "../../../../characters/closing-round-bracket/ClosingRoundBracketCharacter.ts";
import type {ClosingSquareBracketCharacter} from "../../../../characters/closing-square-bracket/ClosingSquareBracketCharacter.ts";
import type {IdentifierCharacter} from "../../../../characters/identifier/IdentifierCharacter.ts";
import type {WhitespaceCharacter} from "../../../../characters/whitespace/WhitespaceCharacter.ts";
import type {Index} from "../../../../concrete-syntax-tree/index/Index.ts";
import {createBlockClosingBracketConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/block-closing-bracket/createBlockClosingBracketConcreteSyntaxTreeNode.ts";
import type {FunctionBodyConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/function-body/FunctionBodyConcreteSyntaxTreeNode.ts";
import {createFunctionHeaderKnownSegmentClosingBracketConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/function-header-known-segment-closing-bracket/createFunctionHeaderKnownSegmentClosingBracketConcreteSyntaxTreeNode.ts";
import type {FunctionHeaderKnownStartingSegmentsConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/function-header-known-starting-segments/FunctionHeaderKnownStartingSegmentsConcreteSyntaxTreeNode.ts";
import {createFunctionHeaderSegmentsSeparatedRestSegmentsConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/function-header-segments-separated-rest-segments/createFunctionHeaderSegmentsSeparatedRestSegmentsConcreteSyntaxTreeNode.ts";
import type {FunctionHeaderSegmentsSeparatedRestSegmentsConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/function-header-segments-separated-rest-segments/FunctionHeaderSegmentsSeparatedRestSegmentsConcreteSyntaxTreeNode.ts";
import {createFunctionHeaderUnknownSegmentClosingBracketConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/function-header-unknown-segment-closing-bracket/createFunctionHeaderUnknownSegmentClosingBracketConcreteSyntaxTreeNode.ts";
import type {FunctionHeaderUnknownStartingSegmentsConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/function-header-unknown-starting-segments/FunctionHeaderUnknownStartingSegmentsConcreteSyntaxTreeNode.ts";
import type {FunctionHeaderWordStartingSegmentsConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/function-header-word-starting-segments/FunctionHeaderWordStartingSegmentsConcreteSyntaxTreeNode.ts";
import {createFunctionHeaderConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/function-header/createFunctionHeaderConcreteSyntaxTreeNode.ts";
import type {FunctionHeaderConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/function-header/FunctionHeaderConcreteSyntaxTreeNode.ts";
import {createFunctionConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/function/createFunctionConcreteSyntaxTreeNode.ts";
import type {FunctionConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/function/FunctionConcreteSyntaxTreeNode.ts";
import {createFunctionsSeparatedRestFunctionsConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/functions-separated-rest-functions/createFunctionsSeparatedRestFunctionsConcreteSyntaxTreeNode.ts";
import type {FunctionsSeparatedRestFunctionsConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/functions-separated-rest-functions/FunctionsSeparatedRestFunctionsConcreteSyntaxTreeNode.ts";
import {createFunctionsConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/functions/createFunctionsConcreteSyntaxTreeNode.ts";
import type {FunctionsConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/functions/FunctionsConcreteSyntaxTreeNode.ts";
import {createIdentifierSegmentConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/identifier-segment/createIdentifierSegmentConcreteSyntaxTreeNode.ts";
import {createIdentifierSegmentsConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/identifier-segments/createIdentifierSegmentsConcreteSyntaxTreeNode.ts";
import type {IdentifierSegmentsConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/identifier-segments/IdentifierSegmentsConcreteSyntaxTreeNode.ts";
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
export class FunctionHeaderSegmentsSeparatedRestSegmentsInitialWhitespaceSegmentsParser
	implements Parser
{
	private readonly functionHeaderSegmentsSeparatedRestSegmentsInitialWhitespaceSegments: WhitespaceSegmentsConcreteSyntaxTreeNode;
	private readonly functionHeaderSegmentsSeparatedRestSegmentsSegments:
		| FunctionHeaderKnownStartingSegmentsConcreteSyntaxTreeNode
		| FunctionHeaderUnknownStartingSegmentsConcreteSyntaxTreeNode
		| FunctionHeaderWordStartingSegmentsConcreteSyntaxTreeNode;
	private readonly functionHeaderFinalWhitespace: WhitespaceConcreteSyntaxTreeNode | null;
	private readonly functionBody: FunctionBodyConcreteSyntaxTreeNode;
	private readonly functionsRestFunctions:
		| FunctionsSeparatedRestFunctionsConcreteSyntaxTreeNode
		| null
		| FunctionsConcreteSyntaxTreeNode;
	private readonly sourceFileContentFinalWhitespace: WhitespaceConcreteSyntaxTreeNode | null;
	public constructor(
		functionHeaderSegmentsSeparatedRestSegmentsInitialWhitespaceSegmentsStartingIndex: Index,
		functionHeaderSegmentsSeparatedRestSegmentsInitialWhitespaceSegments: WhitespaceSegmentsConcreteSyntaxTreeNode,
		functionHeaderSegmentsSeparatedRestSegmentsInitialWhitespaceEndingIndex: Index,
		functionHeaderSegmentsSeparatedRestSegmentsSegmentsStartingIndex: Index,
		functionHeaderSegmentsSeparatedRestSegmentsSegments:
			| FunctionHeaderKnownStartingSegmentsConcreteSyntaxTreeNode
			| FunctionHeaderUnknownStartingSegmentsConcreteSyntaxTreeNode
			| FunctionHeaderWordStartingSegmentsConcreteSyntaxTreeNode,
		functionHeaderSegmentsEndingIndex: Index,
		functionHeaderFinalWhitespace: WhitespaceConcreteSyntaxTreeNode | null,
		functionHeaderEndingIndex: Index,
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
		this.functionHeaderSegmentsSeparatedRestSegmentsInitialWhitespaceSegmentsStartingIndex =
			functionHeaderSegmentsSeparatedRestSegmentsInitialWhitespaceSegmentsStartingIndex;
		this.functionHeaderSegmentsSeparatedRestSegmentsInitialWhitespaceSegments =
			functionHeaderSegmentsSeparatedRestSegmentsInitialWhitespaceSegments;
		this.functionHeaderSegmentsSeparatedRestSegmentsInitialWhitespaceEndingIndex =
			functionHeaderSegmentsSeparatedRestSegmentsInitialWhitespaceEndingIndex;
		this.functionHeaderSegmentsSeparatedRestSegmentsSegmentsStartingIndex =
			functionHeaderSegmentsSeparatedRestSegmentsSegmentsStartingIndex;
		this.functionHeaderSegmentsSeparatedRestSegmentsSegments =
			functionHeaderSegmentsSeparatedRestSegmentsSegments;
		this.functionHeaderSegmentsEndingIndex = functionHeaderSegmentsEndingIndex;
		this.functionHeaderFinalWhitespace = functionHeaderFinalWhitespace;
		this.functionHeaderEndingIndex = functionHeaderEndingIndex;
		this.functionBody = functionBody;
		this.functionEndingIndex = functionEndingIndex;
		this.functionsRestFunctions = functionsRestFunctions;
		this.functionsEndingIndex = functionsEndingIndex;
		this.sourceFileContentFinalWhitespace = sourceFileContentFinalWhitespace;
		this.sourceFileContentEndingIndex = sourceFileContentEndingIndex;
	}
	private readonly functionHeaderSegmentsSeparatedRestSegmentsSegmentsStartingIndex: Index;
	private readonly functionHeaderSegmentsSeparatedRestSegmentsInitialWhitespaceEndingIndex: Index;
	private readonly functionHeaderSegmentsSeparatedRestSegmentsInitialWhitespaceSegmentsStartingIndex: Index;
	private readonly functionHeaderSegmentsEndingIndex: Index;
	private readonly functionHeaderEndingIndex: Index;
	private readonly functionEndingIndex: Index;
	private readonly functionsEndingIndex: Index;
	private readonly sourceFileContentEndingIndex: Index;
	public parseWhitespace(
		character: WhitespaceCharacter,
		index: Index,
	): FunctionHeaderSegmentsSeparatedRestSegmentsInitialWhitespaceSegmentsParser {
		const newFunctionHeaderSegmentsSeparatedRestSegmentsInitialWhitespaceSegmentsFirstSegment =
			createWhitespaceSegmentConcreteSyntaxTreeNode(character, index);
		const newFunctionHeaderSegmentsSeparatedRestSegmentsInitialWhitespaceSegments =
			createWhitespaceSegmentsConcreteSyntaxTreeNode(
				newFunctionHeaderSegmentsSeparatedRestSegmentsInitialWhitespaceSegmentsFirstSegment,
				this.functionHeaderSegmentsSeparatedRestSegmentsInitialWhitespaceSegments,
				{
					starting: index,
					ending: index,
				},
			);
		const functionHeaderSegmentsSeparatedRestSegmentsInitialWhitespaceSegmentsParser =
			new FunctionHeaderSegmentsSeparatedRestSegmentsInitialWhitespaceSegmentsParser(
				index,
				newFunctionHeaderSegmentsSeparatedRestSegmentsInitialWhitespaceSegments,
				this.functionHeaderSegmentsSeparatedRestSegmentsInitialWhitespaceEndingIndex,
				this.functionHeaderSegmentsSeparatedRestSegmentsSegmentsStartingIndex,
				this.functionHeaderSegmentsSeparatedRestSegmentsSegments,
				this.functionHeaderSegmentsEndingIndex,
				this.functionHeaderFinalWhitespace,
				this.functionHeaderEndingIndex,
				this.functionBody,
				this.functionEndingIndex,
				this.functionsRestFunctions,
				this.functionsEndingIndex,
				this.sourceFileContentFinalWhitespace,
				this.sourceFileContentEndingIndex,
			);
		return functionHeaderSegmentsSeparatedRestSegmentsInitialWhitespaceSegmentsParser;
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
			this.functionHeaderSegmentsSeparatedRestSegmentsSegments,
			this.functionHeaderSegmentsEndingIndex,
			this.functionHeaderFinalWhitespace,
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
		throw new Error("Not implemented.");
	}
	public parseClosingCurlyBracket(
		character: ClosingCurlyBracketCharacter,
		index: Index,
	): BlockContentParser {
		const blockClosingBracket = createBlockClosingBracketConcreteSyntaxTreeNode(character, index);
		const functionHeader: FunctionHeaderConcreteSyntaxTreeNode =
			createFunctionHeaderConcreteSyntaxTreeNode(
				this.functionHeaderSegmentsSeparatedRestSegmentsSegments,
				this.functionHeaderFinalWhitespace,
				{
					starting:
						this.functionHeaderSegmentsSeparatedRestSegmentsInitialWhitespaceSegmentsStartingIndex,
					ending: this.functionHeaderEndingIndex,
				},
			);
		const function_: FunctionConcreteSyntaxTreeNode = createFunctionConcreteSyntaxTreeNode(
			functionHeader,
			this.functionBody,
			{
				starting:
					this.functionHeaderSegmentsSeparatedRestSegmentsInitialWhitespaceSegmentsStartingIndex,
				ending: this.functionEndingIndex,
			},
		);
		const functionHeaderSegmentsSeparatedRestSegmentsInitialWhitespace =
			createWhitespaceConcreteSyntaxTreeNode(
				this.functionHeaderSegmentsSeparatedRestSegmentsInitialWhitespaceSegments,
				{
					starting:
						this.functionHeaderSegmentsSeparatedRestSegmentsInitialWhitespaceSegmentsStartingIndex,
					ending: this.functionHeaderSegmentsSeparatedRestSegmentsInitialWhitespaceEndingIndex,
				},
			);
		const functionsSeparatedRestFunctionsFunctions: FunctionsConcreteSyntaxTreeNode =
			createFunctionsConcreteSyntaxTreeNode(function_, this.functionsRestFunctions, {
				starting: this.functionHeaderSegmentsSeparatedRestSegmentsSegmentsStartingIndex,
				ending: this.functionsEndingIndex,
			});
		const functionsSeparatedRestFunctions: FunctionsSeparatedRestFunctionsConcreteSyntaxTreeNode =
			createFunctionsSeparatedRestFunctionsConcreteSyntaxTreeNode(
				functionHeaderSegmentsSeparatedRestSegmentsInitialWhitespace,
				functionsSeparatedRestFunctionsFunctions,
				{
					starting:
						this.functionHeaderSegmentsSeparatedRestSegmentsInitialWhitespaceSegmentsStartingIndex,
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
		throw new Error("Not implemented.");
	}
	public parseClosingRoundBracket(
		character: ClosingRoundBracketCharacter,
		index: Index,
	): FunctionHeaderKnownSegmentContentParser {
		const functionHeaderKnownSegmentClosingBracket =
			createFunctionHeaderKnownSegmentClosingBracketConcreteSyntaxTreeNode(character, index);
		const functionHeaderSegmentsSeparatedRestSegmentsInitialWhitespace =
			createWhitespaceConcreteSyntaxTreeNode(
				this.functionHeaderSegmentsSeparatedRestSegmentsInitialWhitespaceSegments,
				{
					starting:
						this.functionHeaderSegmentsSeparatedRestSegmentsInitialWhitespaceSegmentsStartingIndex,
					ending: this.functionHeaderSegmentsSeparatedRestSegmentsInitialWhitespaceEndingIndex,
				},
			);
		const functionHeaderSegmentsSeparatedRestSegments: FunctionHeaderSegmentsSeparatedRestSegmentsConcreteSyntaxTreeNode =
			createFunctionHeaderSegmentsSeparatedRestSegmentsConcreteSyntaxTreeNode(
				functionHeaderSegmentsSeparatedRestSegmentsInitialWhitespace,
				this.functionHeaderSegmentsSeparatedRestSegmentsSegments,
				{
					starting:
						this.functionHeaderSegmentsSeparatedRestSegmentsInitialWhitespaceSegmentsStartingIndex,
					ending: this.functionHeaderSegmentsEndingIndex,
				},
			);
		const functionHeaderKnownSegmentContentParser = new FunctionHeaderKnownSegmentContentParser(
			functionHeaderKnownSegmentClosingBracket,
			index,
			functionHeaderSegmentsSeparatedRestSegments,
			this.functionHeaderSegmentsEndingIndex,
			this.functionHeaderFinalWhitespace,
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
		const functionHeaderWordSegmentIdentifierSegments: IdentifierSegmentsConcreteSyntaxTreeNode =
			createIdentifierSegmentsConcreteSyntaxTreeNode(
				functionHeaderWordSegmentIdentifierSegmentsFirstSegment,
				null,
				{
					starting: index,
					ending: index,
				},
			);
		const functionHeaderSegmentsSeparatedRestSegmentsInitialWhitespace =
			createWhitespaceConcreteSyntaxTreeNode(
				this.functionHeaderSegmentsSeparatedRestSegmentsInitialWhitespaceSegments,
				{
					starting:
						this.functionHeaderSegmentsSeparatedRestSegmentsInitialWhitespaceSegmentsStartingIndex,
					ending: this.functionHeaderSegmentsSeparatedRestSegmentsInitialWhitespaceEndingIndex,
				},
			);
		const functionHeaderSegmentsSeparatedRestSegments: FunctionHeaderSegmentsSeparatedRestSegmentsConcreteSyntaxTreeNode =
			createFunctionHeaderSegmentsSeparatedRestSegmentsConcreteSyntaxTreeNode(
				functionHeaderSegmentsSeparatedRestSegmentsInitialWhitespace,
				this.functionHeaderSegmentsSeparatedRestSegmentsSegments,
				{
					starting:
						this.functionHeaderSegmentsSeparatedRestSegmentsInitialWhitespaceSegmentsStartingIndex,
					ending: this.functionHeaderSegmentsEndingIndex,
				},
			);
		const functionHeaderWordSegmentIdentifierSegmentsParser =
			new FunctionHeaderWordSegmentIdentifierSegmentsParser(
				index,
				functionHeaderWordSegmentIdentifierSegments,
				index,
				index,
				index,
				functionHeaderSegmentsSeparatedRestSegments,
				this.functionHeaderSegmentsEndingIndex,
				this.functionHeaderFinalWhitespace,
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
		throw new Error("Not implemented.");
	}
	public finalize(): SourceFileContentConcreteSyntaxTreeNode {
		const sourceFileContentInitialWhitespace = createWhitespaceConcreteSyntaxTreeNode(
			this.functionHeaderSegmentsSeparatedRestSegmentsInitialWhitespaceSegments,
			{
				starting:
					this.functionHeaderSegmentsSeparatedRestSegmentsInitialWhitespaceSegmentsStartingIndex,
				ending: this.functionHeaderSegmentsSeparatedRestSegmentsInitialWhitespaceEndingIndex,
			},
		);
		const functionHeader = createFunctionHeaderConcreteSyntaxTreeNode(
			this.functionHeaderSegmentsSeparatedRestSegmentsSegments,
			this.functionHeaderFinalWhitespace,
			{
				starting: this.functionHeaderSegmentsSeparatedRestSegmentsSegmentsStartingIndex,
				ending: this.functionHeaderEndingIndex,
			},
		);
		const function_ = createFunctionConcreteSyntaxTreeNode(functionHeader, this.functionBody, {
			starting: this.functionHeaderSegmentsSeparatedRestSegmentsSegmentsStartingIndex,
			ending: this.functionEndingIndex,
		});
		const functions = createFunctionsConcreteSyntaxTreeNode(
			function_,
			this.functionsRestFunctions,
			{
				starting: this.functionHeaderSegmentsSeparatedRestSegmentsSegmentsStartingIndex,
				ending: this.functionsEndingIndex,
			},
		);
		const sourceFileContent = createSourceFileContentConcreteSyntaxTreeNode(
			sourceFileContentInitialWhitespace,
			functions,
			this.sourceFileContentFinalWhitespace,
			{
				starting:
					this.functionHeaderSegmentsSeparatedRestSegmentsInitialWhitespaceSegmentsStartingIndex,
				ending: this.sourceFileContentEndingIndex,
			},
		);
		return sourceFileContent;
	}
}
