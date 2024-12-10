import {createSourceFileContentAbstractTreeNode} from "../../../abstract-syntax-tree/tree-node-types/source-file-content/createSourceFileContentAbstractTreeNode.ts";
import type {SourceFileContentAbstractTreeNode} from "../../../abstract-syntax-tree/tree-node-types/source-file-content/SourceFileContentAbstractTreeNode.ts";
import type {SourceFileContentConcreteTreeNode} from "../../../concrete-syntax-tree/tree-node-types/source-file-content/SourceFileContentConcreteTreeNode.ts";
import {abstractifyFunctions} from "../functions/abstractifyFunctions.ts";

export function abstractifySourceFileContent(
	sourceFileContent: SourceFileContentConcreteTreeNode,
): SourceFileContentAbstractTreeNode {
	const [, functions] = sourceFileContent.children;
	const abstractifiedFunctions = abstractifyFunctions(functions);
	const sourceFileContentAbstractTreeNode =
		createSourceFileContentAbstractTreeNode(abstractifiedFunctions);
	return sourceFileContentAbstractTreeNode;
}
