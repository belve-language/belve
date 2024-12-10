import type {FunctionCallKnownSegmentAbstractSyntaxTreeNode} from "../../../abstract-syntax-tree/tree-node-types/function-call-known-segment/FunctionCallKnownSegmentAbstractSyntaxTreeNode.ts";
import type {FunctionCallUnknownSegmentAbstractSyntaxTreeNode} from "../../../abstract-syntax-tree/tree-node-types/function-call-unknown-segment/FunctionCallUnknownSegmentAbstractSyntaxTreeNode.ts";
import type {FunctionCallWordSegmentAbstractSyntaxTreeNode} from "../../../abstract-syntax-tree/tree-node-types/function-call-word-segment/FunctionCallWordSegmentAbstractSyntaxTreeNode.ts";
import {functionCallKnownStartingSegmentsConcreteSyntaxTreeNodeTypeName} from "../../../concrete-syntax-tree/tree-node-types/function-call-known-starting-segments/functionCallKnownStartingSegmentsConcreteSyntaxTreeNodeTypeName.ts";
import {functionCallSegmentsSeparatedRestSegmentsConcreteSyntaxTreeNodeTypeName} from "../../../concrete-syntax-tree/tree-node-types/function-call-segments-separated-rest-segments/functionCallSegmentsSeparatedRestSegmentsConcreteSyntaxTreeNodeTypeName.ts";
import {functionCallUnknownStartingSegmentsConcreteSyntaxTreeNodeTypeName} from "../../../concrete-syntax-tree/tree-node-types/function-call-unknown-starting-segments/functionCallUnknownStartingSegmentsConcreteSyntaxTreeNodeTypeName.ts";
import type {FunctionCallWordStartingSegmentsConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree/tree-node-types/function-call-word-starting-segments/FunctionCallWordStartingSegmentsConcreteSyntaxTreeNode.ts";
import {abstractifyFunctionCallKnownStartingSegments} from "../function-call-known-starting-segments/abstractifyFunctionCallKnownStartingSegments.ts";
import {abstractifyFunctionCallSegmentsSeparatedRestSegments} from "../function-call-segments-separated-rest-segments/abstractifyFunctionCallSegmentsSeparatedRestSegments.ts";
import {abstractifyFunctionCallUnknownStartingSegments} from "../function-call-unknown-starting-segments/abstractifyFunctionCallUnknownStartingSegments.ts";
import {abstractifyFunctionCallWordSegment} from "../function-call-word-segment/abstractifyFunctionCallWordSegment.ts";
export function abstractifyFunctionCallWordStartingSegments(
	segments: FunctionCallWordStartingSegmentsConcreteSyntaxTreeNode,
): readonly [
	FunctionCallWordSegmentAbstractSyntaxTreeNode,
	...(
		| FunctionCallWordSegmentAbstractSyntaxTreeNode
		| FunctionCallUnknownSegmentAbstractSyntaxTreeNode
		| FunctionCallKnownSegmentAbstractSyntaxTreeNode
	)[],
] {
	const [segmentsFirstSegment, segmentsRestSegments] = segments.children;
	const abstractifiedSegmentsFirstSegment =
		abstractifyFunctionCallWordSegment(segmentsFirstSegment);
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
