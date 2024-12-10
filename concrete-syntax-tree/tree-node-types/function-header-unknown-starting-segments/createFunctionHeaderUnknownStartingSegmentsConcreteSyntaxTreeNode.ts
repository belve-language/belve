import {createBranchConcreteSyntaxTreeNode} from "../../createBranchConcreteSyntaxTreeNode.ts";
import type {FunctionHeaderKnownStartingSegmentsConcreteSyntaxTreeNode} from "../function-header-known-starting-segments/FunctionHeaderKnownStartingSegmentsConcreteSyntaxTreeNode.ts";
import type {FunctionHeaderUnknownStartingSegmentsConcreteSyntaxTreeNode} from "./FunctionHeaderUnknownStartingSegmentsConcreteSyntaxTreeNode.ts";
import {functionHeaderUnknownStartingSegmentsConcreteSyntaxTreeNodeTypeName} from "./functionHeaderUnknownStartingSegmentsConcreteSyntaxTreeNodeTypeName.ts";
import type {FunctionHeaderUnknownSegmentConcreteSyntaxTreeNode} from "../function-header-unknown-segment/FunctionHeaderUnknownSegmentConcreteSyntaxTreeNode.ts";
import type {FunctionHeaderSegmentsSeparatedRestSegmentsConcreteSyntaxTreeNode} from "../function-header-segments-separated-rest-segments/FunctionHeaderSegmentsSeparatedRestSegmentsConcreteSyntaxTreeNode.ts";
import type {FunctionHeaderWordStartingSegmentsConcreteSyntaxTreeNode} from "../function-header-word-starting-segments/FunctionHeaderWordStartingSegmentsConcreteSyntaxTreeNode.ts";
import type {SpanIndexes} from "../../span-indexes/SpanIndexes.ts";
export function createFunctionHeaderUnknownStartingSegmentsConcreteSyntaxTreeNode(
	firstSegment: FunctionHeaderUnknownSegmentConcreteSyntaxTreeNode,
	restSegments:
		| FunctionHeaderKnownStartingSegmentsConcreteSyntaxTreeNode
		| FunctionHeaderUnknownStartingSegmentsConcreteSyntaxTreeNode
		| null
		| FunctionHeaderSegmentsSeparatedRestSegmentsConcreteSyntaxTreeNode
		| FunctionHeaderWordStartingSegmentsConcreteSyntaxTreeNode,
	spanIndexes: SpanIndexes,
): FunctionHeaderUnknownStartingSegmentsConcreteSyntaxTreeNode {
	const treeNode: FunctionHeaderUnknownStartingSegmentsConcreteSyntaxTreeNode =
		createBranchConcreteSyntaxTreeNode(
			functionHeaderUnknownStartingSegmentsConcreteSyntaxTreeNodeTypeName,
			[firstSegment, restSegments] as const,
			spanIndexes,
		);
	return treeNode;
}
