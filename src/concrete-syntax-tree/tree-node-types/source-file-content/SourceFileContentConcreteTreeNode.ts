import type {ConcreteTreeNode} from "../../ConcreteTreeNode.ts";
import type {SourceFileContentConcreteTreeNodeChildren} from "./SourceFileContentConcreteTreeNodeChildren.ts";
import type {sourceFileContentConcreteTreeNodeTypeName} from "./sourceFileContentConcreteTreeNodeTypeName.ts";

export type SourceFileContentConcreteTreeNode = ConcreteTreeNode<
	typeof sourceFileContentConcreteTreeNodeTypeName,
	SourceFileContentConcreteTreeNodeChildren
>;
