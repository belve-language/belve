import {createBranchConcreteSyntaxTreeNode} from "../../createBranchConcreteSyntaxTreeNode.ts";
import type {SpanIndexes} from "../../span-indexes/SpanIndexes.ts";
import type {WhitespaceSegmentsConcreteSyntaxTreeNode} from "../whitespace-segments/WhitespaceSegmentsConcreteSyntaxTreeNode.ts";
import type {WhitespaceConcreteSyntaxTreeNode} from "./WhitespaceConcreteSyntaxTreeNode.ts";
import {whitespaceConcreteSyntaxTreeNodeTypeName} from "./whitespaceConcreteSyntaxTreeNodeTypeName.ts";
export function createWhitespaceConcreteSyntaxTreeNode(
	segments: WhitespaceSegmentsConcreteSyntaxTreeNode,
	spanIndexes: SpanIndexes,
): WhitespaceConcreteSyntaxTreeNode {
	const treeNode: WhitespaceConcreteSyntaxTreeNode = createBranchConcreteSyntaxTreeNode(
		whitespaceConcreteSyntaxTreeNodeTypeName,
		[segments] as const,
		spanIndexes,
	);
	return treeNode;
}
