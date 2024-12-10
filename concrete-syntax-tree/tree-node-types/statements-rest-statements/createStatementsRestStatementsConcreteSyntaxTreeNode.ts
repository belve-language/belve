import {createBranchConcreteSyntaxTreeNode} from "../../createBranchConcreteSyntaxTreeNode.ts";
import type {SpanIndexes} from "../../span-indexes/SpanIndexes.ts";
import type {OperatorConcreteSyntaxTreeNode} from "../operator/OperatorConcreteSyntaxTreeNode.ts";
import type {StatementsConcreteSyntaxTreeNode} from "../statements/StatementsConcreteSyntaxTreeNode.ts";
import type {WhitespaceConcreteSyntaxTreeNode} from "../whitespace/WhitespaceConcreteSyntaxTreeNode.ts";
import type {StatementsRestStatementsConcreteSyntaxTreeNode} from "./StatementsRestStatementsConcreteSyntaxTreeNode.ts";
import {statementsRestStatementsConcreteSyntaxTreeNodeTypeName} from "./statementsRestStatementsConcreteSyntaxTreeNodeTypeName.ts";
export function createStatementsRestStatementsConcreteSyntaxTreeNode(
	beforeOperatorWhitespace: WhitespaceConcreteSyntaxTreeNode | null,
	operator: OperatorConcreteSyntaxTreeNode,
	afterOperatorWhitespace: WhitespaceConcreteSyntaxTreeNode | null,
	statements: StatementsConcreteSyntaxTreeNode,
	spanIndexes: SpanIndexes,
): StatementsRestStatementsConcreteSyntaxTreeNode {
	const treeNode: StatementsRestStatementsConcreteSyntaxTreeNode =
		createBranchConcreteSyntaxTreeNode(
			statementsRestStatementsConcreteSyntaxTreeNodeTypeName,
			[beforeOperatorWhitespace, operator, afterOperatorWhitespace, statements] as const,
			spanIndexes,
		);
	return treeNode;
}
