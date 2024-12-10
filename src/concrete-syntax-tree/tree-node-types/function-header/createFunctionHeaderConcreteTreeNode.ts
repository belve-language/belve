import {createConcreteTreeNode} from "../../createConcreteTreeNode.ts";
import type {FunctionHeaderKnownStartingSegmentsConcreteTreeNode} from "../function-header-known-starting-segments/FunctionHeaderKnownStartingSegmentsConcreteTreeNode.ts";
import type {FunctionHeaderUnknownStartingSegmentsConcreteTreeNode} from "../function-header-unknown-starting-segments/FunctionHeaderUnknownStartingSegmentsConcreteTreeNode.ts";
import type {FunctionHeaderWordStartingSegmentsConcreteTreeNode} from "../function-header-word-starting-segments/FunctionHeaderWordStartingSegmentsConcreteTreeNode.ts";
import type {WhitespaceCharactersConcreteTreeNode} from "../whitespace-characters/WhitespaceCharactersConcreteTreeNode.ts";
import type {FunctionHeaderConcreteTreeNode} from "./FunctionHeaderConcreteTreeNode.ts";
import {functionHeaderConcreteTreeNodeTypeName} from "./functionHeaderConcreteTreeNodeTypeName.ts";

export function createFunctionHeaderConcreteTreeNode(
	segments:
		| FunctionHeaderWordStartingSegmentsConcreteTreeNode
		| FunctionHeaderUnknownStartingSegmentsConcreteTreeNode
		| FunctionHeaderKnownStartingSegmentsConcreteTreeNode,

	finalWhitespaceCharacters: WhitespaceCharactersConcreteTreeNode | null,
): FunctionHeaderConcreteTreeNode {
	return createConcreteTreeNode(functionHeaderConcreteTreeNodeTypeName, [
		segments,
		finalWhitespaceCharacters,
	]);
}
