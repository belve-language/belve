import type {SourceFileContentConcreteSyntaxTreeNode} from "./tree-node-types/source-file-content/SourceFileContentConcreteSyntaxTreeNode.ts";
import type {WhitespaceConcreteSyntaxTreeNode} from "./tree-node-types/whitespace/WhitespaceConcreteSyntaxTreeNode.ts";
export type ConcreteSyntaxTree =
	| null
	| WhitespaceConcreteSyntaxTreeNode
	| SourceFileContentConcreteSyntaxTreeNode;
