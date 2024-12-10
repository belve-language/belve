import type {FunctionHeaderUnknownSegmentClosingBracketConcreteSyntaxTreeNode} from "../function-header-unknown-segment-closing-bracket/FunctionHeaderUnknownSegmentClosingBracketConcreteSyntaxTreeNode.ts";
import type {FunctionHeaderUnknownSegmentContentConcreteSyntaxTreeNode} from "../function-header-unknown-segment-content/FunctionHeaderUnknownSegmentContentConcreteSyntaxTreeNode.ts";
import type {FunctionHeaderUnknownSegmentOpeningBracketConcreteSyntaxTreeNode} from "../function-header-unknown-segment-opening-bracket/FunctionHeaderUnknownSegmentOpeningBracketConcreteSyntaxTreeNode.ts";
import type {WhitespaceConcreteSyntaxTreeNode} from "../whitespace/WhitespaceConcreteSyntaxTreeNode.ts";
export type FunctionHeaderUnknownSegmentConcreteSyntaxTreeNodeChildren = readonly [
	openingBracket: FunctionHeaderUnknownSegmentOpeningBracketConcreteSyntaxTreeNode,
	content:
		| FunctionHeaderUnknownSegmentContentConcreteSyntaxTreeNode
		| WhitespaceConcreteSyntaxTreeNode
		| null,
	closingBracket: FunctionHeaderUnknownSegmentClosingBracketConcreteSyntaxTreeNode,
];
