import type {Identifier} from "../../../abstract-syntax-tree/identifier/Identifier.ts";
import {createFunctionCallUnknownSegmentAbstractSyntaxTreeNode} from "../../../abstract-syntax-tree/tree-node-types/function-call-unknown-segment/createFunctionCallUnknownSegmentAbstractSyntaxTreeNode.ts";
import type {FunctionCallUnknownSegmentAbstractSyntaxTreeNode} from "../../../abstract-syntax-tree/tree-node-types/function-call-unknown-segment/FunctionCallUnknownSegmentAbstractSyntaxTreeNode.ts";
import type {FunctionCallUnknownSegmentConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree/tree-node-types/function-call-unknown-segment/FunctionCallUnknownSegmentConcreteSyntaxTreeNode.ts";
import {whitespaceConcreteSyntaxTreeNodeTypeName} from "../../../concrete-syntax-tree/tree-node-types/whitespace/whitespaceConcreteSyntaxTreeNodeTypeName.ts";
import {abstractifyFunctionCallUnknownSegmentContent} from "../function-call-unknown-segment-content/abstractifyFunctionCallUnknownSegmentContent.ts";
export function abstractifyFunctionCallUnknownSegment(
	segment: FunctionCallUnknownSegmentConcreteSyntaxTreeNode,
): FunctionCallUnknownSegmentAbstractSyntaxTreeNode {
	const [, segmentContent] = segment.children;
	if (
		segmentContent === null ||
		segmentContent.typeName === whitespaceConcreteSyntaxTreeNodeTypeName
	) {
		throw new Error("Unexpected whitespace characters in function call unknown segment.");
	}
	const abstractifiedSegmentContent: Identifier =
		abstractifyFunctionCallUnknownSegmentContent(segmentContent);
	const abstractifiedSegment: FunctionCallUnknownSegmentAbstractSyntaxTreeNode =
		createFunctionCallUnknownSegmentAbstractSyntaxTreeNode(abstractifiedSegmentContent);
	return abstractifiedSegment;
}
