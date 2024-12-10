import type {BranchConcreteSyntaxTreeNode} from "../../BranchConcreteSyntaxTreeNode.ts";
import type {IdentifierSegmentsConcreteSyntaxTreeNodeChildren} from "./IdentifierSegmentsConcreteSyntaxTreeNodeChildren.ts";
import type {identifierSegmentsConcreteSyntaxTreeNodeTypeName} from "./identifierSegmentsConcreteSyntaxTreeNodeTypeName.ts";
export type IdentifierSegmentsConcreteSyntaxTreeNode = BranchConcreteSyntaxTreeNode<
	typeof identifierSegmentsConcreteSyntaxTreeNodeTypeName,
	IdentifierSegmentsConcreteSyntaxTreeNodeChildren
>;
