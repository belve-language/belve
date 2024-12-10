import type {BranchConcreteSyntaxTreeNode} from "../../BranchConcreteSyntaxTreeNode.ts";
import type {WhitespaceConcreteSyntaxTreeNodeChildren} from "./WhitespaceConcreteSyntaxTreeNodeChildren.ts";
import type {whitespaceConcreteSyntaxTreeNodeTypeName} from "./whitespaceConcreteSyntaxTreeNodeTypeName.ts";
export type WhitespaceConcreteSyntaxTreeNode = BranchConcreteSyntaxTreeNode<
	typeof whitespaceConcreteSyntaxTreeNodeTypeName,
	WhitespaceConcreteSyntaxTreeNodeChildren
>;
