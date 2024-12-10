import type {ConcreteTreeNode} from "../../ConcreteTreeNode.ts";
import type {StatementsConcreteTreeNodeChildren} from "./StatementsConcreteTreeNodeChildren.ts";
import type {statementsConcreteTreeNodeTypeName} from "./statementsConcreteTreeNodeTypeName.ts";

export type StatementsConcreteTreeNode = ConcreteTreeNode<
	typeof statementsConcreteTreeNodeTypeName,
	StatementsConcreteTreeNodeChildren
>;
