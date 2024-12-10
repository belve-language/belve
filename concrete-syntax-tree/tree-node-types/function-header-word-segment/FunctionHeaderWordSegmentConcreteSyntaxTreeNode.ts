import type {BranchConcreteSyntaxTreeNode} from "../../BranchConcreteSyntaxTreeNode.ts";
import type {FunctionHeaderWordSegmentConcreteSyntaxTreeNodeChildren} from "./FunctionHeaderWordSegmentConcreteSyntaxTreeNodeChildren.ts";
import type {functionHeaderWordSegmentConcreteSyntaxTreeNodeTypeName} from "./functionHeaderWordSegmentConcreteSyntaxTreeNodeTypeName.ts";
export type FunctionHeaderWordSegmentConcreteSyntaxTreeNode = BranchConcreteSyntaxTreeNode<
	typeof functionHeaderWordSegmentConcreteSyntaxTreeNodeTypeName,
	FunctionHeaderWordSegmentConcreteSyntaxTreeNodeChildren
>;
