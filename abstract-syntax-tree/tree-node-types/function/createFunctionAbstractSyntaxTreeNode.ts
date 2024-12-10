import {createAbstractSyntaxTreeNode} from "../../createAbstractSyntaxTreeNode.ts";
import type {FunctionBodyAbstractSyntaxTreeNode} from "../function-body/FunctionBodyAbstractSyntaxTreeNode.ts";
import type {FunctionHeaderAbstractSyntaxTreeNode} from "../function-header/FunctionHeaderAbstractSyntaxTreeNode.ts";
import type {FunctionAbstractSyntaxTreeNode} from "./FunctionAbstractSyntaxTreeNode.ts";
import {functionAbstractSyntaxTreeNodeTypeName} from "./functionAbstractSyntaxTreeNodeTypeName.ts";
export function createFunctionAbstractSyntaxTreeNode(
	header: FunctionHeaderAbstractSyntaxTreeNode | null,
	body: FunctionBodyAbstractSyntaxTreeNode,
): FunctionAbstractSyntaxTreeNode {
	const treeNode: FunctionAbstractSyntaxTreeNode = createAbstractSyntaxTreeNode(
		functionAbstractSyntaxTreeNodeTypeName,
		{
			header,
			body,
		} as const,
	);
	return treeNode;
}
