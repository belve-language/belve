import {createBranchConcreteSyntaxTreeNode} from "../../createBranchConcreteSyntaxTreeNode.ts";
import type {SpanIndexes} from "../../span-indexes/SpanIndexes.ts";
import type {FunctionHeaderUnknownSegmentClosingBracketConcreteSyntaxTreeNode} from "../function-header-unknown-segment-closing-bracket/FunctionHeaderUnknownSegmentClosingBracketConcreteSyntaxTreeNode.ts";
import type {FunctionHeaderUnknownSegmentContentConcreteSyntaxTreeNode} from "../function-header-unknown-segment-content/FunctionHeaderUnknownSegmentContentConcreteSyntaxTreeNode.ts";
import type {FunctionHeaderUnknownSegmentOpeningBracketConcreteSyntaxTreeNode} from "../function-header-unknown-segment-opening-bracket/FunctionHeaderUnknownSegmentOpeningBracketConcreteSyntaxTreeNode.ts";
import type {WhitespaceConcreteSyntaxTreeNode} from "../whitespace/WhitespaceConcreteSyntaxTreeNode.ts";
import type {FunctionHeaderUnknownSegmentConcreteSyntaxTreeNode} from "./FunctionHeaderUnknownSegmentConcreteSyntaxTreeNode.ts";
import {functionHeaderUnknownSegmentConcreteSyntaxTreeNodeTypeName} from "./functionHeaderUnknownSegmentConcreteSyntaxTreeNodeTypeName.ts";
export function createFunctionHeaderUnknownSegmentConcreteSyntaxTreeNode(
	openingBracket: FunctionHeaderUnknownSegmentOpeningBracketConcreteSyntaxTreeNode,
	content:
		| FunctionHeaderUnknownSegmentContentConcreteSyntaxTreeNode
		| WhitespaceConcreteSyntaxTreeNode
		| null,
	closingBracket: FunctionHeaderUnknownSegmentClosingBracketConcreteSyntaxTreeNode,
	spanIndexes: SpanIndexes,
): FunctionHeaderUnknownSegmentConcreteSyntaxTreeNode {
	const treeNode: FunctionHeaderUnknownSegmentConcreteSyntaxTreeNode =
		createBranchConcreteSyntaxTreeNode(
			functionHeaderUnknownSegmentConcreteSyntaxTreeNodeTypeName,
			[openingBracket, content, closingBracket] as const,
			spanIndexes,
		);
	return treeNode;
}
