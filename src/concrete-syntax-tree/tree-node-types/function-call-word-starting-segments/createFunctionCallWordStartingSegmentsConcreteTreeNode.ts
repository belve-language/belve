import {createConcreteTreeNode} from "../../createConcreteTreeNode.ts";
import type {FunctionCallKnownStartingSegmentsConcreteTreeNode} from "../function-call-known-starting-segments/FunctionCallKnownStartingSegmentsConcreteTreeNode.ts";
import type {FunctionCallSegmentsSeparatedRestSegmentsConcreteTreeNode} from "../function-call-segments-separated-rest-segments/FunctionCallSegmentsSeparatedRestSegmentsConcreteTreeNode.ts";
import type {FunctionCallUnknownStartingSegmentsConcreteTreeNode} from "../function-call-unknown-starting-segments/FunctionCallUnknownStartingSegmentsConcreteTreeNode.ts";
import type {FunctionCallWordSegmentConcreteTreeNode} from "../function-call-word-segment/FunctionCallWordSegmentConcreteTreeNode.ts";
import type {FunctionCallWordStartingSegmentsConcreteTreeNode} from "./FunctionCallWordStartingSegmentsConcreteTreeNode.ts";
import {functionCallWordStartingSegmentsConcreteTreeNodeTypeName} from "./functionCallWordStartingSegmentsConcreteTreeNodeTypeName.ts";

export function createFunctionCallWordStartingSegmentsConcreteTreeNode(
	firstSegment: FunctionCallWordSegmentConcreteTreeNode,
	restSegments:
		| FunctionCallKnownStartingSegmentsConcreteTreeNode
		| FunctionCallUnknownStartingSegmentsConcreteTreeNode
		| null
		| FunctionCallSegmentsSeparatedRestSegmentsConcreteTreeNode,
): FunctionCallWordStartingSegmentsConcreteTreeNode {
	const treeNode: FunctionCallWordStartingSegmentsConcreteTreeNode = createConcreteTreeNode(
		functionCallWordStartingSegmentsConcreteTreeNodeTypeName,
		[firstSegment, restSegments],
	);

	return treeNode;
}
