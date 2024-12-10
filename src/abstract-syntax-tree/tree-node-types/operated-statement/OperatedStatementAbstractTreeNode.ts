import type {AbstractTreeNode} from "../../AbstractTreeNode.ts";
import type {OperatedStatementAbstractTreeNodeChildren} from "./OperatedStatementAbstractTreeNodeChildren.ts";
import type {operatedStatementAbstractTreeNodeTypeName} from "./operatedStatementAbstractTreeNodeTypeName.ts";

export type OperatedStatementAbstractTreeNode = AbstractTreeNode<
	typeof operatedStatementAbstractTreeNodeTypeName,
	OperatedStatementAbstractTreeNodeChildren
>;
