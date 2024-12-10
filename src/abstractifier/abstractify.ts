import type {SourceFileContentAbstractTreeNode} from "../abstract-syntax-tree/tree-node-types/source-file-content/SourceFileContentAbstractTreeNode.ts";
import type {SourceFileContentConcreteTreeNode} from "../concrete-syntax-tree/tree-node-types/source-file-content/SourceFileContentConcreteTreeNode.ts";
import type {WhitespaceCharactersConcreteTreeNode} from "../concrete-syntax-tree/tree-node-types/whitespace-characters/WhitespaceCharactersConcreteTreeNode.ts";
import {whitespaceCharactersConcreteTreeNodeTypeName} from "../concrete-syntax-tree/tree-node-types/whitespace-characters/whitespaceCharactersConcreteTreeNodeTypeName.ts";
import {abstractifySourceFileContent} from "./tree-node-types/source-file-content/abstractifySourceFileContent.ts";

export function abstractify(
	parserResult: null | WhitespaceCharactersConcreteTreeNode | SourceFileContentConcreteTreeNode,
): null | SourceFileContentAbstractTreeNode {
	if (
		parserResult === null ||
		parserResult.typeName === whitespaceCharactersConcreteTreeNodeTypeName
	) {
		return null;
	}

	const abstractifiedSourceFileContent: SourceFileContentAbstractTreeNode =
		abstractifySourceFileContent(parserResult);

	return abstractifiedSourceFileContent;
}
