import type {BranchConcreteSyntaxTreeNode} from "../../BranchConcreteSyntaxTreeNode.ts";
import type {BlockContentConcreteSyntaxTreeNodeChildren} from "./BlockContentConcreteSyntaxTreeNodeChildren.ts";
import type {blockContentConcreteSyntaxTreeNodeTypeName} from "./blockContentConcreteSyntaxTreeNodeTypeName.ts";
export type BlockContentConcreteSyntaxTreeNode = BranchConcreteSyntaxTreeNode<
	typeof blockContentConcreteSyntaxTreeNodeTypeName,
	BlockContentConcreteSyntaxTreeNodeChildren
>;
