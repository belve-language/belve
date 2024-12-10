import type {BlockAbstractSyntaxTreeNode} from "../block/BlockAbstractSyntaxTreeNode.ts";
export type FunctionBodyAbstractSyntaxTreeNodeChildren = Readonly<{
	block: BlockAbstractSyntaxTreeNode;
}>;
