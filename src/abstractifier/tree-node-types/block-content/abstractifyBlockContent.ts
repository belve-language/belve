import type {BlockAbstractTreeNode} from "../../../abstract-syntax-tree/tree-node-types/block/BlockAbstractTreeNode.ts";
import type {FunctionCallAbstractTreeNode} from "../../../abstract-syntax-tree/tree-node-types/function-call/FunctionCallAbstractTreeNode.ts";
import type {OperatedStatementAbstractTreeNode} from "../../../abstract-syntax-tree/tree-node-types/operated-statement/OperatedStatementAbstractTreeNode.ts";
import type {BlockContentConcreteTreeNode} from "../../../concrete-syntax-tree/tree-node-types/block-content/BlockContentConcreteTreeNode.ts";
import {abstractifyStatements} from "../statements/abstractifyStatements.ts";

export function abstractifyBlockContent(
	blockContent: BlockContentConcreteTreeNode,
): readonly [
	BlockAbstractTreeNode | FunctionCallAbstractTreeNode,
	...OperatedStatementAbstractTreeNode[],
] {
	const [, statements] = blockContent.children;
	const abstractifiedStatements = abstractifyStatements(statements);
	return abstractifiedStatements;
}
