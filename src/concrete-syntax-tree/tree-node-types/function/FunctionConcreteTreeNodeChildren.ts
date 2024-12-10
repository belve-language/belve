import type {FunctionBodyConcreteTreeNode} from "../function-body/FunctionBodyConcreteTreeNode.ts";
import type {FunctionHeaderConcreteTreeNode} from "../function-header/FunctionHeaderConcreteTreeNode.ts";

export type FunctionConcreteTreeNodeChildren = readonly [
	header: FunctionHeaderConcreteTreeNode | null,
	body: FunctionBodyConcreteTreeNode,
];
