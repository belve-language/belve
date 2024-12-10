import {createAbstractSyntaxTreeNode} from "../../createAbstractSyntaxTreeNode.ts";
import type {Identifier} from "../../identifier/Identifier.ts";
import type {FunctionCallWordSegmentAbstractSyntaxTreeNode} from "./FunctionCallWordSegmentAbstractSyntaxTreeNode.ts";
import {functionCallWordSegmentAbstractSyntaxTreeNodeTypeName} from "./functionCallWordSegmentAbstractSyntaxTreeNodeTypeName.ts";
export function createFunctionCallWordSegmentAbstractSyntaxTreeNode(
	identifier: Identifier,
): FunctionCallWordSegmentAbstractSyntaxTreeNode {
	const treeNode: FunctionCallWordSegmentAbstractSyntaxTreeNode = createAbstractSyntaxTreeNode(
		functionCallWordSegmentAbstractSyntaxTreeNodeTypeName,
		{
			identifier,
		} as const,
	);
	return treeNode;
}
