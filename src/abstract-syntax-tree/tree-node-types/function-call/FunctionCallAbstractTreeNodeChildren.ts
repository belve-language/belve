import type {FunctionCallKnownSegmentAbstractTreeNode} from "../function-call-known-segment/FunctionCallKnownSegmentAbstractTreeNode.ts";
import type {FunctionCallUnknownSegmentAbstractTreeNode} from "../function-call-unknown-segment/FunctionCallUnknownSegmentAbstractTreeNode.ts";
import type {FunctionCallWordSegmentAbstractTreeNode} from "../function-call-word-segment/FunctionCallWordSegmentAbstractTreeNode.ts";

export type FunctionCallAbstractTreeNodeChildren = Readonly<{
	segments: readonly [
		(
			| FunctionCallWordSegmentAbstractTreeNode
			| FunctionCallUnknownSegmentAbstractTreeNode
			| FunctionCallKnownSegmentAbstractTreeNode
		),
		...(
			| FunctionCallWordSegmentAbstractTreeNode
			| FunctionCallUnknownSegmentAbstractTreeNode
			| FunctionCallKnownSegmentAbstractTreeNode
		)[],
	];
}>;
