import type {BranchConcreteSyntaxTreeNode} from "../../BranchConcreteSyntaxTreeNode.ts";
import type {FunctionCallConcreteSyntaxTreeNodeChildren} from "./FunctionCallConcreteSyntaxTreeNodeChildren.ts";
import type {functionCallConcreteSyntaxTreeNodeTypeName} from "./functionCallConcreteSyntaxTreeNodeTypeName.ts";
export type FunctionCallConcreteSyntaxTreeNode = BranchConcreteSyntaxTreeNode<
	typeof functionCallConcreteSyntaxTreeNodeTypeName,
	FunctionCallConcreteSyntaxTreeNodeChildren
>;
