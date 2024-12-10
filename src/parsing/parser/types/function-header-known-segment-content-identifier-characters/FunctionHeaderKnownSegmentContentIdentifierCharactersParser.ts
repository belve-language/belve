import type {ClosingRoundBracketCharacter} from "../../../../characters/ClosingRoundBracketCharacter.ts";
import type {IdentifierCharacter} from "../../../../characters/IdentifierCharacter.ts";
import type {OpeningRoundBracketCharacter} from "../../../../characters/OpeningRoundBracketCharacter.ts";
import type {WhitespaceCharacter} from "../../../../characters/WhitespaceCharacter.ts";
import type {FunctionBodyConcreteTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/function-body/FunctionBodyConcreteTreeNode.ts";
import {createFunctionHeaderKnownSegmentContentConcreteTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/function-header-known-segment-content/createFunctionHeaderKnownSegmentContentConcreteTreeNode.ts";
import type {FunctionHeaderKnownSegmentContentConcreteTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/function-header-known-segment-content/FunctionHeaderKnownSegmentContentConcreteTreeNode.ts";
import {createFunctionHeaderKnownSegmentConcreteTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/function-header-known-segment/createFunctionHeaderKnownSegmentConcreteTreeNode.ts";
import type {FunctionHeaderKnownSegmentConcreteTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/function-header-known-segment/FunctionHeaderKnownSegmentConcreteTreeNode.ts";
import {createFunctionHeaderKnownStartingSegmentsConcreteTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/function-header-known-starting-segments/createFunctionHeaderKnownStartingSegmentsConcreteTreeNode.ts";
import type {FunctionHeaderKnownStartingSegmentsConcreteTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/function-header-known-starting-segments/FunctionHeaderKnownStartingSegmentsConcreteTreeNode.ts";
import type {FunctionHeaderSegmentsSeparatedRestSegmentsConcreteTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/function-header-segments-separated-rest-segments/FunctionHeaderSegmentsSeparatedRestSegmentsConcreteTreeNode.ts";
import type {FunctionHeaderUnknownStartingSegmentsConcreteTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/function-header-unknown-starting-segments/FunctionHeaderUnknownStartingSegmentsConcreteTreeNode.ts";
import type {FunctionHeaderWordStartingSegmentsConcreteTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/function-header-word-starting-segments/FunctionHeaderWordStartingSegmentsConcreteTreeNode.ts";
import type {FunctionsSeparatedRestFunctionsConcreteTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/functions-separated-rest-functions/FunctionsSeparatedRestFunctionsConcreteTreeNode.ts";
import type {FunctionsConcreteTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/functions/FunctionsConcreteTreeNode.ts";
import {createIdentifierCharactersConcreteTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/identifier-characters/createIdentifierCharactersConcreteTreeNode.ts";
import type {IdentifierCharactersConcreteTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/identifier-characters/IdentifierCharactersConcreteTreeNode.ts";
import {createWhitespaceCharactersConcreteTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/whitespace-characters/createWhitespaceCharactersConcreteTreeNode.ts";
import type {WhitespaceCharactersConcreteTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/whitespace-characters/WhitespaceCharactersConcreteTreeNode.ts";
import type {Parser} from "../../Parser.ts";
import {FunctionHeaderKnownSegmentContentInitialWhitespaceCharactersParser} from "../function-header-known-segment-content-initial-whitespace-characters/FunctionHeaderKnownSegmentContentInitialWhitespaceCharactersParser.ts";
import {FunctionHeaderSegmentsParser} from "../function-header-segments/FunctionHeaderSegmentsParser.ts";

export class FunctionHeaderKnownSegmentContentIdentifierCharactersParser implements Parser {
	private readonly functionHeaderKnownSegmentContentIdentifierCharacters: IdentifierCharactersConcreteTreeNode;
	private readonly functionHeaderKnownSegmentContentFinalWhitespaceCharacters: WhitespaceCharactersConcreteTreeNode | null;
	private readonly functionHeaderKnownSegmentClosingBracketCharacter: ClosingRoundBracketCharacter;

	private readonly functionHeaderKnownStartingSegmentsRestSegments:
		| FunctionHeaderKnownStartingSegmentsConcreteTreeNode
		| FunctionHeaderUnknownStartingSegmentsConcreteTreeNode
		| FunctionHeaderWordStartingSegmentsConcreteTreeNode
		| null
		| FunctionHeaderSegmentsSeparatedRestSegmentsConcreteTreeNode;

	private readonly functionHeaderFinalWhitespaceCharacters: WhitespaceCharactersConcreteTreeNode | null;
	private readonly functionBody: FunctionBodyConcreteTreeNode;

	private readonly functionsRestFunctions:
		| FunctionsSeparatedRestFunctionsConcreteTreeNode
		| null
		| FunctionsConcreteTreeNode;

	private readonly sourceFileContentFinalWhitespaceCharacters: WhitespaceCharactersConcreteTreeNode | null;

	public constructor(
		functionHeaderKnownSegmentContentIdentifierCharacters: IdentifierCharactersConcreteTreeNode,
		functionHeaderKnownSegmentContentFinalWhitespaceCharacters: WhitespaceCharactersConcreteTreeNode | null,
		functionHeaderKnownSegmentClosingBracketCharacter: ClosingRoundBracketCharacter,

		functionHeaderKnownStartingSegmentsRestSegments:
			| FunctionHeaderKnownStartingSegmentsConcreteTreeNode
			| FunctionHeaderUnknownStartingSegmentsConcreteTreeNode
			| FunctionHeaderWordStartingSegmentsConcreteTreeNode
			| null
			| FunctionHeaderSegmentsSeparatedRestSegmentsConcreteTreeNode,

		functionHeaderFinalWhitespaceCharacters: WhitespaceCharactersConcreteTreeNode | null,
		functionBody: FunctionBodyConcreteTreeNode,
		functionsRestFunctions:
			| FunctionsSeparatedRestFunctionsConcreteTreeNode
			| null
			| FunctionsConcreteTreeNode,
		sourceFileContentFinalWhitespaceCharacters: WhitespaceCharactersConcreteTreeNode | null,
	) {
		this.functionHeaderKnownSegmentContentIdentifierCharacters =
			functionHeaderKnownSegmentContentIdentifierCharacters;

		this.functionHeaderKnownSegmentContentFinalWhitespaceCharacters =
			functionHeaderKnownSegmentContentFinalWhitespaceCharacters;

		this.functionHeaderKnownSegmentClosingBracketCharacter =
			functionHeaderKnownSegmentClosingBracketCharacter;

		this.functionHeaderKnownStartingSegmentsRestSegments =
			functionHeaderKnownStartingSegmentsRestSegments;

		this.functionHeaderFinalWhitespaceCharacters = functionHeaderFinalWhitespaceCharacters;
		this.functionBody = functionBody;
		this.functionsRestFunctions = functionsRestFunctions;
		this.sourceFileContentFinalWhitespaceCharacters = sourceFileContentFinalWhitespaceCharacters;
	}

	public parseWhitespace(
		character: WhitespaceCharacter,
	): FunctionHeaderKnownSegmentContentInitialWhitespaceCharactersParser {
		const functionHeaderKnownSegmentContentInitialWhitespaceCharacters: WhitespaceCharactersConcreteTreeNode =
			createWhitespaceCharactersConcreteTreeNode(character, null);

		const functionHeaderKnownSegmentContentInitialWhitespaceCharactersParser =
			new FunctionHeaderKnownSegmentContentInitialWhitespaceCharactersParser(
				functionHeaderKnownSegmentContentInitialWhitespaceCharacters,
				this.functionHeaderKnownSegmentContentIdentifierCharacters,
				this.functionHeaderKnownSegmentContentFinalWhitespaceCharacters,
				this.functionHeaderKnownSegmentClosingBracketCharacter,
				this.functionHeaderKnownStartingSegmentsRestSegments,
				this.functionHeaderFinalWhitespaceCharacters,
				this.functionBody,
				this.functionsRestFunctions,
				this.sourceFileContentFinalWhitespaceCharacters,
			);

		return functionHeaderKnownSegmentContentInitialWhitespaceCharactersParser;
	}

	public parseOpeningSquareBracket(): never {
		throw new Error("Not implemented.");
	}

	public parseClosingSquareBracket(): never {
		throw new Error("Not implemented.");
	}

	public parseOpeningCurlyBracket(): never {
		throw new Error("Not implemented.");
	}

	public parseClosingCurlyBracket(): never {
		throw new Error("Not implemented.");
	}

	public parseOpeningRoundBracket(
		character: OpeningRoundBracketCharacter,
	): FunctionHeaderSegmentsParser {
		const functionHeaderKnownSegmentContent: FunctionHeaderKnownSegmentContentConcreteTreeNode =
			createFunctionHeaderKnownSegmentContentConcreteTreeNode(
				null,
				this.functionHeaderKnownSegmentContentIdentifierCharacters,
				this.functionHeaderKnownSegmentContentFinalWhitespaceCharacters,
			);

		const functionHeaderKnownSegment: FunctionHeaderKnownSegmentConcreteTreeNode =
			createFunctionHeaderKnownSegmentConcreteTreeNode(
				character,
				functionHeaderKnownSegmentContent,
				this.functionHeaderKnownSegmentClosingBracketCharacter,
			);

		const functionHeaderKnownStartingSegments: FunctionHeaderKnownStartingSegmentsConcreteTreeNode =
			createFunctionHeaderKnownStartingSegmentsConcreteTreeNode(
				functionHeaderKnownSegment,
				this.functionHeaderKnownStartingSegmentsRestSegments,
			);

		const functionHeaderSegmentsParser = new FunctionHeaderSegmentsParser(
			functionHeaderKnownStartingSegments,
			this.functionHeaderFinalWhitespaceCharacters,
			this.functionBody,
			this.functionsRestFunctions,
			this.sourceFileContentFinalWhitespaceCharacters,
		);

		return functionHeaderSegmentsParser;
	}

	public parseClosingRoundBracket(): never {
		throw new Error("Not implemented.");
	}

	public parseIdentifier(
		character: IdentifierCharacter,
	): FunctionHeaderKnownSegmentContentIdentifierCharactersParser {
		const newFunctionHeaderKnownSegmentContentIdentifierCharacters: IdentifierCharactersConcreteTreeNode =
			createIdentifierCharactersConcreteTreeNode(
				character,
				this.functionHeaderKnownSegmentContentIdentifierCharacters,
			);

		const functionHeaderKnownSegmentContentIdentifierCharactersParser =
			new FunctionHeaderKnownSegmentContentIdentifierCharactersParser(
				newFunctionHeaderKnownSegmentContentIdentifierCharacters,
				this.functionHeaderKnownSegmentContentFinalWhitespaceCharacters,
				this.functionHeaderKnownSegmentClosingBracketCharacter,
				this.functionHeaderKnownStartingSegmentsRestSegments,
				this.functionHeaderFinalWhitespaceCharacters,
				this.functionBody,
				this.functionsRestFunctions,
				this.sourceFileContentFinalWhitespaceCharacters,
			);

		return functionHeaderKnownSegmentContentIdentifierCharactersParser;
	}

	public parseOperator(): never {
		throw new Error("Not implemented.");
	}

	public finalize(): never {
		throw new Error("Not implemented.");
	}
}
