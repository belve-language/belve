import type {FunctionHeaderKnownSegmentAbstractSyntaxTreeNode} from "../function-header-known-segment/FunctionHeaderKnownSegmentAbstractSyntaxTreeNode.ts";
import type {FunctionHeaderUnknownSegmentAbstractSyntaxTreeNode} from "../function-header-unknown-segment/FunctionHeaderUnknownSegmentAbstractSyntaxTreeNode.ts";
import type {FunctionHeaderWordSegmentAbstractSyntaxTreeNode} from "../function-header-word-segment/FunctionHeaderWordSegmentAbstractSyntaxTreeNode.ts";
export type FunctionHeaderAbstractSyntaxTreeNodeChildren = Readonly<{
	segments: readonly [
		(
			| FunctionHeaderWordSegmentAbstractSyntaxTreeNode
			| FunctionHeaderUnknownSegmentAbstractSyntaxTreeNode
			| FunctionHeaderKnownSegmentAbstractSyntaxTreeNode
		),
		...(
			| FunctionHeaderWordSegmentAbstractSyntaxTreeNode
			| FunctionHeaderUnknownSegmentAbstractSyntaxTreeNode
			| FunctionHeaderKnownSegmentAbstractSyntaxTreeNode
		)[],
	];
}>;
