import {createAbstractSyntaxTreeNode} from "../../createAbstractSyntaxTreeNode.ts";
import type {Identifier} from "../../identifier/Identifier.ts";
import type {FunctionCallUnknownSegmentAbstractSyntaxTreeNode} from "./FunctionCallUnknownSegmentAbstractSyntaxTreeNode.ts";
import {functionCallUnknownSegmentAbstractSyntaxTreeNodeTypeName} from "./functionCallUnknownSegmentAbstractSyntaxTreeNodeTypeName.ts";
export function createFunctionCallUnknownSegmentAbstractSyntaxTreeNode(
	identifier: Identifier,
): FunctionCallUnknownSegmentAbstractSyntaxTreeNode {
	const treeNode: FunctionCallUnknownSegmentAbstractSyntaxTreeNode = createAbstractSyntaxTreeNode(
		functionCallUnknownSegmentAbstractSyntaxTreeNodeTypeName,
		{
			identifier,
		} as const,
	);
	return treeNode;
}
