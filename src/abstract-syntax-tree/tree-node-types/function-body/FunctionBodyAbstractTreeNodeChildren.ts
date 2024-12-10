import type {BlockAbstractTreeNode} from "../block/BlockAbstractTreeNode.ts";

export type FunctionBodyAbstractTreeNodeChildren = Readonly<{
	block: BlockAbstractTreeNode;
}>;
