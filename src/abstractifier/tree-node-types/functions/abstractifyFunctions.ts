import type {FunctionAbstractTreeNode} from "../../../abstract-syntax-tree/tree-node-types/function/FunctionAbstractTreeNode.ts";
import {functionsSeparatedRestFunctionsConcreteTreeNodeTypeName} from "../../../concrete-syntax-tree/tree-node-types/functions-separated-rest-functions/functionsSeparatedRestFunctionsConcreteTreeNodeTypeName.ts";
import type {FunctionsConcreteTreeNode} from "../../../concrete-syntax-tree/tree-node-types/functions/FunctionsConcreteTreeNode.ts";
import {functionsConcreteTreeNodeTypeName} from "../../../concrete-syntax-tree/tree-node-types/functions/functionsConcreteTreeNodeTypeName.ts";
import {abstractifyFunction} from "../function/abstractifyFunction.ts";
import {abstractifyFunctionsSeparatedRestFunctions} from "../functions-separated-rest-functions/abstractifyFunctionsSeparatedRestFunctions.ts";

export function abstractifyFunctions(
	functions: FunctionsConcreteTreeNode,
): readonly [FunctionAbstractTreeNode, ...FunctionAbstractTreeNode[]] {
	const [firstFunction, restFunctions] = functions.children;
	const abstractifiedFirstFunction = abstractifyFunction(firstFunction);

	if (restFunctions === null) {
		return [abstractifiedFirstFunction];
	}

	switch (restFunctions.typeName) {
		case functionsSeparatedRestFunctionsConcreteTreeNodeTypeName: {
			const abstractifiedRestFunctions = abstractifyFunctionsSeparatedRestFunctions(restFunctions);
			return [abstractifiedFirstFunction, ...abstractifiedRestFunctions];
		}
		case functionsConcreteTreeNodeTypeName: {
			const abstractifiedRestFunctions = abstractifyFunctions(restFunctions);
			return [abstractifiedFirstFunction, ...abstractifiedRestFunctions];
		}
	}
}
