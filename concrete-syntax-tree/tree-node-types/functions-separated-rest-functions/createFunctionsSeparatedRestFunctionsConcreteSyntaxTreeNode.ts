import {createBranchConcreteSyntaxTreeNode} from "../../createBranchConcreteSyntaxTreeNode.ts";
import type {FunctionsConcreteSyntaxTreeNode} from "../functions/FunctionsConcreteSyntaxTreeNode.ts";
import {functionsSeparatedRestFunctionsConcreteSyntaxTreeNodeTypeName} from "./functionsSeparatedRestFunctionsConcreteSyntaxTreeNodeTypeName.ts";
import type {FunctionsSeparatedRestFunctionsConcreteSyntaxTreeNode} from "./FunctionsSeparatedRestFunctionsConcreteSyntaxTreeNode.ts";
import type {SpanIndexes} from "../../span-indexes/SpanIndexes.ts";
import type {WhitespaceConcreteSyntaxTreeNode} from "../whitespace/WhitespaceConcreteSyntaxTreeNode.ts";
export function createFunctionsSeparatedRestFunctionsConcreteSyntaxTreeNode(
	whitespace: WhitespaceConcreteSyntaxTreeNode,
	functions: FunctionsConcreteSyntaxTreeNode,
	spanIndexes: SpanIndexes,
): FunctionsSeparatedRestFunctionsConcreteSyntaxTreeNode {
	const treeNode: FunctionsSeparatedRestFunctionsConcreteSyntaxTreeNode =
		createBranchConcreteSyntaxTreeNode(
			functionsSeparatedRestFunctionsConcreteSyntaxTreeNodeTypeName,
			[whitespace, functions] as const,
			spanIndexes,
		);
	return treeNode;
}
