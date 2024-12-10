import type {FunctionAbstractSyntaxTreeNode} from "../../../abstract-syntax-tree/tree-node-types/function/FunctionAbstractSyntaxTreeNode.ts";
import {functionsSeparatedRestFunctionsConcreteSyntaxTreeNodeTypeName} from "../../../concrete-syntax-tree/tree-node-types/functions-separated-rest-functions/functionsSeparatedRestFunctionsConcreteSyntaxTreeNodeTypeName.ts";
import type {FunctionsConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree/tree-node-types/functions/FunctionsConcreteSyntaxTreeNode.ts";
import {functionsConcreteSyntaxTreeNodeTypeName} from "../../../concrete-syntax-tree/tree-node-types/functions/functionsConcreteSyntaxTreeNodeTypeName.ts";
import {abstractifyFunction} from "../function/abstractifyFunction.ts";
import {abstractifyFunctionsSeparatedRestFunctions} from "../functions-separated-rest-functions/abstractifyFunctionsSeparatedRestFunctions.ts";
export function abstractifyFunctions(
	functions: FunctionsConcreteSyntaxTreeNode,
): readonly [FunctionAbstractSyntaxTreeNode, ...FunctionAbstractSyntaxTreeNode[]] {
	const [functionsFirstFunction, functionsRestFunctions] = functions.children;
	const abstractifiedFunctionsFirstFunction: FunctionAbstractSyntaxTreeNode =
		abstractifyFunction(functionsFirstFunction);
	if (functionsRestFunctions === null) {
		return [abstractifiedFunctionsFirstFunction] as const;
	}
	switch (functionsRestFunctions.typeName) {
		case functionsSeparatedRestFunctionsConcreteSyntaxTreeNodeTypeName: {
			const abstractifiedFunctionsRestFunctions: readonly [
				FunctionAbstractSyntaxTreeNode,
				...FunctionAbstractSyntaxTreeNode[],
			] = abstractifyFunctionsSeparatedRestFunctions(functionsRestFunctions);
			return [abstractifiedFunctionsFirstFunction, ...abstractifiedFunctionsRestFunctions] as const;
		}
		case functionsConcreteSyntaxTreeNodeTypeName: {
			const abstractifiedFunctionsRestFunctions: readonly [
				FunctionAbstractSyntaxTreeNode,
				...FunctionAbstractSyntaxTreeNode[],
			] = abstractifyFunctions(functionsRestFunctions);
			return [abstractifiedFunctionsFirstFunction, ...abstractifiedFunctionsRestFunctions] as const;
		}
	}
}
