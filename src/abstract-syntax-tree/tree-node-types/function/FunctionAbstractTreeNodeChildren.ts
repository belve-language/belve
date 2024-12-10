import type {FunctionBodyAbstractTreeNode} from "../function-body/FunctionBodyAbstractTreeNode.ts";
import type {FunctionHeaderAbstractTreeNode} from "../function-header/FunctionHeaderAbstractTreeNode.ts";

export type FunctionAbstractTreeNodeChildren = Readonly<{
	header: FunctionHeaderAbstractTreeNode | null;
	body: FunctionBodyAbstractTreeNode;
}>;
