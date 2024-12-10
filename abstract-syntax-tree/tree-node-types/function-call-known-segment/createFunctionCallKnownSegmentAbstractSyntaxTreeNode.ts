import {createAbstractSyntaxTreeNode} from "../../createAbstractSyntaxTreeNode.ts";
import type {Identifier} from "../../identifier/Identifier.ts";
import type {FunctionCallKnownSegmentAbstractSyntaxTreeNode} from "./FunctionCallKnownSegmentAbstractSyntaxTreeNode.ts";
import {functionCallKnownSegmentAbstractSyntaxTreeNodeTypeName} from "./functionCallKnownSegmentAbstractSyntaxTreeNodeTypeName.ts";
export function createFunctionCallKnownSegmentAbstractSyntaxTreeNode(
	identifier: Identifier,
): FunctionCallKnownSegmentAbstractSyntaxTreeNode {
	const treeNode: FunctionCallKnownSegmentAbstractSyntaxTreeNode = createAbstractSyntaxTreeNode(
		functionCallKnownSegmentAbstractSyntaxTreeNodeTypeName,
		{
			identifier,
		} as const,
	);
	return treeNode;
}
