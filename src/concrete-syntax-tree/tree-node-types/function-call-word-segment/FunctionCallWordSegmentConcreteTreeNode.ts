import type {ConcreteTreeNode} from "../../ConcreteTreeNode.ts";
import type {FunctionCallWordSegmentConcreteTreeNodeChildren} from "./FunctionCallWordSegmentConcreteTreeNodeChildren.ts";
import type {functionCallWordSegmentConcreteTreeNodeTypeName} from "./functionCallWordSegmentConcreteTreeNodeTypeName.ts";

export type FunctionCallWordSegmentConcreteTreeNode = ConcreteTreeNode<
	typeof functionCallWordSegmentConcreteTreeNodeTypeName,
	FunctionCallWordSegmentConcreteTreeNodeChildren
>;
