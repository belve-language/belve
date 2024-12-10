import type {AbstractTreeNode} from "../../AbstractTreeNode.ts";
import type {FunctionHeaderWordSegmentAbstractTreeNodeChildren} from "./FunctionHeaderWordSegmentAbstractTreeNodeChildren.ts";
import type {functionHeaderWordSegmentAbstractTreeNodeTypeName} from "./functionHeaderWordSegmentAbstractTreeNodeTypeName.ts";

export type FunctionHeaderWordSegmentAbstractTreeNode = AbstractTreeNode<
	typeof functionHeaderWordSegmentAbstractTreeNodeTypeName,
	FunctionHeaderWordSegmentAbstractTreeNodeChildren
>;
