import type {BlockAbstractSyntaxTreeNode} from "../../../abstract-syntax-tree/tree-node-types/block/BlockAbstractSyntaxTreeNode.ts";
import {createFunctionBodyAbstractSyntaxTreeNode} from "../../../abstract-syntax-tree/tree-node-types/function-body/createFunctionBodyAbstractSyntaxTreeNode.ts";
import type {FunctionBodyAbstractSyntaxTreeNode} from "../../../abstract-syntax-tree/tree-node-types/function-body/FunctionBodyAbstractSyntaxTreeNode.ts";
import type {FunctionBodyConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree/tree-node-types/function-body/FunctionBodyConcreteSyntaxTreeNode.ts";
import {abstractifyBlock} from "../block/abstractifyBlock.ts";
export function abstractifyFunctionBody(
	functionBody: FunctionBodyConcreteSyntaxTreeNode,
): FunctionBodyAbstractSyntaxTreeNode {
	const [functionBodyBlock] = functionBody.children;
	const abstractifiedFunctionBodyBlock: BlockAbstractSyntaxTreeNode =
		abstractifyBlock(functionBodyBlock);
	const abstractifiedFunctionBody: FunctionBodyAbstractSyntaxTreeNode =
		createFunctionBodyAbstractSyntaxTreeNode(abstractifiedFunctionBodyBlock);
	return abstractifiedFunctionBody;
}
