import {createConcreteTreeNode} from "../../createConcreteTreeNode.ts";
import type {FunctionCallKnownStartingSegmentsConcreteTreeNode} from "../function-call-known-starting-segments/FunctionCallKnownStartingSegmentsConcreteTreeNode.ts";
import type {FunctionCallSegmentsSeparatedRestSegmentsConcreteTreeNode} from "../function-call-segments-separated-rest-segments/FunctionCallSegmentsSeparatedRestSegmentsConcreteTreeNode.ts";
import type {FunctionCallUnknownSegmentConcreteTreeNode} from "../function-call-unknown-segment/FunctionCallUnknownSegmentConcreteTreeNode.ts";
import type {FunctionCallWordStartingSegmentsConcreteTreeNode} from "../function-call-word-starting-segments/FunctionCallWordStartingSegmentsConcreteTreeNode.ts";
import type {FunctionCallUnknownStartingSegmentsConcreteTreeNode} from "./FunctionCallUnknownStartingSegmentsConcreteTreeNode.ts";
import {functionCallUnknownStartingSegmentsConcreteTreeNodeTypeName} from "./functionCallUnknownStartingSegmentsConcreteTreeNodeTypeName.ts";

export function createFunctionCallUnknownStartingSegmentsConcreteTreeNode(
	firstSegment: FunctionCallUnknownSegmentConcreteTreeNode,

	restSegments:
		| FunctionCallKnownStartingSegmentsConcreteTreeNode
		| FunctionCallUnknownStartingSegmentsConcreteTreeNode
		| null
		| FunctionCallSegmentsSeparatedRestSegmentsConcreteTreeNode
		| FunctionCallWordStartingSegmentsConcreteTreeNode,
): FunctionCallUnknownStartingSegmentsConcreteTreeNode {
	const treeNode: FunctionCallUnknownStartingSegmentsConcreteTreeNode = createConcreteTreeNode(
		functionCallUnknownStartingSegmentsConcreteTreeNodeTypeName,
		[firstSegment, restSegments],
	);

	return treeNode;
}
