import type {BlockAbstractTreeNode} from "../../../abstract-syntax-tree/tree-node-types/block/BlockAbstractTreeNode.ts";
import type {FunctionCallAbstractTreeNode} from "../../../abstract-syntax-tree/tree-node-types/function-call/FunctionCallAbstractTreeNode.ts";
import type {OperatedStatementAbstractTreeNode} from "../../../abstract-syntax-tree/tree-node-types/operated-statement/OperatedStatementAbstractTreeNode.ts";
import type {StatementsConcreteTreeNode} from "../../../concrete-syntax-tree/tree-node-types/statements/StatementsConcreteTreeNode.ts";

export function abstractifyStatements(
	statements: StatementsConcreteTreeNode,
): readonly [
	BlockAbstractTreeNode | FunctionCallAbstractTreeNode,
	...OperatedStatementAbstractTreeNode[],
] {
	const [firstStatement, restStatements] = statements.children;
	const abstractifiedFirstStatement = abstractifyStatement(firstStatement);

	if (restStatements === null) {
		return [abstractifiedFirstStatement];
	}

	const abstractifiedRestStatements = abstractifyStatementsRestStatements(restStatements);
	return [abstractifiedFirstStatement, ...abstractifiedRestStatements];
}
