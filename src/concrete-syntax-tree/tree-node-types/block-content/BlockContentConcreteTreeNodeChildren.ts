import type {StatementsConcreteTreeNode} from "../statements/StatementsConcreteTreeNode.ts";
import type {WhitespaceCharactersConcreteTreeNode} from "../whitespace-characters/WhitespaceCharactersConcreteTreeNode.ts";

export type BlockContentConcreteTreeNodeChildren = readonly [
	initialWhitespaceCharacters: WhitespaceCharactersConcreteTreeNode | null,
	statements: StatementsConcreteTreeNode,
	finalWhitespaceCharacters: WhitespaceCharactersConcreteTreeNode | null,
];
