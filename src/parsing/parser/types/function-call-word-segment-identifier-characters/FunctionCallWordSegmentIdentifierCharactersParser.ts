import type {ClosingCurlyBracketCharacter} from "../../../../characters/ClosingCurlyBracketCharacter.ts";
import type {ClosingRoundBracketCharacter} from "../../../../characters/ClosingRoundBracketCharacter.ts";
import type {ClosingSquareBracketCharacter} from "../../../../characters/ClosingSquareBracketCharacter.ts";
import type {IdentifierCharacter} from "../../../../characters/IdentifierCharacter.ts";
import type {OpeningCurlyBracketCharacter} from "../../../../characters/OpeningCurlyBracketCharacter.ts";
import type {OperatorCharacter} from "../../../../characters/OperatorCharacter.ts";
import type {WhitespaceCharacter} from "../../../../characters/WhitespaceCharacter.ts";
import type {BlockContentConcreteTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/block-content/BlockContentConcreteTreeNode.ts";
import {createBlockContentConcreteTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/block-content/createBlockContentConcreteTreeNode.ts";
import type {BlockConcreteTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/block/BlockConcreteTreeNode.ts";
import {createBlockConcreteTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/block/createBlockConcreteTreeNode.ts";
import {createFunctionBodyConcreteTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/function-body/createFunctionBodyConcreteTreeNode.ts";
import type {FunctionBodyConcreteTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/function-body/FunctionBodyConcreteTreeNode.ts";
import type {FunctionCallKnownStartingSegmentsConcreteTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/function-call-known-starting-segments/FunctionCallKnownStartingSegmentsConcreteTreeNode.ts";
import type {FunctionCallSegmentsSeparatedRestSegmentsConcreteTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/function-call-segments-separated-rest-segments/FunctionCallSegmentsSeparatedRestSegmentsConcreteTreeNode.ts";
import type {FunctionCallUnknownStartingSegmentsConcreteTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/function-call-unknown-starting-segments/FunctionCallUnknownStartingSegmentsConcreteTreeNode.ts";
import {createFunctionCallWordSegmentConcreteTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/function-call-word-segment/createFunctionCallWordSegmentConcreteTreeNode.ts";
import type {FunctionCallWordSegmentConcreteTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/function-call-word-segment/FunctionCallWordSegmentConcreteTreeNode.ts";
import {createFunctionCallWordStartingSegmentsConcreteTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/function-call-word-starting-segments/createFunctionCallWordStartingSegmentsConcreteTreeNode.ts";
import type {FunctionCallWordStartingSegmentsConcreteTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/function-call-word-starting-segments/FunctionCallWordStartingSegmentsConcreteTreeNode.ts";
import {createFunctionCallConcreteTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/function-call/createFunctionCallConcreteTreeNode.ts";
import type {FunctionCallConcreteTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/function-call/FunctionCallConcreteTreeNode.ts";
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
import {FunctionCallKnownSegmentContentParser} from "../function-call-known-segment-content/FunctionCallKnownSegmentContentParser.ts";
import {FunctionCallSegmentsSeparatedRestSegmentsInitialWhitespaceCharactersParser} from "../function-call-segments-separated-rest-segments-initial-whitespace-characters/FunctionCallSegmentsSeparatedRestSegmentsInitialWhitespaceCharactersParser.ts";
import {FunctionCallUnknownSegmentContentParser} from "../function-call-unknown-segment-content/FunctionCallUnknownSegmentContentParser.ts";
import {FunctionHeaderParser} from "../function-header/FunctionHeaderParser.ts";
import {StatementsRestStatementsAfterOperatorParser} from "../statements-rest-statements-after-operator/StatementsRestStatementsAfterOperatorParser.ts";
import {StatementsRestStatementsBeforeOperatorParser} from "../statements-rest-statements-before-operator/StatementsRestStatementsBeforeOperatorParser.ts";

export class FunctionCallWordSegmentIdentifierCharactersParser implements Parser {
	private readonly functionCallWordSegmentIdentifierCharacters: IdentifierCharactersConcreteTreeNode;

	private readonly functionCallWordStartingSegmentsRestSegments:
		| FunctionCallKnownStartingSegmentsConcreteTreeNode
		| FunctionCallUnknownStartingSegmentsConcreteTreeNode
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
		functionCallWordSegmentIdentifierCharacters: IdentifierCharactersConcreteTreeNode,

		functionCallWordStartingSegmentsRestSegments:
			| FunctionCallKnownStartingSegmentsConcreteTreeNode
			| FunctionCallUnknownStartingSegmentsConcreteTreeNode
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
		this.functionCallWordSegmentIdentifierCharacters = functionCallWordSegmentIdentifierCharacters;

		this.functionCallWordStartingSegmentsRestSegments =
			functionCallWordStartingSegmentsRestSegments;

		this.statementsRestStatements = statementsRestStatements;
		this.blockContentFinalWhitespaceCharacters = blockContentFinalWhitespaceCharacters;
		this.blockClosingBracketCharacter = blockClosingBracketCharacter;
		this.blockStack = blockStack;
		this.functionsRestFunctions = functionsRestFunctions;
		this.sourceFileContentFinalWhitespaceCharacters = sourceFileContentFinalWhitespaceCharacters;
	}

	public parseWhitespace(
		character: WhitespaceCharacter,
	): FunctionCallSegmentsSeparatedRestSegmentsInitialWhitespaceCharactersParser {
		const functionCallSegmentsSeparatedRestSegmentsInitialWhitespaceCharacters: WhitespaceCharactersConcreteTreeNode =
			createWhitespaceCharactersConcreteTreeNode(character, null);

		const functionCallWordSegment: FunctionCallWordSegmentConcreteTreeNode =
			createFunctionCallWordSegmentConcreteTreeNode(
				this.functionCallWordSegmentIdentifierCharacters,
			);

		const functionCallWordStartingSegments: FunctionCallWordStartingSegmentsConcreteTreeNode =
			createFunctionCallWordStartingSegmentsConcreteTreeNode(
				functionCallWordSegment,
				this.functionCallWordStartingSegmentsRestSegments,
			);

		const functionCallSegmentsSeparatedRestSegmentsInitialWhitespaceCharactersParser =
			new FunctionCallSegmentsSeparatedRestSegmentsInitialWhitespaceCharactersParser(
				functionCallSegmentsSeparatedRestSegmentsInitialWhitespaceCharacters,
				functionCallWordStartingSegments,
				this.statementsRestStatements,
				this.blockContentFinalWhitespaceCharacters,
				this.blockClosingBracketCharacter,
				this.blockStack,
				this.functionsRestFunctions,
				this.sourceFileContentFinalWhitespaceCharacters,
			);

		return functionCallSegmentsSeparatedRestSegmentsInitialWhitespaceCharactersParser;
	}

	public parseOpeningSquareBracket(): never {
		throw new Error(
			"FunctionCallWordSegmentIdentifierCharactersParser.parseOpeningSquareBracket() should not be called.",
		);
	}

	public parseClosingSquareBracket(
		character: ClosingSquareBracketCharacter,
	): FunctionCallUnknownSegmentContentParser {
		const functionCallWordSegment: FunctionCallWordSegmentConcreteTreeNode =
			createFunctionCallWordSegmentConcreteTreeNode(
				this.functionCallWordSegmentIdentifierCharacters,
			);

		const functionCallWordStartingSegments: FunctionCallWordStartingSegmentsConcreteTreeNode =
			createFunctionCallWordStartingSegmentsConcreteTreeNode(
				functionCallWordSegment,
				this.functionCallWordStartingSegmentsRestSegments,
			);

		const functionCallUnknownSegmentContentParser = new FunctionCallUnknownSegmentContentParser(
			character,
			functionCallWordStartingSegments,
			this.statementsRestStatements,
			this.blockContentFinalWhitespaceCharacters,
			this.blockClosingBracketCharacter,
			this.blockStack,
			this.functionsRestFunctions,
			this.sourceFileContentFinalWhitespaceCharacters,
		);

		return functionCallUnknownSegmentContentParser;
	}

	public parseOpeningCurlyBracket(
		character: OpeningCurlyBracketCharacter,
	): StatementsRestStatementsAfterOperatorParser | FunctionHeaderParser {
		const [blockStackFirstEntry] = this.blockStack;

		const functionCallWordSegment: FunctionCallWordSegmentConcreteTreeNode =
			createFunctionCallWordSegmentConcreteTreeNode(
				this.functionCallWordSegmentIdentifierCharacters,
			);

		const functionCallWordStartingSegments: FunctionCallWordStartingSegmentsConcreteTreeNode =
			createFunctionCallWordStartingSegmentsConcreteTreeNode(
				functionCallWordSegment,
				this.functionCallWordStartingSegmentsRestSegments,
			);

		const functionCall: FunctionCallConcreteTreeNode = createFunctionCallConcreteTreeNode(
			functionCallWordStartingSegments,
		);

		const statements: StatementsConcreteTreeNode = createStatementsConcreteTreeNode(
			functionCall,
			this.statementsRestStatements,
		);

		const blockContent: BlockContentConcreteTreeNode = createBlockContentConcreteTreeNode(
			null,
			statements,
			this.blockContentFinalWhitespaceCharacters,
		);

		const block: BlockConcreteTreeNode = createBlockConcreteTreeNode(
			character,
			blockContent,
			this.blockClosingBracketCharacter,
		);

		if (typeof blockStackFirstEntry === "undefined") {
			const functionBody: FunctionBodyConcreteTreeNode = createFunctionBodyConcreteTreeNode(block);

			const functionHeaderParser = new FunctionHeaderParser(
				functionBody,
				this.functionsRestFunctions,
				this.sourceFileContentFinalWhitespaceCharacters,
			);

			return functionHeaderParser;
		}

		const statementsRestStatementsStatements: StatementsConcreteTreeNode =
			createStatementsConcreteTreeNode(block, blockStackFirstEntry[0]);

		const blockStackRestEntries: readonly (readonly [
			statementsRestStatements: StatementsRestStatementsConcreteTreeNode | null,
			blockContentFinalWhitespaceCharacters: WhitespaceCharactersConcreteTreeNode | null,
			blockClosingBracketCharacter: ClosingCurlyBracketCharacter,
		])[] = this.blockStack.slice(1);

		const statementsRestStatementsAfterOperatorParser =
			new StatementsRestStatementsAfterOperatorParser(
				statementsRestStatementsStatements,
				blockStackFirstEntry[1],
				blockStackFirstEntry[2],
				blockStackRestEntries,
				this.functionsRestFunctions,
				this.sourceFileContentFinalWhitespaceCharacters,
			);

		return statementsRestStatementsAfterOperatorParser;
	}

	public parseClosingCurlyBracket(): never {
		throw new Error(
			"FunctionCallWordSegmentIdentifierCharactersParser.parseClosingCurlyBracket() should not be called.",
		);
	}

	public parseOpeningRoundBracket(): never {
		throw new Error(
			"FunctionCallWordSegmentIdentifierCharactersParser.parseOpeningRoundBracket() should not be called.",
		);
	}

	public parseClosingRoundBracket(
		character: ClosingRoundBracketCharacter,
	): FunctionCallKnownSegmentContentParser {
		const functionCallWordSegment: FunctionCallWordSegmentConcreteTreeNode =
			createFunctionCallWordSegmentConcreteTreeNode(
				this.functionCallWordSegmentIdentifierCharacters,
			);

		const functionCallWordStartingSegments: FunctionCallWordStartingSegmentsConcreteTreeNode =
			createFunctionCallWordStartingSegmentsConcreteTreeNode(
				functionCallWordSegment,
				this.functionCallWordStartingSegmentsRestSegments,
			);

		const functionCallKnownSegmentContentParser = new FunctionCallKnownSegmentContentParser(
			character,
			functionCallWordStartingSegments,
			this.statementsRestStatements,
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
		const newFunctionCallWordSegmentIdentifierCharacters: IdentifierCharactersConcreteTreeNode =
			createIdentifierCharactersConcreteTreeNode(
				character,
				this.functionCallWordSegmentIdentifierCharacters,
			);

		const functionCallWordSegmentIdentifierCharactersParser =
			new FunctionCallWordSegmentIdentifierCharactersParser(
				newFunctionCallWordSegmentIdentifierCharacters,
				this.functionCallWordStartingSegmentsRestSegments,
				this.statementsRestStatements,
				this.blockContentFinalWhitespaceCharacters,
				this.blockClosingBracketCharacter,
				this.blockStack,
				this.functionsRestFunctions,
				this.sourceFileContentFinalWhitespaceCharacters,
			);

		return functionCallWordSegmentIdentifierCharactersParser;
	}

	public parseOperator(character: OperatorCharacter): StatementsRestStatementsBeforeOperatorParser {
		const functionCallWordSegment: FunctionCallWordSegmentConcreteTreeNode =
			createFunctionCallWordSegmentConcreteTreeNode(
				this.functionCallWordSegmentIdentifierCharacters,
			);

		const functionCallWordStartingSegment: FunctionCallWordStartingSegmentsConcreteTreeNode =
			createFunctionCallWordStartingSegmentsConcreteTreeNode(
				functionCallWordSegment,
				this.functionCallWordStartingSegmentsRestSegments,
			);

		const functionCall: FunctionCallConcreteTreeNode = createFunctionCallConcreteTreeNode(
			functionCallWordStartingSegment,
		);

		const statements: StatementsConcreteTreeNode = createStatementsConcreteTreeNode(
			functionCall,
			this.statementsRestStatements,
		);

		const statementsRestStatementsBeforeOperatorParser =
			new StatementsRestStatementsBeforeOperatorParser(
				character,
				null,
				statements,
				this.blockContentFinalWhitespaceCharacters,
				this.blockClosingBracketCharacter,
				this.blockStack,
				this.functionsRestFunctions,
				this.sourceFileContentFinalWhitespaceCharacters,
			);

		return statementsRestStatementsBeforeOperatorParser;
	}

	public finalize(): never {
		throw new Error(
			"FunctionCallWordSegmentIdentifierCharactersParser.finalize() should not be called.",
		);
	}
}
