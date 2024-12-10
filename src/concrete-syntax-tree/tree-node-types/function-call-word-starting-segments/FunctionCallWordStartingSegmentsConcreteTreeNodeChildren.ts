import type {FunctionCallKnownStartingSegmentsConcreteTreeNode} from "../function-call-known-starting-segments/FunctionCallKnownStartingSegmentsConcreteTreeNode.ts";
import type {FunctionCallSegmentsSeparatedRestSegmentsConcreteTreeNode} from "../function-call-segments-separated-rest-segments/FunctionCallSegmentsSeparatedRestSegmentsConcreteTreeNode.ts";
import type {FunctionCallUnknownStartingSegmentsConcreteTreeNode} from "../function-call-unknown-starting-segments/FunctionCallUnknownStartingSegmentsConcreteTreeNode.ts";
import type {FunctionCallWordSegmentConcreteTreeNode} from "../function-call-word-segment/FunctionCallWordSegmentConcreteTreeNode.ts";

export type FunctionCallWordStartingSegmentsConcreteTreeNodeChildren = readonly [
	firstSegment: FunctionCallWordSegmentConcreteTreeNode,

	restSegments:
		| FunctionCallKnownStartingSegmentsConcreteTreeNode
		| FunctionCallUnknownStartingSegmentsConcreteTreeNode
		| null
		| FunctionCallSegmentsSeparatedRestSegmentsConcreteTreeNode,
];
