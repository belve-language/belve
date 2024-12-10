import {createFunctionAbstractTreeNode} from "../../../abstract-syntax-tree/tree-node-types/function/createFunctionAbstractTreeNode.ts";
import type {FunctionAbstractTreeNode} from "../../../abstract-syntax-tree/tree-node-types/function/FunctionAbstractTreeNode.ts";
import type {FunctionConcreteTreeNode} from "../../../concrete-syntax-tree/tree-node-types/function/FunctionConcreteTreeNode.ts";
import {abstractifyFunctionBody} from "../function-body/abstractifyFunctionBody.ts";

export function abstractifyFunction(function_: FunctionConcreteTreeNode): FunctionAbstractTreeNode {
	const [header, body] = function_.children;

	if (header === null) {
		const abstractifiedBody = abstractifyFunctionBody(body);

		const functionAbstractTreeNode = createFunctionAbstractTreeNode(null, abstractifiedBody);
		return functionAbstractTreeNode;
	}

	const abstractifiedHeader = abstractifyFunctionHeader(header);
	const abstractifiedBody = abstractifyFunctionBody(body);

	const functionAbstractTreeNode = createFunctionAbstractTreeNode(
		abstractifiedHeader,
		abstractifiedBody,
	);

	return functionAbstractTreeNode;
}
