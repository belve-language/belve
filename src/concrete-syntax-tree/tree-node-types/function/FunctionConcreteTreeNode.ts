import type {ConcreteTreeNode} from "../../ConcreteTreeNode.ts";
import type {FunctionConcreteTreeNodeChildren} from "./FunctionConcreteTreeNodeChildren.ts";
import type {functionConcreteTreeNodeTypeName} from "./functionConcreteTreeNodeTypeName.ts";

export type FunctionConcreteTreeNode = ConcreteTreeNode<
	typeof functionConcreteTreeNodeTypeName,
	FunctionConcreteTreeNodeChildren
>;
