import type {FunctionCallKnownSegmentAbstractSyntaxTreeNode} from "../../../abstract-syntax-tree/tree-node-types/function-call-known-segment/FunctionCallKnownSegmentAbstractSyntaxTreeNode.ts";
import type {FunctionCallUnknownSegmentAbstractSyntaxTreeNode} from "../../../abstract-syntax-tree/tree-node-types/function-call-unknown-segment/FunctionCallUnknownSegmentAbstractSyntaxTreeNode.ts";
import type {FunctionCallWordSegmentAbstractSyntaxTreeNode} from "../../../abstract-syntax-tree/tree-node-types/function-call-word-segment/FunctionCallWordSegmentAbstractSyntaxTreeNode.ts";
import {createFunctionCallAbstractSyntaxTreeNode} from "../../../abstract-syntax-tree/tree-node-types/function-call/createFunctionCallAbstractSyntaxTreeNode.ts";
import type {FunctionCallAbstractSyntaxTreeNode} from "../../../abstract-syntax-tree/tree-node-types/function-call/FunctionCallAbstractSyntaxTreeNode.ts";
import type {FunctionCallConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree/tree-node-types/function-call/FunctionCallConcreteSyntaxTreeNode.ts";
import {abstractifyFunctionCallSegments} from "../function-call-segments/abstractifyFunctionCallSegments.ts";
export function abstractifyFunctionCall(
	functionCall: FunctionCallConcreteSyntaxTreeNode,
): FunctionCallAbstractSyntaxTreeNode {
	const [functionCallSegments] = functionCall.children;
	const abstractifiedFunctionCallSegments: readonly [
		(
			| FunctionCallWordSegmentAbstractSyntaxTreeNode
			| FunctionCallUnknownSegmentAbstractSyntaxTreeNode
			| FunctionCallKnownSegmentAbstractSyntaxTreeNode
		),
		...(
			| FunctionCallWordSegmentAbstractSyntaxTreeNode
			| FunctionCallUnknownSegmentAbstractSyntaxTreeNode
			| FunctionCallKnownSegmentAbstractSyntaxTreeNode
		)[],
	] = abstractifyFunctionCallSegments(functionCallSegments);
	const abstractifiedFunctionCall: FunctionCallAbstractSyntaxTreeNode =
		createFunctionCallAbstractSyntaxTreeNode(abstractifiedFunctionCallSegments);
	return abstractifiedFunctionCall;
}
