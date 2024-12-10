import type {IdentifierCharacter} from "../../../characters/identifier/IdentifierCharacter.ts";
import {createLeafConcreteSyntaxTreeNode} from "../../createLeafConcreteSyntaxTreeNode.ts";
import type {Index} from "../../index/Index.ts";
import type {IdentifierSegmentConcreteSyntaxTreeNode} from "./IdentifierSegmentConcreteSyntaxTreeNode.ts";
import {identifierSegmentConcreteSyntaxTreeNodeTypeName} from "./identifierSegmentConcreteSyntaxTreeNodeTypeName.ts";
export function createIdentifierSegmentConcreteSyntaxTreeNode(
	character: IdentifierCharacter,
	index: Index,
): IdentifierSegmentConcreteSyntaxTreeNode {
	const treeNode: IdentifierSegmentConcreteSyntaxTreeNode = createLeafConcreteSyntaxTreeNode(
		identifierSegmentConcreteSyntaxTreeNodeTypeName,
		character,
		index,
	);
	return treeNode;
}
