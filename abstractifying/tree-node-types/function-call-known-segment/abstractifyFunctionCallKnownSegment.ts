import type {Identifier} from "../../../abstract-syntax-tree/identifier/Identifier.ts";
import {createFunctionCallKnownSegmentAbstractSyntaxTreeNode} from "../../../abstract-syntax-tree/tree-node-types/function-call-known-segment/createFunctionCallKnownSegmentAbstractSyntaxTreeNode.ts";
import type {FunctionCallKnownSegmentAbstractSyntaxTreeNode} from "../../../abstract-syntax-tree/tree-node-types/function-call-known-segment/FunctionCallKnownSegmentAbstractSyntaxTreeNode.ts";
import type {FunctionCallKnownSegmentConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree/tree-node-types/function-call-known-segment/FunctionCallKnownSegmentConcreteSyntaxTreeNode.ts";
import {whitespaceConcreteSyntaxTreeNodeTypeName} from "../../../concrete-syntax-tree/tree-node-types/whitespace/whitespaceConcreteSyntaxTreeNodeTypeName.ts";
import {abstractifyFunctionCallKnownSegmentContent} from "../function-call-known-segment-content/abstractifyFunctionCallKnownSegmentContent.ts";
export function abstractifyFunctionCallKnownSegment(
	segment: FunctionCallKnownSegmentConcreteSyntaxTreeNode,
): FunctionCallKnownSegmentAbstractSyntaxTreeNode {
	const [, segmentContent] = segment.children;
	if (
		segmentContent === null ||
		segmentContent.typeName === whitespaceConcreteSyntaxTreeNodeTypeName
	) {
		throw new Error("Unexpected whitespace characters in function call known segment.");
	}
	const abstractifiedSegmentContent: Identifier =
		abstractifyFunctionCallKnownSegmentContent(segmentContent);
	const abstractifiedSegment: FunctionCallKnownSegmentAbstractSyntaxTreeNode =
		createFunctionCallKnownSegmentAbstractSyntaxTreeNode(abstractifiedSegmentContent);
	return abstractifiedSegment;
}
