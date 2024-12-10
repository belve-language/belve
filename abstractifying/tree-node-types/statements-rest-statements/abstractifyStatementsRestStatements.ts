import type {BlockAbstractSyntaxTreeNode} from "../../../abstract-syntax-tree/tree-node-types/block/BlockAbstractSyntaxTreeNode.ts";
import type {FunctionCallAbstractSyntaxTreeNode} from "../../../abstract-syntax-tree/tree-node-types/function-call/FunctionCallAbstractSyntaxTreeNode.ts";
import {createOperatedStatementAbstractSyntaxTreeNode} from "../../../abstract-syntax-tree/tree-node-types/operated-statement/createOperatedStatementAbstractSyntaxTreeNode.ts";
import type {OperatedStatementAbstractSyntaxTreeNode} from "../../../abstract-syntax-tree/tree-node-types/operated-statement/OperatedStatementAbstractSyntaxTreeNode.ts";
import type {StatementsRestStatementsConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree/tree-node-types/statements-rest-statements/StatementsRestStatementsConcreteSyntaxTreeNode.ts";
import {abstractifyOperator} from "../operator/abstractifyOperator.ts";
import {abstractifyStatement} from "./abstractifying-statenent/abstractifyStatement.ts";
export function abstractifyStatementsRestStatements(
	statements: StatementsRestStatementsConcreteSyntaxTreeNode,
): readonly [
	OperatedStatementAbstractSyntaxTreeNode,
	...OperatedStatementAbstractSyntaxTreeNode[],
] {
	const [, statementsOperator, , statementsStatements] = statements.children;
	const abstractifiedStatementsOperator = abstractifyOperator(statementsOperator);
	const [statementsStatementsFirstStatement, statementsStatementsRestStatement] =
		statementsStatements.children;
	const abstractifiedFirstStatement:
		| FunctionCallAbstractSyntaxTreeNode
		| BlockAbstractSyntaxTreeNode = abstractifyStatement(statementsStatementsFirstStatement);
	const abstractifiedOperatedStatementsStatementsFirstStatement: OperatedStatementAbstractSyntaxTreeNode =
		createOperatedStatementAbstractSyntaxTreeNode(
			abstractifiedStatementsOperator,
			abstractifiedFirstStatement,
		);
	if (statementsStatementsRestStatement === null) {
		return [abstractifiedOperatedStatementsStatementsFirstStatement];
	}
	const abstractifiedStatementsStatementsRestStatement: readonly [
		OperatedStatementAbstractSyntaxTreeNode,
		...OperatedStatementAbstractSyntaxTreeNode[],
	] = abstractifyStatementsRestStatements(statementsStatementsRestStatement);
	return [
		abstractifiedOperatedStatementsStatementsFirstStatement,
		...abstractifiedStatementsStatementsRestStatement,
	];
}
