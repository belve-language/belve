import type {FunctionHeaderKnownSegmentAbstractTreeNode} from "../../../abstract-syntax-tree/tree-node-types/function-header-known-segment/FunctionHeaderKnownSegmentAbstractTreeNode.ts";
import type {FunctionHeaderUnknownSegmentAbstractTreeNode} from "../../../abstract-syntax-tree/tree-node-types/function-header-unknown-segment/FunctionHeaderUnknownSegmentAbstractTreeNode.ts";
import type {FunctionHeaderWordSegmentAbstractTreeNode} from "../../../abstract-syntax-tree/tree-node-types/function-header-word-segment/FunctionHeaderWordSegmentAbstractTreeNode.ts";
import {functionHeaderKnownStartingSegmentsConcreteTreeNodeTypeName} from "../../../concrete-syntax-tree/tree-node-types/function-header-known-starting-segments/functionHeaderKnownStartingSegmentsConcreteTreeNodeTypeName.ts";
import {functionHeaderSegmentsSeparatedRestSegmentsConcreteTreeNodeTypeName} from "../../../concrete-syntax-tree/tree-node-types/function-header-segments-separated-rest-segments/functionHeaderSegmentsSeparatedRestConcreteTreeNodeTypeName.ts";
import {functionHeaderUnknownStartingSegmentsConcreteTreeNodeTypeName} from "../../../concrete-syntax-tree/tree-node-types/function-header-unknown-starting-segments/functionHeaderUnknownStartingSegmentsConcreteTreeNodeTypeName.ts";
import type {FunctionHeaderWordStartingSegmentsConcreteTreeNode} from "../../../concrete-syntax-tree/tree-node-types/function-header-word-starting-segments/FunctionHeaderWordStartingSegmentsConcreteTreeNode.ts";

export function abstractifyFunctionHeaderWordStartingSegments(
	segments: FunctionHeaderWordStartingSegmentsConcreteTreeNode,
): readonly [
	FunctionHeaderWordSegmentAbstractTreeNode,
	...(
		| FunctionHeaderWordSegmentAbstractTreeNode
		| FunctionHeaderUnknownSegmentAbstractTreeNode
		| FunctionHeaderKnownSegmentAbstractTreeNode
	)[],
] {
	const [firstSegment, restSegments] = segments.children;

	const abstractifiedFirstSegment = abstractifyFunctionHeaderWordSegment(firstSegment);

	if (restSegments === null) {
		return [abstractifiedFirstSegment];
	}

	switch (restSegments.typeName) {
		case functionHeaderKnownStartingSegmentsConcreteTreeNodeTypeName: {
			const abstractifiedRestSegments =
				abstractifyFunctionHeaderKnownStartingSegments(restSegments);

			return [abstractifiedFirstSegment, ...abstractifiedRestSegments];
		}
		case functionHeaderUnknownStartingSegmentsConcreteTreeNodeTypeName: {
			const abstractifiedRestSegments =
				abstractifyFunctionHeaderUnknownStartingSegments(restSegments);

			return [abstractifiedFirstSegment, ...abstractifiedRestSegments];
		}
		case functionHeaderSegmentsSeparatedRestSegmentsConcreteTreeNodeTypeName: {
			const abstractifiedRestSegments =
				abstractifyFunctionHeaderSegmentsSeparatedRestSegments(restSegments);

			return [abstractifiedFirstSegment, ...abstractifiedRestSegments];
		}
	}
}
