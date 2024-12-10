import type {ClosingCurlyBracketCharacter} from "../../../../characters/ClosingCurlyBracketCharacter.ts";
import type {ClosingRoundBracketCharacter} from "../../../../characters/ClosingRoundBracketCharacter.ts";
import type {ClosingSquareBracketCharacter} from "../../../../characters/ClosingSquareBracketCharacter.ts";
import type {IdentifierCharacter} from "../../../../characters/IdentifierCharacter.ts";
import type {OpeningCurlyBracketCharacter} from "../../../../characters/OpeningCurlyBracketCharacter.ts";
import type {WhitespaceCharacter} from "../../../../characters/WhitespaceCharacter.ts";
import type {BlockConcreteTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/block/BlockConcreteTreeNode.ts";
import {createBlockConcreteTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/block/createBlockConcreteTreeNode.ts";
import {createFunctionBodyConcreteTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/function-body/createFunctionBodyConcreteTreeNode.ts";
import type {FunctionBodyConcreteTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/function-body/FunctionBodyConcreteTreeNode.ts";
import type {FunctionsSeparatedRestFunctionsConcreteTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/functions-separated-rest-functions/FunctionsSeparatedRestFunctionsConcreteTreeNode.ts";
import type {FunctionsConcreteTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/functions/FunctionsConcreteTreeNode.ts";
import {createIdentifierCharactersConcreteTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/identifier-characters/createIdentifierCharactersConcreteTreeNode.ts";
import type {IdentifierCharactersConcreteTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/identifier-characters/IdentifierCharactersConcreteTreeNode.ts";
import type {StatementsRestStatementsConcreteTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/statements-rest-statements/StatementsRestStatementsConcreteTreeNode.ts";
import {createStatementsConcreteTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/statements/createStatementsConcreteTreeNode.ts";
import type {StatementsConcreteTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/statements/StatementsConcreteTreeNode.ts";
import {createWhitespaceCharactersConcreteTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/whitespace-characters/createWhitespaceCharactersConcreteTreeNode.ts";
import type {WhitespaceCharactersConcreteTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/whitespace-characters/WhitespaceCharactersConcreteTreeNode.ts";
import type {Parser} from "../../Parser.ts";
import {BlockContentFinalWhitespaceCharactersParser} from "../block-content-final-whitespace-characters/BlockContentFinalWhitespaceCharactersParser.ts";
import {FunctionCallKnownSegmentContentParser} from "../function-call-known-segment-content/FunctionCallKnownSegmentContentParser.ts";
import {FunctionCallUnknownSegmentContentParser} from "../function-call-unknown-segment-content/FunctionCallUnknownSegmentContentParser.ts";
import {FunctionCallWordSegmentIdentifierCharactersParser} from "../function-call-word-segment-identifier-characters/FunctionCallWordSegmentIdentifierCharactersParser.ts";
import {FunctionHeaderParser} from "../function-header/FunctionHeaderParser.ts";
import {StatementsRestStatementsAfterOperatorParser} from "../statements-rest-statements-after-operator/StatementsRestStatementsAfterOperatorParser.ts";

export class BlockContentParser implements Parser {
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
		this.blockClosingBracketCharacter = blockClosingBracketCharacter;
		this.blockStack = blockStack;
		this.functionsRestFunctions = functionsRestFunctions;
		this.sourceFileContentFinalWhitespaceCharacters = sourceFileContentFinalWhitespaceCharacters;
	}

	public parseWhitespace(
		character: WhitespaceCharacter,
	): BlockContentFinalWhitespaceCharactersParser {
		const blockContentFinalWhitespaceCharactersWhitespaceCharacters: WhitespaceCharactersConcreteTreeNode =
			createWhitespaceCharactersConcreteTreeNode(character, null);

		const blockContentFinalWhitespaceCharactersParser =
			new BlockContentFinalWhitespaceCharactersParser(
				blockContentFinalWhitespaceCharactersWhitespaceCharacters,
				this.blockClosingBracketCharacter,
				this.blockStack,
				this.functionsRestFunctions,
				this.sourceFileContentFinalWhitespaceCharacters,
			);

		return blockContentFinalWhitespaceCharactersParser;
	}

	public parseOpeningSquareBracket(): never {
		throw new Error("Not implemented.");
	}

	public parseClosingSquareBracket(
		character: ClosingSquareBracketCharacter,
	): FunctionCallUnknownSegmentContentParser {
		const functionCallUnknownSegmentContentParser = new FunctionCallUnknownSegmentContentParser(
			character,
			null,
			null,
			null,
			this.blockClosingBracketCharacter,
			this.blockStack,
			this.functionsRestFunctions,
			this.sourceFileContentFinalWhitespaceCharacters,
		);

		return functionCallUnknownSegmentContentParser;
	}

	public parseOpeningCurlyBracket(
		character: OpeningCurlyBracketCharacter,
	): FunctionHeaderParser | StatementsRestStatementsAfterOperatorParser {
		const block: BlockConcreteTreeNode = createBlockConcreteTreeNode(
			character,
			null,
			this.blockClosingBracketCharacter,
		);

		const [firstBlockStackEntry] = this.blockStack;

		if (typeof firstBlockStackEntry === "undefined") {
			const functionBody: FunctionBodyConcreteTreeNode = createFunctionBodyConcreteTreeNode(block);

			const functionHeaderParser = new FunctionHeaderParser(
				functionBody,
				this.functionsRestFunctions,
				this.sourceFileContentFinalWhitespaceCharacters,
			);

			return functionHeaderParser;
		}

		const statementsRestStatementsStatements: StatementsConcreteTreeNode =
			createStatementsConcreteTreeNode(block, firstBlockStackEntry[0]);

		const restBlockStackEntries: readonly (readonly [
			statementsRestStatements: StatementsRestStatementsConcreteTreeNode | null,
			blockContentFinalWhitespaceCharacters: WhitespaceCharactersConcreteTreeNode | null,
			blockClosingBracketCharacter: ClosingCurlyBracketCharacter,
		])[] = this.blockStack.slice(1);

		const statementsRestStatementsAfterOperatorParser =
			new StatementsRestStatementsAfterOperatorParser(
				statementsRestStatementsStatements,
				firstBlockStackEntry[1],
				firstBlockStackEntry[2],
				restBlockStackEntries,
				this.functionsRestFunctions,
				this.sourceFileContentFinalWhitespaceCharacters,
			);

		return statementsRestStatementsAfterOperatorParser;
	}
	public parseClosingCurlyBracket(character: ClosingCurlyBracketCharacter): BlockContentParser {
		const newBlockStack: readonly (readonly [
			statementsRestStatements: StatementsRestStatementsConcreteTreeNode | null,
			blockContentFinalWhitespaceCharacters: WhitespaceCharactersConcreteTreeNode | null,
			blockClosingBracketCharacter: ClosingCurlyBracketCharacter,
		])[] = [[null, null, this.blockClosingBracketCharacter], ...this.blockStack];

		const blockContentParser = new BlockContentParser(
			character,
			newBlockStack,
			this.functionsRestFunctions,
			this.sourceFileContentFinalWhitespaceCharacters,
		);

		return blockContentParser;
	}

	public parseOpeningRoundBracket(): never {
		throw new Error("Not implemented.");
	}

	public parseClosingRoundBracket(
		character: ClosingRoundBracketCharacter,
	): FunctionCallKnownSegmentContentParser {
		const functionCallKnownSegmentContentParser = new FunctionCallKnownSegmentContentParser(
			character,
			null,
			null,
			null,
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

		const functionCallWordSegmentIdentifierCharactersParser =
			new FunctionCallWordSegmentIdentifierCharactersParser(
				functionCallWordSegmentIdentifierCharacters,
				null,
				null,
				null,
				this.blockClosingBracketCharacter,
				this.blockStack,
				this.functionsRestFunctions,
				this.sourceFileContentFinalWhitespaceCharacters,
			);

		return functionCallWordSegmentIdentifierCharactersParser;
	}

	public parseOperator(): never {
		throw new Error("Not implemented.");
	}

	public finalize(): never {
		throw new Error("Not implemented.");
	}
}
