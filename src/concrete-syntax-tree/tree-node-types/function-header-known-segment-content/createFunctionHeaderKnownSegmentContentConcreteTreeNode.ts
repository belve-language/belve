import {createConcreteTreeNode} from "../../createConcreteTreeNode.ts";
import type {IdentifierCharactersConcreteTreeNode} from "../identifier-characters/IdentifierCharactersConcreteTreeNode.ts";
import type {WhitespaceCharactersConcreteTreeNode} from "../whitespace-characters/WhitespaceCharactersConcreteTreeNode.ts";
import type {FunctionHeaderKnownSegmentContentConcreteTreeNode} from "./FunctionHeaderKnownSegmentContentConcreteTreeNode.ts";
import {functionHeaderKnownSegmentContentConcreteTreeNodeTypeName} from "./functionHeaderKnownSegmentContentConcreteTreeNodeTypeName.ts";

export function createFunctionHeaderKnownSegmentContentConcreteTreeNode(
	initialWhitespaceCharacters: WhitespaceCharactersConcreteTreeNode | null,
	identifierCharacters: IdentifierCharactersConcreteTreeNode,
	finalWhitespaceCharacters: WhitespaceCharactersConcreteTreeNode | null,
): FunctionHeaderKnownSegmentContentConcreteTreeNode {
	return createConcreteTreeNode(functionHeaderKnownSegmentContentConcreteTreeNodeTypeName, [
		initialWhitespaceCharacters,
		identifierCharacters,
		finalWhitespaceCharacters,
	]);
}
