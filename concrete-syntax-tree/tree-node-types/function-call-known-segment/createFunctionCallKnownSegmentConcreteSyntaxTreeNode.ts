import {createBranchConcreteSyntaxTreeNode} from "../../createBranchConcreteSyntaxTreeNode.ts";
import type {SpanIndexes} from "../../span-indexes/SpanIndexes.ts";
import type {FunctionCallKnownSegmentClosingBracketConcreteSyntaxTreeNode} from "../function-call-known-segment-closing-bracket/FunctionCallKnownSegmentClosingBracketConcreteSyntaxTreeNode.ts";
import type {FunctionCallKnownSegmentContentConcreteSyntaxTreeNode} from "../function-call-known-segment-content/FunctionCallKnownSegmentContentConcreteSyntaxTreeNode.ts";
import type {FunctionCallKnownSegmentOpeningBracketConcreteSyntaxTreeNode} from "../function-call-known-segment-opening-bracket/FunctionCallKnownSegmentOpeningBracketConcreteSyntaxTreeNode.ts";
import type {WhitespaceConcreteSyntaxTreeNode} from "../whitespace/WhitespaceConcreteSyntaxTreeNode.ts";
import type {FunctionCallKnownSegmentConcreteSyntaxTreeNode} from "./FunctionCallKnownSegmentConcreteSyntaxTreeNode.ts";
import {functionCallKnownSegmentConcreteSyntaxTreeNodeTypeName} from "./functionCallKnownSegmentConcreteSyntaxTreeNodeTypeName.ts";
export function createFunctionCallKnownSegmentConcreteSyntaxTreeNode(
	openingBracket: FunctionCallKnownSegmentOpeningBracketConcreteSyntaxTreeNode,
	content:
		| FunctionCallKnownSegmentContentConcreteSyntaxTreeNode
		| WhitespaceConcreteSyntaxTreeNode
		| null,
	closingBracket: FunctionCallKnownSegmentClosingBracketConcreteSyntaxTreeNode,
	spanIndexes: SpanIndexes,
): FunctionCallKnownSegmentConcreteSyntaxTreeNode {
	const treeNode: FunctionCallKnownSegmentConcreteSyntaxTreeNode =
		createBranchConcreteSyntaxTreeNode(
			functionCallKnownSegmentConcreteSyntaxTreeNodeTypeName,
			[openingBracket, content, closingBracket] as const,
			spanIndexes,
		);
	return treeNode;
}
