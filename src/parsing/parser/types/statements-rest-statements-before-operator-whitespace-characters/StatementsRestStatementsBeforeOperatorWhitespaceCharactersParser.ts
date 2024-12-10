import type {ClosingCurlyBracketCharacter} from "../../../../characters/ClosingCurlyBracketCharacter.ts";
import type {ClosingRoundBracketCharacter} from "../../../../characters/ClosingRoundBracketCharacter.ts";
import type {ClosingSquareBracketCharacter} from "../../../../characters/ClosingSquareBracketCharacter.ts";
import type {IdentifierCharacter} from "../../../../characters/IdentifierCharacter.ts";
import type {OperatorCharacter} from "../../../../characters/OperatorCharacter.ts";
import type {WhitespaceCharacter} from "../../../../characters/WhitespaceCharacter.ts";
import type {FunctionsSeparatedRestFunctionsConcreteTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/functions-separated-rest-functions/FunctionsSeparatedRestFunctionsConcreteTreeNode.ts";
import type {FunctionsConcreteTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/functions/FunctionsConcreteTreeNode.ts";
import {createIdentifierCharactersConcreteTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/identifier-characters/createIdentifierCharactersConcreteTreeNode.ts";
import type {IdentifierCharactersConcreteTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/identifier-characters/IdentifierCharactersConcreteTreeNode.ts";
import {createStatementsRestStatementsConcreteTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/statements-rest-statements/createStatementsRestStatementsConcreteTreeNode.ts";
import type {StatementsRestStatementsConcreteTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/statements-rest-statements/StatementsRestStatementsConcreteTreeNode.ts";
import type {StatementsConcreteTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/statements/StatementsConcreteTreeNode.ts";
import {createWhitespaceCharactersConcreteTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/whitespace-characters/createWhitespaceCharactersConcreteTreeNode.ts";
import type {WhitespaceCharactersConcreteTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/whitespace-characters/WhitespaceCharactersConcreteTreeNode.ts";
import type {Parser} from "../../Parser.ts";
import {BlockContentParser} from "../block-content/BlockContentParser.ts";
import {FunctionCallKnownSegmentContentParser} from "../function-call-known-segment-content/FunctionCallKnownSegmentContentParser.ts";
import {FunctionCallUnknownSegmentContentParser} from "../function-call-unknown-segment-content/FunctionCallUnknownSegmentContentParser.ts";
import {FunctionCallWordSegmentIdentifierCharactersParser} from "../function-call-word-segment-identifier-characters/FunctionCallWordSegmentIdentifierCharactersParser.ts";

export class StatementsRestStatementsBeforeOperatorWhitespaceCharactersParser implements Parser {
	private readonly statementsRestStatementsBeforeOperatorWhitespaceCharacters: WhitespaceCharactersConcreteTreeNode;
	private readonly statementsRestStatementsOperatorCharacter: OperatorCharacter;
	private readonly statementsRestStatementsAfterOperatorWhitespaceCharacters: WhitespaceCharactersConcreteTreeNode | null;
	private readonly statementsRestStatementsStatements: StatementsConcreteTreeNode;
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
		statementsRestStatementsBeforeOperatorWhitespaceCharacters: WhitespaceCharactersConcreteTreeNode,
		statementsRestStatementsOperatorCharacter: OperatorCharacter,
		statementsRestStatementsAfterOperatorWhitespaceCharacters: WhitespaceCharactersConcreteTreeNode | null,
		statementsRestStatementsStatements: StatementsConcreteTreeNode,
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
		this.statementsRestStatementsBeforeOperatorWhitespaceCharacters =
			statementsRestStatementsBeforeOperatorWhitespaceCharacters;

		this.statementsRestStatementsOperatorCharacter = statementsRestStatementsOperatorCharacter;

		this.statementsRestStatementsAfterOperatorWhitespaceCharacters =
			statementsRestStatementsAfterOperatorWhitespaceCharacters;

		this.statementsRestStatementsStatements = statementsRestStatementsStatements;
		this.blockContentFinalWhitespaceCharacters = blockContentFinalWhitespaceCharacters;
		this.blockClosingBracketCharacter = blockClosingBracketCharacter;

		this.blockStack = blockStack;
		this.functionsRestFunctions = functionsRestFunctions;
		this.sourceFileContentFinalWhitespaceCharacters = sourceFileContentFinalWhitespaceCharacters;
	}

	public parseWhitespace(
		character: WhitespaceCharacter,
	): StatementsRestStatementsBeforeOperatorWhitespaceCharactersParser {
		const newStatementsRestStatementsBeforeOperatorWhitespaceCharacters =
			createWhitespaceCharactersConcreteTreeNode(
				character,
				this.statementsRestStatementsBeforeOperatorWhitespaceCharacters,
			);

		const statementsRestStatementsBeforeOperatorWhitespaceCharactersParser =
			new StatementsRestStatementsBeforeOperatorWhitespaceCharactersParser(
				newStatementsRestStatementsBeforeOperatorWhitespaceCharacters,
				this.statementsRestStatementsOperatorCharacter,
				this.statementsRestStatementsAfterOperatorWhitespaceCharacters,
				this.statementsRestStatementsStatements,
				this.blockContentFinalWhitespaceCharacters,
				this.blockClosingBracketCharacter,
				this.blockStack,
				this.functionsRestFunctions,
				this.sourceFileContentFinalWhitespaceCharacters,
			);

		return statementsRestStatementsBeforeOperatorWhitespaceCharactersParser;
	}

	public parseOpeningSquareBracket(): never {
		throw new Error("Unexpected opening square bracket character.");
	}

	public parseClosingSquareBracket(
		character: ClosingSquareBracketCharacter,
	): FunctionCallUnknownSegmentContentParser {
		const statementsRestStatements: StatementsRestStatementsConcreteTreeNode =
			createStatementsRestStatementsConcreteTreeNode(
				this.statementsRestStatementsBeforeOperatorWhitespaceCharacters,
				this.statementsRestStatementsOperatorCharacter,
				this.statementsRestStatementsAfterOperatorWhitespaceCharacters,
				this.statementsRestStatementsStatements,
			);

		const functionCallUnknownSegmentContentParser = new FunctionCallUnknownSegmentContentParser(
			character,
			null,
			statementsRestStatements,
			this.blockContentFinalWhitespaceCharacters,
			this.blockClosingBracketCharacter,
			this.blockStack,
			this.functionsRestFunctions,
			this.sourceFileContentFinalWhitespaceCharacters,
		);

		return functionCallUnknownSegmentContentParser;
	}

	public parseOpeningCurlyBracket(): never {
		throw new Error("Unexpected opening curly bracket character.");
	}

	public parseClosingCurlyBracket(character: ClosingCurlyBracketCharacter): BlockContentParser {
		const statementsRestStatements: StatementsRestStatementsConcreteTreeNode =
			createStatementsRestStatementsConcreteTreeNode(
				this.statementsRestStatementsBeforeOperatorWhitespaceCharacters,
				this.statementsRestStatementsOperatorCharacter,
				this.statementsRestStatementsAfterOperatorWhitespaceCharacters,
				this.statementsRestStatementsStatements,
			);

		const newBlockStack: readonly (readonly [
			statementsRestStatements: StatementsRestStatementsConcreteTreeNode | null,
			blockContentFinalWhitespaceCharacters: WhitespaceCharactersConcreteTreeNode | null,
			blockClosingBracketCharacter: ClosingCurlyBracketCharacter,
		])[] = [
			[
				statementsRestStatements,
				this.blockContentFinalWhitespaceCharacters,
				this.blockClosingBracketCharacter,
			],
			...this.blockStack,
		];

		const blockContentParser = new BlockContentParser(
			character,
			newBlockStack,
			this.functionsRestFunctions,
			this.sourceFileContentFinalWhitespaceCharacters,
		);

		return blockContentParser;
	}

	public parseOpeningRoundBracket(): never {
		throw new Error("Unexpected opening round bracket character.");
	}

	public parseClosingRoundBracket(
		character: ClosingRoundBracketCharacter,
	): FunctionCallKnownSegmentContentParser {
		const statementsRestStatements: StatementsRestStatementsConcreteTreeNode =
			createStatementsRestStatementsConcreteTreeNode(
				null,
				this.statementsRestStatementsOperatorCharacter,
				this.statementsRestStatementsAfterOperatorWhitespaceCharacters,
				this.statementsRestStatementsStatements,
			);

		const functionCallKnownSegmentContentParser = new FunctionCallKnownSegmentContentParser(
			character,
			null,
			statementsRestStatements,
			this.blockContentFinalWhitespaceCharacters,
			this.blockClosingBracketCharacter,
			this.blockStack,
			this.functionsRestFunctions,
			this.sourceFileContentFinalWhitespaceCharacters,
		);

		return functionCallKnownSegmentContentParser;
	}

	public parseIdentifier(
		character: IdentifierCharacter,
	): FunctionCallWordSegmentIdentifierCharactersParser {
		const functionCallWordSegmentIdentifierCharacters: IdentifierCharactersConcreteTreeNode =
			createIdentifierCharactersConcreteTreeNode(character, null);

		const statementsRestStatementsStatements: StatementsRestStatementsConcreteTreeNode =
			createStatementsRestStatementsConcreteTreeNode(
				this.statementsRestStatementsBeforeOperatorWhitespaceCharacters,
				this.statementsRestStatementsOperatorCharacter,
				this.statementsRestStatementsAfterOperatorWhitespaceCharacters,
				this.statementsRestStatementsStatements,
			);

		const functionCallWordSegmentIdentifierCharactersParser =
			new FunctionCallWordSegmentIdentifierCharactersParser(
				functionCallWordSegmentIdentifierCharacters,
				null,
				statementsRestStatementsStatements,
				this.blockContentFinalWhitespaceCharacters,
				this.blockClosingBracketCharacter,
				this.blockStack,
				this.functionsRestFunctions,
				this.sourceFileContentFinalWhitespaceCharacters,
			);

		return functionCallWordSegmentIdentifierCharactersParser;
	}

	public parseOperator(): never {
		throw new Error("Unexpected operator character");
	}

	public finalize(): never {
		throw new Error("Unexpected end of input.");
	}
}
