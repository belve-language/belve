import type {FunctionsConcreteSyntaxTreeNode} from "../functions/FunctionsConcreteSyntaxTreeNode.ts";
import type {WhitespaceConcreteSyntaxTreeNode} from "../whitespace/WhitespaceConcreteSyntaxTreeNode.ts";
export type FunctionsSeparatedRestFunctionsConcreteSyntaxTreeNodeChildren = readonly [
	whitespace: WhitespaceConcreteSyntaxTreeNode,
	functions: FunctionsConcreteSyntaxTreeNode,
];
