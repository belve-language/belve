import {createConcreteTreeNode} from "../../createConcreteTreeNode.ts";
import type {FunctionConcreteTreeNode} from "../function/FunctionConcreteTreeNode.ts";
import type {FunctionsSeparatedRestFunctionsConcreteTreeNode} from "../functions-separated-rest-functions/FunctionsSeparatedRestFunctionsConcreteTreeNode.ts";
import type {FunctionsConcreteTreeNode} from "./FunctionsConcreteTreeNode.ts";
import {functionsConcreteTreeNodeTypeName} from "./functionsConcreteTreeNodeTypeName.ts";

export function createFunctionsConcreteTreeNode(
	firstFunction: FunctionConcreteTreeNode,
	restFunctions: FunctionsSeparatedRestFunctionsConcreteTreeNode | null | FunctionsConcreteTreeNode,
): FunctionsConcreteTreeNode {
	return createConcreteTreeNode(functionsConcreteTreeNodeTypeName, [firstFunction, restFunctions]);
}
