import type {AbstractTreeNode} from "../../AbstractTreeNode.ts";
import type {FunctionHeaderKnownSegmentAbstractTreeNodeChildren} from "./FunctionHeaderKnownSegmentAbstractTreeNodeChildren.ts";
import type {functionHeaderKnownSegmentAbstractTreeNodeTypeName} from "./functionHeaderKnownSegmentAbstractTreeNodeTypeName.ts";

export type FunctionHeaderKnownSegmentAbstractTreeNode = AbstractTreeNode<
	typeof functionHeaderKnownSegmentAbstractTreeNodeTypeName,
	FunctionHeaderKnownSegmentAbstractTreeNodeChildren
>;
