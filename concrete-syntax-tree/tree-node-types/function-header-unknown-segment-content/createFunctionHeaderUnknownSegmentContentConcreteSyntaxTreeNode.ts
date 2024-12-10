import {createBranchConcreteSyntaxTreeNode} from "../../createBranchConcreteSyntaxTreeNode.ts";
import type {SpanIndexes} from "../../span-indexes/SpanIndexes.ts";
import type {IdentifierConcreteSyntaxTreeNode} from "../identifier/IdentifierConcreteSyntaxTreeNode.ts";
import type {WhitespaceConcreteSyntaxTreeNode} from "../whitespace/WhitespaceConcreteSyntaxTreeNode.ts";
import type {FunctionHeaderUnknownSegmentContentConcreteSyntaxTreeNode} from "./FunctionHeaderUnknownSegmentContentConcreteSyntaxTreeNode.ts";
import {functionHeaderUnknownSegmentContentConcreteSyntaxTreeNodeTypeName} from "./functionHeaderUnknownSegmentContentConcreteSyntaxTreeNodeTypeName.ts";
export function createFunctionHeaderUnknownSegmentContentConcreteSyntaxTreeNode(
	initialWhitespace: WhitespaceConcreteSyntaxTreeNode | null,
	identifier: IdentifierConcreteSyntaxTreeNode,
	finalWhitespace: WhitespaceConcreteSyntaxTreeNode | null,
	spanIndexes: SpanIndexes,
): FunctionHeaderUnknownSegmentContentConcreteSyntaxTreeNode {
	const treeNode: FunctionHeaderUnknownSegmentContentConcreteSyntaxTreeNode =
		createBranchConcreteSyntaxTreeNode(
			functionHeaderUnknownSegmentContentConcreteSyntaxTreeNodeTypeName,
			[initialWhitespace, identifier, finalWhitespace] as const,
			spanIndexes,
		);
	return treeNode;
}
