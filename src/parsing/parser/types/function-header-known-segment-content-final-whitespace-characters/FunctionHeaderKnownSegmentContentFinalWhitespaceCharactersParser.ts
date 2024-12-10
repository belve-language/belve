import type {ClosingRoundBracketCharacter} from "../../../../characters/ClosingRoundBracketCharacter.ts";
import type {IdentifierCharacter} from "../../../../characters/IdentifierCharacter.ts";
import type {OpeningRoundBracketCharacter} from "../../../../characters/OpeningRoundBracketCharacter.ts";
import type {WhitespaceCharacter} from "../../../../characters/WhitespaceCharacter.ts";
import type {FunctionBodyConcreteTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/function-body/FunctionBodyConcreteTreeNode.ts";
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
import {FunctionHeaderKnownSegmentContentIdentifierCharactersParser} from "../function-header-known-segment-content-identifier-characters/FunctionHeaderKnownSegmentContentIdentifierCharactersParser.ts";
import {FunctionHeaderSegmentsParser} from "../function-header-segments/FunctionHeaderSegmentsParser.ts";

export class FunctionHeaderKnownSegmentContentFinalWhitespaceCharactersParser implements Parser {
	private readonly functionHeaderKnownSegmentContentFinalWhitespaceCharacters: WhitespaceCharactersConcreteTreeNode | null;
	private readonly functionHeaderKnownSegmentClosingBracketCharacter: ClosingRoundBracketCharacter;

	private readonly functionHeaderKnownStartingSegmentRestSegments:
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
		functionHeaderKnownSegmentContentFinalWhitespaceCharacters: WhitespaceCharactersConcreteTreeNode | null,
		functionHeaderKnownSegmentClosingBracketCharacter: ClosingRoundBracketCharacter,

		functionHeaderKnownStartingSegmentRestSegments:
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
		this.functionHeaderKnownSegmentContentFinalWhitespaceCharacters =
			functionHeaderKnownSegmentContentFinalWhitespaceCharacters;

		this.functionHeaderKnownSegmentClosingBracketCharacter =
			functionHeaderKnownSegmentClosingBracketCharacter;

		this.functionHeaderKnownStartingSegmentRestSegments =
			functionHeaderKnownStartingSegmentRestSegments;

		this.functionHeaderFinalWhitespaceCharacters = functionHeaderFinalWhitespaceCharacters;
		this.functionBody = functionBody;
		this.functionsRestFunctions = functionsRestFunctions;
		this.sourceFileContentFinalWhitespaceCharacters = sourceFileContentFinalWhitespaceCharacters;
	}

	public parseWhitespace(
		character: WhitespaceCharacter,
	): FunctionHeaderKnownSegmentContentFinalWhitespaceCharactersParser {
		const newFunctionHeaderKnownSegmentContentFinalWhitespaceCharacters: WhitespaceCharactersConcreteTreeNode =
			createWhitespaceCharactersConcreteTreeNode(
				character,
				this.functionHeaderKnownSegmentContentFinalWhitespaceCharacters,
			);

		const functionHeaderKnownSegmentContentFinalWhitespaceCharactersParser =
			new FunctionHeaderKnownSegmentContentFinalWhitespaceCharactersParser(
				newFunctionHeaderKnownSegmentContentFinalWhitespaceCharacters,
				this.functionHeaderKnownSegmentClosingBracketCharacter,
				this.functionHeaderKnownStartingSegmentRestSegments,
				this.functionHeaderFinalWhitespaceCharacters,
				this.functionBody,
				this.functionsRestFunctions,
				this.sourceFileContentFinalWhitespaceCharacters,
			);

		return functionHeaderKnownSegmentContentFinalWhitespaceCharactersParser;
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
		const functionHeaderKnownSegment: FunctionHeaderKnownSegmentConcreteTreeNode =
			createFunctionHeaderKnownSegmentConcreteTreeNode(
				character,
				this.functionHeaderKnownSegmentContentFinalWhitespaceCharacters,
				this.functionHeaderKnownSegmentClosingBracketCharacter,
			);

		const functionHeaderKnownStartingSegments: FunctionHeaderKnownStartingSegmentsConcreteTreeNode =
			createFunctionHeaderKnownStartingSegmentsConcreteTreeNode(
				functionHeaderKnownSegment,
				this.functionHeaderKnownStartingSegmentRestSegments,
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
		const functionHeaderKnownSegmentContentIdentifierCharacters: IdentifierCharactersConcreteTreeNode =
			createIdentifierCharactersConcreteTreeNode(character, null);

		const functionHeaderKnownSegmentContentIdentifierCharactersParser =
			new FunctionHeaderKnownSegmentContentIdentifierCharactersParser(
				functionHeaderKnownSegmentContentIdentifierCharacters,
				this.functionHeaderKnownSegmentContentFinalWhitespaceCharacters,
				this.functionHeaderKnownSegmentClosingBracketCharacter,
				this.functionHeaderKnownStartingSegmentRestSegments,
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
