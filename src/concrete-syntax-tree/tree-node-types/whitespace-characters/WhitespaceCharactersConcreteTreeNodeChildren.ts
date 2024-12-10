import type {WhitespaceCharacter} from "../../../characters/WhitespaceCharacter.ts";
import type {WhitespaceCharactersConcreteTreeNode} from "./WhitespaceCharactersConcreteTreeNode.ts";

export type WhitespaceCharactersConcreteTreeNodeChildren = readonly [
	firstCharacter: WhitespaceCharacter,
	restCharacters: WhitespaceCharactersConcreteTreeNode | null,
];
