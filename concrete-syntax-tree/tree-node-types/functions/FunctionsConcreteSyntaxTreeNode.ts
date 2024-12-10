import type {BranchConcreteSyntaxTreeNode} from "../../BranchConcreteSyntaxTreeNode.ts";
import type {FunctionsConcreteSyntaxTreeNodeChildren} from "./FunctionsConcreteSyntaxTreeNodeChildren.ts";
import type {functionsConcreteSyntaxTreeNodeTypeName} from "./functionsConcreteSyntaxTreeNodeTypeName.ts";
export type FunctionsConcreteSyntaxTreeNode = BranchConcreteSyntaxTreeNode<
	typeof functionsConcreteSyntaxTreeNodeTypeName,
	FunctionsConcreteSyntaxTreeNodeChildren
>;
