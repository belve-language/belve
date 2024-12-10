import type {ConcreteTreeNode} from "../../ConcreteTreeNode.ts";
import type {BlockContentConcreteTreeNodeChildren} from "./BlockContentConcreteTreeNodeChildren.ts";
import type {blockContentConcreteTreeNodeTypeName} from "./blockContentConcreteTreeNodeTypeName.ts";

export type BlockContentConcreteTreeNode = ConcreteTreeNode<
	typeof blockContentConcreteTreeNodeTypeName,
	BlockContentConcreteTreeNodeChildren
>;
