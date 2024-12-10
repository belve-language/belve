import {createConcreteTreeNode} from "../../createConcreteTreeNode.ts";
import type {FunctionHeaderKnownStartingSegmentsConcreteTreeNode} from "../function-header-known-starting-segments/FunctionHeaderKnownStartingSegmentsConcreteTreeNode.ts";
import type {FunctionHeaderUnknownStartingSegmentsConcreteTreeNode} from "./FunctionHeaderUnknownStartingSegmentsConcreteTreeNode.ts";
import {functionHeaderUnknownStartingSegmentsConcreteTreeNodeTypeName} from "./functionHeaderUnknownStartingSegmentsConcreteTreeNodeTypeName.ts";
import type {FunctionHeaderUnknownSegmentConcreteTreeNode} from "../function-header-unknown-segment/FunctionHeaderUnknownSegmentConcreteTreeNode.ts";
import type {FunctionHeaderSegmentsSeparatedRestSegmentsConcreteTreeNode} from "../function-header-segments-separated-rest-segments/FunctionHeaderSegmentsSeparatedRestSegmentsConcreteTreeNode.ts";
import type {FunctionHeaderWordStartingSegmentsConcreteTreeNode} from "../function-header-word-starting-segments/FunctionHeaderWordStartingSegmentsConcreteTreeNode.ts";

export function createFunctionHeaderUnknownStartingSegmentsConcreteTreeNode(
	firstSegment: FunctionHeaderUnknownSegmentConcreteTreeNode,

	restSegments:
		| FunctionHeaderKnownStartingSegmentsConcreteTreeNode
		| FunctionHeaderUnknownStartingSegmentsConcreteTreeNode
		| null
		| FunctionHeaderSegmentsSeparatedRestSegmentsConcreteTreeNode
		| FunctionHeaderWordStartingSegmentsConcreteTreeNode,
): FunctionHeaderUnknownStartingSegmentsConcreteTreeNode {
	return createConcreteTreeNode(functionHeaderUnknownStartingSegmentsConcreteTreeNodeTypeName, [
		firstSegment,
		restSegments,
	]);
}
