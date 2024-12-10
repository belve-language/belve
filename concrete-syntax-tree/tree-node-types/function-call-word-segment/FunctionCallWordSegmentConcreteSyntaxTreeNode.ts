import type {BranchConcreteSyntaxTreeNode} from "../../BranchConcreteSyntaxTreeNode.ts";
import type {FunctionCallWordSegmentConcreteSyntaxTreeNodeChildren} from "./FunctionCallWordSegmentConcreteSyntaxTreeNodeChildren.ts";
import type {functionCallWordSegmentConcreteSyntaxTreeNodeTypeName} from "./functionCallWordSegmentConcreteSyntaxTreeNodeTypeName.ts";
export type FunctionCallWordSegmentConcreteSyntaxTreeNode = BranchConcreteSyntaxTreeNode<
	typeof functionCallWordSegmentConcreteSyntaxTreeNodeTypeName,
	FunctionCallWordSegmentConcreteSyntaxTreeNodeChildren
>;
