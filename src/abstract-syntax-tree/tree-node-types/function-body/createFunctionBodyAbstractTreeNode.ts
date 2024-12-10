import {createAbstractTreeNode} from "../../createAbstractTreeNode.ts";
import type {BlockAbstractTreeNode} from "../block/BlockAbstractTreeNode.ts";
import type {FunctionBodyAbstractTreeNode} from "./FunctionBodyAbstractTreeNode.ts";
import {functionBodyAbstractTreeNodeTypeName} from "./functionBodyAbstractTreeNodeTypeName.ts";

export function createFunctionBodyAbstractTreeNode(
	block: BlockAbstractTreeNode,
): FunctionBodyAbstractTreeNode {
	const treeNode: FunctionBodyAbstractTreeNode = createAbstractTreeNode(
		functionBodyAbstractTreeNodeTypeName,
		{
			block,
		},
	);

	return treeNode;
}
