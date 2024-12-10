import type {AbstractTreeNode} from "../../AbstractTreeNode.ts";
import type {FunctionHeaderAbstractTreeNodeChildren} from "./FunctionHeaderAbstractTreeNodeChildren.ts";
import type {functionHeaderAbstractTreeNodeTypeName} from "./functionHeaderAbstractTreeNodeTypeName.ts";

export type FunctionHeaderAbstractTreeNode = AbstractTreeNode<
	typeof functionHeaderAbstractTreeNodeTypeName,
	FunctionHeaderAbstractTreeNodeChildren
>;
