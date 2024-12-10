import type {ConcreteTreeNode} from "../../ConcreteTreeNode.ts";
import type {FunctionCallConcreteTreeNodeChildren} from "./FunctionCallConcreteTreeNodeChildren.ts";
import type {functionCallConcreteTreeNodeTypeName} from "./functionCallConcreteTreeNodeTypeName.ts";

export type FunctionCallConcreteTreeNode = ConcreteTreeNode<
	typeof functionCallConcreteTreeNodeTypeName,
	FunctionCallConcreteTreeNodeChildren
>;
