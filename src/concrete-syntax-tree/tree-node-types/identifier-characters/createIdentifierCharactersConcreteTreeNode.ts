import type {IdentifierCharacter} from "../../../characters/IdentifierCharacter.ts";
import {createConcreteTreeNode} from "../../createConcreteTreeNode.ts";
import type {IdentifierCharactersConcreteTreeNode} from "./IdentifierCharactersConcreteTreeNode.ts";
import {identifierCharactersConcreteTreeNodeTypeName} from "./identifierCharactersConcreteTreeNodeTypeName.ts";

export function createIdentifierCharactersConcreteTreeNode(
	firstCharacter: IdentifierCharacter,
	restCharacters: IdentifierCharactersConcreteTreeNode | null,
): IdentifierCharactersConcreteTreeNode {
	return createConcreteTreeNode(identifierCharactersConcreteTreeNodeTypeName, [
		firstCharacter,
		restCharacters,
	]);
}
