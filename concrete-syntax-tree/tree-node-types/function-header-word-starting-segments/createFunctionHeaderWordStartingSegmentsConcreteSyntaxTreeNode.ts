import type {FunctionHeaderKnownStartingSegmentsConcreteSyntaxTreeNode} from "../function-header-known-starting-segments/FunctionHeaderKnownStartingSegmentsConcreteSyntaxTreeNode.ts";
import type {FunctionHeaderUnknownStartingSegmentsConcreteSyntaxTreeNode} from "../function-header-unknown-starting-segments/FunctionHeaderUnknownStartingSegmentsConcreteSyntaxTreeNode.ts";
import type {FunctionHeaderWordSegmentConcreteSyntaxTreeNode} from "../function-header-word-segment/FunctionHeaderWordSegmentConcreteSyntaxTreeNode.ts";
import {functionHeaderWordStartingSegmentsConcreteSyntaxTreeNodeTypeName} from "./functionHeaderWordStartingSegmentsConcreteSyntaxTreeNodeTypeName.ts";
import type {FunctionHeaderSegmentsSeparatedRestSegmentsConcreteSyntaxTreeNode} from "../function-header-segments-separated-rest-segments/FunctionHeaderSegmentsSeparatedRestSegmentsConcreteSyntaxTreeNode.ts";
import type {SpanIndexes} from "../../span-indexes/SpanIndexes.ts";
import {createBranchConcreteSyntaxTreeNode} from "../../createBranchConcreteSyntaxTreeNode.ts";
import type {FunctionHeaderWordStartingSegmentsConcreteSyntaxTreeNode} from "./FunctionHeaderWordStartingSegmentsConcreteSyntaxTreeNode.ts";
export function createFunctionHeaderWordStartingSegmentsConcreteSyntaxTreeNode(
	firstSegment: FunctionHeaderWordSegmentConcreteSyntaxTreeNode,
	restSegments:
		| FunctionHeaderKnownStartingSegmentsConcreteSyntaxTreeNode
		| FunctionHeaderUnknownStartingSegmentsConcreteSyntaxTreeNode
		| null
		| FunctionHeaderSegmentsSeparatedRestSegmentsConcreteSyntaxTreeNode,
	spanIndexes: SpanIndexes,
): FunctionHeaderWordStartingSegmentsConcreteSyntaxTreeNode {
	const treeNode: FunctionHeaderWordStartingSegmentsConcreteSyntaxTreeNode =
		createBranchConcreteSyntaxTreeNode(
			functionHeaderWordStartingSegmentsConcreteSyntaxTreeNodeTypeName,
			[firstSegment, restSegments] as const,
			spanIndexes,
		);
	return treeNode;
}
