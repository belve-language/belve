import {createBranchConcreteSyntaxTreeNode} from "../../createBranchConcreteSyntaxTreeNode.ts";
import type {SpanIndexes} from "../../span-indexes/SpanIndexes.ts";
import type {IdentifierConcreteSyntaxTreeNode} from "../identifier/IdentifierConcreteSyntaxTreeNode.ts";
import type {WhitespaceConcreteSyntaxTreeNode} from "../whitespace/WhitespaceConcreteSyntaxTreeNode.ts";
import type {FunctionCallKnownSegmentContentConcreteSyntaxTreeNode} from "./FunctionCallKnownSegmentContentConcreteSyntaxTreeNode.ts";
import {functionCallKnownSegmentContentConcreteSyntaxTreeNodeTypeName} from "./functionCallKnownSegmentContentConcreteSyntaxTreeNodeTypeName.ts";
export function createFunctionCallKnownSegmentContentConcreteSyntaxTreeNode(
	initialWhitespace: WhitespaceConcreteSyntaxTreeNode | null,
	identifier: IdentifierConcreteSyntaxTreeNode,
	finalWhitespace: WhitespaceConcreteSyntaxTreeNode | null,
	spanIndexes: SpanIndexes,
): FunctionCallKnownSegmentContentConcreteSyntaxTreeNode {
	const treeNode: FunctionCallKnownSegmentContentConcreteSyntaxTreeNode =
		createBranchConcreteSyntaxTreeNode(
			functionCallKnownSegmentContentConcreteSyntaxTreeNodeTypeName,
			[initialWhitespace, identifier, finalWhitespace] as const,
			spanIndexes,
		);
	return treeNode;
}
