import {createBranchConcreteSyntaxTreeNode} from "../../createBranchConcreteSyntaxTreeNode.ts";
import type {SpanIndexes} from "../../span-indexes/SpanIndexes.ts";
import type {IdentifierConcreteSyntaxTreeNode} from "../identifier/IdentifierConcreteSyntaxTreeNode.ts";
import type {FunctionCallWordSegmentConcreteSyntaxTreeNode} from "./FunctionCallWordSegmentConcreteSyntaxTreeNode.ts";
import {functionCallWordSegmentConcreteSyntaxTreeNodeTypeName} from "./functionCallWordSegmentConcreteSyntaxTreeNodeTypeName.ts";
export function createFunctionCallWordSegmentConcreteSyntaxTreeNode(
	identifier: IdentifierConcreteSyntaxTreeNode,
	spanIndexes: SpanIndexes,
): FunctionCallWordSegmentConcreteSyntaxTreeNode {
	const treeNode: FunctionCallWordSegmentConcreteSyntaxTreeNode =
		createBranchConcreteSyntaxTreeNode(
			functionCallWordSegmentConcreteSyntaxTreeNodeTypeName,
			[identifier] as const,
			spanIndexes,
		);
	return treeNode;
}
