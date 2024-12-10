import type {BlockAbstractSyntaxTreeNode} from "../../../abstract-syntax-tree/tree-node-types/block/BlockAbstractSyntaxTreeNode.ts";
import {createBlockAbstractSyntaxTreeNode} from "../../../abstract-syntax-tree/tree-node-types/block/createBlockAbstractSyntaxTreeNode.ts";
import type {FunctionCallAbstractSyntaxTreeNode} from "../../../abstract-syntax-tree/tree-node-types/function-call/FunctionCallAbstractSyntaxTreeNode.ts";
import type {OperatedStatementAbstractSyntaxTreeNode} from "../../../abstract-syntax-tree/tree-node-types/operated-statement/OperatedStatementAbstractSyntaxTreeNode.ts";
import type {BlockConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree/tree-node-types/block/BlockConcreteSyntaxTreeNode.ts";
import {whitespaceConcreteSyntaxTreeNodeTypeName} from "../../../concrete-syntax-tree/tree-node-types/whitespace/whitespaceConcreteSyntaxTreeNodeTypeName.ts";
import {abstractifyBlockContent} from "../block-content/abstractifyBlockContent.ts";
export function abstractifyBlock(block: BlockConcreteSyntaxTreeNode): BlockAbstractSyntaxTreeNode {
	const [, blockContent] = block.children;
	if (blockContent === null || blockContent.typeName === whitespaceConcreteSyntaxTreeNodeTypeName) {
		throw new Error("A block must have content.");
	}
	const abstractifiedBlockContent: readonly [
		BlockAbstractSyntaxTreeNode | FunctionCallAbstractSyntaxTreeNode,
		...OperatedStatementAbstractSyntaxTreeNode[],
	] = abstractifyBlockContent(blockContent);
	const abstractifiedBlock: BlockAbstractSyntaxTreeNode =
		createBlockAbstractSyntaxTreeNode(abstractifiedBlockContent);
	return abstractifiedBlock;
}
