import type {ClosingCurlyBracketCharacter} from "../../../../characters/ClosingCurlyBracketCharacter.ts";
import type {ClosingRoundBracketCharacter} from "../../../../characters/ClosingRoundBracketCharacter.ts";
import type {ClosingSquareBracketCharacter} from "../../../../characters/ClosingSquareBracketCharacter.ts";
import type {IdentifierCharacter} from "../../../../characters/IdentifierCharacter.ts";
import type {WhitespaceCharacter} from "../../../../characters/WhitespaceCharacter.ts";
import type {FunctionBodyConcreteTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/function-body/FunctionBodyConcreteTreeNode.ts";
import {createFunctionConcreteTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/function/createFunctionConcreteTreeNode.ts";
import type {FunctionConcreteTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/function/FunctionConcreteTreeNode.ts";
import type {FunctionsSeparatedRestFunctionsConcreteTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/functions-separated-rest-functions/FunctionsSeparatedRestFunctionsConcreteTreeNode.ts";
import {createFunctionsConcreteTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/functions/createFunctionsConcreteTreeNode.ts";
import type {FunctionsConcreteTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/functions/FunctionsConcreteTreeNode.ts";
import {createIdentifierCharactersConcreteTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/identifier-characters/createIdentifierCharactersConcreteTreeNode.ts";
import type {IdentifierCharactersConcreteTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/identifier-characters/IdentifierCharactersConcreteTreeNode.ts";
import {createSourceFileContentConcreteTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/source-file-content/createSourcefileContentConcreteTreeNode.ts";
import type {SourceFileContentConcreteTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/source-file-content/SourceFileContentConcreteTreeNode.ts";
import {createWhitespaceCharactersConcreteTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/whitespace-characters/createWhitespaceCharactersConcreteTreeNode.ts";
import type {WhitespaceCharactersConcreteTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/whitespace-characters/WhitespaceCharactersConcreteTreeNode.ts";
import type {Parser} from "../../Parser.ts";
import {BlockContentParser} from "../block-content/BlockContentParser.ts";
import {FunctionHeaderFinalWhitespaceCharactersParser} from "../function-header-final-whitespace-characters/FunctionHeaderFinalWhitespaceCharactersParser.ts";
import {FunctionHeaderKnownSegmentContentParser} from "../function-header-known-segment-content/FunctionHeaderKnownSegmentContentParser.ts";
import {FunctionHeaderUnknownSegmentContentParser} from "../function-header-unknown-segment-content-parser/FunctionHeaderUnknownSegmentContentParser.ts";
import {FunctionHeaderWordSegmentIdentifierCharactersParser} from "../function-header-word-segment-identifier-characters/FunctionHeaderWordSegmentIdentifierCharactersParser.ts";

export class FunctionHeaderParser implements Parser {
	public readonly functionBody: FunctionBodyConcreteTreeNode;

	public readonly functionsRestFunctions:
		| FunctionsSeparatedRestFunctionsConcreteTreeNode
		| null
		| FunctionsConcreteTreeNode;

	public readonly sourceFileContentFinalWhitespaceCharacters: WhitespaceCharactersConcreteTreeNode | null;

	public constructor(
		functionBody: FunctionBodyConcreteTreeNode,

		functionsRestFunctions:
			| FunctionsSeparatedRestFunctionsConcreteTreeNode
			| null
			| FunctionsConcreteTreeNode,

		sourceFileContentFinalWhitespaceCharacters: WhitespaceCharactersConcreteTreeNode | null,
	) {
		this.functionBody = functionBody;
		this.functionsRestFunctions = functionsRestFunctions;
		this.sourceFileContentFinalWhitespaceCharacters = sourceFileContentFinalWhitespaceCharacters;
	}

	public parseWhitespace(
		character: WhitespaceCharacter,
	): FunctionHeaderFinalWhitespaceCharactersParser {
		const functionHeaderFinalWhitespaceCharacters: WhitespaceCharactersConcreteTreeNode =
			createWhitespaceCharactersConcreteTreeNode(character, null);

		const functionHeaderFinalWhitespaceCharactersParser =
			new FunctionHeaderFinalWhitespaceCharactersParser(
				functionHeaderFinalWhitespaceCharacters,
				this.functionBody,
				this.functionsRestFunctions,
				this.sourceFileContentFinalWhitespaceCharacters,
			);

		return functionHeaderFinalWhitespaceCharactersParser;
	}

	public parseOpeningSquareBracket(): never {
		throw new Error("Not implemented.");
	}

	public parseClosingSquareBracket(
		character: ClosingSquareBracketCharacter,
	): FunctionHeaderUnknownSegmentContentParser {
		const functionHeaderUnknownSegmentContentParser = new FunctionHeaderUnknownSegmentContentParser(
			character,
			null,
			null,
			this.functionBody,
			this.functionsRestFunctions,
			this.sourceFileContentFinalWhitespaceCharacters,
		);

		return functionHeaderUnknownSegmentContentParser;
	}

	public parseOpeningCurlyBracket(): never {
		throw new Error("Not implemented.");
	}

	public parseClosingCurlyBracket(character: ClosingCurlyBracketCharacter): BlockContentParser {
		const function_: FunctionConcreteTreeNode = createFunctionConcreteTreeNode(
			null,
			this.functionBody,
		);

		const functions: FunctionsConcreteTreeNode = createFunctionsConcreteTreeNode(
			function_,
			this.functionsRestFunctions,
		);

		const functionBlockContentParser = new BlockContentParser(
			character,
			[],
			functions,
			this.sourceFileContentFinalWhitespaceCharacters,
		);

		return functionBlockContentParser;
	}

	public parseOpeningRoundBracket(): never {
		throw new Error("Not implemented");
	}

	public parseClosingRoundBracket(
		character: ClosingRoundBracketCharacter,
	): FunctionHeaderKnownSegmentContentParser {
		const functionHeaderKnownSegmentContentParser = new FunctionHeaderKnownSegmentContentParser(
			character,
			null,
			null,
			this.functionBody,
			this.functionsRestFunctions,
			this.sourceFileContentFinalWhitespaceCharacters,
		);

		return functionHeaderKnownSegmentContentParser;
	}

	public parseIdentifier(
		character: IdentifierCharacter,
	): FunctionHeaderWordSegmentIdentifierCharactersParser {
		const functionHeaderWordSegmentIdentifierCharacters: IdentifierCharactersConcreteTreeNode =
			createIdentifierCharactersConcreteTreeNode(character, null);

		const functionHeaderWordSegmentIdentifierCharactersParser =
			new FunctionHeaderWordSegmentIdentifierCharactersParser(
				functionHeaderWordSegmentIdentifierCharacters,
				null,
				null,
				this.functionBody,
				this.functionsRestFunctions,
				this.sourceFileContentFinalWhitespaceCharacters,
			);

		return functionHeaderWordSegmentIdentifierCharactersParser;
	}

	public parseOperator(): never {
		throw new Error("Not implemented");
	}

	public finalize(): SourceFileContentConcreteTreeNode {
		const function_: FunctionConcreteTreeNode = createFunctionConcreteTreeNode(
			null,
			this.functionBody,
		);

		const functions: FunctionsConcreteTreeNode = createFunctionsConcreteTreeNode(
			function_,
			this.functionsRestFunctions,
		);

		const sourceFileContent: SourceFileContentConcreteTreeNode =
			createSourceFileContentConcreteTreeNode(
				null,
				functions,
				this.sourceFileContentFinalWhitespaceCharacters,
			);

		return sourceFileContent;
	}
}
