import type {AbstractTreeNode} from "../../AbstractTreeNode.ts";
import type {FunctionBodyAbstractTreeNodeChildren} from "./FunctionBodyAbstractTreeNodeChildren.ts";
import type {functionBodyAbstractTreeNodeTypeName} from "./functionBodyAbstractTreeNodeTypeName.ts";

export type FunctionBodyAbstractTreeNode = AbstractTreeNode<
	typeof functionBodyAbstractTreeNodeTypeName,
	FunctionBodyAbstractTreeNodeChildren
>;
