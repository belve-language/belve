import type {OpeningCurlyBracketCharacter} from "../../../characters/opening-curly-bracket/OpeningCurlyBracketCharacter.ts";
import {createLeafConcreteSyntaxTreeNode} from "../../createLeafConcreteSyntaxTreeNode.ts";
import type {Index} from "../../index/Index.ts";
import type {BlockOpeningBracketConcreteSyntaxTreeNode} from "./BlockOpeningBracketConcreteSyntaxTreeNode.ts";
import {blockOpeningBracketConcreteSyntaxTreeNodeTypeName} from "./blockOpeningBracketConcreteSyntaxTreeNodeTypeName.ts";
export function createBlockOpeningBracketConcreteSyntaxTreeNode(
	character: OpeningCurlyBracketCharacter,
	index: Index,
): BlockOpeningBracketConcreteSyntaxTreeNode {
	const treeNode: BlockOpeningBracketConcreteSyntaxTreeNode = createLeafConcreteSyntaxTreeNode(
		blockOpeningBracketConcreteSyntaxTreeNodeTypeName,
		character,
		index,
	);
	return treeNode;
}
