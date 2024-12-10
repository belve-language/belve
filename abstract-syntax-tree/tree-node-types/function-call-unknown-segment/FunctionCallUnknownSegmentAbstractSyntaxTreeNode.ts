import type {AbstractSyntaxTreeNode} from "../../AbstractSyntaxTreeNode.ts";
import type {FunctionCallUnknownSegmentAbstractSyntaxTreeNodeChildren} from "./FunctionCallUnknownSegmentAbstractSyntaxTreeNodeChildren.ts";
import type {functionCallUnknownSegmentAbstractSyntaxTreeNodeTypeName} from "./functionCallUnknownSegmentAbstractSyntaxTreeNodeTypeName.ts";
export type FunctionCallUnknownSegmentAbstractSyntaxTreeNode = AbstractSyntaxTreeNode<
	typeof functionCallUnknownSegmentAbstractSyntaxTreeNodeTypeName,
	FunctionCallUnknownSegmentAbstractSyntaxTreeNodeChildren
>;
