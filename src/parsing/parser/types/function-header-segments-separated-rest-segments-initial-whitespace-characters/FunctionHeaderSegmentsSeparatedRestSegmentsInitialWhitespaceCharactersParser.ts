import type {ClosingCurlyBracketCharacter} from "../../../../characters/ClosingCurlyBracketCharacter.ts";
import type {ClosingRoundBracketCharacter} from "../../../../characters/ClosingRoundBracketCharacter.ts";
import type {ClosingSquareBracketCharacter} from "../../../../characters/ClosingSquareBracketCharacter.ts";
import type {IdentifierCharacter} from "../../../../characters/IdentifierCharacter.ts";
import type {WhitespaceCharacter} from "../../../../characters/WhitespaceCharacter.ts";
import type {FunctionBodyConcreteTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/function-body/FunctionBodyConcreteTreeNode.ts";
import type {FunctionHeaderKnownStartingSegmentsConcreteTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/function-header-known-starting-segments/FunctionHeaderKnownStartingSegmentsConcreteTreeNode.ts";
import {createFunctionHeaderSegmentsSeparatedRestSegmentsConcreteTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/function-header-segments-separated-rest-segments/createFunctionHeaderSegmentsSeparatedRestSegmentsConcreteTreeNode.ts";
import type {FunctionHeaderSegmentsSeparatedRestSegmentsConcreteTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/function-header-segments-separated-rest-segments/FunctionHeaderSegmentsSeparatedRestSegmentsConcreteTreeNode.ts";
import type {FunctionHeaderUnknownStartingSegmentsConcreteTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/function-header-unknown-starting-segments/FunctionHeaderUnknownStartingSegmentsConcreteTreeNode.ts";
import type {FunctionHeaderWordStartingSegmentsConcreteTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/function-header-word-starting-segments/FunctionHeaderWordStartingSegmentsConcreteTreeNode.ts";
import {createFunctionHeaderConcreteTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/function-header/createFunctionHeaderConcreteTreeNode.ts";
import type {FunctionHeaderConcreteTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/function-header/FunctionHeaderConcreteTreeNode.ts";
import {createFunctionConcreteTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/function/createFunctionConcreteTreeNode.ts";
import type {FunctionConcreteTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/function/FunctionConcreteTreeNode.ts";
import {createFunctionsSeparatedRestFunctionsConcreteTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/functions-separated-rest-functions/createFunctionsSeparatedRestFunctionsConcreteTreeNode.ts";
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
import {FunctionHeaderUnknownSegmentContentParser} from "../function-header-unknown-segment-content-parser/FunctionHeaderUnknownSegmentContentParser.ts";
import {FunctionHeaderWordSegmentIdentifierCharactersParser} from "../function-header-word-segment-identifier-characters/FunctionHeaderWordSegmentIdentifierCharactersParser.ts";

export class FunctionHeaderSegmentsSeparatedRestSegmentsInitialWhitespaceCharactersParser
	implements Parser
{
	private readonly functionHeaderSegmentsSeparatedRestSegmentsInitialWhitespaceCharacters: WhitespaceCharactersConcreteTreeNode;

	private readonly functionHeaderSegmentsSeparatedRestSegmentsSegments:
		| FunctionHeaderKnownStartingSegmentsConcreteTreeNode
		| FunctionHeaderUnknownStartingSegmentsConcreteTreeNode
		| FunctionHeaderWordStartingSegmentsConcreteTreeNode;

	private readonly functionHeaderFinalWhitespaceCharacters: WhitespaceCharactersConcreteTreeNode | null;
	private readonly functionBody: FunctionBodyConcreteTreeNode;

	private readonly functionsRestFunctions:
		| FunctionsSeparatedRestFunctionsConcreteTreeNode
		| null
		| FunctionsConcreteTreeNode;

	private readonly sourceFileContentFinalWhitespaceCharacters: WhitespaceCharactersConcreteTreeNode | null;

	public constructor(
		functionHeaderSegmentsSeparatedRestSegmentsInitialWhitespaceCharacters: WhitespaceCharactersConcreteTreeNode,

		functionHeaderSegmentsSeparatedRestSegmentsSegments:
			| FunctionHeaderKnownStartingSegmentsConcreteTreeNode
			| FunctionHeaderUnknownStartingSegmentsConcreteTreeNode
			| FunctionHeaderWordStartingSegmentsConcreteTreeNode,

		functionHeaderFinalWhitespaceCharacters: WhitespaceCharactersConcreteTreeNode | null,
		functionBody: FunctionBodyConcreteTreeNode,
		functionsRestFunctions:
			| FunctionsSeparatedRestFunctionsConcreteTreeNode
			| null
			| FunctionsConcreteTreeNode,
		sourceFileContentFinalWhitespaceCharacters: WhitespaceCharactersConcreteTreeNode | null,
	) {
		this.functionHeaderSegmentsSeparatedRestSegmentsInitialWhitespaceCharacters =
			functionHeaderSegmentsSeparatedRestSegmentsInitialWhitespaceCharacters;

		this.functionHeaderSegmentsSeparatedRestSegmentsSegments =
			functionHeaderSegmentsSeparatedRestSegmentsSegments;

		this.functionHeaderFinalWhitespaceCharacters = functionHeaderFinalWhitespaceCharacters;

		this.functionBody = functionBody;
		this.functionsRestFunctions = functionsRestFunctions;
		this.sourceFileContentFinalWhitespaceCharacters = sourceFileContentFinalWhitespaceCharacters;
	}

	public parseWhitespace(
		character: WhitespaceCharacter,
	): FunctionHeaderSegmentsSeparatedRestSegmentsInitialWhitespaceCharactersParser {
		const newFunctionHeaderSegmentsSeparatedRestSegmentsInitialWhitespaceCharacters =
			createWhitespaceCharactersConcreteTreeNode(
				character,
				this.functionHeaderSegmentsSeparatedRestSegmentsInitialWhitespaceCharacters,
			);

		const functionHeaderSegmentsSeparatedRestSegmentsInitialWhitespaceCharactersParser =
			new FunctionHeaderSegmentsSeparatedRestSegmentsInitialWhitespaceCharactersParser(
				newFunctionHeaderSegmentsSeparatedRestSegmentsInitialWhitespaceCharacters,
				this.functionHeaderSegmentsSeparatedRestSegmentsSegments,
				this.functionHeaderFinalWhitespaceCharacters,
				this.functionBody,
				this.functionsRestFunctions,
				this.sourceFileContentFinalWhitespaceCharacters,
			);

		return functionHeaderSegmentsSeparatedRestSegmentsInitialWhitespaceCharactersParser;
	}

	public parseOpeningSquareBracket(): never {
		throw new Error("Not implemented.");
	}

	public parseClosingSquareBracket(
		character: ClosingSquareBracketCharacter,
	): FunctionHeaderUnknownSegmentContentParser {
		const functionHeaderUnknownSegmentContentParser = new FunctionHeaderUnknownSegmentContentParser(
			character,
			this.functionHeaderSegmentsSeparatedRestSegmentsSegments,
			this.functionHeaderFinalWhitespaceCharacters,
			this.functionBody,
			this.functionsRestFunctions,
			this.sourceFileContentFinalWhitespaceCharacters,
		);

		return functionHeaderUnknownSegmentContentParser;
	}

	public parseOpeningCurlyBracket(): never {
		throw new Error("Not implemented.");
	}

	public parseClosingCurlyBracket(character: ClosingCurlyBracketCharacter): BlockContentParser {
		const functionHeader: FunctionHeaderConcreteTreeNode = createFunctionHeaderConcreteTreeNode(
			this.functionHeaderSegmentsSeparatedRestSegmentsSegments,
			this.functionHeaderFinalWhitespaceCharacters,
		);

		const function_: FunctionConcreteTreeNode = createFunctionConcreteTreeNode(
			functionHeader,
			this.functionBody,
		);

		const functionsSeparatedRestFunctionsFunctions: FunctionsConcreteTreeNode =
			createFunctionsConcreteTreeNode(function_, this.functionsRestFunctions);

		const functionsSeparatedRestFunctions: FunctionsSeparatedRestFunctionsConcreteTreeNode =
			createFunctionsSeparatedRestFunctionsConcreteTreeNode(
				this.functionHeaderSegmentsSeparatedRestSegmentsInitialWhitespaceCharacters,
				functionsSeparatedRestFunctionsFunctions,
			);

		const blockContentParser = new BlockContentParser(
			character,
			[],
			functionsSeparatedRestFunctions,
			this.sourceFileContentFinalWhitespaceCharacters,
		);

		return blockContentParser;
	}

	public parseOpeningRoundBracket(): never {
		throw new Error("Not implemented.");
	}

	public parseClosingRoundBracket(
		character: ClosingRoundBracketCharacter,
	): FunctionHeaderKnownSegmentContentParser {
		const functionHeaderSegmentsSeparatedRestSegments: FunctionHeaderSegmentsSeparatedRestSegmentsConcreteTreeNode =
			createFunctionHeaderSegmentsSeparatedRestSegmentsConcreteTreeNode(
				this.functionHeaderSegmentsSeparatedRestSegmentsInitialWhitespaceCharacters,
				this.functionHeaderSegmentsSeparatedRestSegmentsSegments,
			);

		const functionHeaderKnownSegmentContentParser = new FunctionHeaderKnownSegmentContentParser(
			character,
			functionHeaderSegmentsSeparatedRestSegments,
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

		const functionHeaderSegmentsSeparatedRestSegments: FunctionHeaderSegmentsSeparatedRestSegmentsConcreteTreeNode =
			createFunctionHeaderSegmentsSeparatedRestSegmentsConcreteTreeNode(
				this.functionHeaderSegmentsSeparatedRestSegmentsInitialWhitespaceCharacters,
				this.functionHeaderSegmentsSeparatedRestSegmentsSegments,
			);

		const functionHeaderWordSegmentIdentifierCharactersParser =
			new FunctionHeaderWordSegmentIdentifierCharactersParser(
				functionHeaderWordSegmentIdentifierCharacters,
				functionHeaderSegmentsSeparatedRestSegments,
				this.functionHeaderFinalWhitespaceCharacters,
				this.functionBody,
				this.functionsRestFunctions,
				this.sourceFileContentFinalWhitespaceCharacters,
			);

		return functionHeaderWordSegmentIdentifierCharactersParser;
	}

	public parseOperator(): never {
		throw new Error("Not implemented.");
	}

	public finalize(): SourceFileContentConcreteTreeNode {
		const functionHeader: FunctionHeaderConcreteTreeNode = createFunctionHeaderConcreteTreeNode(
			this.functionHeaderSegmentsSeparatedRestSegmentsSegments,
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
				this.functionHeaderSegmentsSeparatedRestSegmentsInitialWhitespaceCharacters,
				functions,
				this.sourceFileContentFinalWhitespaceCharacters,
			);

		return sourceFileContent;
	}
}
