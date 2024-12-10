import type {BranchConcreteSyntaxTreeNode} from "../../BranchConcreteSyntaxTreeNode.ts";
import type {SourceFileContentConcreteSyntaxTreeNodeChildren} from "./SourceFileContentConcreteSyntaxTreeNodeChildren.ts";
import type {sourceFileContentConcreteSyntaxTreeNodeTypeName} from "./sourceFileContentConcreteSyntaxTreeNodeTypeName.ts";
export type SourceFileContentConcreteSyntaxTreeNode = BranchConcreteSyntaxTreeNode<
	typeof sourceFileContentConcreteSyntaxTreeNodeTypeName,
	SourceFileContentConcreteSyntaxTreeNodeChildren
>;
