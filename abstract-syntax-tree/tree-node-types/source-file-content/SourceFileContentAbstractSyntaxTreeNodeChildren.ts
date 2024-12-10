import type {FunctionAbstractSyntaxTreeNode} from "../function/FunctionAbstractSyntaxTreeNode.ts";
export type SourceFileContentAbstractSyntaxTreeNodeChildren = Readonly<{
	functions: readonly [FunctionAbstractSyntaxTreeNode, ...FunctionAbstractSyntaxTreeNode[]];
}>;
