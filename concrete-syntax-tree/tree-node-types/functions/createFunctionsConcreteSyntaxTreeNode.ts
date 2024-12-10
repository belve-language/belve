import {createBranchConcreteSyntaxTreeNode} from "../../createBranchConcreteSyntaxTreeNode.ts";
import type {SpanIndexes} from "../../span-indexes/SpanIndexes.ts";
import type {FunctionConcreteSyntaxTreeNode} from "../function/FunctionConcreteSyntaxTreeNode.ts";
import type {FunctionsSeparatedRestFunctionsConcreteSyntaxTreeNode} from "../functions-separated-rest-functions/FunctionsSeparatedRestFunctionsConcreteSyntaxTreeNode.ts";
import type {FunctionsConcreteSyntaxTreeNode} from "./FunctionsConcreteSyntaxTreeNode.ts";
import {functionsConcreteSyntaxTreeNodeTypeName} from "./functionsConcreteSyntaxTreeNodeTypeName.ts";
export function createFunctionsConcreteSyntaxTreeNode(
	firstFunction: FunctionConcreteSyntaxTreeNode,
	restFunctions:
		| FunctionsSeparatedRestFunctionsConcreteSyntaxTreeNode
		| null
		| FunctionsConcreteSyntaxTreeNode,
	spanIndexes: SpanIndexes,
): FunctionsConcreteSyntaxTreeNode {
	const treeNode: FunctionsConcreteSyntaxTreeNode = createBranchConcreteSyntaxTreeNode(
		functionsConcreteSyntaxTreeNodeTypeName,
		[firstFunction, restFunctions] as const,
		spanIndexes,
	);
	return treeNode;
}
