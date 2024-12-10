import type {FunctionAbstractSyntaxTreeNode} from "../../../abstract-syntax-tree/tree-node-types/function/FunctionAbstractSyntaxTreeNode.ts";
import type {FunctionsSeparatedRestFunctionsConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree/tree-node-types/functions-separated-rest-functions/FunctionsSeparatedRestFunctionsConcreteSyntaxTreeNode.ts";
import {abstractifyFunctions} from "../functions/abstractifyFunctions.ts";
export function abstractifyFunctionsSeparatedRestFunctions(
	functionsSeparatedRestFunctions: FunctionsSeparatedRestFunctionsConcreteSyntaxTreeNode,
): readonly [FunctionAbstractSyntaxTreeNode, ...FunctionAbstractSyntaxTreeNode[]] {
	const [, functionsSeparatedRestFunctionsFunctions] = functionsSeparatedRestFunctions.children;
	const abstractifiedFunctionsSeparatedRestFunctions: readonly [
		FunctionAbstractSyntaxTreeNode,
		...FunctionAbstractSyntaxTreeNode[],
	] = abstractifyFunctions(functionsSeparatedRestFunctionsFunctions);
	return abstractifiedFunctionsSeparatedRestFunctions;
}
