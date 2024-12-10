import type {FunctionHeaderKnownSegmentAbstractSyntaxTreeNode} from "../../../abstract-syntax-tree/tree-node-types/function-header-known-segment/FunctionHeaderKnownSegmentAbstractSyntaxTreeNode.ts";
import type {FunctionHeaderUnknownSegmentAbstractSyntaxTreeNode} from "../../../abstract-syntax-tree/tree-node-types/function-header-unknown-segment/FunctionHeaderUnknownSegmentAbstractSyntaxTreeNode.ts";
import type {FunctionHeaderWordSegmentAbstractSyntaxTreeNode} from "../../../abstract-syntax-tree/tree-node-types/function-header-word-segment/FunctionHeaderWordSegmentAbstractSyntaxTreeNode.ts";
import {functionHeaderKnownStartingSegmentsConcreteSyntaxTreeNodeTypeName} from "../../../concrete-syntax-tree/tree-node-types/function-header-known-starting-segments/functionHeaderKnownStartingSegmentsConcreteSyntaxTreeNodeTypeName.ts";
import {functionHeaderSegmentsSeparatedRestSegmentsConcreteSyntaxTreeNodeTypeName} from "../../../concrete-syntax-tree/tree-node-types/function-header-segments-separated-rest-segments/functionHeaderSegmentsSeparatedRestSegmentsConcreteSyntaxTreeNodeTypeName.ts";
import type {FunctionHeaderUnknownStartingSegmentsConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree/tree-node-types/function-header-unknown-starting-segments/FunctionHeaderUnknownStartingSegmentsConcreteSyntaxTreeNode.ts";
import {functionHeaderUnknownStartingSegmentsConcreteSyntaxTreeNodeTypeName} from "../../../concrete-syntax-tree/tree-node-types/function-header-unknown-starting-segments/functionHeaderUnknownStartingSegmentsConcreteSyntaxTreeNodeTypeName.ts";
import {functionHeaderWordStartingSegmentsConcreteSyntaxTreeNodeTypeName} from "../../../concrete-syntax-tree/tree-node-types/function-header-word-starting-segments/functionHeaderWordStartingSegmentsConcreteSyntaxTreeNodeTypeName.ts";
import {abstractifyFunctionHeaderKnownStartingSegments} from "../function-header-known-starting-segments/abstractifyFunctionHeaderKnownStartingSegments.ts";
import {abstractifyFunctionHeaderSegmentsSeparatedRestSegments} from "../function-header-segments-separated-rest-segments/abstractifyFunctionHeaderSegmentsSeparatedRestSegments.ts";
import {abstractifyFunctionHeaderUnknownSegment} from "../function-header-unknown-segment/abstractifyFunctionHeaderUnknownSegment.ts";
import {abstractifyFunctionHeaderWordStartingSegments} from "../function-header-word-starting-segments/abstractifyFunctionHeaderWordStartingSegments.ts";
export function abstractifyFunctionHeaderUnknownStartingSegments(
	segments: FunctionHeaderUnknownStartingSegmentsConcreteSyntaxTreeNode,
): readonly [
	FunctionHeaderUnknownSegmentAbstractSyntaxTreeNode,
	...(
		| FunctionHeaderWordSegmentAbstractSyntaxTreeNode
		| FunctionHeaderUnknownSegmentAbstractSyntaxTreeNode
		| FunctionHeaderKnownSegmentAbstractSyntaxTreeNode
	)[],
] {
	const [segmentsFirstSegment, segmentsRestSegments] = segments.children;
	const abstractifiedSegmentsFirstSegment: FunctionHeaderUnknownSegmentAbstractSyntaxTreeNode =
		abstractifyFunctionHeaderUnknownSegment(segmentsFirstSegment);
	if (segmentsRestSegments === null) {
		return [abstractifiedSegmentsFirstSegment] as const;
	}
	switch (segmentsRestSegments.typeName) {
		case functionHeaderKnownStartingSegmentsConcreteSyntaxTreeNodeTypeName: {
			const abstractifiedSegmentsRestSegments: readonly [
				FunctionHeaderKnownSegmentAbstractSyntaxTreeNode,
				...(
					| FunctionHeaderWordSegmentAbstractSyntaxTreeNode
					| FunctionHeaderUnknownSegmentAbstractSyntaxTreeNode
					| FunctionHeaderKnownSegmentAbstractSyntaxTreeNode
				)[],
			] = abstractifyFunctionHeaderKnownStartingSegments(segmentsRestSegments);
			return [abstractifiedSegmentsFirstSegment, ...abstractifiedSegmentsRestSegments] as const;
		}
		case functionHeaderUnknownStartingSegmentsConcreteSyntaxTreeNodeTypeName: {
			const abstractifiedSegmentsRestSegments: readonly [
				FunctionHeaderUnknownSegmentAbstractSyntaxTreeNode,
				...(
					| FunctionHeaderWordSegmentAbstractSyntaxTreeNode
					| FunctionHeaderUnknownSegmentAbstractSyntaxTreeNode
					| FunctionHeaderKnownSegmentAbstractSyntaxTreeNode
				)[],
			] = abstractifyFunctionHeaderUnknownStartingSegments(segmentsRestSegments);
			return [abstractifiedSegmentsFirstSegment, ...abstractifiedSegmentsRestSegments] as const;
		}
		case functionHeaderWordStartingSegmentsConcreteSyntaxTreeNodeTypeName: {
			const abstractifiedSegmentsRestSegments: readonly [
				FunctionHeaderWordSegmentAbstractSyntaxTreeNode,
				...(
					| FunctionHeaderWordSegmentAbstractSyntaxTreeNode
					| FunctionHeaderUnknownSegmentAbstractSyntaxTreeNode
					| FunctionHeaderKnownSegmentAbstractSyntaxTreeNode
				)[],
			] = abstractifyFunctionHeaderWordStartingSegments(segmentsRestSegments);
			return [abstractifiedSegmentsFirstSegment, ...abstractifiedSegmentsRestSegments] as const;
		}
		case functionHeaderSegmentsSeparatedRestSegmentsConcreteSyntaxTreeNodeTypeName: {
			const abstractifiedSegmentsRestSegments: readonly [
				(
					| FunctionHeaderWordSegmentAbstractSyntaxTreeNode
					| FunctionHeaderUnknownSegmentAbstractSyntaxTreeNode
					| FunctionHeaderKnownSegmentAbstractSyntaxTreeNode
				),
				...(
					| FunctionHeaderWordSegmentAbstractSyntaxTreeNode
					| FunctionHeaderUnknownSegmentAbstractSyntaxTreeNode
					| FunctionHeaderKnownSegmentAbstractSyntaxTreeNode
				)[],
			] = abstractifyFunctionHeaderSegmentsSeparatedRestSegments(segmentsRestSegments);
			return [abstractifiedSegmentsFirstSegment, ...abstractifiedSegmentsRestSegments] as const;
		}
	}
}
