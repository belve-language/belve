import {createConcreteTreeNode} from "../../createConcreteTreeNode.ts";
import type {IdentifierCharactersConcreteTreeNode} from "../identifier-characters/IdentifierCharactersConcreteTreeNode.ts";
import type {FunctionCallWordSegmentConcreteTreeNode} from "./FunctionCallWordSegmentConcreteTreeNode.ts";
import {functionCallWordSegmentConcreteTreeNodeTypeName} from "./functionCallWordSegmentConcreteTreeNodeTypeName.ts";

export function createFunctionCallWordSegmentConcreteTreeNode(
	identifierCharacters: IdentifierCharactersConcreteTreeNode,
): FunctionCallWordSegmentConcreteTreeNode {
	return createConcreteTreeNode(functionCallWordSegmentConcreteTreeNodeTypeName, [
		identifierCharacters,
	]);
}
