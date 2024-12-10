import type {IdentifierCharacter} from "../../../../characters/IdentifierCharacter.ts";
import type {OpeningSquareBracketCharacter} from "../../../../characters/OpeningSquareBracketCharacter.ts";
import type {WhitespaceCharacter} from "../../../../characters/WhitespaceCharacter.ts";
import {createIdentifierCharactersConcreteTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/identifier-characters/createIdentifierCharactersConcreteTreeNode.ts";
import type {IdentifierCharactersConcreteTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/identifier-characters/IdentifierCharactersConcreteTreeNode.ts";
import type {Parser} from "../../Parser.ts";
import type {FunctionCallUnknownSegmentConcreteTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/function-call-unknown-segment/FunctionCallUnknownSegmentConcreteTreeNode.ts";
import {createFunctionCallUnknownSegmentContentConcreteTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/function-call-unknown-segment-content/createFunctionCallUnknownSegmentContentConcreteTreeNode.ts";
import type {WhitespaceCharactersConcreteTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/whitespace-characters/WhitespaceCharactersConcreteTreeNode.ts";
import {FunctionCallSegmentsParser} from "../function-call-segments-parser/FunctionCallSegmentsParser.ts";
import type {FunctionCallUnknownStartingSegmentsConcreteTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/function-call-unknown-starting-segments/FunctionCallUnknownStartingSegmentsConcreteTreeNode.ts";
import {createFunctionCallUnknownStartingSegmentsConcreteTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/function-call-unknown-starting-segments/createFunctionCallUnknownStartingSegmentsConcreteTreeNode.ts";
import {createFunctionCallUnknownSegmentConcreteTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/function-call-unknown-segment/createFunctionCallUnknownSegmentConcreteTreeNode.ts";
import type {ClosingSquareBracketCharacter} from "../../../../characters/ClosingSquareBracketCharacter.ts";
import type {FunctionCallKnownStartingSegmentsConcreteTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/function-call-known-starting-segments/FunctionCallKnownStartingSegmentsConcreteTreeNode.ts";
import type {FunctionCallWordStartingSegmentsConcreteTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/function-call-word-starting-segments/FunctionCallWordStartingSegmentsConcreteTreeNode.ts";
import type {FunctionCallSegmentsSeparatedRestSegmentsConcreteTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/function-call-segments-separated-rest-segments/FunctionCallSegmentsSeparatedRestSegmentsConcreteTreeNode.ts";
import type {FunctionCallUnknownSegmentContentConcreteTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/function-call-unknown-segment-content/FunctionCallUnknownSegmentContentConcreteTreeNode.ts";
import {FunctionCallUnknownSegmentContentInitialWhitespaceCharactersParser} from "../function-call-unknown-segment-content-initial-whitespace-characters/FunctionCallUnknownSegmentContentInitialWhitespaceCharactersParser.ts";
import {createWhitespaceCharactersConcreteTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/whitespace-characters/createWhitespaceCharactersConcreteTreeNode.ts";
import type {ClosingCurlyBracketCharacter} from "../../../../characters/ClosingCurlyBracketCharacter.ts";
import type {StatementsRestStatementsConcreteTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/statements-rest-statements/StatementsRestStatementsConcreteTreeNode.ts";
import type {FunctionsSeparatedRestFunctionsConcreteTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/functions-separated-rest-functions/FunctionsSeparatedRestFunctionsConcreteTreeNode.ts";
import type {FunctionsConcreteTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/functions/FunctionsConcreteTreeNode.ts";

export class FunctionCallUnknownSegmentContentIdentifierCharactersParser implements Parser {
	private readonly functionCallUnknownSegmentContentIdentifierCharacters: IdentifierCharactersConcreteTreeNode;
	private readonly functionCallUnknownSegmentContentFinalWhitespaceCharacters: WhitespaceCharactersConcreteTreeNode | null;
	private readonly functionCallUnknownSegmentClosingBracketCharacter: ClosingSquareBracketCharacter;

	private readonly functionCallUnknownStartingSegmentsRestSegments:
		| FunctionCallKnownStartingSegmentsConcreteTreeNode
		| FunctionCallUnknownStartingSegmentsConcreteTreeNode
		| FunctionCallWordStartingSegmentsConcreteTreeNode
		| null
		| FunctionCallSegmentsSeparatedRestSegmentsConcreteTreeNode;

	private readonly statementsRestStatements: StatementsRestStatementsConcreteTreeNode | null;
	private readonly blockContentFinalWhitespaceCharacters: WhitespaceCharactersConcreteTreeNode | null;
	private readonly blockClosingBracketCharacter: ClosingCurlyBracketCharacter;

	private readonly blockStack: readonly (readonly [
		statementsRestStatements: StatementsRestStatementsConcreteTreeNode | null,
		blockContentFinalWhitespaceCharacters: WhitespaceCharactersConcreteTreeNode | null,
		blockClosingBracketCharacter: ClosingCurlyBracketCharacter,
	])[];

	private readonly functionsRestFunctions:
		| FunctionsSeparatedRestFunctionsConcreteTreeNode
		| null
		| FunctionsConcreteTreeNode;

	private readonly sourceFileContentFinalWhitespaceCharacters: WhitespaceCharactersConcreteTreeNode | null;

	public constructor(
		functionCallUnknownSegmentContentIdentifierCharacters: IdentifierCharactersConcreteTreeNode,
		functionCallUnknownSegmentContentFinalWhitespaceCharacters: WhitespaceCharactersConcreteTreeNode | null,
		functionCallUnknownSegmentClosingBracketCharacter: ClosingSquareBracketCharacter,

		functionCallUnknownStartingSegmentsRestSegments:
			| FunctionCallKnownStartingSegmentsConcreteTreeNode
			| FunctionCallUnknownStartingSegmentsConcreteTreeNode
			| FunctionCallWordStartingSegmentsConcreteTreeNode
			| null
			| FunctionCallSegmentsSeparatedRestSegmentsConcreteTreeNode,

		statementsRestStatements: StatementsRestStatementsConcreteTreeNode | null,
		blockContentFinalWhitespaceCharacters: WhitespaceCharactersConcreteTreeNode | null,
		blockClosingBracketCharacter: ClosingCurlyBracketCharacter,

		blockStack: readonly (readonly [
			statementsRestStatements: StatementsRestStatementsConcreteTreeNode | null,
			blockContentFinalWhitespaceCharacters: WhitespaceCharactersConcreteTreeNode | null,
			blockClosingBracketCharacter: ClosingCurlyBracketCharacter,
		])[],

		functionsRestFunctions:
			| FunctionsSeparatedRestFunctionsConcreteTreeNode
			| null
			| FunctionsConcreteTreeNode,
		sourceFileContentFinalWhitespaceCharacters: WhitespaceCharactersConcreteTreeNode | null,
	) {
		this.functionCallUnknownSegmentContentIdentifierCharacters =
			functionCallUnknownSegmentContentIdentifierCharacters;

		this.functionCallUnknownSegmentContentFinalWhitespaceCharacters =
			functionCallUnknownSegmentContentFinalWhitespaceCharacters;

		this.functionCallUnknownSegmentClosingBracketCharacter =
			functionCallUnknownSegmentClosingBracketCharacter;

		this.functionCallUnknownStartingSegmentsRestSegments =
			functionCallUnknownStartingSegmentsRestSegments;

		this.statementsRestStatements = statementsRestStatements;
		this.blockContentFinalWhitespaceCharacters = blockContentFinalWhitespaceCharacters;
		this.blockClosingBracketCharacter = blockClosingBracketCharacter;
		this.blockStack = blockStack;
		this.functionsRestFunctions = functionsRestFunctions;
		this.sourceFileContentFinalWhitespaceCharacters = sourceFileContentFinalWhitespaceCharacters;
	}

	public parseWhitespace(
		character: WhitespaceCharacter,
	): FunctionCallUnknownSegmentContentInitialWhitespaceCharactersParser {
		const functionCallUnknownSegmentContentInitialWhitespaceCharacters: WhitespaceCharactersConcreteTreeNode =
			createWhitespaceCharactersConcreteTreeNode(character, null);

		const functionCallUnknownSegmentContentInitialWhitespaceCharactersParser =
			new FunctionCallUnknownSegmentContentInitialWhitespaceCharactersParser(
				functionCallUnknownSegmentContentInitialWhitespaceCharacters,
				this.functionCallUnknownSegmentContentIdentifierCharacters,
				this.functionCallUnknownSegmentContentFinalWhitespaceCharacters,
				this.functionCallUnknownSegmentClosingBracketCharacter,
				this.functionCallUnknownStartingSegmentsRestSegments,
				this.statementsRestStatements,
				this.blockContentFinalWhitespaceCharacters,
				this.blockClosingBracketCharacter,
				this.blockStack,
				this.functionsRestFunctions,
				this.sourceFileContentFinalWhitespaceCharacters,
			);

		return functionCallUnknownSegmentContentInitialWhitespaceCharactersParser;
	}

	public parseOpeningSquareBracket(
		character: OpeningSquareBracketCharacter,
	): FunctionCallSegmentsParser {
		const functionCallUnknownSegmentContent: FunctionCallUnknownSegmentContentConcreteTreeNode =
			createFunctionCallUnknownSegmentContentConcreteTreeNode(
				null,
				this.functionCallUnknownSegmentContentIdentifierCharacters,
				this.functionCallUnknownSegmentContentFinalWhitespaceCharacters,
			);

		const functionCallUnknownSegment: FunctionCallUnknownSegmentConcreteTreeNode =
			createFunctionCallUnknownSegmentConcreteTreeNode(
				character,
				functionCallUnknownSegmentContent,
				this.functionCallUnknownSegmentClosingBracketCharacter,
			);

		const functionCallUnknownStartingSegments: FunctionCallUnknownStartingSegmentsConcreteTreeNode =
			createFunctionCallUnknownStartingSegmentsConcreteTreeNode(
				functionCallUnknownSegment,
				this.functionCallUnknownStartingSegmentsRestSegments,
			);

		const functionCallSegmentsParser = new FunctionCallSegmentsParser(
			functionCallUnknownStartingSegments,
			this.statementsRestStatements,
			this.blockContentFinalWhitespaceCharacters,
			this.blockClosingBracketCharacter,
			this.blockStack,
			this.functionsRestFunctions,
			this.sourceFileContentFinalWhitespaceCharacters,
		);

		return functionCallSegmentsParser;
	}

	public parseClosingSquareBracket(): never {
		throw new Error("Closing square bracket not allowed in unknown function call segment.");
	}

	public parseOpeningCurlyBracket(): never {
		throw new Error("Opening curly bracket not allowed in unknown function call segment.");
	}
	public parseClosingCurlyBracket(): never {
		throw new Error("Closing curly bracket not allowed in unknown function call segment.");
	}

	public parseOpeningRoundBracket(): never {
		throw new Error("Opening round bracket not allowed in unknown function call segment.");
	}

	public parseClosingRoundBracket(): never {
		throw new Error("Closing round bracket not allowed in unknown function call segment.");
	}

	public parseIdentifier(
		character: IdentifierCharacter,
	): FunctionCallUnknownSegmentContentIdentifierCharactersParser {
		const newIdentifierCharacters: IdentifierCharactersConcreteTreeNode =
			createIdentifierCharactersConcreteTreeNode(
				character,
				this.functionCallUnknownSegmentContentIdentifierCharacters,
			);

		const functionCallUnknownSegmentContentIdentifierCharactersParser =
			new FunctionCallUnknownSegmentContentIdentifierCharactersParser(
				newIdentifierCharacters,
				this.functionCallUnknownSegmentContentFinalWhitespaceCharacters,
				this.functionCallUnknownSegmentClosingBracketCharacter,
				this.functionCallUnknownStartingSegmentsRestSegments,
				this.statementsRestStatements,
				this.blockContentFinalWhitespaceCharacters,
				this.blockClosingBracketCharacter,
				this.blockStack,
				this.functionsRestFunctions,
				this.sourceFileContentFinalWhitespaceCharacters,
			);

		return functionCallUnknownSegmentContentIdentifierCharactersParser;
	}

	public parseOperator(): never {
		throw new Error("Unexpected operator in unknown function call segment.");
	}

	public finalize(): never {
		throw new Error("Unexpected end of input in unknown function call segment.");
	}
}
