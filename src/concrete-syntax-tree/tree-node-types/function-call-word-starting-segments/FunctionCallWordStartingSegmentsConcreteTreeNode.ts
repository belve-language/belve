import type {ConcreteTreeNode} from "../../ConcreteTreeNode.ts";
import type {FunctionCallWordStartingSegmentsConcreteTreeNodeChildren} from "./FunctionCallWordStartingSegmentsConcreteTreeNodeChildren.ts";
import type {functionCallWordStartingSegmentsConcreteTreeNodeTypeName} from "./functionCallWordStartingSegmentsConcreteTreeNodeTypeName.ts";

export type FunctionCallWordStartingSegmentsConcreteTreeNode = ConcreteTreeNode<
	typeof functionCallWordStartingSegmentsConcreteTreeNodeTypeName,
	FunctionCallWordStartingSegmentsConcreteTreeNodeChildren
>;
