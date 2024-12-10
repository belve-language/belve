import type {ClosingCurlyBracketCharacter} from "../../../../characters/ClosingCurlyBracketCharacter.ts";
import type {OperatorCharacter} from "../../../../characters/OperatorCharacter.ts";
import type {WhitespaceCharacter} from "../../../../characters/WhitespaceCharacter.ts";
import type {FunctionsSeparatedRestFunctionsConcreteTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/functions-separated-rest-functions/FunctionsSeparatedRestFunctionsConcreteTreeNode.ts";
import type {FunctionsConcreteTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/functions/FunctionsConcreteTreeNode.ts";
import type {StatementsRestStatementsConcreteTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/statements-rest-statements/StatementsRestStatementsConcreteTreeNode.ts";
import type {StatementsConcreteTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/statements/StatementsConcreteTreeNode.ts";
import {createWhitespaceCharactersConcreteTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/whitespace-characters/createWhitespaceCharactersConcreteTreeNode.ts";
import type {WhitespaceCharactersConcreteTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/whitespace-characters/WhitespaceCharactersConcreteTreeNode.ts";
import type {Parser} from "../../Parser.ts";
import {StatementsRestStatementsAfterOperatorWhitespaceCharactersParser} from "../statements-rest-statements-after-operator-whitespace-characters/StatementsRestStatementsAfterOperatorWhitespaceCharactersParser.ts";
import {StatementsRestStatementsBeforeOperatorParser} from "../statements-rest-statements-before-operator/StatementsRestStatementsBeforeOperatorParser.ts";

export class StatementsRestStatementsAfterOperatorParser implements Parser {
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
		this.statementsRestStatementsStatements = statementsRestStatementsStatements;
		this.blockContentFinalWhitespaceCharacters = blockContentFinalWhitespaceCharacters;
		this.blockClosingBracketCharacter = blockClosingBracketCharacter;
		this.blockStack = blockStack;
		this.functionsRestFunctions = functionsRestFunctions;
		this.sourceFileContentFinalWhitespaceCharacters = sourceFileContentFinalWhitespaceCharacters;
	}

	public parseWhitespace(
		character: WhitespaceCharacter,
	): StatementsRestStatementsAfterOperatorWhitespaceCharactersParser {
		const statementsRestStatementsAfterOperatorWhitespaceCharacters: WhitespaceCharactersConcreteTreeNode =
			createWhitespaceCharactersConcreteTreeNode(character, null);

		const statementsRestStatementsAfterOperatorWhitespaceCharactersParser =
			new StatementsRestStatementsAfterOperatorWhitespaceCharactersParser(
				statementsRestStatementsAfterOperatorWhitespaceCharacters,
				this.statementsRestStatementsStatements,
				this.blockContentFinalWhitespaceCharacters,
				this.blockClosingBracketCharacter,
				this.blockStack,
				this.functionsRestFunctions,
				this.sourceFileContentFinalWhitespaceCharacters,
			);

		return statementsRestStatementsAfterOperatorWhitespaceCharactersParser;
	}

	public parseOpeningSquareBracket(): never {
		throw new Error("Method not implemented.");
	}

	public parseClosingSquareBracket(): never {
		throw new Error("Method not implemented.");
	}

	public parseOpeningCurlyBracket(): never {
		throw new Error("Method not implemented.");
	}
	public parseClosingCurlyBracket(): never {
		throw new Error("Method not implemented.");
	}

	public parseOpeningRoundBracket(): never {
		throw new Error("Method not implemented.");
	}

	public parseClosingRoundBracket(): never {
		throw new Error("Method not implemented.");
	}

	public parseIdentifier(): never {
		throw new Error("Method not implemented.");
	}

	public parseOperator(character: OperatorCharacter): StatementsRestStatementsBeforeOperatorParser {
		const statementsRestStatementsBeforeOperatorParser =
			new StatementsRestStatementsBeforeOperatorParser(
				character,
				null,
				this.statementsRestStatementsStatements,
				this.blockContentFinalWhitespaceCharacters,
				this.blockClosingBracketCharacter,
				this.blockStack,
				this.functionsRestFunctions,
				this.sourceFileContentFinalWhitespaceCharacters,
			);

		return statementsRestStatementsBeforeOperatorParser;
	}

	public finalize(): never {
		throw new Error("Method not implemented.");
	}
}
