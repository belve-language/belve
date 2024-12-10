import type {BranchConcreteSyntaxTreeNode} from "../../BranchConcreteSyntaxTreeNode.ts";
import type {FunctionCallKnownSegmentConcreteSyntaxTreeNodeChildren} from "./FunctionCallKnownSegmentConcreteSyntaxTreeNodeChildren.ts";
import type {functionCallKnownSegmentConcreteSyntaxTreeNodeTypeName} from "./functionCallKnownSegmentConcreteSyntaxTreeNodeTypeName.ts";
export type FunctionCallKnownSegmentConcreteSyntaxTreeNode = BranchConcreteSyntaxTreeNode<
	typeof functionCallKnownSegmentConcreteSyntaxTreeNodeTypeName,
	FunctionCallKnownSegmentConcreteSyntaxTreeNodeChildren
>;
