import type {ConcreteTreeNode} from "../../ConcreteTreeNode.ts";
import type {WhitespaceCharactersConcreteTreeNodeChildren} from "./WhitespaceCharactersConcreteTreeNodeChildren.ts";
import type {whitespaceCharactersConcreteTreeNodeTypeName} from "./whitespaceCharactersConcreteTreeNodeTypeName.ts";

export type WhitespaceCharactersConcreteTreeNode = ConcreteTreeNode<
	typeof whitespaceCharactersConcreteTreeNodeTypeName,
	WhitespaceCharactersConcreteTreeNodeChildren
>;
