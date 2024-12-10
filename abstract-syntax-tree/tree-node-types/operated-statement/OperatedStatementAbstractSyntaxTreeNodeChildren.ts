import type {Operator} from "../../operator/Operator.ts";
import type {BlockAbstractSyntaxTreeNode} from "../block/BlockAbstractSyntaxTreeNode.ts";
import type {FunctionCallAbstractSyntaxTreeNode} from "../function-call/FunctionCallAbstractSyntaxTreeNode.ts";
export type OperatedStatementAbstractSyntaxTreeNodeChildren = Readonly<{
	statement: BlockAbstractSyntaxTreeNode | FunctionCallAbstractSyntaxTreeNode;
	operator: Operator;
}>;
