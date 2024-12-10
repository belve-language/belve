import type {BranchConcreteSyntaxTreeNode} from "../../BranchConcreteSyntaxTreeNode.ts";
import type {IdentifierConcreteSyntaxTreeNodeChildren} from "./IdentifierConcreteSyntaxTreeNodeChildren.ts";
import type {identifierConcreteSyntaxTreeNodeTypeName} from "./identifierConcreteSyntaxTreeNodeTypeName.ts";
export type IdentifierConcreteSyntaxTreeNode = BranchConcreteSyntaxTreeNode<
	typeof identifierConcreteSyntaxTreeNodeTypeName,
	IdentifierConcreteSyntaxTreeNodeChildren
>;
