import type {ClosingCurlyBracketCharacter} from "../../../../characters/ClosingCurlyBracketCharacter.ts";
import type {IdentifierCharacter} from "../../../../characters/IdentifierCharacter.ts";
import type {ClosingSquareBracketCharacter} from "../../../../characters/ClosingSquareBracketCharacter.ts";
import type {WhitespaceCharacter} from "../../../../characters/WhitespaceCharacter.ts";
import {createIdentifierCharactersConcreteTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/identifier-characters/createIdentifierCharactersConcreteTreeNode.ts";
import {createWhitespaceCharactersConcreteTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/whitespace-characters/createWhitespaceCharactersConcreteTreeNode.ts";
import type {WhitespaceCharactersConcreteTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/whitespace-characters/WhitespaceCharactersConcreteTreeNode.ts";
import type {Parser} from "../../Parser.ts";
import {FunctionCallUnknownSegmentContentIdentifierCharactersParser} from "../function-call-unknown-segment-content-identifier-characters/FunctionCallUnknownSegmentContentIdentifierCharactersParser.ts";
import type {IdentifierCharactersConcreteTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/identifier-characters/IdentifierCharactersConcreteTreeNode.ts";
import type {FunctionCallKnownStartingSegmentsConcreteTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/function-call-known-starting-segments/FunctionCallKnownStartingSegmentsConcreteTreeNode.ts";
import type {FunctionCallSegmentsSeparatedRestSegmentsConcreteTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/function-call-segments-separated-rest-segments/FunctionCallSegmentsSeparatedRestSegmentsConcreteTreeNode.ts";
import type {FunctionCallUnknownStartingSegmentsConcreteTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/function-call-unknown-starting-segments/FunctionCallUnknownStartingSegmentsConcreteTreeNode.ts";
import type {FunctionCallWordStartingSegmentsConcreteTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/function-call-word-starting-segments/FunctionCallWordStartingSegmentsConcreteTreeNode.ts";
import type {StatementsRestStatementsConcreteTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/statements-rest-statements/StatementsRestStatementsConcreteTreeNode.ts";
import type {FunctionsSeparatedRestFunctionsConcreteTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/functions-separated-rest-functions/FunctionsSeparatedRestFunctionsConcreteTreeNode.ts";
import type {FunctionsConcreteTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/functions/FunctionsConcreteTreeNode.ts";

export class FunctionCallUnknownSegmentContentFinalWhitespaceCharactersParser implements Parser {
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
	): FunctionCallUnknownSegmentContentFinalWhitespaceCharactersParser {
		const newWhitespaceCharacters: WhitespaceCharactersConcreteTreeNode =
			createWhitespaceCharactersConcreteTreeNode(
				character,
				this.functionCallUnknownSegmentContentFinalWhitespaceCharacters,
			);

		const functionCallUnknownSegmentContentFinalWhitespaceCharactersParser =
			new FunctionCallUnknownSegmentContentFinalWhitespaceCharactersParser(
				newWhitespaceCharacters,
				this.functionCallUnknownSegmentClosingBracketCharacter,
				this.functionCallUnknownStartingSegmentsRestSegments,
				this.statementsRestStatements,
				this.blockContentFinalWhitespaceCharacters,
				this.blockClosingBracketCharacter,
				this.blockStack,
				this.functionsRestFunctions,
				this.sourceFileContentFinalWhitespaceCharacters,
			);

		return functionCallUnknownSegmentContentFinalWhitespaceCharactersParser;
	}

	public parseOpeningSquareBracket(): never {
		throw new Error("Opening square bracket not allowed in unknown function call segment.");
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
		const functionCallUnknownSegmentContentIdentifierCharacters: IdentifierCharactersConcreteTreeNode =
			createIdentifierCharactersConcreteTreeNode(character, null);

		const functionCallUnknownSegmentContentIdentifierCharactersParser =
			new FunctionCallUnknownSegmentContentIdentifierCharactersParser(
				functionCallUnknownSegmentContentIdentifierCharacters,
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
		throw new Error("Operator not allowed in unknown function call segment.");
	}

	public finalize(): never {
		throw new Error("Unexpected end of input in unknown function call segment.");
	}
}
