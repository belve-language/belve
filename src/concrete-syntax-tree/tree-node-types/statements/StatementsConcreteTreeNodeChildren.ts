import type {StatementsRestStatementsConcreteTreeNode} from "../statements-rest-statements/StatementsRestStatementsConcreteTreeNode.ts";
import type {BlockConcreteTreeNode} from "../block/BlockConcreteTreeNode.ts";
import type {FunctionCallConcreteTreeNode} from "../function-call/FunctionCallConcreteTreeNode.ts";

export type StatementsConcreteTreeNodeChildren = readonly [
	firstStatement: FunctionCallConcreteTreeNode | BlockConcreteTreeNode,
	restStatements: StatementsRestStatementsConcreteTreeNode | null,
];
