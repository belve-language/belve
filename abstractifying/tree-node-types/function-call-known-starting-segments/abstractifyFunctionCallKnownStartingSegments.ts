import type {FunctionCallKnownSegmentAbstractSyntaxTreeNode} from "../../../abstract-syntax-tree/tree-node-types/function-call-known-segment/FunctionCallKnownSegmentAbstractSyntaxTreeNode.ts";
import type {FunctionCallUnknownSegmentAbstractSyntaxTreeNode} from "../../../abstract-syntax-tree/tree-node-types/function-call-unknown-segment/FunctionCallUnknownSegmentAbstractSyntaxTreeNode.ts";
import type {FunctionCallWordSegmentAbstractSyntaxTreeNode} from "../../../abstract-syntax-tree/tree-node-types/function-call-word-segment/FunctionCallWordSegmentAbstractSyntaxTreeNode.ts";
import type {FunctionCallKnownStartingSegmentsConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree/tree-node-types/function-call-known-starting-segments/FunctionCallKnownStartingSegmentsConcreteSyntaxTreeNode.ts";
import {functionCallKnownStartingSegmentsConcreteSyntaxTreeNodeTypeName} from "../../../concrete-syntax-tree/tree-node-types/function-call-known-starting-segments/functionCallKnownStartingSegmentsConcreteSyntaxTreeNodeTypeName.ts";
import {functionCallSegmentsSeparatedRestSegmentsConcreteSyntaxTreeNodeTypeName} from "../../../concrete-syntax-tree/tree-node-types/function-call-segments-separated-rest-segments/functionCallSegmentsSeparatedRestSegmentsConcreteSyntaxTreeNodeTypeName.ts";
import {functionCallUnknownStartingSegmentsConcreteSyntaxTreeNodeTypeName} from "../../../concrete-syntax-tree/tree-node-types/function-call-unknown-starting-segments/functionCallUnknownStartingSegmentsConcreteSyntaxTreeNodeTypeName.ts";
import {functionCallWordStartingSegmentsConcreteSyntaxTreeNodeTypeName} from "../../../concrete-syntax-tree/tree-node-types/function-call-word-starting-segments/functionCallWordStartingSegmentsConcreteSyntaxTreeNodeTypeName.ts";
import {abstractifyFunctionCallKnownSegment} from "../function-call-known-segment/abstractifyFunctionCallKnownSegment.ts";
import {abstractifyFunctionCallSegmentsSeparatedRestSegments} from "../function-call-segments-separated-rest-segments/abstractifyFunctionCallSegmentsSeparatedRestSegments.ts";
import {abstractifyFunctionCallUnknownStartingSegments} from "../function-call-unknown-starting-segments/abstractifyFunctionCallUnknownStartingSegments.ts";
import {abstractifyFunctionCallWordStartingSegments} from "../function-call-word-starting-segments/abstractifyFunctionCallWordStartingSegments.ts";
export function abstractifyFunctionCallKnownStartingSegments(
	segments: FunctionCallKnownStartingSegmentsConcreteSyntaxTreeNode,
): readonly [
	FunctionCallKnownSegmentAbstractSyntaxTreeNode,
	...(
		| FunctionCallWordSegmentAbstractSyntaxTreeNode
		| FunctionCallUnknownSegmentAbstractSyntaxTreeNode
		| FunctionCallKnownSegmentAbstractSyntaxTreeNode
	)[],
] {
	const [segmentsFirstSegment, segmentsRestSegments] = segments.children;
	const abstractifiedSegmentsFirstSegment: FunctionCallKnownSegmentAbstractSyntaxTreeNode =
		abstractifyFunctionCallKnownSegment(segmentsFirstSegment);
	if (segmentsRestSegments === null) {
		return [abstractifiedSegmentsFirstSegment] as const;
	}
	switch (segmentsRestSegments.typeName) {
		case functionCallKnownStartingSegmentsConcreteSyntaxTreeNodeTypeName: {
			const abstractifiedSegmentsRestSegments: readonly [
				FunctionCallKnownSegmentAbstractSyntaxTreeNode,
				...(
					| FunctionCallWordSegmentAbstractSyntaxTreeNode
					| FunctionCallUnknownSegmentAbstractSyntaxTreeNode
					| FunctionCallKnownSegmentAbstractSyntaxTreeNode
				)[],
			] = abstractifyFunctionCallKnownStartingSegments(segmentsRestSegments);
			return [abstractifiedSegmentsFirstSegment, ...abstractifiedSegmentsRestSegments] as const;
		}
		case functionCallUnknownStartingSegmentsConcreteSyntaxTreeNodeTypeName: {
			const abstractifiedSegmentsRestSegments: readonly [
				FunctionCallUnknownSegmentAbstractSyntaxTreeNode,
				...(
					| FunctionCallWordSegmentAbstractSyntaxTreeNode
					| FunctionCallUnknownSegmentAbstractSyntaxTreeNode
					| FunctionCallKnownSegmentAbstractSyntaxTreeNode
				)[],
			] = abstractifyFunctionCallUnknownStartingSegments(segmentsRestSegments);
			return [abstractifiedSegmentsFirstSegment, ...abstractifiedSegmentsRestSegments] as const;
		}
		case functionCallWordStartingSegmentsConcreteSyntaxTreeNodeTypeName: {
			const abstractifiedSegmentsRestSegments: readonly [
				FunctionCallWordSegmentAbstractSyntaxTreeNode,
				...(
					| FunctionCallWordSegmentAbstractSyntaxTreeNode
					| FunctionCallUnknownSegmentAbstractSyntaxTreeNode
					| FunctionCallKnownSegmentAbstractSyntaxTreeNode
				)[],
			] = abstractifyFunctionCallWordStartingSegments(segmentsRestSegments);
			return [abstractifiedSegmentsFirstSegment, ...abstractifiedSegmentsRestSegments] as const;
		}
		case functionCallSegmentsSeparatedRestSegmentsConcreteSyntaxTreeNodeTypeName: {
			const abstractifiedSegmentsRestSegments: readonly [
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
			] = abstractifyFunctionCallSegmentsSeparatedRestSegments(segmentsRestSegments);
			return [abstractifiedSegmentsFirstSegment, ...abstractifiedSegmentsRestSegments] as const;
		}
	}
}
