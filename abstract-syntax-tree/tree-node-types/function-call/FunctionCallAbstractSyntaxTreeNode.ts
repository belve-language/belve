import type {AbstractSyntaxTreeNode} from "../../AbstractSyntaxTreeNode.ts";
import type {FunctionCallAbstractSyntaxTreeNodeChildren} from "./FunctionCallAbstractSyntaxTreeNodeChildren.ts";
import type {functionCallAbstractSyntaxTreeNodeTypeName} from "./functionCallAbstractSyntaxTreeNodeTypeName.ts";
export type FunctionCallAbstractSyntaxTreeNode = AbstractSyntaxTreeNode<
	typeof functionCallAbstractSyntaxTreeNodeTypeName,
	FunctionCallAbstractSyntaxTreeNodeChildren
>;
