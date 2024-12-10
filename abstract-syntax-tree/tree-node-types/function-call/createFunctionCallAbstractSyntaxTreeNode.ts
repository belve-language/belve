import {createAbstractSyntaxTreeNode} from "../../createAbstractSyntaxTreeNode.ts";
import type {FunctionCallKnownSegmentAbstractSyntaxTreeNode} from "../function-call-known-segment/FunctionCallKnownSegmentAbstractSyntaxTreeNode.ts";
import type {FunctionCallUnknownSegmentAbstractSyntaxTreeNode} from "../function-call-unknown-segment/FunctionCallUnknownSegmentAbstractSyntaxTreeNode.ts";
import type {FunctionCallWordSegmentAbstractSyntaxTreeNode} from "../function-call-word-segment/FunctionCallWordSegmentAbstractSyntaxTreeNode.ts";
import type {FunctionCallAbstractSyntaxTreeNode} from "./FunctionCallAbstractSyntaxTreeNode.ts";
import {functionCallAbstractSyntaxTreeNodeTypeName} from "./functionCallAbstractSyntaxTreeNodeTypeName.ts";
export function createFunctionCallAbstractSyntaxTreeNode(
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
	],
): FunctionCallAbstractSyntaxTreeNode {
	const treeNode: FunctionCallAbstractSyntaxTreeNode = createAbstractSyntaxTreeNode(
		functionCallAbstractSyntaxTreeNodeTypeName,
		{
			segments,
		} as const,
	);
	return treeNode;
}
