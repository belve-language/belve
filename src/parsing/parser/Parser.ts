import type {ClosingCurlyBracketCharacter} from "../../characters/ClosingCurlyBracketCharacter.ts";
import type {OpeningCurlyBracketCharacter} from "../../characters/OpeningCurlyBracketCharacter.ts";
import type {IdentifierCharacter} from "../../characters/IdentifierCharacter.ts";
import type {ClosingRoundBracketCharacter} from "../../characters/ClosingRoundBracketCharacter.ts";
import type {OpeningRoundBracketCharacter} from "../../characters/OpeningRoundBracketCharacter.ts";
import type {OperatorCharacter} from "../../characters/OperatorCharacter.ts";
import type {ClosingSquareBracketCharacter} from "../../characters/ClosingSquareBracketCharacter.ts";
import type {OpeningSquareBracketCharacter} from "../../characters/OpeningSquareBracketCharacter.ts";
import type {WhitespaceCharacter} from "../../characters/WhitespaceCharacter.ts";
import type {WhitespaceCharactersConcreteTreeNode} from "../../concrete-syntax-tree/tree-node-types/whitespace-characters/WhitespaceCharactersConcreteTreeNode.ts";
import type {SourceFileContentConcreteTreeNode} from "../../concrete-syntax-tree/tree-node-types/source-file-content/SourceFileContentConcreteTreeNode.ts";

export type Parser = Readonly<{
	parseWhitespace: (character: WhitespaceCharacter) => Parser;
	parseOpeningSquareBracket: (character: OpeningSquareBracketCharacter) => Parser;
	parseClosingSquareBracket: (character: ClosingSquareBracketCharacter) => Parser;
	parseOpeningCurlyBracket: (character: OpeningCurlyBracketCharacter) => Parser;
	parseClosingCurlyBracket: (character: ClosingCurlyBracketCharacter) => Parser;
	parseOpeningRoundBracket: (character: OpeningRoundBracketCharacter) => Parser;
	parseClosingRoundBracket: (character: ClosingRoundBracketCharacter) => Parser;
	parseIdentifier: (character: IdentifierCharacter) => Parser;
	parseOperator: (character: OperatorCharacter) => Parser;
	finalize: () => null | WhitespaceCharactersConcreteTreeNode | SourceFileContentConcreteTreeNode;
}>;
