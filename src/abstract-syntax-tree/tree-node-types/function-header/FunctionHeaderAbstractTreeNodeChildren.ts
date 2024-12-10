import type {FunctionHeaderKnownSegmentAbstractTreeNode} from "../function-header-known-segment/FunctionHeaderKnownSegmentAbstractTreeNode.ts";
import type {FunctionHeaderUnknownSegmentAbstractTreeNode} from "../function-header-unknown-segment/FunctionHeaderUnknownSegmentAbstractTreeNode.ts";
import type {FunctionHeaderWordSegmentAbstractTreeNode} from "../function-header-word-segment/FunctionHeaderWordSegmentAbstractTreeNode.ts";

export type FunctionHeaderAbstractTreeNodeChildren = Readonly<{
	segments: readonly [
		(
			| FunctionHeaderWordSegmentAbstractTreeNode
			| FunctionHeaderUnknownSegmentAbstractTreeNode
			| FunctionHeaderKnownSegmentAbstractTreeNode
		),
		...(
			| FunctionHeaderWordSegmentAbstractTreeNode
			| FunctionHeaderUnknownSegmentAbstractTreeNode
			| FunctionHeaderKnownSegmentAbstractTreeNode
		)[],
	];
}>;
