import type {ClosingCurlyBracketCharacter} from "../../../../characters/ClosingCurlyBracketCharacter.ts";
import type {ClosingRoundBracketCharacter} from "../../../../characters/ClosingRoundBracketCharacter.ts";
import type {ClosingSquareBracketCharacter} from "../../../../characters/ClosingSquareBracketCharacter.ts";
import type {IdentifierCharacter} from "../../../../characters/IdentifierCharacter.ts";
import type {WhitespaceCharacter} from "../../../../characters/WhitespaceCharacter.ts";
import type {FunctionBodyConcreteTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/function-body/FunctionBodyConcreteTreeNode.ts";
import type {FunctionHeaderKnownStartingSegmentsConcreteTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/function-header-known-starting-segments/FunctionHeaderKnownStartingSegmentsConcreteTreeNode.ts";
import type {FunctionHeaderUnknownStartingSegmentsConcreteTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/function-header-unknown-starting-segments/FunctionHeaderUnknownStartingSegmentsConcreteTreeNode.ts";
import {createFunctionHeaderConcreteTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/function-header/createFunctionHeaderConcreteTreeNode.ts";
import type {FunctionHeaderConcreteTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/function-header/FunctionHeaderConcreteTreeNode.ts";
import {createFunctionConcreteTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/function/createFunctionConcreteTreeNode.ts";
import type {FunctionConcreteTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/function/FunctionConcreteTreeNode.ts";
import type {FunctionsSeparatedRestFunctionsConcreteTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/functions-separated-rest-functions/FunctionsSeparatedRestFunctionsConcreteTreeNode.ts";
import {createFunctionsConcreteTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/functions/createFunctionsConcreteTreeNode.ts";
import type {FunctionsConcreteTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/functions/FunctionsConcreteTreeNode.ts";
import {createIdentifierCharactersConcreteTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/identifier-characters/createIdentifierCharactersConcreteTreeNode.ts";
import type {IdentifierCharactersConcreteTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/identifier-characters/IdentifierCharactersConcreteTreeNode.ts";
import {createSourceFileContentConcreteTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/source-file-content/createSourcefileContentConcreteTreeNode.ts";
import type {SourceFileContentConcreteTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/source-file-content/SourceFileContentConcreteTreeNode.ts";
import {createWhitespaceCharactersConcreteTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/whitespace-characters/createWhitespaceCharactersConcreteTreeNode.ts";
import type {WhitespaceCharactersConcreteTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/whitespace-characters/WhitespaceCharactersConcreteTreeNode.ts";
import type {Parser} from "../../Parser.ts";
import {BlockContentParser} from "../block-content/BlockContentParser.ts";
import {FunctionHeaderKnownSegmentContentParser} from "../function-header-known-segment-content/FunctionHeaderKnownSegmentContentParser.ts";
import {FunctionHeaderSegmentsSeparatedRestSegmentsInitialWhitespaceCharactersParser} from "../function-header-segments-separated-rest-segments-initial-whitespace-characters/FunctionHeaderSegmentsSeparatedRestSegmentsInitialWhitespaceCharactersParser.ts";
import {FunctionHeaderUnknownSegmentContentParser} from "../function-header-unknown-segment-content-parser/FunctionHeaderUnknownSegmentContentParser.ts";
import {FunctionHeaderWordSegmentIdentifierCharactersParser} from "../function-header-word-segment-identifier-characters/FunctionHeaderWordSegmentIdentifierCharactersParser.ts";

export class FunctionHeaderSegmentsParser implements Parser {
	private readonly functionHeaderSegments:
		| FunctionHeaderUnknownStartingSegmentsConcreteTreeNode
		| FunctionHeaderKnownStartingSegmentsConcreteTreeNode;

	private readonly functionHeaderFinalWhitespaceCharacters: WhitespaceCharactersConcreteTreeNode | null;
	private readonly functionBody: FunctionBodyConcreteTreeNode;
	private readonly functionsRestFunctions:
		| FunctionsSeparatedRestFunctionsConcreteTreeNode
		| null
		| FunctionsConcreteTreeNode;

	private readonly sourceFileContentFinalWhitespaceCharacters: WhitespaceCharactersConcreteTreeNode | null;

	public constructor(
		functionHeaderSegments:
			| FunctionHeaderUnknownStartingSegmentsConcreteTreeNode
			| FunctionHeaderKnownStartingSegmentsConcreteTreeNode,

		functionHeaderFinalWhitespaceCharacters: WhitespaceCharactersConcreteTreeNode | null,
		functionBody: FunctionBodyConcreteTreeNode,
		functionsRestFunctions:
			| FunctionsSeparatedRestFunctionsConcreteTreeNode
			| null
			| FunctionsConcreteTreeNode,
		sourceFileContentFinalWhitespaceCharacters: WhitespaceCharactersConcreteTreeNode | null,
	) {
		this.functionHeaderSegments = functionHeaderSegments;
		this.functionHeaderFinalWhitespaceCharacters = functionHeaderFinalWhitespaceCharacters;
		this.functionBody = functionBody;
		this.functionsRestFunctions = functionsRestFunctions;
		this.sourceFileContentFinalWhitespaceCharacters = sourceFileContentFinalWhitespaceCharacters;
	}

	public parseWhitespace(
		character: WhitespaceCharacter,
	): FunctionHeaderSegmentsSeparatedRestSegmentsInitialWhitespaceCharactersParser {
		const functionHeaderSegmentsSeparatedRestSegmentsInitialWhitespaceCharacters: WhitespaceCharactersConcreteTreeNode =
			createWhitespaceCharactersConcreteTreeNode(character, null);

		const functionHeaderSegmentsSeparatedRestSegmentsInitialWhitespaceCharactersParser =
			new FunctionHeaderSegmentsSeparatedRestSegmentsInitialWhitespaceCharactersParser(
				functionHeaderSegmentsSeparatedRestSegmentsInitialWhitespaceCharacters,
				this.functionHeaderSegments,
				this.functionHeaderFinalWhitespaceCharacters,
				this.functionBody,
				this.functionsRestFunctions,
				this.sourceFileContentFinalWhitespaceCharacters,
			);

		return functionHeaderSegmentsSeparatedRestSegmentsInitialWhitespaceCharactersParser;
	}

	public parseOpeningSquareBracket(): never {
		throw new Error("Method not implemented.");
	}

	public parseClosingSquareBracket(
		character: ClosingSquareBracketCharacter,
	): FunctionHeaderUnknownSegmentContentParser {
		const functionHeaderUnknownSegmentContentParser = new FunctionHeaderUnknownSegmentContentParser(
			character,
			this.functionHeaderSegments,
			this.functionHeaderFinalWhitespaceCharacters,
			this.functionBody,
			this.functionsRestFunctions,
			this.sourceFileContentFinalWhitespaceCharacters,
		);

		return functionHeaderUnknownSegmentContentParser;
	}

	public parseOpeningCurlyBracket(): never {
		throw new Error("Method not implemented.");
	}

	public parseClosingCurlyBracket(character: ClosingCurlyBracketCharacter): BlockContentParser {
		const functionHeader: FunctionHeaderConcreteTreeNode = createFunctionHeaderConcreteTreeNode(
			this.functionHeaderSegments,
			this.functionHeaderFinalWhitespaceCharacters,
		);

		const function_: FunctionConcreteTreeNode = createFunctionConcreteTreeNode(
			functionHeader,
			this.functionBody,
		);

		const functions: FunctionsConcreteTreeNode = createFunctionsConcreteTreeNode(
			function_,
			this.functionsRestFunctions,
		);

		const blockContentParser = new BlockContentParser(
			character,
			[],
			functions,
			this.sourceFileContentFinalWhitespaceCharacters,
		);

		return blockContentParser;
	}

	public parseOpeningRoundBracket(): never {
		throw new Error("Method not implemented.");
	}

	public parseClosingRoundBracket(
		character: ClosingRoundBracketCharacter,
	): FunctionHeaderKnownSegmentContentParser {
		const functionHeaderKnownSegmentContentParser: FunctionHeaderKnownSegmentContentParser =
			new FunctionHeaderKnownSegmentContentParser(
				character,
				this.functionHeaderSegments,
				this.functionHeaderFinalWhitespaceCharacters,
				this.functionBody,
				this.functionsRestFunctions,
				this.sourceFileContentFinalWhitespaceCharacters,
			);

		return functionHeaderKnownSegmentContentParser;
	}

	public parseIdentifier(
		character: IdentifierCharacter,
	): FunctionHeaderWordSegmentIdentifierCharactersParser {
		const functionHeaderWordSegmentIdentifierCharacters: IdentifierCharactersConcreteTreeNode =
			createIdentifierCharactersConcreteTreeNode(character, null);

		const functionHeaderWordSegmentIdentifierCharactersParser =
			new FunctionHeaderWordSegmentIdentifierCharactersParser(
				functionHeaderWordSegmentIdentifierCharacters,
				this.functionHeaderSegments,
				this.functionHeaderFinalWhitespaceCharacters,
				this.functionBody,
				this.functionsRestFunctions,
				this.sourceFileContentFinalWhitespaceCharacters,
			);

		return functionHeaderWordSegmentIdentifierCharactersParser;
	}

	public parseOperator(): never {
		throw new Error("Method not implemented.");
	}

	public finalize(): SourceFileContentConcreteTreeNode {
		const functionHeader: FunctionHeaderConcreteTreeNode = createFunctionHeaderConcreteTreeNode(
			this.functionHeaderSegments,
			this.functionHeaderFinalWhitespaceCharacters,
		);

		const function_: FunctionConcreteTreeNode = createFunctionConcreteTreeNode(
			functionHeader,
			this.functionBody,
		);

		const functions: FunctionsConcreteTreeNode = createFunctionsConcreteTreeNode(
			function_,
			this.functionsRestFunctions,
		);

		const sourceFileContent: SourceFileContentConcreteTreeNode =
			createSourceFileContentConcreteTreeNode(
				null,
				functions,
				this.sourceFileContentFinalWhitespaceCharacters,
			);

		return sourceFileContent;
	}
}
