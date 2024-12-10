import {createBranchConcreteSyntaxTreeNode} from "../../createBranchConcreteSyntaxTreeNode.ts";
import type {SpanIndexes} from "../../span-indexes/SpanIndexes.ts";
import type {FunctionHeaderKnownStartingSegmentsConcreteSyntaxTreeNode} from "../function-header-known-starting-segments/FunctionHeaderKnownStartingSegmentsConcreteSyntaxTreeNode.ts";
import type {FunctionHeaderUnknownStartingSegmentsConcreteSyntaxTreeNode} from "../function-header-unknown-starting-segments/FunctionHeaderUnknownStartingSegmentsConcreteSyntaxTreeNode.ts";
import type {FunctionHeaderWordStartingSegmentsConcreteSyntaxTreeNode} from "../function-header-word-starting-segments/FunctionHeaderWordStartingSegmentsConcreteSyntaxTreeNode.ts";
import type {WhitespaceConcreteSyntaxTreeNode} from "../whitespace/WhitespaceConcreteSyntaxTreeNode.ts";
import type {FunctionHeaderConcreteSyntaxTreeNode} from "./FunctionHeaderConcreteSyntaxTreeNode.ts";
import {functionHeaderConcreteSyntaxTreeNodeTypeName} from "./functionHeaderConcreteSyntaxTreeNodeTypeName.ts";
export function createFunctionHeaderConcreteSyntaxTreeNode(
	segments:
		| FunctionHeaderWordStartingSegmentsConcreteSyntaxTreeNode
		| FunctionHeaderUnknownStartingSegmentsConcreteSyntaxTreeNode
		| FunctionHeaderKnownStartingSegmentsConcreteSyntaxTreeNode,
	finalWhitespace: WhitespaceConcreteSyntaxTreeNode | null,
	spanIndexes: SpanIndexes,
): FunctionHeaderConcreteSyntaxTreeNode {
	const treeNode: FunctionHeaderConcreteSyntaxTreeNode = createBranchConcreteSyntaxTreeNode(
		functionHeaderConcreteSyntaxTreeNodeTypeName,
		[segments, finalWhitespace] as const,
		spanIndexes,
	);
	return treeNode;
}
