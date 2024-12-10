import type {BranchConcreteSyntaxTreeNode} from "../../BranchConcreteSyntaxTreeNode.ts";
import type {WhitespaceSegmentsConcreteSyntaxTreeNodeChildren} from "./WhitespaceSegmentsConcreteSyntaxTreeNodeChildren.ts";
import type {whitespaceSegmentsConcreteSyntaxTreeNodeTypeName} from "./whitespaceSegmentsConcreteSyntaxTreeNodeTypeName.ts";
export type WhitespaceSegmentsConcreteSyntaxTreeNode = BranchConcreteSyntaxTreeNode<
	typeof whitespaceSegmentsConcreteSyntaxTreeNodeTypeName,
	WhitespaceSegmentsConcreteSyntaxTreeNodeChildren
>;
