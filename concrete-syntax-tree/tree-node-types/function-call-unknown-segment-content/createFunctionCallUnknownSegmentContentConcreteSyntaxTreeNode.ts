import {createBranchConcreteSyntaxTreeNode} from "../../createBranchConcreteSyntaxTreeNode.ts";
import type {SpanIndexes} from "../../span-indexes/SpanIndexes.ts";
import type {IdentifierConcreteSyntaxTreeNode} from "../identifier/IdentifierConcreteSyntaxTreeNode.ts";
import type {WhitespaceConcreteSyntaxTreeNode} from "../whitespace/WhitespaceConcreteSyntaxTreeNode.ts";
import type {FunctionCallUnknownSegmentContentConcreteSyntaxTreeNode} from "./FunctionCallUnknownSegmentContentConcreteSyntaxTreeNode.ts";
import {functionCallUnknownSegmentContentConcreteSyntaxTreeNodeTypeName} from "./functionCallUnknownSegmentContentConcreteSyntaxTreeNodeTypeName.ts";
export function createFunctionCallUnknownSegmentContentConcreteSyntaxTreeNode(
	initialWhitespace: WhitespaceConcreteSyntaxTreeNode | null,
	identifier: IdentifierConcreteSyntaxTreeNode,
	finalWhitespace: WhitespaceConcreteSyntaxTreeNode | null,
	spanIndexes: SpanIndexes,
): FunctionCallUnknownSegmentContentConcreteSyntaxTreeNode {
	const treeNode: FunctionCallUnknownSegmentContentConcreteSyntaxTreeNode =
		createBranchConcreteSyntaxTreeNode(
			functionCallUnknownSegmentContentConcreteSyntaxTreeNodeTypeName,
			[initialWhitespace, identifier, finalWhitespace] as const,
			spanIndexes,
		);
	return treeNode;
}
