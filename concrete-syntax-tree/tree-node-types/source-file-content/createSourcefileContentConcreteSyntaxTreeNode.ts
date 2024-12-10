import {createBranchConcreteSyntaxTreeNode} from "../../createBranchConcreteSyntaxTreeNode.ts";
import type {SpanIndexes} from "../../span-indexes/SpanIndexes.ts";
import type {FunctionsConcreteSyntaxTreeNode} from "../functions/FunctionsConcreteSyntaxTreeNode.ts";
import type {WhitespaceConcreteSyntaxTreeNode} from "../whitespace/WhitespaceConcreteSyntaxTreeNode.ts";
import type {SourceFileContentConcreteSyntaxTreeNode} from "./SourceFileContentConcreteSyntaxTreeNode.ts";
import {sourceFileContentConcreteSyntaxTreeNodeTypeName} from "./sourceFileContentConcreteSyntaxTreeNodeTypeName.ts";
export function createSourceFileContentConcreteSyntaxTreeNode(
	initialWhitespace: WhitespaceConcreteSyntaxTreeNode | null,
	functions: FunctionsConcreteSyntaxTreeNode,
	finalWhitespace: WhitespaceConcreteSyntaxTreeNode | null,
	spanIndexes: SpanIndexes,
): SourceFileContentConcreteSyntaxTreeNode {
	const treeNode: SourceFileContentConcreteSyntaxTreeNode = createBranchConcreteSyntaxTreeNode(
		sourceFileContentConcreteSyntaxTreeNodeTypeName,
		[initialWhitespace, functions, finalWhitespace] as const,
		spanIndexes,
	);
	return treeNode;
}
