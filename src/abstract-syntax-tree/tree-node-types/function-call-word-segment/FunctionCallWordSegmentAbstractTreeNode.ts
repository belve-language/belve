import type {AbstractTreeNode} from "../../AbstractTreeNode.ts";
import type {FunctionCallWordSegmentAbstractTreeNodeChildren} from "./FunctionCallWordSegmentAbstractTreeNodeChildren.ts";
import type {functionCallWordSegmentAbstractTreeNodeTypeName} from "./functionCallWordSegmentAbstractTreeNodeTypeName.ts";

export type FunctionCallWordSegmentAbstractTreeNode = AbstractTreeNode<
	typeof functionCallWordSegmentAbstractTreeNodeTypeName,
	FunctionCallWordSegmentAbstractTreeNodeChildren
>;
