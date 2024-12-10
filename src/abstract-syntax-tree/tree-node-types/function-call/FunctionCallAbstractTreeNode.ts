import type {AbstractTreeNode} from "../../AbstractTreeNode.ts";
import type {FunctionCallAbstractTreeNodeChildren} from "./FunctionCallAbstractTreeNodeChildren.ts";
import type {functionCallAbstractTreeNodeTypeName} from "./functionCallAbstractTreeNodeTypeName.ts";

export type FunctionCallAbstractTreeNode = AbstractTreeNode<
	typeof functionCallAbstractTreeNodeTypeName,
	FunctionCallAbstractTreeNodeChildren
>;
