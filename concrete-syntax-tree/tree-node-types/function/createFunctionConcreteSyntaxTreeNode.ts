import {createBranchConcreteSyntaxTreeNode} from "../../createBranchConcreteSyntaxTreeNode.ts";
import type {SpanIndexes} from "../../span-indexes/SpanIndexes.ts";
import type {FunctionBodyConcreteSyntaxTreeNode} from "../function-body/FunctionBodyConcreteSyntaxTreeNode.ts";
import type {FunctionHeaderConcreteSyntaxTreeNode} from "../function-header/FunctionHeaderConcreteSyntaxTreeNode.ts";
import type {FunctionConcreteSyntaxTreeNode} from "./FunctionConcreteSyntaxTreeNode.ts";
import {functionConcreteSyntaxTreeNodeTypeName} from "./functionConcreteSyntaxTreeNodeTypeName.ts";
export function createFunctionConcreteSyntaxTreeNode(
	header: FunctionHeaderConcreteSyntaxTreeNode | null,
	body: FunctionBodyConcreteSyntaxTreeNode,
	spanIndexes: SpanIndexes,
): FunctionConcreteSyntaxTreeNode {
	const treeNode: FunctionConcreteSyntaxTreeNode = createBranchConcreteSyntaxTreeNode(
		functionConcreteSyntaxTreeNodeTypeName,
		[header, body] as const,
		spanIndexes,
	);
	return treeNode;
}
