import type {FunctionAbstractTreeNode} from "../function/FunctionAbstractTreeNode.ts";

export type SourceFileContentAbstractTreeNodeChildren = Readonly<{
	functions: readonly [FunctionAbstractTreeNode, ...FunctionAbstractTreeNode[]];
}>;
