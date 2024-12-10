import {createFunctionHeaderWordSegmentAbstractTreeNode} from "../../../abstract-syntax-tree/tree-node-types/function-header-word-segment/createFunctionHeaderWordSegmentAbstractTreeNode.ts";
import type {FunctionHeaderWordSegmentAbstractTreeNode} from "../../../abstract-syntax-tree/tree-node-types/function-header-word-segment/FunctionHeaderWordSegmentAbstractTreeNode.ts";
import type {FunctionHeaderWordSegmentConcreteTreeNode} from "../../../concrete-syntax-tree/tree-node-types/function-header-word-segment/FunctionHeaderWordSegmentConcreteTreeNode.ts";

export function abstractifyFunctionHeaderWordSegment(
	segment: FunctionHeaderWordSegmentConcreteTreeNode,
): FunctionHeaderWordSegmentAbstractTreeNode {
	const [identifier] = segment.children;
	const abstractifiedIdentifier = abstractifyIdentifier(identifier);
	const abstractifiedSegment = createFunctionHeaderWordSegmentAbstractTreeNode();

	return abstractifiedSegment;
}
//
