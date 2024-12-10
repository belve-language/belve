import type {FunctionCallUnknownSegmentClosingBracketConcreteSyntaxTreeNode} from "../function-call-unknown-segment-closing-bracket/FunctionCallUnknownSegmentClosingBracketConcreteSyntaxTreeNode.ts";
import type {FunctionCallUnknownSegmentContentConcreteSyntaxTreeNode} from "../function-call-unknown-segment-content/FunctionCallUnknownSegmentContentConcreteSyntaxTreeNode.ts";
import type {FunctionCallUnknownSegmentOpeningBracketConcreteSyntaxTreeNode} from "../function-call-unknown-segment-opening-bracket/FunctionCallUnknownSegmentOpeningBracketConcreteSyntaxTreeNode.ts";
import type {WhitespaceConcreteSyntaxTreeNode} from "../whitespace/WhitespaceConcreteSyntaxTreeNode.ts";
export type FunctionCallUnknownSegmentConcreteSyntaxTreeNodeChildren = readonly [
	openingBracket: FunctionCallUnknownSegmentOpeningBracketConcreteSyntaxTreeNode,
	content:
		| FunctionCallUnknownSegmentContentConcreteSyntaxTreeNode
		| null
		| WhitespaceConcreteSyntaxTreeNode,
	closingBracket: FunctionCallUnknownSegmentClosingBracketConcreteSyntaxTreeNode,
];
