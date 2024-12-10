import type {WhitespaceCharacter} from "../../../characters/WhitespaceCharacter.ts";
import {createConcreteTreeNode} from "../../createConcreteTreeNode.ts";
import type {WhitespaceCharactersConcreteTreeNode} from "./WhitespaceCharactersConcreteTreeNode.ts";
import {whitespaceCharactersConcreteTreeNodeTypeName} from "./whitespaceCharactersConcreteTreeNodeTypeName.ts";

export function createWhitespaceCharactersConcreteTreeNode(
	firstCharacter: WhitespaceCharacter,
	restCharacters: WhitespaceCharactersConcreteTreeNode | null,
): WhitespaceCharactersConcreteTreeNode {
	return createConcreteTreeNode(whitespaceCharactersConcreteTreeNodeTypeName, [
		firstCharacter,
		restCharacters,
	]);
}
