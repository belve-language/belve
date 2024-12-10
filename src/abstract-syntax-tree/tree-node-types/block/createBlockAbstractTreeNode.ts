import {createAbstractTreeNode} from "../../createAbstractTreeNode.ts";
import type {FunctionCallAbstractTreeNode} from "../function-call/FunctionCallAbstractTreeNode.ts";
import type {OperatedStatementAbstractTreeNode} from "../operated-statement/OperatedStatementAbstractTreeNode.ts";
import type {BlockAbstractTreeNode} from "./BlockAbstractTreeNode.ts";
import {blockAbstractTreeNodeTypeName} from "./blockAbstractTreeNodeTypeName.ts";

export function createBlockAbstractTreeNode(
	statements:
		| readonly [
				BlockAbstractTreeNode | FunctionCallAbstractTreeNode,
				...OperatedStatementAbstractTreeNode[],
		  ]
		| null,
): BlockAbstractTreeNode {
	const treeNode: BlockAbstractTreeNode = createAbstractTreeNode(blockAbstractTreeNodeTypeName, {
		statements,
	});

	return treeNode;
}
