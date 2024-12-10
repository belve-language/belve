import type {BlockAbstractSyntaxTreeNode} from "../../../../abstract-syntax-tree/tree-node-types/block/BlockAbstractSyntaxTreeNode.ts";
import type {FunctionCallAbstractSyntaxTreeNode} from "../../../../abstract-syntax-tree/tree-node-types/function-call/FunctionCallAbstractSyntaxTreeNode.ts";
import type {BlockConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/block/BlockConcreteSyntaxTreeNode.ts";
import {blockConcreteSyntaxTreeNodeTypeName} from "../../../../concrete-syntax-tree/tree-node-types/block/blockConcreteSyntaxTreeNodeTypeName.ts";
import type {FunctionCallConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/function-call/FunctionCallConcreteSyntaxTreeNode.ts";
import {functionCallConcreteSyntaxTreeNodeTypeName} from "../../../../concrete-syntax-tree/tree-node-types/function-call/functionCallConcreteSyntaxTreeNodeTypeName.ts";
import {abstractifyBlock} from "../../block/abstractifyBlock.ts";
import {abstractifyFunctionCall} from "../../function-call/abstractifyFunctionCall.ts";
export function abstractifyStatement(
	statement: FunctionCallConcreteSyntaxTreeNode | BlockConcreteSyntaxTreeNode,
): FunctionCallAbstractSyntaxTreeNode | BlockAbstractSyntaxTreeNode {
	switch (statement.typeName) {
		case functionCallConcreteSyntaxTreeNodeTypeName: {
			const abstractifiedStatement: FunctionCallAbstractSyntaxTreeNode =
				abstractifyFunctionCall(statement);
			return abstractifiedStatement;
		}
		case blockConcreteSyntaxTreeNodeTypeName: {
			const abstractifiedStatement: BlockAbstractSyntaxTreeNode = abstractifyBlock(statement);
			return abstractifiedStatement;
		}
	}
}
