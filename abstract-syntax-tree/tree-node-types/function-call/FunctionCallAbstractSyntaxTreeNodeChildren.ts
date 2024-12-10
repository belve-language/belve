import type {FunctionCallKnownSegmentAbstractSyntaxTreeNode} from "../function-call-known-segment/FunctionCallKnownSegmentAbstractSyntaxTreeNode.ts";
import type {FunctionCallUnknownSegmentAbstractSyntaxTreeNode} from "../function-call-unknown-segment/FunctionCallUnknownSegmentAbstractSyntaxTreeNode.ts";
import type {FunctionCallWordSegmentAbstractSyntaxTreeNode} from "../function-call-word-segment/FunctionCallWordSegmentAbstractSyntaxTreeNode.ts";
export type FunctionCallAbstractSyntaxTreeNodeChildren = Readonly<{
	segments: readonly [
		(
			| FunctionCallWordSegmentAbstractSyntaxTreeNode
			| FunctionCallUnknownSegmentAbstractSyntaxTreeNode
			| FunctionCallKnownSegmentAbstractSyntaxTreeNode
		),
		...(
			| FunctionCallWordSegmentAbstractSyntaxTreeNode
			| FunctionCallUnknownSegmentAbstractSyntaxTreeNode
			| FunctionCallKnownSegmentAbstractSyntaxTreeNode
		)[],
	];
}>;
