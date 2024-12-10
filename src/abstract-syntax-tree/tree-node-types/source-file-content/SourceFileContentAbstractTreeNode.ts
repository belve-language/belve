import type {AbstractTreeNode} from "../../AbstractTreeNode.ts";
import type {SourceFileContentAbstractTreeNodeChildren} from "./SourceFileContentAbstractTreeNodeChildren.ts";
import type {sourceFileContentAbstractTreeNodeTypeName} from "./sourceFileContentAbstractTreeNodeTypeName.ts";

export type SourceFileContentAbstractTreeNode = AbstractTreeNode<
	typeof sourceFileContentAbstractTreeNodeTypeName,
	SourceFileContentAbstractTreeNodeChildren
>;
