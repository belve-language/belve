import type {BlockAbstractTreeNode} from "../../../abstract-syntax-tree/tree-node-types/block/BlockAbstractTreeNode.ts";
import {createBlockAbstractTreeNode} from "../../../abstract-syntax-tree/tree-node-types/block/createBlockAbstractTreeNode.ts";
import type {BlockConcreteTreeNode} from "../../../concrete-syntax-tree/tree-node-types/block/BlockConcreteTreeNode.ts";
import {whitespaceCharactersConcreteTreeNodeTypeName} from "../../../concrete-syntax-tree/tree-node-types/whitespace-characters/whitespaceCharactersConcreteTreeNodeTypeName.ts";
import {abstractifyBlockContent} from "../block-content/abstractifyBlockContent.ts";

export function abstractifyBlock(block: BlockConcreteTreeNode): BlockAbstractTreeNode {
	const [, content] = block.children;

	if (content === null || content.typeName === whitespaceCharactersConcreteTreeNodeTypeName) {
		const abstractifiedBlock = createBlockAbstractTreeNode(null);
		return abstractifiedBlock;
	}

	const abstractifiedContent = abstractifyBlockContent(content);

	const abstractifiedBlock = createBlockAbstractTreeNode(abstractifiedContent);

	return abstractifiedBlock;
}
