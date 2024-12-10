import type {FunctionsConcreteTreeNode} from "../functions/FunctionsConcreteTreeNode.ts";
import type {WhitespaceCharactersConcreteTreeNode} from "../whitespace-characters/WhitespaceCharactersConcreteTreeNode.ts";

export type FunctionsSeparatedRestFunctionsConcreteTreeNodeChildren = readonly [
	whitespaceCharacters: WhitespaceCharactersConcreteTreeNode,
	functions: FunctionsConcreteTreeNode,
];
