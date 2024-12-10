import type {ClosingCurlyBracketCharacter} from "../../characters/closing-curly-bracket/ClosingCurlyBracketCharacter.ts";
import type {OpeningCurlyBracketCharacter} from "../../characters/opening-curly-bracket/OpeningCurlyBracketCharacter.ts";
import type {IdentifierCharacter} from "../../characters/identifier/IdentifierCharacter.ts";
import type {ClosingRoundBracketCharacter} from "../../characters/closing-round-bracket/ClosingRoundBracketCharacter.ts";
import type {OpeningRoundBracketCharacter} from "../../characters/opening-round-bracket/OpeningRoundBracketCharacter.ts";
import type {OperatorCharacter} from "../../characters/operator/OperatorCharacter.ts";
import type {ClosingSquareBracketCharacter} from "../../characters/closing-square-bracket/ClosingSquareBracketCharacter.ts";
import type {OpeningSquareBracketCharacter} from "../../characters/opening-square-bracket/OpeningSquareBracketCharacter.ts";
import type {WhitespaceCharacter} from "../../characters/whitespace/WhitespaceCharacter.ts";
import type {SourceFileContentConcreteSyntaxTreeNode} from "../../concrete-syntax-tree/tree-node-types/source-file-content/SourceFileContentConcreteSyntaxTreeNode.ts";
import type {Index} from "../../concrete-syntax-tree/index/Index.ts";
import type {WhitespaceConcreteSyntaxTreeNode} from "../../concrete-syntax-tree/tree-node-types/whitespace/WhitespaceConcreteSyntaxTreeNode.ts";
export interface Parser {
	parseWhitespace: (character: WhitespaceCharacter, index: Index) => Parser;
	parseOpeningSquareBracket: (character: OpeningSquareBracketCharacter, index: Index) => Parser;
	parseClosingSquareBracket: (character: ClosingSquareBracketCharacter, index: Index) => Parser;
	parseOpeningCurlyBracket: (character: OpeningCurlyBracketCharacter, index: Index) => Parser;
	parseClosingCurlyBracket: (character: ClosingCurlyBracketCharacter, index: Index) => Parser;
	parseOpeningRoundBracket: (character: OpeningRoundBracketCharacter, index: Index) => Parser;
	parseClosingRoundBracket: (character: ClosingRoundBracketCharacter, index: Index) => Parser;
	parseIdentifier: (character: IdentifierCharacter, index: Index) => Parser;
	parseOperator: (character: OperatorCharacter, index: Index) => Parser;
	finalize: () => null | WhitespaceConcreteSyntaxTreeNode | SourceFileContentConcreteSyntaxTreeNode;
}
