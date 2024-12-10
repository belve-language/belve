import type {StatementsConcreteSyntaxTreeNode} from "../statements/StatementsConcreteSyntaxTreeNode.ts";
import type {WhitespaceConcreteSyntaxTreeNode} from "../whitespace/WhitespaceConcreteSyntaxTreeNode.ts";
export type BlockContentConcreteSyntaxTreeNodeChildren = readonly [
	initialWhitespace: WhitespaceConcreteSyntaxTreeNode | null,
	statements: StatementsConcreteSyntaxTreeNode,
	finalWhitespace: WhitespaceConcreteSyntaxTreeNode | null,
];
