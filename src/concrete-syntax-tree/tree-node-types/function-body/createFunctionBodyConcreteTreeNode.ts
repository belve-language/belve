import {createConcreteTreeNode} from "../../createConcreteTreeNode.ts";
import type {BlockConcreteTreeNode} from "../block/BlockConcreteTreeNode.ts";
import type {FunctionBodyConcreteTreeNode} from "./FunctionBodyConcreteTreeNode.ts";
import {functionBodyConcreteTreeNodeTypeName} from "./functionBodyConcreteTreeNodeTypeName.ts";

export function createFunctionBodyConcreteTreeNode(
	block: BlockConcreteTreeNode,
): FunctionBodyConcreteTreeNode {
	return createConcreteTreeNode(functionBodyConcreteTreeNodeTypeName, [block]);
}
