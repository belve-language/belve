import type {ConcreteTreeNode} from "../../ConcreteTreeNode.ts";
import type {FunctionHeaderConcreteTreeNodeChildren} from "./FunctionHeaderConcreteTreeNodeChildren.ts";
import type {functionHeaderConcreteTreeNodeTypeName} from "./functionHeaderConcreteTreeNodeTypeName.ts";

export type FunctionHeaderConcreteTreeNode = ConcreteTreeNode<
	typeof functionHeaderConcreteTreeNodeTypeName,
	FunctionHeaderConcreteTreeNodeChildren
>;
