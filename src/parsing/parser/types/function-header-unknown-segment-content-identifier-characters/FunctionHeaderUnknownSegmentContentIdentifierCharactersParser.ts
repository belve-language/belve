import type {ClosingSquareBracketCharacter} from "../../../../characters/ClosingSquareBracketCharacter.ts";
import type {IdentifierCharacter} from "../../../../characters/IdentifierCharacter.ts";
import type {OpeningSquareBracketCharacter} from "../../../../characters/OpeningSquareBracketCharacter.ts";
import type {WhitespaceCharacter} from "../../../../characters/WhitespaceCharacter.ts";
import type {FunctionBodyConcreteTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/function-body/FunctionBodyConcreteTreeNode.ts";
import type {FunctionHeaderKnownStartingSegmentsConcreteTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/function-header-known-starting-segments/FunctionHeaderKnownStartingSegmentsConcreteTreeNode.ts";
import type {FunctionHeaderSegmentsSeparatedRestSegmentsConcreteTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/function-header-segments-separated-rest-segments/FunctionHeaderSegmentsSeparatedRestSegmentsConcreteTreeNode.ts";
import {createFunctionHeaderUnknownSegmentContent} from "../../../../concrete-syntax-tree/tree-node-types/function-header-unknown-segment-content/createFunctionHeaderUnknownSegmentContent.ts";
import type {FunctionHeaderUnknownSegmentContentConcreteTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/function-header-unknown-segment-content/FunctionHeaderUnknownSegmentContentConcreteTreeNode.ts";
import {createFunctionHeaderUnknownSegmentConcreteTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/function-header-unknown-segment/createFunctionHeaderUnknownSegmentConcreteTreeNode.ts";
import type {FunctionHeaderUnknownSegmentConcreteTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/function-header-unknown-segment/FunctionHeaderUnknownSegmentConcreteTreeNode.ts";
import {createFunctionHeaderUnknownStartingSegmentsConcreteTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/function-header-unknown-starting-segments/createFunctionHeaderUnknownStartingSegmentsConcreteTreeNode.ts";
import type {FunctionHeaderUnknownStartingSegmentsConcreteTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/function-header-unknown-starting-segments/FunctionHeaderUnknownStartingSegmentsConcreteTreeNode.ts";
import type {FunctionHeaderWordStartingSegmentsConcreteTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/function-header-word-starting-segments/FunctionHeaderWordStartingSegmentsConcreteTreeNode.ts";
import type {FunctionsSeparatedRestFunctionsConcreteTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/functions-separated-rest-functions/FunctionsSeparatedRestFunctionsConcreteTreeNode.ts";
import type {FunctionsConcreteTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/functions/FunctionsConcreteTreeNode.ts";
import {createIdentifierCharactersConcreteTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/identifier-characters/createIdentifierCharactersConcreteTreeNode.ts";
import type {IdentifierCharactersConcreteTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/identifier-characters/IdentifierCharactersConcreteTreeNode.ts";
import {createWhitespaceCharactersConcreteTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/whitespace-characters/createWhitespaceCharactersConcreteTreeNode.ts";
import type {WhitespaceCharactersConcreteTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/whitespace-characters/WhitespaceCharactersConcreteTreeNode.ts";
import type {Parser} from "../../Parser.ts";
import {FunctionHeaderSegmentsParser} from "../function-header-segments/FunctionHeaderSegmentsParser.ts";
import {FunctionHeaderUnknownSegmentContentInitialWhitespaceCharactersParser} from "../function-header-unknown-segment-content-initial-whitespace-characters/FunctionHeaderUnknownSegmentContentInitialWhitespaceCharactersParser.ts";

export class FunctionHeaderUnknownSegmentContentIdentifierCharactersParser implements Parser {
	private readonly functionHeaderUnknownSegmentContentIdentifierCharacters: IdentifierCharactersConcreteTreeNode;
	private readonly functionHeaderUnknownSegmentContentFinalWhitespaceCharacters: WhitespaceCharactersConcreteTreeNode | null;
	private readonly functionHeaderUnknownSegmentClosingBracketCharacter: ClosingSquareBracketCharacter;

	private readonly functionHeaderUnknownStartingSegmentsRestSegments:
		| FunctionHeaderKnownStartingSegmentsConcreteTreeNode
		| FunctionHeaderUnknownStartingSegmentsConcreteTreeNode
		| null
		| FunctionHeaderSegmentsSeparatedRestSegmentsConcreteTreeNode
		| FunctionHeaderWordStartingSegmentsConcreteTreeNode;

	private readonly functionHeaderFinalWhitespaceCharacters: WhitespaceCharactersConcreteTreeNode | null;
	private readonly functionBody: FunctionBodyConcreteTreeNode;
	private readonly functionsRestFunctions:
		| FunctionsSeparatedRestFunctionsConcreteTreeNode
		| null
		| FunctionsConcreteTreeNode;

	private readonly sourceFileContentFinalWhitespaceCharacters: WhitespaceCharactersConcreteTreeNode | null;

	public constructor(
		functionHeaderUnknownSegmentContentIdentifierCharacters: IdentifierCharactersConcreteTreeNode,
		functionHeaderUnknownSegmentContentFinalWhitespaceCharacters: WhitespaceCharactersConcreteTreeNode | null,
		functionHeaderUnknownSegmentContentClosingBracketCharacter: ClosingSquareBracketCharacter,

		functionHeaderUnknownStartingSegmentsRestSegments:
			| FunctionHeaderKnownStartingSegmentsConcreteTreeNode
			| FunctionHeaderUnknownStartingSegmentsConcreteTreeNode
			| null
			| FunctionHeaderSegmentsSeparatedRestSegmentsConcreteTreeNode
			| FunctionHeaderWordStartingSegmentsConcreteTreeNode,

		functionHeaderFinalWhitespaceCharacters: WhitespaceCharactersConcreteTreeNode | null,
		functionBody: FunctionBodyConcreteTreeNode,
		functionsRestFunctions:
			| FunctionsSeparatedRestFunctionsConcreteTreeNode
			| null
			| FunctionsConcreteTreeNode,
		sourceFileContentFinalWhitespaceCharacters: WhitespaceCharactersConcreteTreeNode | null,
	) {
		this.functionHeaderUnknownSegmentContentIdentifierCharacters =
			functionHeaderUnknownSegmentContentIdentifierCharacters;

		this.functionHeaderUnknownSegmentContentFinalWhitespaceCharacters =
			functionHeaderUnknownSegmentContentFinalWhitespaceCharacters;

		this.functionHeaderUnknownSegmentClosingBracketCharacter =
			functionHeaderUnknownSegmentContentClosingBracketCharacter;

		this.functionHeaderUnknownStartingSegmentsRestSegments =
			functionHeaderUnknownStartingSegmentsRestSegments;

		this.functionHeaderFinalWhitespaceCharacters = functionHeaderFinalWhitespaceCharacters;
		this.functionBody = functionBody;
		this.functionsRestFunctions = functionsRestFunctions;
		this.sourceFileContentFinalWhitespaceCharacters = sourceFileContentFinalWhitespaceCharacters;
	}

	public parseWhitespace(
		character: WhitespaceCharacter,
	): FunctionHeaderUnknownSegmentContentInitialWhitespaceCharactersParser {
		const functionHeaderUnknownSegmentContentInitialWhitespaceCharacters: WhitespaceCharactersConcreteTreeNode =
			createWhitespaceCharactersConcreteTreeNode(character, null);

		const functionHeaderUnknownSegmentContentInitialWhitespaceCharactersParser =
			new FunctionHeaderUnknownSegmentContentInitialWhitespaceCharactersParser(
				functionHeaderUnknownSegmentContentInitialWhitespaceCharacters,
				this.functionHeaderUnknownSegmentContentIdentifierCharacters,
				this.functionHeaderUnknownSegmentContentFinalWhitespaceCharacters,
				this.functionHeaderUnknownSegmentClosingBracketCharacter,
				this.functionHeaderUnknownStartingSegmentsRestSegments,
				this.functionHeaderFinalWhitespaceCharacters,
				this.functionBody,
				this.functionsRestFunctions,
				this.sourceFileContentFinalWhitespaceCharacters,
			);

		return functionHeaderUnknownSegmentContentInitialWhitespaceCharactersParser;
	}

	public parseOpeningSquareBracket(
		character: OpeningSquareBracketCharacter,
	): FunctionHeaderSegmentsParser {
		const functionHeaderUnknownSegmentContent: FunctionHeaderUnknownSegmentContentConcreteTreeNode =
			createFunctionHeaderUnknownSegmentContent(
				null,
				this.functionHeaderUnknownSegmentContentIdentifierCharacters,
				this.functionHeaderUnknownSegmentContentFinalWhitespaceCharacters,
			);

		const functionHeaderUnknownSegment: FunctionHeaderUnknownSegmentConcreteTreeNode =
			createFunctionHeaderUnknownSegmentConcreteTreeNode(
				character,
				functionHeaderUnknownSegmentContent,
				this.functionHeaderUnknownSegmentClosingBracketCharacter,
			);

		const functionHeaderUnknownStartingSegments: FunctionHeaderUnknownStartingSegmentsConcreteTreeNode =
			createFunctionHeaderUnknownStartingSegmentsConcreteTreeNode(
				functionHeaderUnknownSegment,
				this.functionHeaderUnknownStartingSegmentsRestSegments,
			);

		const functionHeaderSegmentsParser = new FunctionHeaderSegmentsParser(
			functionHeaderUnknownStartingSegments,
			this.functionHeaderFinalWhitespaceCharacters,
			this.functionBody,
			this.functionsRestFunctions,
			this.sourceFileContentFinalWhitespaceCharacters,
		);

		return functionHeaderSegmentsParser;
	}

	public parseClosingSquareBracket(): never {
		throw new Error(
			"Unexpected closing square bracket character in function header unknown segment content identifier characters.",
		);
	}

	public parseOpeningCurlyBracket(): never {
		throw new Error(
			"Unexpected opening curly bracket character in function header unknown segment content identifier characters.",
		);
	}

	public parseClosingCurlyBracket(): never {
		throw new Error(
			"Unexpected closing curly bracket character in function header unknown segment content identifier characters.",
		);
	}

	public parseOpeningRoundBracket(): never {
		throw new Error(
			"Unexpected opening round bracket character in function header unknown segment content identifier characters.",
		);
	}

	public parseClosingRoundBracket(): never {
		throw new Error(
			"Unexpected closing round bracket character in function header unknown segment content identifier characters.",
		);
	}

	public parseIdentifier(
		character: IdentifierCharacter,
	): FunctionHeaderUnknownSegmentContentIdentifierCharactersParser {
		const newFunctionHeaderUnknownSegmentContentIdentifierCharacters: IdentifierCharactersConcreteTreeNode =
			createIdentifierCharactersConcreteTreeNode(
				character,
				this.functionHeaderUnknownSegmentContentIdentifierCharacters,
			);

		const functionHeaderUnknownSegmentContentIdentifierCharactersParser =
			new FunctionHeaderUnknownSegmentContentIdentifierCharactersParser(
				newFunctionHeaderUnknownSegmentContentIdentifierCharacters,
				this.functionHeaderUnknownSegmentContentFinalWhitespaceCharacters,
				this.functionHeaderUnknownSegmentClosingBracketCharacter,
				this.functionHeaderUnknownStartingSegmentsRestSegments,
				this.functionHeaderFinalWhitespaceCharacters,
				this.functionBody,
				this.functionsRestFunctions,
				this.sourceFileContentFinalWhitespaceCharacters,
			);

		return functionHeaderUnknownSegmentContentIdentifierCharactersParser;
	}

	public parseOperator(): never {
		throw new Error(
			"Unexpected operator character in function header unknown segment content identifier characters.",
		);
	}

	public finalize(): never {
		throw new Error(
			"Unexpected end of function header unknown segment content identifier characters.",
		);
	}
}
