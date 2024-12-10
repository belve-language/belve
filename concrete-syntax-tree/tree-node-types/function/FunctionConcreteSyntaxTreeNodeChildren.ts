import type {FunctionBodyConcreteSyntaxTreeNode} from "../function-body/FunctionBodyConcreteSyntaxTreeNode.ts";
import type {FunctionHeaderConcreteSyntaxTreeNode} from "../function-header/FunctionHeaderConcreteSyntaxTreeNode.ts";
export type FunctionConcreteSyntaxTreeNodeChildren = readonly [
	header: FunctionHeaderConcreteSyntaxTreeNode | null,
	body: FunctionBodyConcreteSyntaxTreeNode,
];
