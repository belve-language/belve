import {createConcreteTreeNode} from "../../createConcreteTreeNode.ts";
import type {IdentifierCharactersConcreteTreeNode} from "../identifier-characters/IdentifierCharactersConcreteTreeNode.ts";
import type {WhitespaceCharactersConcreteTreeNode} from "../whitespace-characters/WhitespaceCharactersConcreteTreeNode.ts";
import type {FunctionCallKnownSegmentContentConcreteTreeNode} from "./FunctionCallKnownSegmentContentConcreteTreeNode.ts";
import {functionCallKnownSegmentContentConcreteTreeNodeTypeName} from "./functionCallKnownSegmentContentConcreteTreeNodeTypeName.ts";

export function createFunctionCallKnownSegmentContentConcreteTreeNode(
	initialWhitespaceCharacters: WhitespaceCharactersConcreteTreeNode | null,
	identifierCharacters: IdentifierCharactersConcreteTreeNode,
	finalWhitespaceCharacters: WhitespaceCharactersConcreteTreeNode | null,
): FunctionCallKnownSegmentContentConcreteTreeNode {
	return createConcreteTreeNode(functionCallKnownSegmentContentConcreteTreeNodeTypeName, [
		initialWhitespaceCharacters,
		identifierCharacters,
		finalWhitespaceCharacters,
	]);
}
