import {createAbstractTreeNode} from "../../createAbstractTreeNode.ts";
import type {FunctionBodyAbstractTreeNode} from "../function-body/FunctionBodyAbstractTreeNode.ts";
import type {FunctionHeaderAbstractTreeNode} from "../function-header/FunctionHeaderAbstractTreeNode.ts";
import type {FunctionAbstractTreeNode} from "./FunctionAbstractTreeNode.ts";
import {functionAbstractTreeNodeTypeName} from "./functionAbstractTreeNodeTypeName.ts";

export function createFunctionAbstractTreeNode(
	header: FunctionHeaderAbstractTreeNode | null,
	body: FunctionBodyAbstractTreeNode,
): FunctionAbstractTreeNode {
	const treeNode: FunctionAbstractTreeNode = createAbstractTreeNode(
		functionAbstractTreeNodeTypeName,
		{
			header,
			body,
		},
	);

	return treeNode;
}
