import type {ClosingRoundBracketCharacter} from "../../../../characters/ClosingRoundBracketCharacter.ts";
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
import type {IdentifierCharactersConcreteTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/identifier-characters/IdentifierCharactersConcreteTreeNode.ts";
import {createWhitespaceCharactersConcreteTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/whitespace-characters/createWhitespaceCharactersConcreteTreeNode.ts";
import type {WhitespaceCharactersConcreteTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/whitespace-characters/WhitespaceCharactersConcreteTreeNode.ts";
import type {Parser} from "../../Parser.ts";
import {FunctionHeaderSegmentsParser} from "../function-header-segments/FunctionHeaderSegmentsParser.ts";

export class FunctionHeaderKnownSegmentContentInitialWhitespaceCharactersParser implements Parser {
	private readonly functionHeaderKnownSegmentContentInitialWhitespaceCharacters: WhitespaceCharactersConcreteTreeNode;
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
		functionHeaderKnownSegmentContentInitialWhitespaceCharacters: WhitespaceCharactersConcreteTreeNode,
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
		this.functionHeaderKnownSegmentContentInitialWhitespaceCharacters =
			functionHeaderKnownSegmentContentInitialWhitespaceCharacters;

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
		const newFunctionHeaderKnownSegmentContentInitialWhitespaceCharacters: WhitespaceCharactersConcreteTreeNode =
			createWhitespaceCharactersConcreteTreeNode(
				character,
				this.functionHeaderKnownSegmentContentInitialWhitespaceCharacters,
			);

		const functionHeaderKnownSegmentContentInitialWhitespaceCharactersParser =
			new FunctionHeaderKnownSegmentContentInitialWhitespaceCharactersParser(
				newFunctionHeaderKnownSegmentContentInitialWhitespaceCharacters,
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
		throw new Error(".");
	}

	public parseClosingSquareBracket(): never {
		throw new Error(".");
	}

	public parseOpeningCurlyBracket(): never {
		throw new Error(".");
	}

	public parseClosingCurlyBracket(): never {
		throw new Error(".");
	}

	public parseOpeningRoundBracket(
		character: OpeningRoundBracketCharacter,
	): FunctionHeaderSegmentsParser {
		const functionHeaderKnownSegmentContent: FunctionHeaderKnownSegmentContentConcreteTreeNode =
			createFunctionHeaderKnownSegmentContentConcreteTreeNode(
				this.functionHeaderKnownSegmentContentInitialWhitespaceCharacters,
				this.functionHeaderKnownSegmentContentIdentifierCharacters,
				this.functionHeaderKnownSegmentContentFinalWhitespaceCharacters,
			);

		const funtionHeaderKnownSegment: FunctionHeaderKnownSegmentConcreteTreeNode =
			createFunctionHeaderKnownSegmentConcreteTreeNode(
				character,
				functionHeaderKnownSegmentContent,
				this.functionHeaderKnownSegmentClosingBracketCharacter,
			);

		const functionHeaderKnownStartingSegments: FunctionHeaderKnownStartingSegmentsConcreteTreeNode =
			createFunctionHeaderKnownStartingSegmentsConcreteTreeNode(
				funtionHeaderKnownSegment,
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
		throw new Error(".");
	}

	public parseIdentifier(): never {
		throw new Error(".");
	}

	public parseOperator(): never {
		throw new Error(".");
	}

	public finalize(): never {
		throw new Error(".");
	}
}
