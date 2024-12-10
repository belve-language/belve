import type {BlockAbstractTreeNode} from "../block/BlockAbstractTreeNode.ts";
import type {FunctionCallAbstractTreeNode} from "../function-call/FunctionCallAbstractTreeNode.ts";

export type OperatedStatementAbstractTreeNodeChildren = Readonly<{
	statement: BlockAbstractTreeNode | FunctionCallAbstractTreeNode;
	operator: "and" | "or";
}>;
