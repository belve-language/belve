import type {FunctionsConcreteSyntaxTreeNode} from "../functions/FunctionsConcreteSyntaxTreeNode.ts";
import type {WhitespaceConcreteSyntaxTreeNode} from "../whitespace/WhitespaceConcreteSyntaxTreeNode.ts";
export type SourceFileContentConcreteSyntaxTreeNodeChildren = readonly [
	initialWhitespace: WhitespaceConcreteSyntaxTreeNode | null,
	functions: FunctionsConcreteSyntaxTreeNode,
	finalWhitespace: WhitespaceConcreteSyntaxTreeNode | null,
];
