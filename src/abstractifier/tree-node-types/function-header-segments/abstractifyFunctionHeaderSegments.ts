import type {FunctionHeaderKnownSegmentAbstractTreeNode} from "../../../abstract-syntax-tree/tree-node-types/function-header-known-segment/FunctionHeaderKnownSegmentAbstractTreeNode.ts";
import type {FunctionHeaderUnknownSegmentAbstractTreeNode} from "../../../abstract-syntax-tree/tree-node-types/function-header-unknown-segment/FunctionHeaderUnknownSegmentAbstractTreeNode.ts";
import type {FunctionHeaderWordSegmentAbstractTreeNode} from "../../../abstract-syntax-tree/tree-node-types/function-header-word-segment/FunctionHeaderWordSegmentAbstractTreeNode.ts";
import type {FunctionHeaderKnownStartingSegmentsConcreteTreeNode} from "../../../concrete-syntax-tree/tree-node-types/function-header-known-starting-segments/FunctionHeaderKnownStartingSegmentsConcreteTreeNode.ts";
import {functionHeaderKnownStartingSegmentsConcreteTreeNodeTypeName} from "../../../concrete-syntax-tree/tree-node-types/function-header-known-starting-segments/functionHeaderKnownStartingSegmentsConcreteTreeNodeTypeName.ts";
import type {FunctionHeaderUnknownStartingSegmentsConcreteTreeNode} from "../../../concrete-syntax-tree/tree-node-types/function-header-unknown-starting-segments/FunctionHeaderUnknownStartingSegmentsConcreteTreeNode.ts";
import {functionHeaderUnknownStartingSegmentsConcreteTreeNodeTypeName} from "../../../concrete-syntax-tree/tree-node-types/function-header-unknown-starting-segments/functionHeaderUnknownStartingSegmentsConcreteTreeNodeTypeName.ts";
import type {FunctionHeaderWordStartingSegmentsConcreteTreeNode} from "../../../concrete-syntax-tree/tree-node-types/function-header-word-starting-segments/FunctionHeaderWordStartingSegmentsConcreteTreeNode.ts";
import {functionHeaderWordStartingSegmentsConcreteTreeNodeTypeName} from "../../../concrete-syntax-tree/tree-node-types/function-header-word-starting-segments/functionHeaderWordStartingSegmentsConcreteTreeNodeTypeName.ts";
import {abstractifyFunctionHeaderKnownStartingSegments} from "../function-header-known-starting-segments/abstractifyFunctionHeaderKnownStartingSegments.ts";
import {abstractifyFunctionHeaderUnknownStartingSegments} from "../function-header-unknown-starting-segments/abstractifyFunctionHeaderUnknownStartingSegments.ts";
import {abstractifyFunctionHeaderWordStartingSegments} from "../function-header-word-starting-segments/abstractifyFunctionHeaderWordStartingSegments.ts";

export function abstractifyFunctionHeaderSegments(
	segments:
		| FunctionHeaderWordStartingSegmentsConcreteTreeNode
		| FunctionHeaderUnknownStartingSegmentsConcreteTreeNode
		| FunctionHeaderKnownStartingSegmentsConcreteTreeNode,
): readonly [
	(
		| FunctionHeaderWordSegmentAbstractTreeNode
		| FunctionHeaderUnknownSegmentAbstractTreeNode
		| FunctionHeaderKnownSegmentAbstractTreeNode
	),
	...(
		| FunctionHeaderWordSegmentAbstractTreeNode
		| FunctionHeaderUnknownSegmentAbstractTreeNode
		| FunctionHeaderKnownSegmentAbstractTreeNode
	)[],
] {
	switch (segments.typeName) {
		case functionHeaderWordStartingSegmentsConcreteTreeNodeTypeName: {
			const abstractifiedSegments = abstractifyFunctionHeaderWordStartingSegments(segments);
			return abstractifiedSegments;
		}
		case functionHeaderKnownStartingSegmentsConcreteTreeNodeTypeName: {
			const abstractifiedSegments = abstractifyFunctionHeaderKnownStartingSegments(segments);
			return abstractifiedSegments;
		}
		case functionHeaderUnknownStartingSegmentsConcreteTreeNodeTypeName: {
			const abstractifiedSegments = abstractifyFunctionHeaderUnknownStartingSegments(segments);
			return abstractifiedSegments;
		}
	}
}
