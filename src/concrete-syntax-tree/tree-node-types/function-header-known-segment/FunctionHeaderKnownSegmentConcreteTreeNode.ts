import type {ConcreteTreeNode} from "../../ConcreteTreeNode.ts";
import type {FunctionHeaderKnownSegmentConcreteTreeNodeChildren} from "./FunctionHeaderKnownSegmentConcreteTreeNodeChildren.ts";
import type {functionHeaderKnownSegmentConcreteTreeNodeTypeName} from "./functionHeaderKnownSegmentConcreteTreeNodeTypeName.ts";

export type FunctionHeaderKnownSegmentConcreteTreeNode = ConcreteTreeNode<
	typeof functionHeaderKnownSegmentConcreteTreeNodeTypeName,
	FunctionHeaderKnownSegmentConcreteTreeNodeChildren
>;
