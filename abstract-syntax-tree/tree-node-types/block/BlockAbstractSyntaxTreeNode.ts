import type {AbstractSyntaxTreeNode} from "../../AbstractSyntaxTreeNode.ts";
import type {BlockAbstractSyntaxTreeNodeChildren} from "./BlockAbstractSyntaxTreeNodeChildren.ts";
import type {blockAbstractSyntaxTreeNodeTypeName} from "./blockAbstractSyntaxTreeNodeTypeName.ts";
export type BlockAbstractSyntaxTreeNode = AbstractSyntaxTreeNode<
	typeof blockAbstractSyntaxTreeNodeTypeName,
	BlockAbstractSyntaxTreeNodeChildren
>;
