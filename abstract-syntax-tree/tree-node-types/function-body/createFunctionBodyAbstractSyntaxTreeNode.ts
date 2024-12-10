import {createAbstractSyntaxTreeNode} from "../../createAbstractSyntaxTreeNode.ts";
import type {BlockAbstractSyntaxTreeNode} from "../block/BlockAbstractSyntaxTreeNode.ts";
import type {FunctionBodyAbstractSyntaxTreeNode} from "./FunctionBodyAbstractSyntaxTreeNode.ts";
import {functionBodyAbstractSyntaxTreeNodeTypeName} from "./functionBodyAbstractSyntaxTreeNodeTypeName.ts";
export function createFunctionBodyAbstractSyntaxTreeNode(
	block: BlockAbstractSyntaxTreeNode,
): FunctionBodyAbstractSyntaxTreeNode {
	const treeNode: FunctionBodyAbstractSyntaxTreeNode = createAbstractSyntaxTreeNode(
		functionBodyAbstractSyntaxTreeNodeTypeName,
		{
			block,
		} as const,
	);
	return treeNode;
}
