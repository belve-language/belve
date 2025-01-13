import type {SupportedConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/SupportedConcreteSyntaxTreeNode.ts";
export type Level = Readonly<{
	number: number;
	nodes: readonly [SupportedConcreteSyntaxTreeNode, ...SupportedConcreteSyntaxTreeNode[]];
}>;
