import type {FunctionCallKnownSegmentConcreteSyntaxTreeNode} from "../function-call-known-segment/FunctionCallKnownSegmentConcreteSyntaxTreeNode.ts";
import type {FunctionCallSegmentsSeparatedRestSegmentsConcreteSyntaxTreeNode} from "../function-call-segments-separated-rest-segments/FunctionCallSegmentsSeparatedRestSegmentsConcreteSyntaxTreeNode.ts";
import type {FunctionCallUnknownStartingSegmentsConcreteSyntaxTreeNode} from "../function-call-unknown-starting-segments/FunctionCallUnknownStartingSegmentsConcreteSyntaxTreeNode.ts";
import type {FunctionCallWordStartingSegmentsConcreteSyntaxTreeNode} from "../function-call-word-starting-segments/FunctionCallWordStartingSegmentsConcreteSyntaxTreeNode.ts";
import type {FunctionCallKnownStartingSegmentsConcreteSyntaxTreeNode} from "./FunctionCallKnownStartingSegmentsConcreteSyntaxTreeNode.ts";
export type FunctionCallKnownStartingSegmentsConcreteSyntaxTreeNodeChildren = readonly [
	firstSegment: FunctionCallKnownSegmentConcreteSyntaxTreeNode,
	restSegments:
		| FunctionCallKnownStartingSegmentsConcreteSyntaxTreeNode
		| FunctionCallUnknownStartingSegmentsConcreteSyntaxTreeNode
		| FunctionCallWordStartingSegmentsConcreteSyntaxTreeNode
		| null
		| FunctionCallSegmentsSeparatedRestSegmentsConcreteSyntaxTreeNode,
];
