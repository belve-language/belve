import type {AbstractSyntaxTreeNode} from "../../AbstractSyntaxTreeNode.ts";
import type {FunctionAbstractSyntaxTreeNodeChildren} from "./FunctionAbstractSyntaxTreeNodeChildren.ts";
import type {functionAbstractSyntaxTreeNodeTypeName} from "./functionAbstractSyntaxTreeNodeTypeName.ts";
export type FunctionAbstractSyntaxTreeNode = AbstractSyntaxTreeNode<
	typeof functionAbstractSyntaxTreeNodeTypeName,
	FunctionAbstractSyntaxTreeNodeChildren
>;
