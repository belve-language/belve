import type {FunctionCallKnownSegmentAbstractSyntaxTreeNode} from "../../../abstract-syntax-tree/tree-node-types/function-call-known-segment/FunctionCallKnownSegmentAbstractSyntaxTreeNode.ts";
import type {FunctionCallUnknownSegmentAbstractSyntaxTreeNode} from "../../../abstract-syntax-tree/tree-node-types/function-call-unknown-segment/FunctionCallUnknownSegmentAbstractSyntaxTreeNode.ts";
import type {FunctionCallWordSegmentAbstractSyntaxTreeNode} from "../../../abstract-syntax-tree/tree-node-types/function-call-word-segment/FunctionCallWordSegmentAbstractSyntaxTreeNode.ts";
import {functionCallKnownStartingSegmentsConcreteSyntaxTreeNodeTypeName} from "../../../concrete-syntax-tree/tree-node-types/function-call-known-starting-segments/functionCallKnownStartingSegmentsConcreteSyntaxTreeNodeTypeName.ts";
import type {FunctionCallSegmentsSeparatedRestSegmentsConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree/tree-node-types/function-call-segments-separated-rest-segments/FunctionCallSegmentsSeparatedRestSegmentsConcreteSyntaxTreeNode.ts";
import {functionCallUnknownStartingSegmentsConcreteSyntaxTreeNodeTypeName} from "../../../concrete-syntax-tree/tree-node-types/function-call-unknown-starting-segments/functionCallUnknownStartingSegmentsConcreteSyntaxTreeNodeTypeName.ts";
import {functionCallWordStartingSegmentsConcreteSyntaxTreeNodeTypeName} from "../../../concrete-syntax-tree/tree-node-types/function-call-word-starting-segments/functionCallWordStartingSegmentsConcreteSyntaxTreeNodeTypeName.ts";
import {abstractifyFunctionCallKnownStartingSegments} from "../function-call-known-starting-segments/abstractifyFunctionCallKnownStartingSegments.ts";
import {abstractifyFunctionCallUnknownStartingSegments} from "../function-call-unknown-starting-segments/abstractifyFunctionCallUnknownStartingSegments.ts";
import {abstractifyFunctionCallWordStartingSegments} from "../function-call-word-starting-segments/abstractifyFunctionCallWordStartingSegments.ts";
export function abstractifyFunctionCallSegmentsSeparatedRestSegments(
	segments: FunctionCallSegmentsSeparatedRestSegmentsConcreteSyntaxTreeNode,
): readonly [
	(
		| FunctionCallWordSegmentAbstractSyntaxTreeNode
		| FunctionCallUnknownSegmentAbstractSyntaxTreeNode
		| FunctionCallKnownSegmentAbstractSyntaxTreeNode
	),
	...(
		| FunctionCallWordSegmentAbstractSyntaxTreeNode
		| FunctionCallUnknownSegmentAbstractSyntaxTreeNode
		| FunctionCallKnownSegmentAbstractSyntaxTreeNode
	)[],
] {
	const [, segmentsSegments] = segments.children;
	switch (segmentsSegments.typeName) {
		case functionCallKnownStartingSegmentsConcreteSyntaxTreeNodeTypeName: {
			const abstractifiedSegmentsRestSegments: readonly [
				FunctionCallKnownSegmentAbstractSyntaxTreeNode,
				...(
					| FunctionCallWordSegmentAbstractSyntaxTreeNode
					| FunctionCallUnknownSegmentAbstractSyntaxTreeNode
					| FunctionCallKnownSegmentAbstractSyntaxTreeNode
				)[],
			] = abstractifyFunctionCallKnownStartingSegments(segmentsSegments);
			return abstractifiedSegmentsRestSegments;
		}
		case functionCallUnknownStartingSegmentsConcreteSyntaxTreeNodeTypeName: {
			const abstractifiedSegmentsRestSegments: readonly [
				FunctionCallUnknownSegmentAbstractSyntaxTreeNode,
				...(
					| FunctionCallWordSegmentAbstractSyntaxTreeNode
					| FunctionCallUnknownSegmentAbstractSyntaxTreeNode
					| FunctionCallKnownSegmentAbstractSyntaxTreeNode
				)[],
			] = abstractifyFunctionCallUnknownStartingSegments(segmentsSegments);
			return abstractifiedSegmentsRestSegments;
		}
		case functionCallWordStartingSegmentsConcreteSyntaxTreeNodeTypeName: {
			const abstractifiedSegmentsRestSegments: readonly [
				FunctionCallWordSegmentAbstractSyntaxTreeNode,
				...(
					| FunctionCallWordSegmentAbstractSyntaxTreeNode
					| FunctionCallUnknownSegmentAbstractSyntaxTreeNode
					| FunctionCallKnownSegmentAbstractSyntaxTreeNode
				)[],
			] = abstractifyFunctionCallWordStartingSegments(segmentsSegments);
			return abstractifiedSegmentsRestSegments;
		}
	}
}
