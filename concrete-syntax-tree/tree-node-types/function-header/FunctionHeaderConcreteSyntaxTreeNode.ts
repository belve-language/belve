import type {BranchConcreteSyntaxTreeNode} from "../../BranchConcreteSyntaxTreeNode.ts";
import type {FunctionHeaderConcreteSyntaxTreeNodeChildren} from "./FunctionHeaderConcreteSyntaxTreeNodeChildren.ts";
import type {functionHeaderConcreteSyntaxTreeNodeTypeName} from "./functionHeaderConcreteSyntaxTreeNodeTypeName.ts";
export type FunctionHeaderConcreteSyntaxTreeNode = BranchConcreteSyntaxTreeNode<
	typeof functionHeaderConcreteSyntaxTreeNodeTypeName,
	FunctionHeaderConcreteSyntaxTreeNodeChildren
>;
