import type {AbstractTreeNode} from "../../AbstractTreeNode.ts";
import type {FunctionCallUnknownSegmentAbstractTreeNodeChildren} from "./FunctionCallUnknownSegmentAbstractTreeNodeChildren.ts";
import type {functionCallUnknownSegmentAbstractTreeNodeTypeName} from "./functionCallUnknownSegmentAbstractTreeNodeTypeName.ts";

export type FunctionCallUnknownSegmentAbstractTreeNode = AbstractTreeNode<
	typeof functionCallUnknownSegmentAbstractTreeNodeTypeName,
	FunctionCallUnknownSegmentAbstractTreeNodeChildren
>;
