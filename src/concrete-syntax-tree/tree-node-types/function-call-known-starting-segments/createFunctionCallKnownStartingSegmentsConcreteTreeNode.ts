import {createConcreteTreeNode} from "../../createConcreteTreeNode.ts";
import type {FunctionCallKnownSegmentConcreteTreeNode} from "../function-call-known-segment/FunctionCallKnownSegmentConcreteTreeNode.ts";
import type {FunctionCallSegmentsSeparatedRestSegmentsConcreteTreeNode} from "../function-call-segments-separated-rest-segments/FunctionCallSegmentsSeparatedRestSegmentsConcreteTreeNode.ts";
import type {FunctionCallUnknownStartingSegmentsConcreteTreeNode} from "../function-call-unknown-starting-segments/FunctionCallUnknownStartingSegmentsConcreteTreeNode.ts";
import type {FunctionCallWordStartingSegmentsConcreteTreeNode} from "../function-call-word-starting-segments/FunctionCallWordStartingSegmentsConcreteTreeNode.ts";
import type {FunctionCallKnownStartingSegmentsConcreteTreeNode} from "./FunctionCallKnownStartingSegmentsConcreteTreeNode.ts";
import {functionCallKnownStartingSegmentsConcreteTreeNodeTypeName} from "./functionCallKnownStartingSegmentsConcreteTreeNodeTypeName.ts";

export function createFunctionCallKnownStartingSegmentsConcreteTreeNode(
	firstSegment: FunctionCallKnownSegmentConcreteTreeNode,

	restSegments:
		| FunctionCallKnownStartingSegmentsConcreteTreeNode
		| FunctionCallUnknownStartingSegmentsConcreteTreeNode
		| null
		| FunctionCallSegmentsSeparatedRestSegmentsConcreteTreeNode
		| FunctionCallWordStartingSegmentsConcreteTreeNode,
): FunctionCallKnownStartingSegmentsConcreteTreeNode {
	const treeNode: FunctionCallKnownStartingSegmentsConcreteTreeNode = createConcreteTreeNode(
		functionCallKnownStartingSegmentsConcreteTreeNodeTypeName,
		[firstSegment, restSegments],
	);

	return treeNode;
}
