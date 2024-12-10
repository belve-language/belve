import type {AbstractSyntaxTreeNode} from "../../AbstractSyntaxTreeNode.ts";
import type {FunctionHeaderAbstractSyntaxTreeNodeChildren} from "./FunctionHeaderAbstractSyntaxTreeNodeChildren.ts";
import type {functionHeaderAbstractSyntaxTreeNodeTypeName} from "./functionHeaderAbstractSyntaxTreeNodeTypeName.ts";
export type FunctionHeaderAbstractSyntaxTreeNode = AbstractSyntaxTreeNode<
	typeof functionHeaderAbstractSyntaxTreeNodeTypeName,
	FunctionHeaderAbstractSyntaxTreeNodeChildren
>;
