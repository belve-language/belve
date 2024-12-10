import {createAbstractSyntaxTreeNode} from "../../createAbstractSyntaxTreeNode.ts";
import type {Identifier} from "../../identifier/Identifier.ts";
import type {FunctionHeaderKnownSegmentAbstractSyntaxTreeNode} from "./FunctionHeaderKnownSegmentAbstractSyntaxTreeNode.ts";
import {functionHeaderKnownSegmentAbstractSyntaxTreeNodeTypeName} from "./functionHeaderKnownSegmentAbstractSyntaxTreeNodeTypeName.ts";
export function createFunctionHeaderKnownSegmentAbstractSyntaxTreeNode(
	identifier: Identifier,
): FunctionHeaderKnownSegmentAbstractSyntaxTreeNode {
	const treeNode: FunctionHeaderKnownSegmentAbstractSyntaxTreeNode = createAbstractSyntaxTreeNode(
		functionHeaderKnownSegmentAbstractSyntaxTreeNodeTypeName,
		{
			identifier,
		} as const,
	);
	return treeNode;
}
