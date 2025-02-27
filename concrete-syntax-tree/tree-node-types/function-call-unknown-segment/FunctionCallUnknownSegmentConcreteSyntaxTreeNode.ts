import type {BranchConcreteSyntaxTreeNode} from "../../BranchConcreteSyntaxTreeNode.ts";
import type {FunctionCallUnknownSegmentConcreteSyntaxTreeNodeChildren} from "./FunctionCallUnknownSegmentConcreteSyntaxTreeNodeChildren.ts";
import type {functionCallUnknownSegmentConcreteSyntaxTreeNodeTypeName} from "./functionCallUnknownSegmentConcreteSyntaxTreeNodeTypeName.ts";
export type FunctionCallUnknownSegmentConcreteSyntaxTreeNode = BranchConcreteSyntaxTreeNode<
	typeof functionCallUnknownSegmentConcreteSyntaxTreeNodeTypeName,
	FunctionCallUnknownSegmentConcreteSyntaxTreeNodeChildren
>;
