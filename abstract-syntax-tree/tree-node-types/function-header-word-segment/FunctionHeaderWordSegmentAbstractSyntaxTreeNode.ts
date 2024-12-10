import type {AbstractSyntaxTreeNode} from "../../AbstractSyntaxTreeNode.ts";
import type {FunctionHeaderWordSegmentAbstractSyntaxTreeNodeChildren} from "./FunctionHeaderWordSegmentAbstractSyntaxTreeNodeChildren.ts";
import type {functionHeaderWordSegmentAbstractSyntaxTreeNodeTypeName} from "./functionHeaderWordSegmentAbstractSyntaxTreeNodeTypeName.ts";
export type FunctionHeaderWordSegmentAbstractSyntaxTreeNode = AbstractSyntaxTreeNode<
	typeof functionHeaderWordSegmentAbstractSyntaxTreeNodeTypeName,
	FunctionHeaderWordSegmentAbstractSyntaxTreeNodeChildren
>;
