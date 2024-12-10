import {createBranchConcreteSyntaxTreeNode} from "../../createBranchConcreteSyntaxTreeNode.ts";
import type {SpanIndexes} from "../../span-indexes/SpanIndexes.ts";
import type {FunctionHeaderKnownSegmentConcreteSyntaxTreeNode} from "../function-header-known-segment/FunctionHeaderKnownSegmentConcreteSyntaxTreeNode.ts";
import type {FunctionHeaderSegmentsSeparatedRestSegmentsConcreteSyntaxTreeNode} from "../function-header-segments-separated-rest-segments/FunctionHeaderSegmentsSeparatedRestSegmentsConcreteSyntaxTreeNode.ts";
import type {FunctionHeaderUnknownStartingSegmentsConcreteSyntaxTreeNode} from "../function-header-unknown-starting-segments/FunctionHeaderUnknownStartingSegmentsConcreteSyntaxTreeNode.ts";
import type {FunctionHeaderWordStartingSegmentsConcreteSyntaxTreeNode} from "../function-header-word-starting-segments/FunctionHeaderWordStartingSegmentsConcreteSyntaxTreeNode.ts";
import type {FunctionHeaderKnownStartingSegmentsConcreteSyntaxTreeNode} from "./FunctionHeaderKnownStartingSegmentsConcreteSyntaxTreeNode.ts";
import {functionHeaderKnownStartingSegmentsConcreteSyntaxTreeNodeTypeName} from "./functionHeaderKnownStartingSegmentsConcreteSyntaxTreeNodeTypeName.ts";
export function createFunctionHeaderKnownStartingSegmentsConcreteSyntaxTreeNode(
	firstSegment: FunctionHeaderKnownSegmentConcreteSyntaxTreeNode,
	restSegments:
		| FunctionHeaderKnownStartingSegmentsConcreteSyntaxTreeNode
		| FunctionHeaderUnknownStartingSegmentsConcreteSyntaxTreeNode
		| null
		| FunctionHeaderSegmentsSeparatedRestSegmentsConcreteSyntaxTreeNode
		| FunctionHeaderWordStartingSegmentsConcreteSyntaxTreeNode,
	spanIndexes: SpanIndexes,
): FunctionHeaderKnownStartingSegmentsConcreteSyntaxTreeNode {
	const treeNode: FunctionHeaderKnownStartingSegmentsConcreteSyntaxTreeNode =
		createBranchConcreteSyntaxTreeNode(
			functionHeaderKnownStartingSegmentsConcreteSyntaxTreeNodeTypeName,
			[firstSegment, restSegments] as const,
			spanIndexes,
		);
	return treeNode;
}
