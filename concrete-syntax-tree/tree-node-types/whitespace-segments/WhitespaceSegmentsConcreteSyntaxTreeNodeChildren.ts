import type {WhitespaceSegmentConcreteSyntaxTreeNode} from "../whitespace-segment/WhitespaceSegmentConcreteSyntaxTreeNode.ts";
import type {WhitespaceSegmentsConcreteSyntaxTreeNode} from "./WhitespaceSegmentsConcreteSyntaxTreeNode.ts";
export type WhitespaceSegmentsConcreteSyntaxTreeNodeChildren = readonly [
	firstSegment: WhitespaceSegmentConcreteSyntaxTreeNode,
	restSegments: WhitespaceSegmentsConcreteSyntaxTreeNode | null,
];
