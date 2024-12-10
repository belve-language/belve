import {createBranchConcreteSyntaxTreeNode} from "../../createBranchConcreteSyntaxTreeNode.ts";
import type {SpanIndexes} from "../../span-indexes/SpanIndexes.ts";
import type {BlockConcreteSyntaxTreeNode} from "../block/BlockConcreteSyntaxTreeNode.ts";
import type {FunctionBodyConcreteSyntaxTreeNode} from "./FunctionBodyConcreteSyntaxTreeNode.ts";
import {functionBodyConcreteSyntaxTreeNodeTypeName} from "./functionBodyConcreteSyntaxTreeNodeTypeName.ts";
export function createFunctionBodyConcreteSyntaxTreeNode(
	block: BlockConcreteSyntaxTreeNode,
	spanIndexes: SpanIndexes,
): FunctionBodyConcreteSyntaxTreeNode {
	const treeNode: FunctionBodyConcreteSyntaxTreeNode = createBranchConcreteSyntaxTreeNode(
		functionBodyConcreteSyntaxTreeNodeTypeName,
		[block] as const,
		spanIndexes,
	);
	return treeNode;
}
