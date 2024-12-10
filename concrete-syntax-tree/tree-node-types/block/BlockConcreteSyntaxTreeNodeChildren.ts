import type {BlockClosingBracketConcreteSyntaxTreeNode} from "../block-closing-bracket/BlockClosingBracketConcreteSyntaxTreeNode.ts";
import type {BlockContentConcreteSyntaxTreeNode} from "../block-content/BlockContentConcreteSyntaxTreeNode.ts";
import type {BlockOpeningBracketConcreteSyntaxTreeNode} from "../block-opening-bracket/BlockOpeningBracketConcreteSyntaxTreeNode.ts";
import type {WhitespaceConcreteSyntaxTreeNode} from "../whitespace/WhitespaceConcreteSyntaxTreeNode.ts";
export type BlockConcreteSyntaxTreeNodeChildren = readonly [
	openingBracket: BlockOpeningBracketConcreteSyntaxTreeNode,
	content: BlockContentConcreteSyntaxTreeNode | null | WhitespaceConcreteSyntaxTreeNode,
	closingBracket: BlockClosingBracketConcreteSyntaxTreeNode,
];
