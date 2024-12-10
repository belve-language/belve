import type {AbstractTreeNode} from "../../AbstractTreeNode.ts";
import type {FunctionCallKnownSegmentAbstractTreeNodeChildren} from "./FunctionCallKnownSegmentAbstractTreeNodeChildren.ts";
import type {functionCallKnownSegmentAbstractTreeNodeTypeName} from "./functionCallKnownSegmentAbstractTreeNodeTypeName.ts";

export type FunctionCallKnownSegmentAbstractTreeNode = AbstractTreeNode<
	typeof functionCallKnownSegmentAbstractTreeNodeTypeName,
	FunctionCallKnownSegmentAbstractTreeNodeChildren
>;
