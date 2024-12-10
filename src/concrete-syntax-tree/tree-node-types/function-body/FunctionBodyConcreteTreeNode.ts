import type {ConcreteTreeNode} from "../../ConcreteTreeNode.ts";
import type {FunctionBodyConcreteTreeNodeChildren} from "./FunctionBodyConcreteTreeNodeChildren.ts";
import type {functionBodyConcreteTreeNodeTypeName} from "./functionBodyConcreteTreeNodeTypeName.ts";

export type FunctionBodyConcreteTreeNode = ConcreteTreeNode<
	typeof functionBodyConcreteTreeNodeTypeName,
	FunctionBodyConcreteTreeNodeChildren
>;
