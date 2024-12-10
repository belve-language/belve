import {createBranchConcreteSyntaxTreeNode} from "../../createBranchConcreteSyntaxTreeNode.ts";
import type {SpanIndexes} from "../../span-indexes/SpanIndexes.ts";
import type {IdentifierConcreteSyntaxTreeNode} from "../identifier/IdentifierConcreteSyntaxTreeNode.ts";
import type {FunctionHeaderWordSegmentConcreteSyntaxTreeNode} from "./FunctionHeaderWordSegmentConcreteSyntaxTreeNode.ts";
import {functionHeaderWordSegmentConcreteSyntaxTreeNodeTypeName} from "./functionHeaderWordSegmentConcreteSyntaxTreeNodeTypeName.ts";
export function createFunctionHeaderWordSegmentConcreteSyntaxTreeNode(
	identifier: IdentifierConcreteSyntaxTreeNode,
	spanIndexes: SpanIndexes,
): FunctionHeaderWordSegmentConcreteSyntaxTreeNode {
	const treeNode: FunctionHeaderWordSegmentConcreteSyntaxTreeNode =
		createBranchConcreteSyntaxTreeNode(
			functionHeaderWordSegmentConcreteSyntaxTreeNodeTypeName,
			[identifier] as const,
			spanIndexes,
		);
	return treeNode;
}
