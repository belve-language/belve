import {createConcreteTreeNode} from "../../createConcreteTreeNode.ts";
import type {IdentifierCharactersConcreteTreeNode} from "../identifier-characters/IdentifierCharactersConcreteTreeNode.ts";
import type {WhitespaceCharactersConcreteTreeNode} from "../whitespace-characters/WhitespaceCharactersConcreteTreeNode.ts";
import type {FunctionCallUnknownSegmentContentConcreteTreeNode} from "./FunctionCallUnknownSegmentContentConcreteTreeNode.ts";
import {functionCallUnknownSegmentContentConcreteTreeNodeTypeName} from "./functionCallUnknownSegmentContentConcreteTreeNodeTypeName.ts";

export function createFunctionCallUnknownSegmentContentConcreteTreeNode(
	initialWhitespaceCharacters: WhitespaceCharactersConcreteTreeNode | null,
	identifierCharacters: IdentifierCharactersConcreteTreeNode,
	finalWhitespaceCharacters: WhitespaceCharactersConcreteTreeNode | null,
): FunctionCallUnknownSegmentContentConcreteTreeNode {
	return createConcreteTreeNode(functionCallUnknownSegmentContentConcreteTreeNodeTypeName, [
		initialWhitespaceCharacters,
		identifierCharacters,
		finalWhitespaceCharacters,
	]);
}
