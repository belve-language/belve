import {createConcreteTreeNode} from "../../createConcreteTreeNode.ts";
import type {IdentifierCharactersConcreteTreeNode} from "../identifier-characters/IdentifierCharactersConcreteTreeNode.ts";
import type {WhitespaceCharactersConcreteTreeNode} from "../whitespace-characters/WhitespaceCharactersConcreteTreeNode.ts";
import type {FunctionHeaderUnknownSegmentContentConcreteTreeNode} from "./FunctionHeaderUnknownSegmentContentConcreteTreeNode.ts";
import {functionHeaderUnknownSegmentContentConcreteTreeNodeTypeName} from "./functionHeaderUnknownSegmentContentConcreteTreeNodeTypeName.ts";

export function createFunctionHeaderUnknownSegmentContent(
	initialWhitespaceCharacters: WhitespaceCharactersConcreteTreeNode | null,
	identifierCharacters: IdentifierCharactersConcreteTreeNode,
	finalWhitespaceCharacters: WhitespaceCharactersConcreteTreeNode | null,
): FunctionHeaderUnknownSegmentContentConcreteTreeNode {
	return createConcreteTreeNode(functionHeaderUnknownSegmentContentConcreteTreeNodeTypeName, [
		initialWhitespaceCharacters,
		identifierCharacters,
		finalWhitespaceCharacters,
	]);
}
