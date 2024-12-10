import type {ClosingCurlyBracketCharacter} from "../../../characters/ClosingCurlyBracketCharacter.ts";
import type {OpeningCurlyBracketCharacter} from "../../../characters/OpeningCurlyBracketCharacter.ts";
import {createConcreteTreeNode} from "../../createConcreteTreeNode.ts";
import type {BlockContentConcreteTreeNode} from "../block-content/BlockContentConcreteTreeNode.ts";
import type {WhitespaceCharactersConcreteTreeNode} from "../whitespace-characters/WhitespaceCharactersConcreteTreeNode.ts";
import type {BlockConcreteTreeNode} from "./BlockConcreteTreeNode.ts";
import {blockConcreteTreeNodeTypeName} from "./blockConcreteTreeNodeTypeName.ts";

export function createBlockConcreteTreeNode(
	openingBracketCharacter: OpeningCurlyBracketCharacter,
	content: BlockContentConcreteTreeNode | null | WhitespaceCharactersConcreteTreeNode,
	closingBracketCharacter: ClosingCurlyBracketCharacter,
): BlockConcreteTreeNode {
	return createConcreteTreeNode(blockConcreteTreeNodeTypeName, [
		openingBracketCharacter,
		content,
		closingBracketCharacter,
	]);
}
