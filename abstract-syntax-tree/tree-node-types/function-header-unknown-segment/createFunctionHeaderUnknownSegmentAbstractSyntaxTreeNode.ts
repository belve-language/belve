import {createAbstractSyntaxTreeNode} from "../../createAbstractSyntaxTreeNode.ts";
import type {Identifier} from "../../identifier/Identifier.ts";
import type {FunctionHeaderUnknownSegmentAbstractSyntaxTreeNode} from "./FunctionHeaderUnknownSegmentAbstractSyntaxTreeNode.ts";
import {functionHeaderUnknownSegmentAbstractSyntaxTreeNodeTypeName} from "./functionHeaderUnknownSegmentAbstractSyntaxTreeNodeTypeName.ts";
export function createFunctionHeaderUnknownSegmentAbstractSyntaxTreeNode(
	identifier: Identifier,
): FunctionHeaderUnknownSegmentAbstractSyntaxTreeNode {
	const treeNode: FunctionHeaderUnknownSegmentAbstractSyntaxTreeNode = createAbstractSyntaxTreeNode(
		functionHeaderUnknownSegmentAbstractSyntaxTreeNodeTypeName,
		{
			identifier,
		} as const,
	);
	return treeNode;
}
