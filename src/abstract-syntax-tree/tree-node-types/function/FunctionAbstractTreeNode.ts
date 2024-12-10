import type {AbstractTreeNode} from "../../AbstractTreeNode.ts";
import type {FunctionAbstractTreeNodeChildren} from "./FunctionAbstractTreeNodeChildren.ts";
import type {functionAbstractTreeNodeTypeName} from "./functionAbstractTreeNodeTypeName.ts";

export type FunctionAbstractTreeNode = AbstractTreeNode<
	typeof functionAbstractTreeNodeTypeName,
	FunctionAbstractTreeNodeChildren
>;
