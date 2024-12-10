import {createConcreteTreeNode} from "../../createConcreteTreeNode.ts";
import type {FunctionBodyConcreteTreeNode} from "../function-body/FunctionBodyConcreteTreeNode.ts";
import type {FunctionHeaderConcreteTreeNode} from "../function-header/FunctionHeaderConcreteTreeNode.ts";
import type {FunctionConcreteTreeNode} from "./FunctionConcreteTreeNode.ts";
import {functionConcreteTreeNodeTypeName} from "./functionConcreteTreeNodeTypeName.ts";

export function createFunctionConcreteTreeNode(
	header: FunctionHeaderConcreteTreeNode | null,
	body: FunctionBodyConcreteTreeNode,
): FunctionConcreteTreeNode {
	return createConcreteTreeNode(functionConcreteTreeNodeTypeName, [header, body]);
}
