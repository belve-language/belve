import type {FunctionAbstractTreeNode} from "../../../abstract-syntax-tree/tree-node-types/function/FunctionAbstractTreeNode.ts";
import type {FunctionsSeparatedRestFunctionsConcreteTreeNode} from "../../../concrete-syntax-tree/tree-node-types/functions-separated-rest-functions/FunctionsSeparatedRestFunctionsConcreteTreeNode.ts";
import {abstractifyFunctions} from "../functions/abstractifyFunctions.ts";

export function abstractifyFunctionsSeparatedRestFunctions(
	functionsSeparatedRestFunctions: FunctionsSeparatedRestFunctionsConcreteTreeNode,
): readonly [FunctionAbstractTreeNode, ...FunctionAbstractTreeNode[]] {
	const [, functions] = functionsSeparatedRestFunctions.children;

	const abstractifiedFunctions: readonly [FunctionAbstractTreeNode, ...FunctionAbstractTreeNode[]] =
		abstractifyFunctions(functions);

	return abstractifiedFunctions;
}
