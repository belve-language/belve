import type {ClosingCurlyBracketCharacter} from "../../../../characters/ClosingCurlyBracketCharacter.ts";
import type {ClosingRoundBracketCharacter} from "../../../../characters/ClosingRoundBracketCharacter.ts";
import type {ClosingSquareBracketCharacter} from "../../../../characters/ClosingSquareBracketCharacter.ts";
import type {IdentifierCharacter} from "../../../../characters/IdentifierCharacter.ts";
import type {WhitespaceCharacter} from "../../../../characters/WhitespaceCharacter.ts";
import type {FunctionBodyConcreteTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/function-body/FunctionBodyConcreteTreeNode.ts";
import type {FunctionHeaderKnownStartingSegmentsConcreteTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/function-header-known-starting-segments/FunctionHeaderKnownStartingSegmentsConcreteTreeNode.ts";
import type {FunctionHeaderSegmentsSeparatedRestSegmentsConcreteTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/function-header-segments-separated-rest-segments/FunctionHeaderSegmentsSeparatedRestSegmentsConcreteTreeNode.ts";
import type {FunctionHeaderUnknownStartingSegmentsConcreteTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/function-header-unknown-starting-segments/FunctionHeaderUnknownStartingSegmentsConcreteTreeNode.ts";
import {createFunctionHeaderWordSegmentConcreteTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/function-header-word-segment/createFunctionHeaderWordSegmentConcreteTreeNode.ts";
import type {FunctionHeaderWordSegmentConcreteTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/function-header-word-segment/FunctionHeaderWordSegmentConcreteTreeNode.ts";
import {createFunctionHeaderWordStartingSegmentsConcreteTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/function-header-word-starting-segments/createFunctionHeaderWordStartingSegmentsConcreteTreeNode.ts";
import type {FunctionHeaderWordStartingSegmentsConcreteTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/function-header-word-starting-segments/FunctionHeaderWordStartingSegmentsConcreteTreeNode.ts";
import {createFunctionHeaderConcreteTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/function-header/createFunctionHeaderConcreteTreeNode.ts";
import type {FunctionHeaderConcreteTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/function-header/FunctionHeaderConcreteTreeNode.ts";
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
import {FunctionHeaderKnownSegmentContentParser} from "../function-header-known-segment-content/FunctionHeaderKnownSegmentContentParser.ts";
import {FunctionHeaderSegmentsSeparatedRestSegmentsInitialWhitespaceCharactersParser} from "../function-header-segments-separated-rest-segments-initial-whitespace-characters/FunctionHeaderSegmentsSeparatedRestSegmentsInitialWhitespaceCharactersParser.ts";
import {FunctionHeaderUnknownSegmentContentParser} from "../function-header-unknown-segment-content-parser/FunctionHeaderUnknownSegmentContentParser.ts";

export class FunctionHeaderWordSegmentIdentifierCharactersParser implements Parser {
	private readonly functionHeaderWordSegmentIdentifierCharacters: IdentifierCharactersConcreteTreeNode;

	private readonly functionHeaderWordStartingSegmentsRestSegments:
		| FunctionHeaderKnownStartingSegmentsConcreteTreeNode
		| FunctionHeaderUnknownStartingSegmentsConcreteTreeNode
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
		functionHeaderWordSegmentIdentifierCharacters: IdentifierCharactersConcreteTreeNode,

		functionHeaderWordStartingSegmentsRestSegments:
			| FunctionHeaderKnownStartingSegmentsConcreteTreeNode
			| FunctionHeaderUnknownStartingSegmentsConcreteTreeNode
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
		this.functionHeaderWordSegmentIdentifierCharacters =
			functionHeaderWordSegmentIdentifierCharacters;

		this.functionHeaderWordStartingSegmentsRestSegments =
			functionHeaderWordStartingSegmentsRestSegments;

		this.functionHeaderFinalWhitespaceCharacters = functionHeaderFinalWhitespaceCharacters;

		this.functionBody = functionBody;
		this.functionsRestFunctions = functionsRestFunctions;
		this.sourceFileContentFinalWhitespaceCharacters = sourceFileContentFinalWhitespaceCharacters;
	}

	public parseWhitespace(
		character: WhitespaceCharacter,
	): FunctionHeaderSegmentsSeparatedRestSegmentsInitialWhitespaceCharactersParser {
		const functionHeaderSegmentsSeparatedRestSegmentsInitialWhitespaceCharacters: WhitespaceCharactersConcreteTreeNode =
			createWhitespaceCharactersConcreteTreeNode(character, null);

		const functionHeaderWordSegment: FunctionHeaderWordSegmentConcreteTreeNode =
			createFunctionHeaderWordSegmentConcreteTreeNode(
				this.functionHeaderWordSegmentIdentifierCharacters,
			);

		const functionHeaderWordStartingSegments: FunctionHeaderWordStartingSegmentsConcreteTreeNode =
			createFunctionHeaderWordStartingSegmentsConcreteTreeNode(
				functionHeaderWordSegment,
				this.functionHeaderWordStartingSegmentsRestSegments,
			);

		const functionHeaderSegmentsSeparatedRestSegmentsIntialWhitespaceCharactersParser =
			new FunctionHeaderSegmentsSeparatedRestSegmentsInitialWhitespaceCharactersParser(
				functionHeaderSegmentsSeparatedRestSegmentsInitialWhitespaceCharacters,
				functionHeaderWordStartingSegments,
				this.functionHeaderFinalWhitespaceCharacters,
				this.functionBody,
				this.functionsRestFunctions,
				this.sourceFileContentFinalWhitespaceCharacters,
			);

		return functionHeaderSegmentsSeparatedRestSegmentsIntialWhitespaceCharactersParser;
	}

	public parseOpeningSquareBracket(): never {
		throw new Error("Not implemented.");
	}

	public parseClosingSquareBracket(
		character: ClosingSquareBracketCharacter,
	): FunctionHeaderUnknownSegmentContentParser {
		const functionHeaderWordSegment: FunctionHeaderWordSegmentConcreteTreeNode =
			createFunctionHeaderWordSegmentConcreteTreeNode(
				this.functionHeaderWordSegmentIdentifierCharacters,
			);

		const functionHeaderWordStartingSegments: FunctionHeaderWordStartingSegmentsConcreteTreeNode =
			createFunctionHeaderWordStartingSegmentsConcreteTreeNode(
				functionHeaderWordSegment,
				this.functionHeaderWordStartingSegmentsRestSegments,
			);

		const functionHeaderUnknownSegmentContentFinalWhitespaceCharactersParser =
			new FunctionHeaderUnknownSegmentContentParser(
				character,
				functionHeaderWordStartingSegments,
				this.functionHeaderFinalWhitespaceCharacters,
				this.functionBody,
				this.functionsRestFunctions,
				this.sourceFileContentFinalWhitespaceCharacters,
			);

		return functionHeaderUnknownSegmentContentFinalWhitespaceCharactersParser;
	}

	public parseOpeningCurlyBracket(): never {
		throw new Error("Not implemented.");
	}

	public parseClosingCurlyBracket(character: ClosingCurlyBracketCharacter): BlockContentParser {
		const functionHeaderWordSegment: FunctionHeaderWordSegmentConcreteTreeNode =
			createFunctionHeaderWordSegmentConcreteTreeNode(
				this.functionHeaderWordSegmentIdentifierCharacters,
			);

		const functionHeaderWordStartingSegments: FunctionHeaderWordStartingSegmentsConcreteTreeNode =
			createFunctionHeaderWordStartingSegmentsConcreteTreeNode(
				functionHeaderWordSegment,
				this.functionHeaderWordStartingSegmentsRestSegments,
			);

		const functionHeader: FunctionHeaderConcreteTreeNode = createFunctionHeaderConcreteTreeNode(
			functionHeaderWordStartingSegments,
			this.functionHeaderFinalWhitespaceCharacters,
		);

		const function_: FunctionConcreteTreeNode = createFunctionConcreteTreeNode(
			functionHeader,
			this.functionBody,
		);

		const functions: FunctionsConcreteTreeNode = createFunctionsConcreteTreeNode(
			function_,
			this.functionsRestFunctions,
		);

		const blockContentParser = new BlockContentParser(
			character,
			[],
			functions,
			this.sourceFileContentFinalWhitespaceCharacters,
		);

		return blockContentParser;
	}

	public parseOpeningRoundBracket(): never {
		throw new Error("Not implemented.");
	}

	public parseClosingRoundBracket(
		character: ClosingRoundBracketCharacter,
	): FunctionHeaderKnownSegmentContentParser {
		const functionHeaderWordSegment: FunctionHeaderWordSegmentConcreteTreeNode =
			createFunctionHeaderWordSegmentConcreteTreeNode(
				this.functionHeaderWordSegmentIdentifierCharacters,
			);

		const functionHeaderWordStartingSegments: FunctionHeaderWordStartingSegmentsConcreteTreeNode =
			createFunctionHeaderWordStartingSegmentsConcreteTreeNode(
				functionHeaderWordSegment,
				this.functionHeaderWordStartingSegmentsRestSegments,
			);

		const functionHeaderKnownSegmentContentParser = new FunctionHeaderKnownSegmentContentParser(
			character,
			functionHeaderWordStartingSegments,
			this.functionHeaderFinalWhitespaceCharacters,
			this.functionBody,
			this.functionsRestFunctions,
			this.sourceFileContentFinalWhitespaceCharacters,
		);

		return functionHeaderKnownSegmentContentParser;
	}

	public parseIdentifier(
		character: IdentifierCharacter,
	): FunctionHeaderWordSegmentIdentifierCharactersParser {
		const newFunctionHeaderWordSegmentIdentifierCharacters: IdentifierCharactersConcreteTreeNode =
			createIdentifierCharactersConcreteTreeNode(
				character,
				this.functionHeaderWordSegmentIdentifierCharacters,
			);

		const functionHeaderWordSegmentIdentifierCharactersParser =
			new FunctionHeaderWordSegmentIdentifierCharactersParser(
				newFunctionHeaderWordSegmentIdentifierCharacters,
				this.functionHeaderWordStartingSegmentsRestSegments,
				this.functionHeaderFinalWhitespaceCharacters,
				this.functionBody,
				this.functionsRestFunctions,
				this.sourceFileContentFinalWhitespaceCharacters,
			);

		return functionHeaderWordSegmentIdentifierCharactersParser;
	}

	public parseOperator(): never {
		throw new Error("Not implemented.");
	}

	public finalize(): SourceFileContentConcreteTreeNode {
		const functionHeaderWordSegment: FunctionHeaderWordSegmentConcreteTreeNode =
			createFunctionHeaderWordSegmentConcreteTreeNode(
				this.functionHeaderWordSegmentIdentifierCharacters,
			);

		const functionHeaderWordStartingSegments: FunctionHeaderWordStartingSegmentsConcreteTreeNode =
			createFunctionHeaderWordStartingSegmentsConcreteTreeNode(
				functionHeaderWordSegment,
				this.functionHeaderWordStartingSegmentsRestSegments,
			);

		const functionHeader: FunctionHeaderConcreteTreeNode = createFunctionHeaderConcreteTreeNode(
			functionHeaderWordStartingSegments,
			this.functionHeaderFinalWhitespaceCharacters,
		);

		const function_: FunctionConcreteTreeNode = createFunctionConcreteTreeNode(
			functionHeader,
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
