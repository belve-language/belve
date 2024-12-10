import type {BranchConcreteSyntaxTreeNode} from "../../BranchConcreteSyntaxTreeNode.ts";
import type {FunctionConcreteSyntaxTreeNodeChildren} from "./FunctionConcreteSyntaxTreeNodeChildren.ts";
import type {functionConcreteSyntaxTreeNodeTypeName} from "./functionConcreteSyntaxTreeNodeTypeName.ts";
export type FunctionConcreteSyntaxTreeNode = BranchConcreteSyntaxTreeNode<
	typeof functionConcreteSyntaxTreeNodeTypeName,
	FunctionConcreteSyntaxTreeNodeChildren
>;
