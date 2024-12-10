import type {AbstractSyntaxTreeNode} from "../../AbstractSyntaxTreeNode.ts";
import type {OperatedStatementAbstractSyntaxTreeNodeChildren} from "./OperatedStatementAbstractSyntaxTreeNodeChildren.ts";
import type {operatedStatementAbstractSyntaxTreeNodeTypeName} from "./operatedStatementAbstractSyntaxTreeNodeTypeName.ts";
export type OperatedStatementAbstractSyntaxTreeNode = AbstractSyntaxTreeNode<
	typeof operatedStatementAbstractSyntaxTreeNodeTypeName,
	OperatedStatementAbstractSyntaxTreeNodeChildren
>;
