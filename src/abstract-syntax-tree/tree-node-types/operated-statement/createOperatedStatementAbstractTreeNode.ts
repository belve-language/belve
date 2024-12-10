import {createAbstractTreeNode} from "../../createAbstractTreeNode.ts";
import type {BlockAbstractTreeNode} from "../block/BlockAbstractTreeNode.ts";
import type {FunctionCallAbstractTreeNode} from "../function-call/FunctionCallAbstractTreeNode.ts";
import type {OperatedStatementAbstractTreeNode} from "./OperatedStatementAbstractTreeNode.ts";
import {operatedStatementAbstractTreeNodeTypeName} from "./operatedStatementAbstractTreeNodeTypeName.ts";

export function createOperatedStatementAbstractTreeNode(
	operator: "and" | "or",
	statement: BlockAbstractTreeNode | FunctionCallAbstractTreeNode,
): OperatedStatementAbstractTreeNode {
	const treeNode: OperatedStatementAbstractTreeNode = createAbstractTreeNode(
		operatedStatementAbstractTreeNodeTypeName,
		{
			operator,
			statement,
		},
	);

	return treeNode;
}
