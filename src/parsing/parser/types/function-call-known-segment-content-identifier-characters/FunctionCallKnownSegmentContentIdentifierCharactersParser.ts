import type {ClosingCurlyBracketCharacter} from "../../../../characters/ClosingCurlyBracketCharacter.ts";
import type {ClosingRoundBracketCharacter} from "../../../../characters/ClosingRoundBracketCharacter.ts";
import type {IdentifierCharacter} from "../../../../characters/IdentifierCharacter.ts";
import type {OpeningRoundBracketCharacter} from "../../../../characters/OpeningRoundBracketCharacter.ts";
import type {WhitespaceCharacter} from "../../../../characters/WhitespaceCharacter.ts";
import {createFunctionCallKnownSegmentContentConcreteTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/function-call-known-segment-content/createFunctionCallKnownSegmentContentConcreteTreeNode.ts";
import type {FunctionCallKnownSegmentContentConcreteTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/function-call-known-segment-content/FunctionCallKnownSegmentContentConcreteTreeNode.ts";
import {createFunctionCallKnownSegmentConcreteTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/function-call-known-segment/createFunctionCallKnownSegmentConcreteTreeNode.ts";
import type {FunctionCallKnownSegmentConcreteTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/function-call-known-segment/FunctionCallKnownSegmentConcreteTreeNode.ts";
import {createFunctionCallKnownStartingSegmentsConcreteTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/function-call-known-starting-segments/createFunctionCallKnownStartingSegmentsConcreteTreeNode.ts";
import type {FunctionCallKnownStartingSegmentsConcreteTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/function-call-known-starting-segments/FunctionCallKnownStartingSegmentsConcreteTreeNode.ts";
import type {FunctionCallSegmentsSeparatedRestSegmentsConcreteTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/function-call-segments-separated-rest-segments/FunctionCallSegmentsSeparatedRestSegmentsConcreteTreeNode.ts";
import type {FunctionCallUnknownStartingSegmentsConcreteTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/function-call-unknown-starting-segments/FunctionCallUnknownStartingSegmentsConcreteTreeNode.ts";
import type {FunctionCallWordStartingSegmentsConcreteTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/function-call-word-starting-segments/FunctionCallWordStartingSegmentsConcreteTreeNode.ts";
import type {FunctionsSeparatedRestFunctionsConcreteTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/functions-separated-rest-functions/FunctionsSeparatedRestFunctionsConcreteTreeNode.ts";
import type {FunctionsConcreteTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/functions/FunctionsConcreteTreeNode.ts";
import {createIdentifierCharactersConcreteTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/identifier-characters/createIdentifierCharactersConcreteTreeNode.ts";
import type {IdentifierCharactersConcreteTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/identifier-characters/IdentifierCharactersConcreteTreeNode.ts";
import type {StatementsRestStatementsConcreteTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/statements-rest-statements/StatementsRestStatementsConcreteTreeNode.ts";
import {createWhitespaceCharactersConcreteTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/whitespace-characters/createWhitespaceCharactersConcreteTreeNode.ts";
import type {WhitespaceCharactersConcreteTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/whitespace-characters/WhitespaceCharactersConcreteTreeNode.ts";
import type {Parser} from "../../Parser.ts";
import {FunctionCallKnownSegmentContentInitialWhitespaceCharactersParser} from "../function-call-known-segment-content-initial-whitespace-characters/FunctionCallKnownSegmentContentInitialWhitespaceCharactersParser.ts";
import {FunctionCallSegmentsParser} from "../function-call-segments-parser/FunctionCallSegmentsParser.ts";

export class FunctionCallKnownSegmentContentIdentifierCharactersParser implements Parser {
	private readonly functionCallKnownSegmentContentIdentifierCharacters: IdentifierCharactersConcreteTreeNode;
	private readonly functionCallKnownSegmentContentFinalWhitespaceCharacters: WhitespaceCharactersConcreteTreeNode | null;
	private readonly functionCallKnownSegmentClosingBracketCharacter: ClosingRoundBracketCharacter;

	private readonly functionCallKnownStartingSegmentsRestSegments:
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
		functionCallKnownSegmentContentIdentifierCharacters: IdentifierCharactersConcreteTreeNode,
		functionCallKnownSegmentContentFinalWhitespaceCharacters: WhitespaceCharactersConcreteTreeNode | null,
		functionCallKnownSegmentClosingBracketCharacter: ClosingRoundBracketCharacter,

		functionCallKnownStartingSegmentsRestSegments:
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
		this.functionCallKnownSegmentContentIdentifierCharacters =
			functionCallKnownSegmentContentIdentifierCharacters;

		this.functionCallKnownSegmentContentFinalWhitespaceCharacters =
			functionCallKnownSegmentContentFinalWhitespaceCharacters;

		this.functionCallKnownSegmentClosingBracketCharacter =
			functionCallKnownSegmentClosingBracketCharacter;

		this.functionCallKnownStartingSegmentsRestSegments =
			functionCallKnownStartingSegmentsRestSegments;

		this.statementsRestStatements = statementsRestStatements;
		this.blockContentFinalWhitespaceCharacters = blockContentFinalWhitespaceCharacters;
		this.blockClosingBracketCharacter = blockClosingBracketCharacter;
		this.blockStack = blockStack;
		this.functionsRestFunctions = functionsRestFunctions;
		this.sourceFileContentFinalWhitespaceCharacters = sourceFileContentFinalWhitespaceCharacters;
	}

	public parseWhitespace(
		character: WhitespaceCharacter,
	): FunctionCallKnownSegmentContentInitialWhitespaceCharactersParser {
		const functionCallKnownSegmentContentInitialWhitespaceCharacters: WhitespaceCharactersConcreteTreeNode =
			createWhitespaceCharactersConcreteTreeNode(character, null);

		const functionCallKnownSegmentContentInitialWhitespaceCharactersParser =
			new FunctionCallKnownSegmentContentInitialWhitespaceCharactersParser(
				functionCallKnownSegmentContentInitialWhitespaceCharacters,
				this.functionCallKnownSegmentContentIdentifierCharacters,
				this.functionCallKnownSegmentContentFinalWhitespaceCharacters,
				this.functionCallKnownSegmentClosingBracketCharacter,
				this.functionCallKnownStartingSegmentsRestSegments,
				this.statementsRestStatements,
				this.blockContentFinalWhitespaceCharacters,
				this.blockClosingBracketCharacter,
				this.blockStack,
				this.functionsRestFunctions,
				this.sourceFileContentFinalWhitespaceCharacters,
			);

		return functionCallKnownSegmentContentInitialWhitespaceCharactersParser;
	}

	public parseOpeningRoundBracket(
		character: OpeningRoundBracketCharacter,
	): FunctionCallSegmentsParser {
		const functionCallKnownSegmentContent: FunctionCallKnownSegmentContentConcreteTreeNode =
			createFunctionCallKnownSegmentContentConcreteTreeNode(
				null,
				this.functionCallKnownSegmentContentIdentifierCharacters,
				this.functionCallKnownSegmentContentFinalWhitespaceCharacters,
			);

		const functionCallKnownSegment: FunctionCallKnownSegmentConcreteTreeNode =
			createFunctionCallKnownSegmentConcreteTreeNode(
				character,
				functionCallKnownSegmentContent,
				this.functionCallKnownSegmentClosingBracketCharacter,
			);

		const functionCallKnownStartingSegments: FunctionCallKnownStartingSegmentsConcreteTreeNode =
			createFunctionCallKnownStartingSegmentsConcreteTreeNode(
				functionCallKnownSegment,
				this.functionCallKnownStartingSegmentsRestSegments,
			);

		const functionCallSegmentsParser = new FunctionCallSegmentsParser(
			functionCallKnownStartingSegments,
			this.statementsRestStatements,
			this.blockContentFinalWhitespaceCharacters,
			this.blockClosingBracketCharacter,
			this.blockStack,
			this.functionsRestFunctions,
			this.sourceFileContentFinalWhitespaceCharacters,
		);

		return functionCallSegmentsParser;
	}

	public parseClosingRoundBracket(): never {
		throw new Error("Closing round bracket not allowed in known function call segment.");
	}

	public parseOpeningCurlyBracket(): never {
		throw new Error("Opening curly bracket not allowed in known function call segment.");
	}
	public parseClosingCurlyBracket(): never {
		throw new Error("Closing curly bracket not allowed in known function call segment.");
	}

	public parseOpeningSquareBracket(): never {
		throw new Error("Opening square bracket not allowed in known function call segment.");
	}

	public parseClosingSquareBracket(): never {
		throw new Error("Closing square bracket not allowed in known function call segment.");
	}

	public parseIdentifier(
		character: IdentifierCharacter,
	): FunctionCallKnownSegmentContentIdentifierCharactersParser {
		const newIdentifierCharacters: IdentifierCharactersConcreteTreeNode =
			createIdentifierCharactersConcreteTreeNode(
				character,
				this.functionCallKnownSegmentContentIdentifierCharacters,
			);

		const functionCallKnownSegmentContentIdentifierCharactersParser =
			new FunctionCallKnownSegmentContentIdentifierCharactersParser(
				newIdentifierCharacters,
				this.functionCallKnownSegmentContentFinalWhitespaceCharacters,
				this.functionCallKnownSegmentClosingBracketCharacter,
				this.functionCallKnownStartingSegmentsRestSegments,
				this.statementsRestStatements,
				this.blockContentFinalWhitespaceCharacters,
				this.blockClosingBracketCharacter,
				this.blockStack,
				this.functionsRestFunctions,
				this.sourceFileContentFinalWhitespaceCharacters,
			);

		return functionCallKnownSegmentContentIdentifierCharactersParser;
	}

	public parseOperator(): never {
		throw new Error("Unexpected operator in known function call segment.");
	}

	public finalize(): never {
		throw new Error("Unexpected end of input in known function call segment.");
	}
}
