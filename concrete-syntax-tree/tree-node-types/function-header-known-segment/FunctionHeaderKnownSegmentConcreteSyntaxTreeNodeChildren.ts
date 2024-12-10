import type {FunctionHeaderKnownSegmentClosingBracketConcreteSyntaxTreeNode} from "../function-header-known-segment-closing-bracket/FunctionHeaderKnownSegmentClosingBracketConcreteSyntaxTreeNode.ts";
import type {FunctionHeaderKnownSegmentContentConcreteSyntaxTreeNode} from "../function-header-known-segment-content/FunctionHeaderKnownSegmentContentConcreteSyntaxTreeNode.ts";
import type {FunctionHeaderKnownSegmentOpeningBracketConcreteSyntaxTreeNode} from "../function-header-known-segment-opening-bracket/FunctionHeaderKnownSegmentOpeningBracketConcreteSyntaxTreeNode.ts";
import type {WhitespaceConcreteSyntaxTreeNode} from "../whitespace/WhitespaceConcreteSyntaxTreeNode.ts";
export type FunctionHeaderKnownSegmentConcreteSyntaxTreeNodeChildren = readonly [
	openingBracket: FunctionHeaderKnownSegmentOpeningBracketConcreteSyntaxTreeNode,
	content:
		| FunctionHeaderKnownSegmentContentConcreteSyntaxTreeNode
		| WhitespaceConcreteSyntaxTreeNode
		| null,
	closingBracket: FunctionHeaderKnownSegmentClosingBracketConcreteSyntaxTreeNode,
];
