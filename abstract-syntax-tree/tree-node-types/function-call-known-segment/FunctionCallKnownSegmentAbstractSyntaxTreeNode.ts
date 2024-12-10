import type {AbstractSyntaxTreeNode} from "../../AbstractSyntaxTreeNode.ts";
import type {FunctionCallKnownSegmentAbstractSyntaxTreeNodeChildren} from "./FunctionCallKnownSegmentAbstractSyntaxTreeNodeChildren.ts";
import type {functionCallKnownSegmentAbstractSyntaxTreeNodeTypeName} from "./functionCallKnownSegmentAbstractSyntaxTreeNodeTypeName.ts";
export type FunctionCallKnownSegmentAbstractSyntaxTreeNode = AbstractSyntaxTreeNode<
	typeof functionCallKnownSegmentAbstractSyntaxTreeNodeTypeName,
	FunctionCallKnownSegmentAbstractSyntaxTreeNodeChildren
>;
