import {createConcreteTreeNode} from "../../createConcreteTreeNode.ts";
import type {BlockConcreteTreeNode} from "../block/BlockConcreteTreeNode.ts";
import type {FunctionCallConcreteTreeNode} from "../function-call/FunctionCallConcreteTreeNode.ts";
import type {StatementsRestStatementsConcreteTreeNode} from "../statements-rest-statements/StatementsRestStatementsConcreteTreeNode.ts";
import type {StatementsConcreteTreeNode} from "./StatementsConcreteTreeNode.ts";
import {statementsConcreteTreeNodeTypeName} from "./statementsConcreteTreeNodeTypeName.ts";

export function createStatementsConcreteTreeNode(
	firstStatement: FunctionCallConcreteTreeNode | BlockConcreteTreeNode,
	restStatements: StatementsRestStatementsConcreteTreeNode | null,
): StatementsConcreteTreeNode {
	return createConcreteTreeNode(statementsConcreteTreeNodeTypeName, [
		firstStatement,
		restStatements,
	]);
}
