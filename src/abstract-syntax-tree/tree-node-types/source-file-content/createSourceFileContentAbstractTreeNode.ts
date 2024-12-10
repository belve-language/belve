import {createAbstractTreeNode} from "../../createAbstractTreeNode.ts";
import type {FunctionAbstractTreeNode} from "../function/FunctionAbstractTreeNode.ts";
import type {SourceFileContentAbstractTreeNode} from "./SourceFileContentAbstractTreeNode.ts";
import {sourceFileContentAbstractTreeNodeTypeName} from "./sourceFileContentAbstractTreeNodeTypeName.ts";

export function createSourceFileContentAbstractTreeNode(
	functions: readonly [FunctionAbstractTreeNode, ...FunctionAbstractTreeNode[]],
): SourceFileContentAbstractTreeNode {
	const treeNode: SourceFileContentAbstractTreeNode = createAbstractTreeNode(
		sourceFileContentAbstractTreeNodeTypeName,
		{
			functions,
		},
	);

	return treeNode;
}
