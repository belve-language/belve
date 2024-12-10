import {createConcreteTreeNode} from "../../createConcreteTreeNode.ts";
import type {FunctionHeaderKnownStartingSegmentsConcreteTreeNode} from "../function-header-known-starting-segments/FunctionHeaderKnownStartingSegmentsConcreteTreeNode.ts";
import type {FunctionHeaderUnknownStartingSegmentsConcreteTreeNode} from "../function-header-unknown-starting-segments/FunctionHeaderUnknownStartingSegmentsConcreteTreeNode.ts";
import type {FunctionHeaderWordStartingSegmentsConcreteTreeNode} from "./FunctionHeaderWordStartingSegmentsConcreteTreeNode.ts";
import type {FunctionHeaderWordSegmentConcreteTreeNode} from "../function-header-word-segment/FunctionHeaderWordSegmentConcreteTreeNode.ts";
import {functionHeaderWordStartingSegmentsConcreteTreeNodeTypeName} from "./functionHeaderWordStartingSegmentsConcreteTreeNodeTypeName.ts";
import type {FunctionHeaderSegmentsSeparatedRestSegmentsConcreteTreeNode} from "../function-header-segments-separated-rest-segments/FunctionHeaderSegmentsSeparatedRestSegmentsConcreteTreeNode.ts";

export function createFunctionHeaderWordStartingSegmentsConcreteTreeNode(
	firstSegment: FunctionHeaderWordSegmentConcreteTreeNode,
	restSegments:
		| FunctionHeaderKnownStartingSegmentsConcreteTreeNode
		| FunctionHeaderUnknownStartingSegmentsConcreteTreeNode
		| null
		| FunctionHeaderSegmentsSeparatedRestSegmentsConcreteTreeNode,
): FunctionHeaderWordStartingSegmentsConcreteTreeNode {
	return createConcreteTreeNode(functionHeaderWordStartingSegmentsConcreteTreeNodeTypeName, [
		firstSegment,
		restSegments,
	]);
}
