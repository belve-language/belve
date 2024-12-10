import type {IdentifierCharactersConcreteTreeNode} from "../identifier-characters/IdentifierCharactersConcreteTreeNode.ts";
import type {WhitespaceCharactersConcreteTreeNode} from "../whitespace-characters/WhitespaceCharactersConcreteTreeNode.ts";

export type FunctionCallUnknownSegmentContentConcreteTreeNodeChildren = readonly [
	initialWhitespaceCharacters: WhitespaceCharactersConcreteTreeNode | null,
	identifierCharacters: IdentifierCharactersConcreteTreeNode,
	finalWhitespaceCharacters: WhitespaceCharactersConcreteTreeNode | null,
];
