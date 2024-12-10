import {createBranchConcreteSyntaxTreeNode} from "../../createBranchConcreteSyntaxTreeNode.ts";
import type {SpanIndexes} from "../../span-indexes/SpanIndexes.ts";
import type {BlockClosingBracketConcreteSyntaxTreeNode} from "../block-closing-bracket/BlockClosingBracketConcreteSyntaxTreeNode.ts";
import type {BlockContentConcreteSyntaxTreeNode} from "../block-content/BlockContentConcreteSyntaxTreeNode.ts";
import type {BlockOpeningBracketConcreteSyntaxTreeNode} from "../block-opening-bracket/BlockOpeningBracketConcreteSyntaxTreeNode.ts";
import type {WhitespaceConcreteSyntaxTreeNode} from "../whitespace/WhitespaceConcreteSyntaxTreeNode.ts";
import type {BlockConcreteSyntaxTreeNode} from "./BlockConcreteSyntaxTreeNode.ts";
import {blockConcreteSyntaxTreeNodeTypeName} from "./blockConcreteSyntaxTreeNodeTypeName.ts";
export function createBlockConcreteSyntaxTreeNode(
	openingBracket: BlockOpeningBracketConcreteSyntaxTreeNode,
	content: BlockContentConcreteSyntaxTreeNode | null | WhitespaceConcreteSyntaxTreeNode,
	closingBracket: BlockClosingBracketConcreteSyntaxTreeNode,
	spanIndexes: SpanIndexes,
): BlockConcreteSyntaxTreeNode {
	const treeNode: BlockConcreteSyntaxTreeNode = createBranchConcreteSyntaxTreeNode(
		blockConcreteSyntaxTreeNodeTypeName,
		[openingBracket, content, closingBracket] as const,
		spanIndexes,
	);
	return treeNode;
}
