import type {AbstractSyntaxTreeNode} from "../../AbstractSyntaxTreeNode.ts";
import type {SourceFileContentAbstractSyntaxTreeNodeChildren} from "./SourceFileContentAbstractSyntaxTreeNodeChildren.ts";
import type {sourceFileContentAbstractSyntaxTreeNodeTypeName} from "./sourceFileContentAbstractSyntaxTreeNodeTypeName.ts";
export type SourceFileContentAbstractSyntaxTreeNode = AbstractSyntaxTreeNode<
	typeof sourceFileContentAbstractSyntaxTreeNodeTypeName,
	SourceFileContentAbstractSyntaxTreeNodeChildren
>;
