import type {ClosingCurlyBracketCharacter} from "../../../../characters/ClosingCurlyBracketCharacter.ts";
import type {ClosingSquareBracketCharacter} from "../../../../characters/ClosingSquareBracketCharacter.ts";
import type {OpeningSquareBracketCharacter} from "../../../../characters/OpeningSquareBracketCharacter.ts";
import type {WhitespaceCharacter} from "../../../../characters/WhitespaceCharacter.ts";
import type {FunctionCallKnownStartingSegmentsConcreteTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/function-call-known-starting-segments/FunctionCallKnownStartingSegmentsConcreteTreeNode.ts";
import type {FunctionCallSegmentsSeparatedRestSegmentsConcreteTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/function-call-segments-separated-rest-segments/FunctionCallSegmentsSeparatedRestSegmentsConcreteTreeNode.ts";
import {createFunctionCallUnknownSegmentContentConcreteTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/function-call-unknown-segment-content/createFunctionCallUnknownSegmentContentConcreteTreeNode.ts";
import type {FunctionCallUnknownSegmentContentConcreteTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/function-call-unknown-segment-content/FunctionCallUnknownSegmentContentConcreteTreeNode.ts";
import {createFunctionCallUnknownSegmentConcreteTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/function-call-unknown-segment/createFunctionCallUnknownSegmentConcreteTreeNode.ts";
import type {FunctionCallUnknownSegmentConcreteTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/function-call-unknown-segment/FunctionCallUnknownSegmentConcreteTreeNode.ts";
import {createFunctionCallUnknownStartingSegmentsConcreteTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/function-call-unknown-starting-segments/createFunctionCallUnknownStartingSegmentsConcreteTreeNode.ts";
import type {FunctionCallUnknownStartingSegmentsConcreteTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/function-call-unknown-starting-segments/FunctionCallUnknownStartingSegmentsConcreteTreeNode.ts";
import type {FunctionCallWordStartingSegmentsConcreteTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/function-call-word-starting-segments/FunctionCallWordStartingSegmentsConcreteTreeNode.ts";
import type {FunctionsSeparatedRestFunctionsConcreteTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/functions-separated-rest-functions/FunctionsSeparatedRestFunctionsConcreteTreeNode.ts";
import type {FunctionsConcreteTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/functions/FunctionsConcreteTreeNode.ts";
import type {IdentifierCharactersConcreteTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/identifier-characters/IdentifierCharactersConcreteTreeNode.ts";
import type {StatementsRestStatementsConcreteTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/statements-rest-statements/StatementsRestStatementsConcreteTreeNode.ts";
import {createWhitespaceCharactersConcreteTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/whitespace-characters/createWhitespaceCharactersConcreteTreeNode.ts";
import type {WhitespaceCharactersConcreteTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/whitespace-characters/WhitespaceCharactersConcreteTreeNode.ts";
import type {Parser} from "../../Parser.ts";
import {FunctionCallSegmentsParser} from "../function-call-segments-parser/FunctionCallSegmentsParser.ts";

export class FunctionCallUnknownSegmentContentInitialWhitespaceCharactersParser implements Parser {
	private readonly functionCallUnknownSegmentContentInitialWhitespaceCharacters: WhitespaceCharactersConcreteTreeNode;
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
		functionCallUnknownSegmentContentInitialWhitespaceCharacters: WhitespaceCharactersConcreteTreeNode,
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
		this.functionCallUnknownSegmentContentInitialWhitespaceCharacters =
			functionCallUnknownSegmentContentInitialWhitespaceCharacters;

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
		const newFunctionCallUnknownSegmentContentInitialWhitespaceCharacters: WhitespaceCharactersConcreteTreeNode =
			createWhitespaceCharactersConcreteTreeNode(
				character,
				this.functionCallUnknownSegmentContentInitialWhitespaceCharacters,
			);

		const functionCallUnknownSegmentContentInitialWhitespaceCharactersParser =
			new FunctionCallUnknownSegmentContentInitialWhitespaceCharactersParser(
				newFunctionCallUnknownSegmentContentInitialWhitespaceCharacters,
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
				this.functionCallUnknownSegmentContentInitialWhitespaceCharacters,
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

	public parseIdentifier(): never {
		throw new Error("Not implemented.");
	}

	public parseOperator(): never {
		throw new Error("Not implemented.");
	}

	public finalize(): never {
		throw new Error("Not implemented.");
	}
}
