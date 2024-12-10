import type {IdentifierCharacter} from "../../../characters/IdentifierCharacter.ts";
import type {IdentifierCharactersConcreteTreeNode} from "./IdentifierCharactersConcreteTreeNode.ts";

export type IdentifierCharactersConcreteTreeNodeChildren = readonly [
	firstCharacter: IdentifierCharacter,
	restCharacters: IdentifierCharactersConcreteTreeNode | null,
];
