import {createBranchConcreteSyntaxTreeNode} from "../../createBranchConcreteSyntaxTreeNode.ts";
import type {SpanIndexes} from "../../span-indexes/SpanIndexes.ts";
import type {IdentifierConcreteSyntaxTreeNode} from "../identifier/IdentifierConcreteSyntaxTreeNode.ts";
import type {WhitespaceConcreteSyntaxTreeNode} from "../whitespace/WhitespaceConcreteSyntaxTreeNode.ts";
import type {FunctionHeaderKnownSegmentContentConcreteSyntaxTreeNode} from "./FunctionHeaderKnownSegmentContentConcreteSyntaxTreeNode.ts";
import {functionHeaderKnownSegmentContentConcreteSyntaxTreeNodeTypeName} from "./functionHeaderKnownSegmentContentConcreteSyntaxTreeNodeTypeName.ts";
export function createFunctionHeaderKnownSegmentContentConcreteSyntaxTreeNode(
	initialWhitespace: WhitespaceConcreteSyntaxTreeNode | null,
	identifier: IdentifierConcreteSyntaxTreeNode,
	finalWhitespace: WhitespaceConcreteSyntaxTreeNode | null,
	spanIndexes: SpanIndexes,
): FunctionHeaderKnownSegmentContentConcreteSyntaxTreeNode {
	const treeNode: FunctionHeaderKnownSegmentContentConcreteSyntaxTreeNode =
		createBranchConcreteSyntaxTreeNode(
			functionHeaderKnownSegmentContentConcreteSyntaxTreeNodeTypeName,
			[initialWhitespace, identifier, finalWhitespace] as const,
			spanIndexes,
		);
	return treeNode;
}
