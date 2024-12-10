import {createBranchConcreteSyntaxTreeNode} from "../../createBranchConcreteSyntaxTreeNode.ts";
import type {SpanIndexes} from "../../span-indexes/SpanIndexes.ts";
import type {BlockConcreteSyntaxTreeNode} from "../block/BlockConcreteSyntaxTreeNode.ts";
import type {FunctionCallConcreteSyntaxTreeNode} from "../function-call/FunctionCallConcreteSyntaxTreeNode.ts";
import type {StatementsRestStatementsConcreteSyntaxTreeNode} from "../statements-rest-statements/StatementsRestStatementsConcreteSyntaxTreeNode.ts";
import type {StatementsConcreteSyntaxTreeNode} from "./StatementsConcreteSyntaxTreeNode.ts";
import {statementsConcreteSyntaxTreeNodeTypeName} from "./statementsConcreteSyntaxTreeNodeTypeName.ts";
export function createStatementsConcreteSyntaxTreeNode(
	firstStatement: FunctionCallConcreteSyntaxTreeNode | BlockConcreteSyntaxTreeNode,
	restStatements: StatementsRestStatementsConcreteSyntaxTreeNode | null,
	spanIndexes: SpanIndexes,
): StatementsConcreteSyntaxTreeNode {
	const treeNode: StatementsConcreteSyntaxTreeNode = createBranchConcreteSyntaxTreeNode(
		statementsConcreteSyntaxTreeNodeTypeName,
		[firstStatement, restStatements] as const,
		spanIndexes,
	);
	return treeNode;
}
