import {createFunctionHeaderWordSegmentAbstractSyntaxTreeNode} from "../../../abstract-syntax-tree/tree-node-types/function-header-word-segment/createFunctionHeaderWordSegmentAbstractSyntaxTreeNode.ts";
import type {FunctionHeaderWordSegmentAbstractSyntaxTreeNode} from "../../../abstract-syntax-tree/tree-node-types/function-header-word-segment/FunctionHeaderWordSegmentAbstractSyntaxTreeNode.ts";
import type {FunctionHeaderWordSegmentConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree/tree-node-types/function-header-word-segment/FunctionHeaderWordSegmentConcreteSyntaxTreeNode.ts";
import {abstractifyIdentifier} from "../identifier/abstractifyIdentifier.ts";
export function abstractifyFunctionHeaderWordSegment(
	segment: FunctionHeaderWordSegmentConcreteSyntaxTreeNode,
): FunctionHeaderWordSegmentAbstractSyntaxTreeNode {
	const [segmentIdentifier] = segment.children;
	const abstractifiedSegmentIdentifier = abstractifyIdentifier(segmentIdentifier);
	const abstractifiedSegment: FunctionHeaderWordSegmentAbstractSyntaxTreeNode =
		createFunctionHeaderWordSegmentAbstractSyntaxTreeNode(abstractifiedSegmentIdentifier);
	return abstractifiedSegment;
}
//
