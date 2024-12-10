import {createConcreteTreeNode} from "../../createConcreteTreeNode.ts";
import type {FunctionHeaderKnownSegmentConcreteTreeNode} from "../function-header-known-segment/FunctionHeaderKnownSegmentConcreteTreeNode.ts";
import type {FunctionHeaderSegmentsSeparatedRestSegmentsConcreteTreeNode} from "../function-header-segments-separated-rest-segments/FunctionHeaderSegmentsSeparatedRestSegmentsConcreteTreeNode.ts";
import type {FunctionHeaderUnknownStartingSegmentsConcreteTreeNode} from "../function-header-unknown-starting-segments/FunctionHeaderUnknownStartingSegmentsConcreteTreeNode.ts";
import type {FunctionHeaderWordStartingSegmentsConcreteTreeNode} from "../function-header-word-starting-segments/FunctionHeaderWordStartingSegmentsConcreteTreeNode.ts";
import type {FunctionHeaderKnownStartingSegmentsConcreteTreeNode} from "./FunctionHeaderKnownStartingSegmentsConcreteTreeNode.ts";
import {functionHeaderKnownStartingSegmentsConcreteTreeNodeTypeName} from "./functionHeaderKnownStartingSegmentsConcreteTreeNodeTypeName.ts";

export function createFunctionHeaderKnownStartingSegmentsConcreteTreeNode(
	firstSegment: FunctionHeaderKnownSegmentConcreteTreeNode,
	restSegments:
		| FunctionHeaderKnownStartingSegmentsConcreteTreeNode
		| FunctionHeaderUnknownStartingSegmentsConcreteTreeNode
		| null
		| FunctionHeaderSegmentsSeparatedRestSegmentsConcreteTreeNode
		| FunctionHeaderWordStartingSegmentsConcreteTreeNode,
): FunctionHeaderKnownStartingSegmentsConcreteTreeNode {
	return createConcreteTreeNode(functionHeaderKnownStartingSegmentsConcreteTreeNodeTypeName, [
		firstSegment,
		restSegments,
	]);
}
