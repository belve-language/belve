import {createConcreteTreeNode} from "../../createConcreteTreeNode.ts";
import type {FunctionHeaderKnownStartingSegmentsConcreteTreeNode} from "../function-header-known-starting-segments/FunctionHeaderKnownStartingSegmentsConcreteTreeNode.ts";
import type {FunctionHeaderUnknownStartingSegmentsConcreteTreeNode} from "../function-header-unknown-starting-segments/FunctionHeaderUnknownStartingSegmentsConcreteTreeNode.ts";
import type {WhitespaceCharactersConcreteTreeNode} from "../whitespace-characters/WhitespaceCharactersConcreteTreeNode.ts";
import type {FunctionHeaderWordStartingSegmentsConcreteTreeNode} from "../function-header-word-starting-segments/FunctionHeaderWordStartingSegmentsConcreteTreeNode.ts";
import type {FunctionHeaderSegmentsSeparatedRestSegmentsConcreteTreeNode} from "./FunctionHeaderSegmentsSeparatedRestSegmentsConcreteTreeNode.ts";
import {functionHeaderSegmentsSeparatedRestSegmentsConcreteTreeNodeTypeName} from "./functionHeaderSegmentsSeparatedRestConcreteTreeNodeTypeName.ts";

export function createFunctionHeaderSegmentsSeparatedRestSegmentsConcreteTreeNode(
	initialWhitespaceCharacters: WhitespaceCharactersConcreteTreeNode,

	segments:
		| FunctionHeaderKnownStartingSegmentsConcreteTreeNode
		| FunctionHeaderUnknownStartingSegmentsConcreteTreeNode
		| FunctionHeaderWordStartingSegmentsConcreteTreeNode,
): FunctionHeaderSegmentsSeparatedRestSegmentsConcreteTreeNode {
	const treeNode: FunctionHeaderSegmentsSeparatedRestSegmentsConcreteTreeNode =
		createConcreteTreeNode(functionHeaderSegmentsSeparatedRestSegmentsConcreteTreeNodeTypeName, [
			initialWhitespaceCharacters,
			segments,
		]);

	return treeNode;
}
