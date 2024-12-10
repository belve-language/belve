import {createAbstractTreeNode} from "../../createAbstractTreeNode.ts";
import type {FunctionHeaderWordSegmentAbstractTreeNode} from "./FunctionHeaderWordSegmentAbstractTreeNode.ts";
import {functionHeaderWordSegmentAbstractTreeNodeTypeName} from "./functionHeaderWordSegmentAbstractTreeNodeTypeName.ts";

export function createFunctionHeaderWordSegmentAbstractTreeNode(
	identifier: string,
): FunctionHeaderWordSegmentAbstractTreeNode {
	const treeNode: FunctionHeaderWordSegmentAbstractTreeNode = createAbstractTreeNode(
		functionHeaderWordSegmentAbstractTreeNodeTypeName,
		{
			identifier,
		},
	);

	return treeNode;
}
