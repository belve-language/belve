import type {BlockAbstractSyntaxTreeNode} from "../../../abstract-syntax-tree/tree-node-types/block/BlockAbstractSyntaxTreeNode.ts";
import type {FunctionCallAbstractSyntaxTreeNode} from "../../../abstract-syntax-tree/tree-node-types/function-call/FunctionCallAbstractSyntaxTreeNode.ts";
import type {OperatedStatementAbstractSyntaxTreeNode} from "../../../abstract-syntax-tree/tree-node-types/operated-statement/OperatedStatementAbstractSyntaxTreeNode.ts";
import type {BlockContentConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree/tree-node-types/block-content/BlockContentConcreteSyntaxTreeNode.ts";
import {abstractifyStatements} from "../statements/abstractifyStatements.ts";
export function abstractifyBlockContent(
	blockContent: BlockContentConcreteSyntaxTreeNode,
): readonly [
	BlockAbstractSyntaxTreeNode | FunctionCallAbstractSyntaxTreeNode,
	...OperatedStatementAbstractSyntaxTreeNode[],
] {
	const [, blockContentStatements] = blockContent.children;
	const abstractifiedBlockContentStatements: readonly [
		BlockAbstractSyntaxTreeNode | FunctionCallAbstractSyntaxTreeNode,
		...OperatedStatementAbstractSyntaxTreeNode[],
	] = abstractifyStatements(blockContentStatements);
	return abstractifiedBlockContentStatements;
}
