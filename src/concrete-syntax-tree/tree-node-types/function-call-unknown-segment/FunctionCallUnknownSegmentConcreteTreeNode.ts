import type {ConcreteTreeNode} from "../../ConcreteTreeNode.ts";
import type {FunctionCallUnknownSegmentConcreteTreeNodeChildren} from "./FunctionCallUnknownSegmentConcreteTreeNodeChildren.ts";
import type {functionCallUnknownSegmentConcreteTreeNodeTypeName} from "./functionCallUnknownSegmentConcreteTreeNodeTypeName.ts";

export type FunctionCallUnknownSegmentConcreteTreeNode = ConcreteTreeNode<
	typeof functionCallUnknownSegmentConcreteTreeNodeTypeName,
	FunctionCallUnknownSegmentConcreteTreeNodeChildren
>;
