import type {ConcreteTreeNode} from "../../ConcreteTreeNode.ts";
import type {FunctionHeaderWordSegmentConcreteTreeNodeChildren} from "./FunctionHeaderWordSegmentConcreteTreeNodeChildren.ts";
import type {functionHeaderWordSegmentConcreteTreeNodeTypeName} from "./functionHeaderWordSegmentConcreteTreeNodeTypeName.ts";

export type FunctionHeaderWordSegmentConcreteTreeNode = ConcreteTreeNode<
	typeof functionHeaderWordSegmentConcreteTreeNodeTypeName,
	FunctionHeaderWordSegmentConcreteTreeNodeChildren
>;
