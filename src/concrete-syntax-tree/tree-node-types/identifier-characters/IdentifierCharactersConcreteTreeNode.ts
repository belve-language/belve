import type {ConcreteTreeNode} from "../../ConcreteTreeNode.ts";
import type {IdentifierCharactersConcreteTreeNodeChildren} from "./IdentifierCharactersConcreteTreeNodeChildren.ts";
import type {identifierCharactersConcreteTreeNodeTypeName} from "./identifierCharactersConcreteTreeNodeTypeName.ts";

export type IdentifierCharactersConcreteTreeNode = ConcreteTreeNode<
	typeof identifierCharactersConcreteTreeNodeTypeName,
	IdentifierCharactersConcreteTreeNodeChildren
>;
