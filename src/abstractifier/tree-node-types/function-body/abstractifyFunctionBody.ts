import {createFunctionBodyAbstractTreeNode} from "../../../abstract-syntax-tree/tree-node-types/function-body/createFunctionBodyAbstractTreeNode.ts";
import type {FunctionBodyAbstractTreeNode} from "../../../abstract-syntax-tree/tree-node-types/function-body/FunctionBodyAbstractTreeNode.ts";
import type {FunctionBodyConcreteTreeNode} from "../../../concrete-syntax-tree/tree-node-types/function-body/FunctionBodyConcreteTreeNode.ts";
import {abstractifyBlock} from "../block/abstractifyBlock.ts";

export function abstractifyFunctionBody(
	functionBody: FunctionBodyConcreteTreeNode,
): FunctionBodyAbstractTreeNode {
	const [block] = functionBody.children;
	const abstractifiedBlock = abstractifyBlock(block);

	const abstractTreeNode: FunctionBodyAbstractTreeNode =
		createFunctionBodyAbstractTreeNode(abstractifiedBlock);

	return abstractTreeNode;
}
