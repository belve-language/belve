import {createBranchConcreteSyntaxTreeNode} from "../../createBranchConcreteSyntaxTreeNode.ts";
import type {SpanIndexes} from "../../span-indexes/SpanIndexes.ts";
import type {StatementsConcreteSyntaxTreeNode} from "../statements/StatementsConcreteSyntaxTreeNode.ts";
import type {WhitespaceConcreteSyntaxTreeNode} from "../whitespace/WhitespaceConcreteSyntaxTreeNode.ts";
import type {BlockContentConcreteSyntaxTreeNode} from "./BlockContentConcreteSyntaxTreeNode.ts";
import {blockContentConcreteSyntaxTreeNodeTypeName} from "./blockContentConcreteSyntaxTreeNodeTypeName.ts";
export function createBlockContentConcreteSyntaxTreeNode(
	initialWhitespace: WhitespaceConcreteSyntaxTreeNode | null,
	statements: StatementsConcreteSyntaxTreeNode,
	finalWhitespace: WhitespaceConcreteSyntaxTreeNode | null,
	spanIndexes: SpanIndexes,
): BlockContentConcreteSyntaxTreeNode {
	const treeNode: BlockContentConcreteSyntaxTreeNode = createBranchConcreteSyntaxTreeNode(
		blockContentConcreteSyntaxTreeNodeTypeName,
		[initialWhitespace, statements, finalWhitespace] as const,
		spanIndexes,
	);
	return treeNode;
}
