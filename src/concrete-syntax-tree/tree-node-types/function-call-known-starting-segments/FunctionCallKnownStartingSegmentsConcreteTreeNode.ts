import type {ConcreteTreeNode} from "../../ConcreteTreeNode.ts";
import type {FunctionCallKnownStartingSegmentsConcreteTreeNodeChildren} from "./FunctionCallKnownStartingSegmentsConcreteTreeNodeChildren.ts";
import type {functionCallKnownStartingSegmentsConcreteTreeNodeTypeName} from "./functionCallKnownStartingSegmentsConcreteTreeNodeTypeName.ts";

export type FunctionCallKnownStartingSegmentsConcreteTreeNode = ConcreteTreeNode<
	typeof functionCallKnownStartingSegmentsConcreteTreeNodeTypeName,
	FunctionCallKnownStartingSegmentsConcreteTreeNodeChildren
>;
