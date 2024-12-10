import type {FunctionConcreteSyntaxTreeNode} from "../function/FunctionConcreteSyntaxTreeNode.ts";
import type {FunctionsSeparatedRestFunctionsConcreteSyntaxTreeNode} from "../functions-separated-rest-functions/FunctionsSeparatedRestFunctionsConcreteSyntaxTreeNode.ts";
import type {FunctionsConcreteSyntaxTreeNode} from "./FunctionsConcreteSyntaxTreeNode.ts";
export type FunctionsConcreteSyntaxTreeNodeChildren = readonly [
	firstFunction: FunctionConcreteSyntaxTreeNode,
	restFunctions:
		| FunctionsSeparatedRestFunctionsConcreteSyntaxTreeNode
		| null
		| FunctionsConcreteSyntaxTreeNode,
];
