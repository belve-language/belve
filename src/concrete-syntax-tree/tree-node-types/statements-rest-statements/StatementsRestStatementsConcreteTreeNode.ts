import type {ConcreteTreeNode} from "../../ConcreteTreeNode.ts";
import type {StatementsRestStatementsConcreteTreeNodeChildren} from "./StatementsRestStatementsConcreteTreeNodeChildren.ts";
import type {statementsRestStatementsConcreteTreeNodeTypeName} from "./statementsRestStatementsConcreteTreeNodeTypeName.ts";

export type StatementsRestStatementsConcreteTreeNode = ConcreteTreeNode<
	typeof statementsRestStatementsConcreteTreeNodeTypeName,
	StatementsRestStatementsConcreteTreeNodeChildren
>;
