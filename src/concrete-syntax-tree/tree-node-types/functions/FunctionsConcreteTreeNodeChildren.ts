import type {FunctionConcreteTreeNode} from "../function/FunctionConcreteTreeNode.ts";
import type {FunctionsSeparatedRestFunctionsConcreteTreeNode} from "../functions-separated-rest-functions/FunctionsSeparatedRestFunctionsConcreteTreeNode.ts";
import type {FunctionsConcreteTreeNode} from "./FunctionsConcreteTreeNode.ts";

export type FunctionsConcreteTreeNodeChildren = readonly [
	firstFunction: FunctionConcreteTreeNode,
	restFunctions: FunctionsSeparatedRestFunctionsConcreteTreeNode | null | FunctionsConcreteTreeNode,
];
