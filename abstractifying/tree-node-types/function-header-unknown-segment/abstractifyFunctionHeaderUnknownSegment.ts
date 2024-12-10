import {createFunctionHeaderUnknownSegmentAbstractSyntaxTreeNode} from "../../../abstract-syntax-tree/tree-node-types/function-header-unknown-segment/createFunctionHeaderUnknownSegmentAbstractSyntaxTreeNode.ts";
import type {FunctionHeaderUnknownSegmentAbstractSyntaxTreeNode} from "../../../abstract-syntax-tree/tree-node-types/function-header-unknown-segment/FunctionHeaderUnknownSegmentAbstractSyntaxTreeNode.ts";
import type {FunctionHeaderUnknownSegmentConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree/tree-node-types/function-header-unknown-segment/FunctionHeaderUnknownSegmentConcreteSyntaxTreeNode.ts";
import {whitespaceConcreteSyntaxTreeNodeTypeName} from "../../../concrete-syntax-tree/tree-node-types/whitespace/whitespaceConcreteSyntaxTreeNodeTypeName.ts";
import {abstractifyFunctionHeaderUnknownSegmentContent} from "../function-header-unknown-segment-content/abstractifyFunctionHeaderUnknownSegmentContent.ts";
export function abstractifyFunctionHeaderUnknownSegment(
	segment: FunctionHeaderUnknownSegmentConcreteSyntaxTreeNode,
): FunctionHeaderUnknownSegmentAbstractSyntaxTreeNode {
	const [, segmentContent] = segment.children;
	if (
		segmentContent === null ||
		segmentContent.typeName === whitespaceConcreteSyntaxTreeNodeTypeName
	) {
		throw new Error("Unexpected whitespace characters in function header unknown segment.");
	}
	const abstractifiedSegmentContent =
		abstractifyFunctionHeaderUnknownSegmentContent(segmentContent);
	const abstractifiedSegment: FunctionHeaderUnknownSegmentAbstractSyntaxTreeNode =
		createFunctionHeaderUnknownSegmentAbstractSyntaxTreeNode(abstractifiedSegmentContent);
	return abstractifiedSegment;
}
