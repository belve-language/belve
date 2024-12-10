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
import type {FunctionHeaderSegmentsSeparatedRestSegmentsConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/function-header-segments-separated-rest-segments/FunctionHeaderSegmentsSeparatedRestSegmentsConcreteSyntaxTreeNode.ts";
import {createFunctionHeaderUnknownSegmentClosingBracketConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/function-header-unknown-segment-closing-bracket/createFunctionHeaderUnknownSegmentClosingBracketConcreteSyntaxTreeNode.ts";
import type {FunctionHeaderUnknownStartingSegmentsConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/function-header-unknown-starting-segments/FunctionHeaderUnknownStartingSegmentsConcreteSyntaxTreeNode.ts";
import {createFunctionHeaderWordSegmentConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/function-header-word-segment/createFunctionHeaderWordSegmentConcreteSyntaxTreeNode.ts";
import {createFunctionHeaderWordStartingSegmentsConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/function-header-word-starting-segments/createFunctionHeaderWordStartingSegmentsConcreteSyntaxTreeNode.ts";
import {createFunctionHeaderConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/function-header/createFunctionHeaderConcreteSyntaxTreeNode.ts";
import {createFunctionConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/function/createFunctionConcreteSyntaxTreeNode.ts";
import type {FunctionConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/function/FunctionConcreteSyntaxTreeNode.ts";
import type {FunctionsSeparatedRestFunctionsConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/functions-separated-rest-functions/FunctionsSeparatedRestFunctionsConcreteSyntaxTreeNode.ts";
import {createFunctionsConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/functions/createFunctionsConcreteSyntaxTreeNode.ts";
import type {FunctionsConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/functions/FunctionsConcreteSyntaxTreeNode.ts";
import {createIdentifierSegmentConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/identifier-segment/createIdentifierSegmentConcreteSyntaxTreeNode.ts";
import {createIdentifierSegmentsConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/identifier-segments/createIdentifierSegmentsConcreteSyntaxTreeNode.ts";
import type {IdentifierSegmentsConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/identifier-segments/IdentifierSegmentsConcreteSyntaxTreeNode.ts";
import {createIdentifierConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/identifier/createIdentifierConcreteSyntaxTreeNode.ts";
import {createSourceFileContentConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/source-file-content/createSourcefileContentConcreteSyntaxTreeNode.ts";
import type {SourceFileContentConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/source-file-content/SourceFileContentConcreteSyntaxTreeNode.ts";
import {createWhitespaceSegmentConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/whitespace-segment/createWhitespaceSegmentConcreteSyntaxTreeNode.ts";
import {createWhitespaceSegmentsConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/whitespace-segments/createWhitespaceSegmentsConcreteSyntaxTreeNode.ts";
import type {WhitespaceConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/whitespace/WhitespaceConcreteSyntaxTreeNode.ts";
import type {Parser} from "../../Parser.ts";
import {BlockContentParser} from "../block-content/BlockContentParser.ts";
import {FunctionHeaderKnownSegmentContentParser} from "../function-header-known-segment-content/FunctionHeaderKnownSegmentContentParser.ts";
import {FunctionHeaderSegmentsSeparatedRestSegmentsInitialWhitespaceSegmentsParser} from "../function-header-segments-separated-rest-segments-initial-whitespace-segments/FunctionHeaderSegmentsSeparatedRestSegmentsInitialWhitespaceSegmentsParser.ts";
import {FunctionHeaderUnknownSegmentContentParser} from "../function-header-unknown-segment-content-parser/FunctionHeaderUnknownSegmentContentParser.ts";
export class FunctionHeaderWordSegmentIdentifierSegmentsParser implements Parser {
	private readonly functionHeaderWordSegmentIdentifierSegmentsStartingIndex: Index;
	private readonly functionHeaderWordSegmentIdentifierSegments: IdentifierSegmentsConcreteSyntaxTreeNode;
	private readonly functionHeaderWordStartingSegmentsRestSegments:
		| FunctionHeaderKnownStartingSegmentsConcreteSyntaxTreeNode
		| FunctionHeaderUnknownStartingSegmentsConcreteSyntaxTreeNode
		| null
		| FunctionHeaderSegmentsSeparatedRestSegmentsConcreteSyntaxTreeNode;
	private readonly functionHeaderFinalWhitespace: WhitespaceConcreteSyntaxTreeNode | null;
	private readonly functionBody: FunctionBodyConcreteSyntaxTreeNode;
	private readonly functionHeaderWordSegmentIdentifierSegmentsEndingIndex: Index;
	private readonly functionsRestFunctions:
		| FunctionsSeparatedRestFunctionsConcreteSyntaxTreeNode
		| null
		| FunctionsConcreteSyntaxTreeNode;
	private readonly sourceFileContentFinalWhitespace: WhitespaceConcreteSyntaxTreeNode | null;
	public constructor(
		functionHeaderWordSegmentIdentifierSegmentsStartingIndex: Index,
		functionHeaderWordSegmentIdentifierSegments: IdentifierSegmentsConcreteSyntaxTreeNode,
		functionHeaderWordSegmentIdentifierSegmentsEndingIndex: Index,
		functionHeaderWordSegmentIdentifierEndingIndex: Index,
		functionHeaderWordSegmentEndingIndex: Index,
		functionHeaderWordStartingSegmentsRestSegments:
			| FunctionHeaderKnownStartingSegmentsConcreteSyntaxTreeNode
			| FunctionHeaderUnknownStartingSegmentsConcreteSyntaxTreeNode
			| null
			| FunctionHeaderSegmentsSeparatedRestSegmentsConcreteSyntaxTreeNode,
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
		this.functionHeaderWordSegmentIdentifierSegmentsStartingIndex =
			functionHeaderWordSegmentIdentifierSegmentsStartingIndex;
		this.functionHeaderWordSegmentIdentifierSegments = functionHeaderWordSegmentIdentifierSegments;
		this.functionHeaderWordSegmentIdentifierSegmentsEndingIndex =
			functionHeaderWordSegmentIdentifierSegmentsEndingIndex;
		this.functionHeaderWordSegmentIdentifierEndingIndex =
			functionHeaderWordSegmentIdentifierEndingIndex;
		this.functionHeaderWordSegmentEndingIndex = functionHeaderWordSegmentEndingIndex;
		this.functionHeaderWordStartingSegmentsRestSegments =
			functionHeaderWordStartingSegmentsRestSegments;
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
	private readonly functionHeaderWordSegmentIdentifierEndingIndex: Index;
	private readonly functionHeaderWordSegmentEndingIndex: Index;
	private readonly functionHeaderSegmentsEndingIndex: Index;
	private readonly functionHeaderEndingIndex: Index;
	private readonly sourceFileContentEndingIndex: Index;
	private readonly functionEndingIndex: Index;
	private readonly functionsEndingIndex: Index;
	public parseWhitespace(
		character: WhitespaceCharacter,
		index: Index,
	): FunctionHeaderSegmentsSeparatedRestSegmentsInitialWhitespaceSegmentsParser {
		const functionHeaderSegmentsSeparatedRestSegmentsInitialWhitespaceSegmentsFirstSegment =
			createWhitespaceSegmentConcreteSyntaxTreeNode(character, index);
		const functionHeaderSegmentsSeparatedRestSegmentsInitialWhitespaceSegments =
			createWhitespaceSegmentsConcreteSyntaxTreeNode(
				functionHeaderSegmentsSeparatedRestSegmentsInitialWhitespaceSegmentsFirstSegment,
				null,
				{
					starting: index,
					ending: index,
				},
			);
		const functionHeaderWordSegmentIdentifier = createIdentifierConcreteSyntaxTreeNode(
			this.functionHeaderWordSegmentIdentifierSegments,
			{
				starting: this.functionHeaderWordSegmentIdentifierSegmentsStartingIndex,
				ending: this.functionHeaderWordSegmentIdentifierEndingIndex,
			},
		);
		const functionHeaderWordSegment = createFunctionHeaderWordSegmentConcreteSyntaxTreeNode(
			functionHeaderWordSegmentIdentifier,
			{
				starting: this.functionHeaderWordSegmentIdentifierSegmentsStartingIndex,
				ending: this.functionHeaderWordSegmentEndingIndex,
			},
		);
		const functionHeaderWordStartingSegments =
			createFunctionHeaderWordStartingSegmentsConcreteSyntaxTreeNode(
				functionHeaderWordSegment,
				this.functionHeaderWordStartingSegmentsRestSegments,
				{
					starting: this.functionHeaderWordSegmentIdentifierSegmentsStartingIndex,
					ending: this.functionHeaderSegmentsEndingIndex,
				},
			);
		const functionHeaderSegmentsSeparatedRestSegmentsIntialWhitespaceSegmentsParser =
			new FunctionHeaderSegmentsSeparatedRestSegmentsInitialWhitespaceSegmentsParser(
				index,
				functionHeaderSegmentsSeparatedRestSegmentsInitialWhitespaceSegments,
				index,
				this.functionHeaderWordSegmentIdentifierSegmentsStartingIndex,
				functionHeaderWordStartingSegments,
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
		return functionHeaderSegmentsSeparatedRestSegmentsIntialWhitespaceSegmentsParser;
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
		const functionHeaderWordSegmentIdentifier = createIdentifierConcreteSyntaxTreeNode(
			this.functionHeaderWordSegmentIdentifierSegments,
			{
				starting: this.functionHeaderWordSegmentIdentifierSegmentsStartingIndex,
				ending: this.functionHeaderWordSegmentIdentifierEndingIndex,
			},
		);
		const functionHeaderWordSegment = createFunctionHeaderWordSegmentConcreteSyntaxTreeNode(
			functionHeaderWordSegmentIdentifier,
			{
				starting: this.functionHeaderWordSegmentIdentifierSegmentsStartingIndex,
				ending: this.functionHeaderWordSegmentEndingIndex,
			},
		);
		const functionHeaderWordStartingSegments =
			createFunctionHeaderWordStartingSegmentsConcreteSyntaxTreeNode(
				functionHeaderWordSegment,
				this.functionHeaderWordStartingSegmentsRestSegments,
				{
					starting: this.functionHeaderWordSegmentIdentifierSegmentsStartingIndex,
					ending: this.functionHeaderSegmentsEndingIndex,
				},
			);
		const functionHeaderUnknownSegmentContentFinalWhitespaceSegmentsParser =
			new FunctionHeaderUnknownSegmentContentParser(
				functionHeaderUnknownSegmentClosingBracket,
				index,
				functionHeaderWordStartingSegments,
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
		return functionHeaderUnknownSegmentContentFinalWhitespaceSegmentsParser;
	}
	public parseOpeningCurlyBracket(): never {
		throw new Error("Not implemented.");
	}
	public parseClosingCurlyBracket(
		character: ClosingCurlyBracketCharacter,
		index: Index,
	): BlockContentParser {
		const blockClosingBracket = createBlockClosingBracketConcreteSyntaxTreeNode(character, index);
		const functionHeaderWordSegmentIdentifier = createIdentifierConcreteSyntaxTreeNode(
			this.functionHeaderWordSegmentIdentifierSegments,
			{
				starting: this.functionHeaderWordSegmentIdentifierSegmentsStartingIndex,
				ending: this.functionHeaderWordSegmentIdentifierEndingIndex,
			},
		);
		const functionHeaderWordSegment = createFunctionHeaderWordSegmentConcreteSyntaxTreeNode(
			functionHeaderWordSegmentIdentifier,
			{
				starting: this.functionHeaderWordSegmentIdentifierSegmentsStartingIndex,
				ending: this.functionHeaderWordSegmentEndingIndex,
			},
		);
		const functionHeaderWordStartingSegments =
			createFunctionHeaderWordStartingSegmentsConcreteSyntaxTreeNode(
				functionHeaderWordSegment,
				this.functionHeaderWordStartingSegmentsRestSegments,
				{
					starting: this.functionHeaderWordSegmentIdentifierSegmentsStartingIndex,
					ending: this.functionHeaderSegmentsEndingIndex,
				},
			);
		const functionHeader = createFunctionHeaderConcreteSyntaxTreeNode(
			functionHeaderWordStartingSegments,
			this.functionHeaderFinalWhitespace,
			{
				starting: this.functionHeaderWordSegmentIdentifierSegmentsStartingIndex,
				ending: this.functionHeaderEndingIndex,
			},
		);
		const function_ = createFunctionConcreteSyntaxTreeNode(functionHeader, this.functionBody, {
			starting: this.functionHeaderWordSegmentIdentifierSegmentsStartingIndex,
			ending: this.functionEndingIndex,
		});
		const functions = createFunctionsConcreteSyntaxTreeNode(
			function_,
			this.functionsRestFunctions,
			{
				starting: this.functionHeaderWordSegmentIdentifierSegmentsStartingIndex,
				ending: this.functionsEndingIndex,
			},
		);
		const blockContentParser = new BlockContentParser(
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
		const functionHeaderWordSegmentIdentifier = createIdentifierConcreteSyntaxTreeNode(
			this.functionHeaderWordSegmentIdentifierSegments,
			{
				starting: this.functionHeaderWordSegmentIdentifierSegmentsStartingIndex,
				ending: this.functionHeaderWordSegmentIdentifierEndingIndex,
			},
		);
		const functionHeaderWordSegment = createFunctionHeaderWordSegmentConcreteSyntaxTreeNode(
			functionHeaderWordSegmentIdentifier,
			{
				starting: this.functionHeaderWordSegmentIdentifierSegmentsStartingIndex,
				ending: this.functionHeaderWordSegmentEndingIndex,
			},
		);
		const functionHeaderWordStartingSegments =
			createFunctionHeaderWordStartingSegmentsConcreteSyntaxTreeNode(
				functionHeaderWordSegment,
				this.functionHeaderWordStartingSegmentsRestSegments,
				{
					starting: this.functionHeaderWordSegmentIdentifierSegmentsStartingIndex,
					ending: this.functionHeaderSegmentsEndingIndex,
				},
			);
		const functionHeaderKnownSegmentContentParser = new FunctionHeaderKnownSegmentContentParser(
			functionHeaderKnownSegmentClosingBracket,
			index,
			functionHeaderWordStartingSegments,
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
		const newFunctionHeaderWordSegmentIdentifierSegmentsFirstSegment =
			createIdentifierSegmentConcreteSyntaxTreeNode(character, index);
		const newFunctionHeaderWordSegmentIdentifierSegments =
			createIdentifierSegmentsConcreteSyntaxTreeNode(
				newFunctionHeaderWordSegmentIdentifierSegmentsFirstSegment,
				this.functionHeaderWordSegmentIdentifierSegments,
				{
					starting: index,
					ending: this.functionHeaderWordSegmentIdentifierSegmentsEndingIndex,
				},
			);
		const functionHeaderWordSegmentIdentifierSegmentsParser =
			new FunctionHeaderWordSegmentIdentifierSegmentsParser(
				index,
				newFunctionHeaderWordSegmentIdentifierSegments,
				this.functionHeaderWordSegmentIdentifierSegmentsEndingIndex,
				this.functionHeaderWordSegmentIdentifierEndingIndex,
				this.functionHeaderWordSegmentEndingIndex,
				this.functionHeaderWordStartingSegmentsRestSegments,
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
		const functionHeaderWordSegmentIdentifier = createIdentifierConcreteSyntaxTreeNode(
			this.functionHeaderWordSegmentIdentifierSegments,
			{
				starting: this.functionHeaderWordSegmentIdentifierSegmentsStartingIndex,
				ending: this.functionHeaderWordSegmentIdentifierEndingIndex,
			},
		);
		const functionHeaderWordSegment = createFunctionHeaderWordSegmentConcreteSyntaxTreeNode(
			functionHeaderWordSegmentIdentifier,
			{
				starting: this.functionHeaderWordSegmentIdentifierSegmentsStartingIndex,
				ending: this.functionHeaderWordSegmentEndingIndex,
			},
		);
		const functionHeaderWordStartingSegments =
			createFunctionHeaderWordStartingSegmentsConcreteSyntaxTreeNode(
				functionHeaderWordSegment,
				this.functionHeaderWordStartingSegmentsRestSegments,
				{
					starting: this.functionHeaderWordSegmentIdentifierSegmentsStartingIndex,
					ending: this.functionHeaderSegmentsEndingIndex,
				},
			);
		const functionHeader = createFunctionHeaderConcreteSyntaxTreeNode(
			functionHeaderWordStartingSegments,
			this.functionHeaderFinalWhitespace,
			{
				starting: this.functionHeaderWordSegmentIdentifierSegmentsStartingIndex,
				ending: this.functionHeaderEndingIndex,
			},
		);
		const function_: FunctionConcreteSyntaxTreeNode = createFunctionConcreteSyntaxTreeNode(
			functionHeader,
			this.functionBody,
			{
				starting: this.functionHeaderWordSegmentIdentifierSegmentsStartingIndex,
				ending: this.functionEndingIndex,
			},
		);
		const functions: FunctionsConcreteSyntaxTreeNode = createFunctionsConcreteSyntaxTreeNode(
			function_,
			this.functionsRestFunctions,
			{
				starting: this.functionHeaderWordSegmentIdentifierSegmentsStartingIndex,
				ending: this.functionsEndingIndex,
			},
		);
		const sourceFileContent: SourceFileContentConcreteSyntaxTreeNode =
			createSourceFileContentConcreteSyntaxTreeNode(
				null,
				functions,
				this.sourceFileContentFinalWhitespace,
				{
					starting: this.functionHeaderWordSegmentIdentifierSegmentsStartingIndex,
					ending: this.sourceFileContentEndingIndex,
				},
			);
		return sourceFileContent;
	}
}
