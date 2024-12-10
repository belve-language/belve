import type {AbstractTreeNode} from "../../AbstractTreeNode.ts";
import type {BlockAbstractTreeNodeChildren} from "./BlockAbstractTreeNodeChildren.ts";
import type {blockAbstractTreeNodeTypeName} from "./blockAbstractTreeNodeTypeName.ts";

export type BlockAbstractTreeNode = AbstractTreeNode<
	typeof blockAbstractTreeNodeTypeName,
	BlockAbstractTreeNodeChildren
>;
