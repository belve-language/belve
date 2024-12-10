import {createAbstractTreeNode} from "../../createAbstractTreeNode.ts";
import type {FunctionHeaderKnownSegmentAbstractTreeNode} from "../function-header-known-segment/FunctionHeaderKnownSegmentAbstractTreeNode.ts";
import type {FunctionHeaderUnknownSegmentAbstractTreeNode} from "../function-header-unknown-segment/FunctionHeaderUnknownSegmentAbstractTreeNode.ts";
import type {FunctionHeaderWordSegmentAbstractTreeNode} from "../function-header-word-segment/FunctionHeaderWordSegmentAbstractTreeNode.ts";
import type {FunctionHeaderAbstractTreeNode} from "./FunctionHeaderAbstractTreeNode.ts";
import {functionHeaderAbstractTreeNodeTypeName} from "./functionHeaderAbstractTreeNodeTypeName.ts";

export function createFunctionHeaderAbstractTreeNode(
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
	],
): FunctionHeaderAbstractTreeNode {
	const treeNode: FunctionHeaderAbstractTreeNode = createAbstractTreeNode(
		functionHeaderAbstractTreeNodeTypeName,
		{
			segments,
		},
	);

	return treeNode;
}
