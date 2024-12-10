import {createBranchConcreteSyntaxTreeNode} from "../../createBranchConcreteSyntaxTreeNode.ts";
import type {SpanIndexes} from "../../span-indexes/SpanIndexes.ts";
import type {FunctionHeaderKnownSegmentClosingBracketConcreteSyntaxTreeNode} from "../function-header-known-segment-closing-bracket/FunctionHeaderKnownSegmentClosingBracketConcreteSyntaxTreeNode.ts";
import type {FunctionHeaderKnownSegmentContentConcreteSyntaxTreeNode} from "../function-header-known-segment-content/FunctionHeaderKnownSegmentContentConcreteSyntaxTreeNode.ts";
import type {FunctionHeaderKnownSegmentOpeningBracketConcreteSyntaxTreeNode} from "../function-header-known-segment-opening-bracket/FunctionHeaderKnownSegmentOpeningBracketConcreteSyntaxTreeNode.ts";
import type {WhitespaceConcreteSyntaxTreeNode} from "../whitespace/WhitespaceConcreteSyntaxTreeNode.ts";
import type {FunctionHeaderKnownSegmentConcreteSyntaxTreeNode} from "./FunctionHeaderKnownSegmentConcreteSyntaxTreeNode.ts";
import {functionHeaderKnownSegmentConcreteSyntaxTreeNodeTypeName} from "./functionHeaderKnownSegmentConcreteSyntaxTreeNodeTypeName.ts";
export function createFunctionHeaderKnownSegmentConcreteSyntaxTreeNode(
	openingBracket: FunctionHeaderKnownSegmentOpeningBracketConcreteSyntaxTreeNode,
	content:
		| FunctionHeaderKnownSegmentContentConcreteSyntaxTreeNode
		| WhitespaceConcreteSyntaxTreeNode
		| null,
	closingBracket: FunctionHeaderKnownSegmentClosingBracketConcreteSyntaxTreeNode,
	spanIndexes: SpanIndexes,
): FunctionHeaderKnownSegmentConcreteSyntaxTreeNode {
	const treeNode: FunctionHeaderKnownSegmentConcreteSyntaxTreeNode =
		createBranchConcreteSyntaxTreeNode(
			functionHeaderKnownSegmentConcreteSyntaxTreeNodeTypeName,
			[openingBracket, content, closingBracket] as const,
			spanIndexes,
		);
	return treeNode;
}
