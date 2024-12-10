import type {ConcreteTreeNode} from "../../ConcreteTreeNode.ts";
import type {FunctionsSeparatedRestFunctionsConcreteTreeNodeChildren} from "./FunctionsSeparatedRestFunctionsConcreteTreeNodeChildren.ts";
import type {functionsSeparatedRestFunctionsConcreteTreeNodeTypeName} from "./functionsSeparatedRestFunctionsConcreteTreeNodeTypeName.ts";

export type FunctionsSeparatedRestFunctionsConcreteTreeNode = ConcreteTreeNode<
	typeof functionsSeparatedRestFunctionsConcreteTreeNodeTypeName,
	FunctionsSeparatedRestFunctionsConcreteTreeNodeChildren
>;
