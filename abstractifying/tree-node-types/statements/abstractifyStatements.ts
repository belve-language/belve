import type {BlockAbstractSyntaxTreeNode} from "../../../abstract-syntax-tree/tree-node-types/block/BlockAbstractSyntaxTreeNode.ts";
import type {FunctionCallAbstractSyntaxTreeNode} from "../../../abstract-syntax-tree/tree-node-types/function-call/FunctionCallAbstractSyntaxTreeNode.ts";
import type {OperatedStatementAbstractSyntaxTreeNode} from "../../../abstract-syntax-tree/tree-node-types/operated-statement/OperatedStatementAbstractSyntaxTreeNode.ts";
import type {StatementsConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree/tree-node-types/statements/StatementsConcreteSyntaxTreeNode.ts";
import {abstractifyStatement} from "../statements-rest-statements/abstractifying-statenent/abstractifyStatement.ts";
import {abstractifyStatementsRestStatements} from "../statements-rest-statements/abstractifyStatementsRestStatements.ts";
export function abstractifyStatements(
	statements: StatementsConcreteSyntaxTreeNode,
): readonly [
	BlockAbstractSyntaxTreeNode | FunctionCallAbstractSyntaxTreeNode,
	...OperatedStatementAbstractSyntaxTreeNode[],
] {
	const [statementsFirstStatement, statementsRestStatements] = statements.children;
	const abstractifiedStatementsFirstStatement:
		| FunctionCallAbstractSyntaxTreeNode
		| BlockAbstractSyntaxTreeNode = abstractifyStatement(statementsFirstStatement);
	if (statementsRestStatements === null) {
		return [abstractifiedStatementsFirstStatement] as const;
	}
	const abstractifiedStatementsRestStatements: readonly [
		OperatedStatementAbstractSyntaxTreeNode,
		...OperatedStatementAbstractSyntaxTreeNode[],
	] = abstractifyStatementsRestStatements(statementsRestStatements);
	return [abstractifiedStatementsFirstStatement, ...abstractifiedStatementsRestStatements] as const;
}
