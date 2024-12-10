import type {BranchConcreteSyntaxTreeNode} from "../../BranchConcreteSyntaxTreeNode.ts";
import type {StatementsConcreteSyntaxTreeNodeChildren} from "./StatementsConcreteSyntaxTreeNodeChildren.ts";
import type {statementsConcreteSyntaxTreeNodeTypeName} from "./statementsConcreteSyntaxTreeNodeTypeName.ts";
export type StatementsConcreteSyntaxTreeNode = BranchConcreteSyntaxTreeNode<
	typeof statementsConcreteSyntaxTreeNodeTypeName,
	StatementsConcreteSyntaxTreeNodeChildren
>;
