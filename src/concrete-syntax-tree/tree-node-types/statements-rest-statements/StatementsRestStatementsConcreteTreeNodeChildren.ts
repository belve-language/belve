import type {OperatorCharacter} from "../../../characters/OperatorCharacter.ts";
import type {StatementsConcreteTreeNode} from "../statements/StatementsConcreteTreeNode.ts";
import type {WhitespaceCharactersConcreteTreeNode} from "../whitespace-characters/WhitespaceCharactersConcreteTreeNode.ts";

export type StatementsRestStatementsConcreteTreeNodeChildren = readonly [
	beforeOperatorWhitespaceCharacters: WhitespaceCharactersConcreteTreeNode | null,
	operatorCharacter: OperatorCharacter,
	afterOperatorWhitespaceCharacters: WhitespaceCharactersConcreteTreeNode | null,
	statements: StatementsConcreteTreeNode,
];
