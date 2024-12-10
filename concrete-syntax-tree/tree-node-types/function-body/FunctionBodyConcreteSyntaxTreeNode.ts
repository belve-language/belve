import type {BranchConcreteSyntaxTreeNode} from "../../BranchConcreteSyntaxTreeNode.ts";
import type {FunctionBodyConcreteSyntaxTreeNodeChildren} from "./FunctionBodyConcreteSyntaxTreeNodeChildren.ts";
import type {functionBodyConcreteSyntaxTreeNodeTypeName} from "./functionBodyConcreteSyntaxTreeNodeTypeName.ts";
export type FunctionBodyConcreteSyntaxTreeNode = BranchConcreteSyntaxTreeNode<
	typeof functionBodyConcreteSyntaxTreeNodeTypeName,
	FunctionBodyConcreteSyntaxTreeNodeChildren
>;
