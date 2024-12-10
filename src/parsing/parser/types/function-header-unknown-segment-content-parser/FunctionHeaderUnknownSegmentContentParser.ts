import type {ClosingSquareBracketCharacter} from "../../../../characters/ClosingSquareBracketCharacter.ts";
import type {IdentifierCharacter} from "../../../../characters/IdentifierCharacter.ts";
import type {OpeningSquareBracketCharacter} from "../../../../characters/OpeningSquareBracketCharacter.ts";
import type {WhitespaceCharacter} from "../../../../characters/WhitespaceCharacter.ts";
import type {FunctionBodyConcreteTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/function-body/FunctionBodyConcreteTreeNode.ts";
import type {FunctionHeaderKnownStartingSegmentsConcreteTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/function-header-known-starting-segments/FunctionHeaderKnownStartingSegmentsConcreteTreeNode.ts";
import type {FunctionHeaderSegmentsSeparatedRestSegmentsConcreteTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/function-header-segments-separated-rest-segments/FunctionHeaderSegmentsSeparatedRestSegmentsConcreteTreeNode.ts";
import {createFunctionHeaderUnknownSegmentConcreteTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/function-header-unknown-segment/createFunctionHeaderUnknownSegmentConcreteTreeNode.ts";
import type {FunctionHeaderUnknownSegmentConcreteTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/function-header-unknown-segment/FunctionHeaderUnknownSegmentConcreteTreeNode.ts";
import {createFunctionHeaderUnknownStartingSegmentsConcreteTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/function-header-unknown-starting-segments/createFunctionHeaderUnknownStartingSegmentsConcreteTreeNode.ts";
import type {FunctionHeaderUnknownStartingSegmentsConcreteTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/function-header-unknown-starting-segments/FunctionHeaderUnknownStartingSegmentsConcreteTreeNode.ts";
import type {FunctionHeaderWordStartingSegmentsConcreteTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/function-header-word-starting-segments/FunctionHeaderWordStartingSegmentsConcreteTreeNode.ts";
import type {FunctionsSeparatedRestFunctionsConcreteTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/functions-separated-rest-functions/FunctionsSeparatedRestFunctionsConcreteTreeNode.ts";
import type {FunctionsConcreteTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/functions/FunctionsConcreteTreeNode.ts";
import {createIdentifierCharactersConcreteTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/identifier-characters/createIdentifierCharactersConcreteTreeNode.ts";
import type {IdentifierCharactersConcreteTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/identifier-characters/IdentifierCharactersConcreteTreeNode.ts";
import {createWhitespaceCharactersConcreteTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/whitespace-characters/createWhitespaceCharactersConcreteTreeNode.ts";
import type {WhitespaceCharactersConcreteTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/whitespace-characters/WhitespaceCharactersConcreteTreeNode.ts";
import type {Parser} from "../../Parser.ts";
import {FunctionHeaderSegmentsParser} from "../function-header-segments/FunctionHeaderSegmentsParser.ts";
import {FunctionHeaderUnknownSegmentContentFinalWhitespaceCharactersParser} from "../function-header-unknown-segment-content-final-whitespace-characters/FunctionHeaderUnknownSegmentContentFinalWhitespaceCharactersParser.ts";
import {FunctionHeaderUnknownSegmentContentIdentifierCharactersParser} from "../function-header-unknown-segment-content-identifier-characters/FunctionHeaderUnknownSegmentContentIdentifierCharactersParser.ts";

export class FunctionHeaderUnknownSegmentContentParser implements Parser {
	private readonly functionHeaderUnknownSegmentClosingBracketCharacter: ClosingSquareBracketCharacter;

	private readonly functionHeaderUnknownStartingSegmentsRestSegments:
		| FunctionHeaderKnownStartingSegmentsConcreteTreeNode
		| FunctionHeaderUnknownStartingSegmentsConcreteTreeNode
		| null
		| FunctionHeaderSegmentsSeparatedRestSegmentsConcreteTreeNode
		| FunctionHeaderWordStartingSegmentsConcreteTreeNode;

	private readonly functionHeaderFinalWhitespaceCharacters: WhitespaceCharactersConcreteTreeNode | null;
	private readonly functionBody: FunctionBodyConcreteTreeNode;
	private readonly functionsRestFunctions:
		| FunctionsSeparatedRestFunctionsConcreteTreeNode
		| null
		| FunctionsConcreteTreeNode;

	private readonly sourceFileContentFinalWhitespaceCharacters: WhitespaceCharactersConcreteTreeNode | null;

	public constructor(
		functionHeaderUnknownSegmentClosingBracketCharacter: ClosingSquareBracketCharacter,

		functionHeaderUnknownStartingSegmentsRestSegments:
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
		this.functionHeaderUnknownSegmentClosingBracketCharacter =
			functionHeaderUnknownSegmentClosingBracketCharacter;

		this.functionHeaderUnknownStartingSegmentsRestSegments =
			functionHeaderUnknownStartingSegmentsRestSegments;

		this.functionHeaderUnknownStartingSegmentsRestSegments =
			functionHeaderUnknownStartingSegmentsRestSegments;

		this.functionHeaderFinalWhitespaceCharacters = functionHeaderFinalWhitespaceCharacters;
		this.functionBody = functionBody;
		this.functionsRestFunctions = functionsRestFunctions;
		this.sourceFileContentFinalWhitespaceCharacters = sourceFileContentFinalWhitespaceCharacters;
	}

	public parseWhitespace(
		character: WhitespaceCharacter,
	): FunctionHeaderUnknownSegmentContentFinalWhitespaceCharactersParser {
		const functionHeaderUnknownSegmentContentFinalWhitespaceCharacters: WhitespaceCharactersConcreteTreeNode =
			createWhitespaceCharactersConcreteTreeNode(character, null);

		const functionHeaderUnknownSegmentContentFinalWhitespaceCharactersParser =
			new FunctionHeaderUnknownSegmentContentFinalWhitespaceCharactersParser(
				functionHeaderUnknownSegmentContentFinalWhitespaceCharacters,
				this.functionHeaderUnknownSegmentClosingBracketCharacter,
				this.functionHeaderUnknownStartingSegmentsRestSegments,
				this.functionHeaderFinalWhitespaceCharacters,
				this.functionBody,
				this.functionsRestFunctions,
				this.sourceFileContentFinalWhitespaceCharacters,
			);

		return functionHeaderUnknownSegmentContentFinalWhitespaceCharactersParser;
	}

	public parseOpeningSquareBracket(
		character: OpeningSquareBracketCharacter,
	): FunctionHeaderSegmentsParser {
		const functionHeaderUnknownSegment: FunctionHeaderUnknownSegmentConcreteTreeNode =
			createFunctionHeaderUnknownSegmentConcreteTreeNode(
				character,
				null,
				this.functionHeaderUnknownSegmentClosingBracketCharacter,
			);

		const functionHeaderUnknownStartingSegments: FunctionHeaderUnknownStartingSegmentsConcreteTreeNode =
			createFunctionHeaderUnknownStartingSegmentsConcreteTreeNode(
				functionHeaderUnknownSegment,
				this.functionHeaderUnknownStartingSegmentsRestSegments,
			);

		const functionHeaderSegmentsParser = new FunctionHeaderSegmentsParser(
			functionHeaderUnknownStartingSegments,
			this.functionHeaderFinalWhitespaceCharacters,
			this.functionBody,
			this.functionsRestFunctions,
			this.sourceFileContentFinalWhitespaceCharacters,
		);

		return functionHeaderSegmentsParser;
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

	public parseOpeningRoundBracket(): never {
		throw new Error("Not implemented.");
	}

	public parseClosingRoundBracket(): never {
		throw new Error("Not implemented.");
	}

	public parseIdentifier(
		character: IdentifierCharacter,
	): FunctionHeaderUnknownSegmentContentIdentifierCharactersParser {
		const functionHeaderUnknownSegmentContentIdentifierCharacters: IdentifierCharactersConcreteTreeNode =
			createIdentifierCharactersConcreteTreeNode(character, null);

		const functionHeaderUnknownSegmentContentIdentifierCharactersParser =
			new FunctionHeaderUnknownSegmentContentIdentifierCharactersParser(
				functionHeaderUnknownSegmentContentIdentifierCharacters,
				null,
				this.functionHeaderUnknownSegmentClosingBracketCharacter,
				this.functionHeaderUnknownStartingSegmentsRestSegments,
				this.functionHeaderFinalWhitespaceCharacters,
				this.functionBody,
				this.functionsRestFunctions,
				this.sourceFileContentFinalWhitespaceCharacters,
			);

		return functionHeaderUnknownSegmentContentIdentifierCharactersParser;
	}

	public parseOperator(): never {
		throw new Error("Not implemented.");
	}

	public finalize(): never {
		throw new Error("Not implemented.");
	}
}
