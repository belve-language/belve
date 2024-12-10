import type {AbstractSyntaxTreeNode} from "../../AbstractSyntaxTreeNode.ts";
import type {FunctionCallWordSegmentAbstractSyntaxTreeNodeChildren} from "./FunctionCallWordSegmentAbstractSyntaxTreeNodeChildren.ts";
import type {functionCallWordSegmentAbstractSyntaxTreeNodeTypeName} from "./functionCallWordSegmentAbstractSyntaxTreeNodeTypeName.ts";
export type FunctionCallWordSegmentAbstractSyntaxTreeNode = AbstractSyntaxTreeNode<
	typeof functionCallWordSegmentAbstractSyntaxTreeNodeTypeName,
	FunctionCallWordSegmentAbstractSyntaxTreeNodeChildren
>;
