import type {OperatedStatementAbstractTreeNode} from "../../../abstract-syntax-tree/tree-node-types/operated-statement/OperatedStatementAbstractTreeNode.ts";
import type {StatementsRestStatementsConcreteTreeNode} from "../../../concrete-syntax-tree/tree-node-types/statements-rest-statements/StatementsRestStatementsConcreteTreeNode.ts";

export function abstractifyStatementsRestStatements(
	statementsRestStatements: StatementsRestStatementsConcreteTreeNode,
): readonly OperatedStatementAbstractTreeNode[] {}
