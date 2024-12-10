import {createConcreteTreeNode} from "../../createConcreteTreeNode.ts";
import type {IdentifierCharactersConcreteTreeNode} from "../identifier-characters/IdentifierCharactersConcreteTreeNode.ts";
import type {FunctionHeaderWordSegmentConcreteTreeNode} from "./FunctionHeaderWordSegmentConcreteTreeNode.ts";
import {functionHeaderWordSegmentConcreteTreeNodeTypeName} from "./functionHeaderWordSegmentConcreteTreeNodeTypeName.ts";

export function createFunctionHeaderWordSegmentConcreteTreeNode(
	identifierCharacters: IdentifierCharactersConcreteTreeNode,
): FunctionHeaderWordSegmentConcreteTreeNode {
	return createConcreteTreeNode(functionHeaderWordSegmentConcreteTreeNodeTypeName, [
		identifierCharacters,
	]);
}
