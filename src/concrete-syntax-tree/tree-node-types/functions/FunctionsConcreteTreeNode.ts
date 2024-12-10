import type {ConcreteTreeNode} from "../../ConcreteTreeNode.ts";
import type {FunctionsConcreteTreeNodeChildren} from "./FunctionsConcreteTreeNodeChildren.ts";
import type {functionsConcreteTreeNodeTypeName} from "./functionsConcreteTreeNodeTypeName.ts";

export type FunctionsConcreteTreeNode = ConcreteTreeNode<
	typeof functionsConcreteTreeNodeTypeName,
	FunctionsConcreteTreeNodeChildren
>;
