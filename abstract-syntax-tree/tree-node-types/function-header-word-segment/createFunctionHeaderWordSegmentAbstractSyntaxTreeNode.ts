import {createAbstractSyntaxTreeNode} from "../../createAbstractSyntaxTreeNode.ts";
import type {Identifier} from "../../identifier/Identifier.ts";
import type {FunctionHeaderWordSegmentAbstractSyntaxTreeNode} from "./FunctionHeaderWordSegmentAbstractSyntaxTreeNode.ts";
import {functionHeaderWordSegmentAbstractSyntaxTreeNodeTypeName} from "./functionHeaderWordSegmentAbstractSyntaxTreeNodeTypeName.ts";
export function createFunctionHeaderWordSegmentAbstractSyntaxTreeNode(
	identifier: Identifier,
): FunctionHeaderWordSegmentAbstractSyntaxTreeNode {
	const treeNode: FunctionHeaderWordSegmentAbstractSyntaxTreeNode = createAbstractSyntaxTreeNode(
		functionHeaderWordSegmentAbstractSyntaxTreeNodeTypeName,
		{
			identifier,
		} as const,
	);
	return treeNode;
}
