import type {AbstractSyntaxTreeNode} from "../../AbstractSyntaxTreeNode.ts";
import type {FunctionHeaderKnownSegmentAbstractSyntaxTreeNodeChildren} from "./FunctionHeaderKnownSegmentAbstractSyntaxTreeNodeChildren.ts";
import type {functionHeaderKnownSegmentAbstractSyntaxTreeNodeTypeName} from "./functionHeaderKnownSegmentAbstractSyntaxTreeNodeTypeName.ts";
export type FunctionHeaderKnownSegmentAbstractSyntaxTreeNode = AbstractSyntaxTreeNode<
	typeof functionHeaderKnownSegmentAbstractSyntaxTreeNodeTypeName,
	FunctionHeaderKnownSegmentAbstractSyntaxTreeNodeChildren
>;
