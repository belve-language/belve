import type {ConcreteTreeNode} from "../../ConcreteTreeNode.ts";
import type {FunctionCallKnownSegmentConcreteTreeNodeChildren} from "./FunctionCallKnownSegmentConcreteTreeNodeChildren.ts";
import type {functionCallKnownSegmentConcreteTreeNodeTypeName} from "./functionCallKnownSegmentConcreteTreeNodeTypeName.ts";

export type FunctionCallKnownSegmentConcreteTreeNode = ConcreteTreeNode<
	typeof functionCallKnownSegmentConcreteTreeNodeTypeName,
	FunctionCallKnownSegmentConcreteTreeNodeChildren
>;
