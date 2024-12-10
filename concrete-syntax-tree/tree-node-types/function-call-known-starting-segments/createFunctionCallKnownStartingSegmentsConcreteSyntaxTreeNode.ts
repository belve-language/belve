import {createBranchConcreteSyntaxTreeNode} from "../../createBranchConcreteSyntaxTreeNode.ts";
import type {SpanIndexes} from "../../span-indexes/SpanIndexes.ts";
import type {FunctionCallKnownSegmentConcreteSyntaxTreeNode} from "../function-call-known-segment/FunctionCallKnownSegmentConcreteSyntaxTreeNode.ts";
import type {FunctionCallSegmentsSeparatedRestSegmentsConcreteSyntaxTreeNode} from "../function-call-segments-separated-rest-segments/FunctionCallSegmentsSeparatedRestSegmentsConcreteSyntaxTreeNode.ts";
import type {FunctionCallUnknownStartingSegmentsConcreteSyntaxTreeNode} from "../function-call-unknown-starting-segments/FunctionCallUnknownStartingSegmentsConcreteSyntaxTreeNode.ts";
import type {FunctionCallWordStartingSegmentsConcreteSyntaxTreeNode} from "../function-call-word-starting-segments/FunctionCallWordStartingSegmentsConcreteSyntaxTreeNode.ts";
import type {FunctionCallKnownStartingSegmentsConcreteSyntaxTreeNode} from "./FunctionCallKnownStartingSegmentsConcreteSyntaxTreeNode.ts";
import {functionCallKnownStartingSegmentsConcreteSyntaxTreeNodeTypeName} from "./functionCallKnownStartingSegmentsConcreteSyntaxTreeNodeTypeName.ts";
export function createFunctionCallKnownStartingSegmentsConcreteSyntaxTreeNode(
	firstSegment: FunctionCallKnownSegmentConcreteSyntaxTreeNode,
	restSegments:
		| FunctionCallKnownStartingSegmentsConcreteSyntaxTreeNode
		| FunctionCallUnknownStartingSegmentsConcreteSyntaxTreeNode
		| null
		| FunctionCallSegmentsSeparatedRestSegmentsConcreteSyntaxTreeNode
		| FunctionCallWordStartingSegmentsConcreteSyntaxTreeNode,
	spanIndexes: SpanIndexes,
): FunctionCallKnownStartingSegmentsConcreteSyntaxTreeNode {
	const treeNode: FunctionCallKnownStartingSegmentsConcreteSyntaxTreeNode =
		createBranchConcreteSyntaxTreeNode(
			functionCallKnownStartingSegmentsConcreteSyntaxTreeNodeTypeName,
			[firstSegment, restSegments] as const,
			spanIndexes,
		);
	return treeNode;
}
