import type {BranchConcreteSyntaxTreeNode} from "../../BranchConcreteSyntaxTreeNode.ts";
import type {BlockConcreteSyntaxTreeNodeChildren} from "./BlockConcreteSyntaxTreeNodeChildren.ts";
import type {blockConcreteSyntaxTreeNodeTypeName} from "./blockConcreteSyntaxTreeNodeTypeName.ts";
export type BlockConcreteSyntaxTreeNode = BranchConcreteSyntaxTreeNode<
	typeof blockConcreteSyntaxTreeNodeTypeName,
	BlockConcreteSyntaxTreeNodeChildren
>;
