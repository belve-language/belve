import {createConcreteTreeNode} from "../../createConcreteTreeNode.ts";
import type {StatementsConcreteTreeNode} from "../statements/StatementsConcreteTreeNode.ts";
import type {WhitespaceCharactersConcreteTreeNode} from "../whitespace-characters/WhitespaceCharactersConcreteTreeNode.ts";
import type {BlockContentConcreteTreeNode} from "./BlockContentConcreteTreeNode.ts";
import {blockContentConcreteTreeNodeTypeName} from "./blockContentConcreteTreeNodeTypeName.ts";

export function createBlockContentConcreteTreeNode(
	initialWhitespaceCharacters: WhitespaceCharactersConcreteTreeNode | null,
	statements: StatementsConcreteTreeNode,
	finalWhitespaceCharacters: WhitespaceCharactersConcreteTreeNode | null,
): BlockContentConcreteTreeNode {
	return createConcreteTreeNode(blockContentConcreteTreeNodeTypeName, [
		initialWhitespaceCharacters,
		statements,
		finalWhitespaceCharacters,
	]);
}
