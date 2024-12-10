import type {FunctionHeaderKnownSegmentAbstractSyntaxTreeNode} from "../../../abstract-syntax-tree/tree-node-types/function-header-known-segment/FunctionHeaderKnownSegmentAbstractSyntaxTreeNode.ts";
import type {FunctionHeaderUnknownSegmentAbstractSyntaxTreeNode} from "../../../abstract-syntax-tree/tree-node-types/function-header-unknown-segment/FunctionHeaderUnknownSegmentAbstractSyntaxTreeNode.ts";
import type {FunctionHeaderWordSegmentAbstractSyntaxTreeNode} from "../../../abstract-syntax-tree/tree-node-types/function-header-word-segment/FunctionHeaderWordSegmentAbstractSyntaxTreeNode.ts";
import {createFunctionHeaderAbstractSyntaxTreeNode} from "../../../abstract-syntax-tree/tree-node-types/function-header/createFunctionHeaderAbstractSyntaxTreeNode.ts";
import type {FunctionHeaderAbstractSyntaxTreeNode} from "../../../abstract-syntax-tree/tree-node-types/function-header/FunctionHeaderAbstractSyntaxTreeNode.ts";
import type {FunctionHeaderConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree/tree-node-types/function-header/FunctionHeaderConcreteSyntaxTreeNode.ts";
import {abstractifyFunctionHeaderSegments} from "../function-header-segments/abstractifyFunctionHeaderSegments.ts";
export function abstractifyFunctionHeader(
	functionHeader: FunctionHeaderConcreteSyntaxTreeNode,
): FunctionHeaderAbstractSyntaxTreeNode {
	const [functionHeaderSegments] = functionHeader.children;
	const abstractifiedFunctionHeaderSegments: readonly [
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
	] = abstractifyFunctionHeaderSegments(functionHeaderSegments);
	const abstractifiedFunctionHeader: FunctionHeaderAbstractSyntaxTreeNode =
		createFunctionHeaderAbstractSyntaxTreeNode(abstractifiedFunctionHeaderSegments);
	return abstractifiedFunctionHeader;
}
