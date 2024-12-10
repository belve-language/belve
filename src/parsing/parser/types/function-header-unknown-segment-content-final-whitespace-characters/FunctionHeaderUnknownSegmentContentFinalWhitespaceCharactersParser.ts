import type {ClosingSquareBracketCharacter} from "../../../../characters/ClosingSquareBracketCharacter.ts";
import type {IdentifierCharacter} from "../../../../characters/IdentifierCharacter.ts";
import type {WhitespaceCharacter} from "../../../../characters/WhitespaceCharacter.ts";
import type {FunctionBodyConcreteTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/function-body/FunctionBodyConcreteTreeNode.ts";
import type {FunctionHeaderKnownStartingSegmentsConcreteTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/function-header-known-starting-segments/FunctionHeaderKnownStartingSegmentsConcreteTreeNode.ts";
import type {FunctionHeaderSegmentsSeparatedRestSegmentsConcreteTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/function-header-segments-separated-rest-segments/FunctionHeaderSegmentsSeparatedRestSegmentsConcreteTreeNode.ts";
import type {FunctionHeaderUnknownStartingSegmentsConcreteTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/function-header-unknown-starting-segments/FunctionHeaderUnknownStartingSegmentsConcreteTreeNode.ts";
import type {FunctionHeaderWordStartingSegmentsConcreteTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/function-header-word-starting-segments/FunctionHeaderWordStartingSegmentsConcreteTreeNode.ts";
import type {FunctionsSeparatedRestFunctionsConcreteTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/functions-separated-rest-functions/FunctionsSeparatedRestFunctionsConcreteTreeNode.ts";
import type {FunctionsConcreteTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/functions/FunctionsConcreteTreeNode.ts";
import {createIdentifierCharactersConcreteTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/identifier-characters/createIdentifierCharactersConcreteTreeNode.ts";
import type {IdentifierCharactersConcreteTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/identifier-characters/IdentifierCharactersConcreteTreeNode.ts";
import {createWhitespaceCharactersConcreteTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/whitespace-characters/createWhitespaceCharactersConcreteTreeNode.ts";
import type {WhitespaceCharactersConcreteTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/whitespace-characters/WhitespaceCharactersConcreteTreeNode.ts";
import type {Parser} from "../../Parser.ts";
import {FunctionHeaderUnknownSegmentContentIdentifierCharactersParser} from "../function-header-unknown-segment-content-identifier-characters/FunctionHeaderUnknownSegmentContentIdentifierCharactersParser.ts";

export class FunctionHeaderUnknownSegmentContentFinalWhitespaceCharactersParser implements Parser {
	private readonly functionHeaderUnknownSegmentContentFinalWhitespaceCharacters: WhitespaceCharactersConcreteTreeNode;
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
		functionHeaderUnknownSegmentContentFinalWhitespaceCharacters: WhitespaceCharactersConcreteTreeNode,
		functionHeaderUnknownSegmentClosingBracketCharacter: ClosingSquareBracketCharacter,

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
		this.functionHeaderUnknownSegmentContentFinalWhitespaceCharacters =
			functionHeaderUnknownSegmentContentFinalWhitespaceCharacters;

		this.functionHeaderUnknownSegmentClosingBracketCharacter =
			functionHeaderUnknownSegmentClosingBracketCharacter;

		this.functionHeaderUnknownStartingSegmentsRestSegments =
			functionHeaderUnknownStartingSegmentsRestSegments;

		this.functionHeaderFinalWhitespaceCharacters = functionHeaderFinalWhitespaceCharacters;
		this.functionBody = functionBody;
		this.functionsRestFunctions = functionsRestFunctions;
		this.sourceFileContentFinalWhitespaceCharacters = sourceFileContentFinalWhitespaceCharacters;
	}

	public parseWhitespace(
		character: WhitespaceCharacter,
	): FunctionHeaderUnknownSegmentContentFinalWhitespaceCharactersParser {
		const newFunctionHeaderUnknownSegmentContentFinalWhitespaceCharacters: WhitespaceCharactersConcreteTreeNode =
			createWhitespaceCharactersConcreteTreeNode(
				character,
				this.functionHeaderUnknownSegmentContentFinalWhitespaceCharacters,
			);

		const functionHeaderUnknownSegmentContentFinalWhitespaceCharactersParser =
			new FunctionHeaderUnknownSegmentContentFinalWhitespaceCharactersParser(
				newFunctionHeaderUnknownSegmentContentFinalWhitespaceCharacters,
				this.functionHeaderUnknownSegmentClosingBracketCharacter,
				this.functionHeaderUnknownStartingSegmentsRestSegments,
				this.functionHeaderFinalWhitespaceCharacters,
				this.functionBody,
				this.functionsRestFunctions,
				this.sourceFileContentFinalWhitespaceCharacters,
			);

		return functionHeaderUnknownSegmentContentFinalWhitespaceCharactersParser;
	}

	public parseOpeningSquareBracket(): never {
		throw new Error(
			"Unexpected opening square bracket character in function header unknown segment content final whitespace characters.",
		);
	}

	public parseClosingSquareBracket(): never {
		throw new Error(
			"Unexpected closing square bracket character in function header unknown segment content final whitespace characters.",
		);
	}

	public parseOpeningCurlyBracket(): never {
		throw new Error(
			"Unexpected opening curly bracket character in function header unknown segment content final whitespace characters.",
		);
	}

	public parseClosingCurlyBracket(): never {
		throw new Error(
			"Unexpected closing curly bracket character in function header unknown segment content final whitespace characters.",
		);
	}

	public parseOpeningRoundBracket(): never {
		throw new Error(
			"Unexpected opening round bracket character in function header unknown segment content final whitespace characters.",
		);
	}

	public parseClosingRoundBracket(): never {
		throw new Error(
			"Unexpected closing round bracket character in function header unknown segment content final whitespace characters.",
		);
	}

	public parseIdentifier(
		character: IdentifierCharacter,
	): FunctionHeaderUnknownSegmentContentIdentifierCharactersParser {
		const functionHeaderUnknownSegmentContentIdentifierCharacters: IdentifierCharactersConcreteTreeNode =
			createIdentifierCharactersConcreteTreeNode(character, null);

		const functionHeaderUnknownSegmentContentIdentifierCharactersParser =
			new FunctionHeaderUnknownSegmentContentIdentifierCharactersParser(
				functionHeaderUnknownSegmentContentIdentifierCharacters,
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
			"Unexpected operator character in function header unknown segment content final whitespace characters.",
		);
	}

	public finalize(): never {
		throw new Error("Unexpected end of function header unknown segment content.");
	}
}
