import {createFunctionHeaderAbstractTreeNode} from "../../abstract-syntax-tree/tree-node-types/function-header/createFunctionHeaderAbstractTreeNode.ts";
import type {FunctionHeaderAbstractTreeNode} from "../../abstract-syntax-tree/tree-node-types/function-header/FunctionHeaderAbstractTreeNode.ts";
import type {FunctionHeaderConcreteTreeNode} from "../../concrete-syntax-tree/tree-node-types/function-header/FunctionHeaderConcreteTreeNode.ts";

export function abstractifyFunctionHeader(
	functionHeader: FunctionHeaderConcreteTreeNode,
): FunctionHeaderAbstractTreeNode {
	const [segments] = functionHeader.children;
	const abstractifiedSegments = abstractifyFunctionHeaderSegments(segments);
	const abstractFunctionHeader = createFunctionHeaderAbstractTreeNode(abstractifiedSegments);
	return abstractFunctionHeader;
}
