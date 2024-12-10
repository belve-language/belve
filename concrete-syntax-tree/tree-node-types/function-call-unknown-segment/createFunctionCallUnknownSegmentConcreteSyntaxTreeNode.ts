import {createBranchConcreteSyntaxTreeNode} from "../../createBranchConcreteSyntaxTreeNode.ts";
import type {SpanIndexes} from "../../span-indexes/SpanIndexes.ts";
import type {FunctionCallUnknownSegmentClosingBracketConcreteSyntaxTreeNode} from "../function-call-unknown-segment-closing-bracket/FunctionCallUnknownSegmentClosingBracketConcreteSyntaxTreeNode.ts";
import type {FunctionCallUnknownSegmentContentConcreteSyntaxTreeNode} from "../function-call-unknown-segment-content/FunctionCallUnknownSegmentContentConcreteSyntaxTreeNode.ts";
import type {FunctionCallUnknownSegmentOpeningBracketConcreteSyntaxTreeNode} from "../function-call-unknown-segment-opening-bracket/FunctionCallUnknownSegmentOpeningBracketConcreteSyntaxTreeNode.ts";
import type {WhitespaceConcreteSyntaxTreeNode} from "../whitespace/WhitespaceConcreteSyntaxTreeNode.ts";
import type {FunctionCallUnknownSegmentConcreteSyntaxTreeNode} from "./FunctionCallUnknownSegmentConcreteSyntaxTreeNode.ts";
import {functionCallUnknownSegmentConcreteSyntaxTreeNodeTypeName} from "./functionCallUnknownSegmentConcreteSyntaxTreeNodeTypeName.ts";
export function createFunctionCallUnknownSegmentConcreteSyntaxTreeNode(
	openingBracket: FunctionCallUnknownSegmentOpeningBracketConcreteSyntaxTreeNode,
	content:
		| FunctionCallUnknownSegmentContentConcreteSyntaxTreeNode
		| null
		| WhitespaceConcreteSyntaxTreeNode,
	closingBracket: FunctionCallUnknownSegmentClosingBracketConcreteSyntaxTreeNode,
	spanIndexes: SpanIndexes,
): FunctionCallUnknownSegmentConcreteSyntaxTreeNode {
	const treeNode: FunctionCallUnknownSegmentConcreteSyntaxTreeNode =
		createBranchConcreteSyntaxTreeNode(
			functionCallUnknownSegmentConcreteSyntaxTreeNodeTypeName,
			[openingBracket, content, closingBracket] as const,
			spanIndexes,
		);
	return treeNode;
}
