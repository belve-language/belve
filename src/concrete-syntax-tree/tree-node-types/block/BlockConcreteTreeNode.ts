import type {ConcreteTreeNode} from "../../ConcreteTreeNode.ts";
import type {BlockConcreteTreeNodeChildren} from "./BlockConcreteTreeNodeChildren.ts";
import type {blockConcreteTreeNodeTypeName} from "./blockConcreteTreeNodeTypeName.ts";
export type BlockConcreteTreeNode = ConcreteTreeNode<
	typeof blockConcreteTreeNodeTypeName,
	BlockConcreteTreeNodeChildren
>;
