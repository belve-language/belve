import type {WhitespaceCharacter} from "../../../characters/whitespace/WhitespaceCharacter.ts";
import {createLeafConcreteSyntaxTreeNode} from "../../createLeafConcreteSyntaxTreeNode.ts";
import type {Index} from "../../index/Index.ts";
import type {WhitespaceSegmentConcreteSyntaxTreeNode} from "./WhitespaceSegmentConcreteSyntaxTreeNode.ts";
import {whitespaceSegmentConcreteSyntaxTreeNodeTypeName} from "./whitespaceSegmentConcreteSyntaxTreeNodeTypeName.ts";
export function createWhitespaceSegmentConcreteSyntaxTreeNode(
	character: WhitespaceCharacter,
	index: Index,
): WhitespaceSegmentConcreteSyntaxTreeNode {
	const treeNode: WhitespaceSegmentConcreteSyntaxTreeNode = createLeafConcreteSyntaxTreeNode(
		whitespaceSegmentConcreteSyntaxTreeNodeTypeName,
		character,
		index,
	);
	return treeNode;
}
