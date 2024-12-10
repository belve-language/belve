import type {StatementsRestStatementsConcreteSyntaxTreeNode} from "../statements-rest-statements/StatementsRestStatementsConcreteSyntaxTreeNode.ts";
import type {BlockConcreteSyntaxTreeNode} from "../block/BlockConcreteSyntaxTreeNode.ts";
import type {FunctionCallConcreteSyntaxTreeNode} from "../function-call/FunctionCallConcreteSyntaxTreeNode.ts";
export type StatementsConcreteSyntaxTreeNodeChildren = readonly [
	firstStatement: FunctionCallConcreteSyntaxTreeNode | BlockConcreteSyntaxTreeNode,
	restStatements: StatementsRestStatementsConcreteSyntaxTreeNode | null,
];
