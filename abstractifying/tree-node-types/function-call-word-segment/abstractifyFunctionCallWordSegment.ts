import {createFunctionCallWordSegmentAbstractSyntaxTreeNode} from "../../../abstract-syntax-tree/tree-node-types/function-call-word-segment/createFunctionCallWordSegmentAbstractSyntaxTreeNode.ts";
import type {FunctionCallWordSegmentAbstractSyntaxTreeNode} from "../../../abstract-syntax-tree/tree-node-types/function-call-word-segment/FunctionCallWordSegmentAbstractSyntaxTreeNode.ts";
import type {FunctionCallWordSegmentConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree/tree-node-types/function-call-word-segment/FunctionCallWordSegmentConcreteSyntaxTreeNode.ts";
import {abstractifyIdentifier} from "../identifier/abstractifyIdentifier.ts";
export function abstractifyFunctionCallWordSegment(
	segment: FunctionCallWordSegmentConcreteSyntaxTreeNode,
): FunctionCallWordSegmentAbstractSyntaxTreeNode {
	const [segmentIdentifier] = segment.children;
	const abstractifiedSegmentIdentifier = abstractifyIdentifier(segmentIdentifier);
	const abstractifiedSegment: FunctionCallWordSegmentAbstractSyntaxTreeNode =
		createFunctionCallWordSegmentAbstractSyntaxTreeNode(abstractifiedSegmentIdentifier);
	return abstractifiedSegment;
}
