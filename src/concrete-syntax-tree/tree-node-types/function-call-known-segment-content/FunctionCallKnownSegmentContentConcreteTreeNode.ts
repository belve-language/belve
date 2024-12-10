import type {ConcreteTreeNode} from "../../ConcreteTreeNode.ts";
import type {FunctionCallKnownSegmentContentConcreteTreeNodeChildren} from "./FunctionCallKnownSegmentContentConcreteTreeNodeChildren.ts";
import type {functionCallKnownSegmentContentConcreteTreeNodeTypeName} from "./functionCallKnownSegmentContentConcreteTreeNodeTypeName.ts";

export type FunctionCallKnownSegmentContentConcreteTreeNode = ConcreteTreeNode<
	typeof functionCallKnownSegmentContentConcreteTreeNodeTypeName,
	FunctionCallKnownSegmentContentConcreteTreeNodeChildren
>;
