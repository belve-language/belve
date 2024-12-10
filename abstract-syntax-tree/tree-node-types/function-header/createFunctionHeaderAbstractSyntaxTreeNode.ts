import {createAbstractSyntaxTreeNode} from "../../createAbstractSyntaxTreeNode.ts";
import type {FunctionHeaderKnownSegmentAbstractSyntaxTreeNode} from "../function-header-known-segment/FunctionHeaderKnownSegmentAbstractSyntaxTreeNode.ts";
import type {FunctionHeaderUnknownSegmentAbstractSyntaxTreeNode} from "../function-header-unknown-segment/FunctionHeaderUnknownSegmentAbstractSyntaxTreeNode.ts";
import type {FunctionHeaderWordSegmentAbstractSyntaxTreeNode} from "../function-header-word-segment/FunctionHeaderWordSegmentAbstractSyntaxTreeNode.ts";
import type {FunctionHeaderAbstractSyntaxTreeNode} from "./FunctionHeaderAbstractSyntaxTreeNode.ts";
import {functionHeaderAbstractSyntaxTreeNodeTypeName} from "./functionHeaderAbstractSyntaxTreeNodeTypeName.ts";
export function createFunctionHeaderAbstractSyntaxTreeNode(
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
	],
): FunctionHeaderAbstractSyntaxTreeNode {
	const treeNode: FunctionHeaderAbstractSyntaxTreeNode = createAbstractSyntaxTreeNode(
		functionHeaderAbstractSyntaxTreeNodeTypeName,
		{
			segments,
		} as const,
	);
	return treeNode;
}
