import {createConcreteTreeNode} from "../../createConcreteTreeNode.ts";
import type {FunctionsConcreteTreeNode} from "../functions/FunctionsConcreteTreeNode.ts";
import type {WhitespaceCharactersConcreteTreeNode} from "../whitespace-characters/WhitespaceCharactersConcreteTreeNode.ts";
import {functionsSeparatedRestFunctionsConcreteTreeNodeTypeName} from "./functionsSeparatedRestFunctionsConcreteTreeNodeTypeName.ts";
import type {FunctionsSeparatedRestFunctionsConcreteTreeNode} from "./FunctionsSeparatedRestFunctionsConcreteTreeNode.ts";

export function createFunctionsSeparatedRestFunctionsConcreteTreeNode(
	whitespaceCharacters: WhitespaceCharactersConcreteTreeNode,
	functions: FunctionsConcreteTreeNode,
): FunctionsSeparatedRestFunctionsConcreteTreeNode {
	return createConcreteTreeNode(functionsSeparatedRestFunctionsConcreteTreeNodeTypeName, [
		whitespaceCharacters,
		functions,
	]);
}
