import type {FunctionCallKnownSegmentClosingBracketConcreteSyntaxTreeNode} from "../function-call-known-segment-closing-bracket/FunctionCallKnownSegmentClosingBracketConcreteSyntaxTreeNode.ts";
import type {FunctionCallKnownSegmentContentConcreteSyntaxTreeNode} from "../function-call-known-segment-content/FunctionCallKnownSegmentContentConcreteSyntaxTreeNode.ts";
import type {FunctionCallKnownSegmentOpeningBracketConcreteSyntaxTreeNode} from "../function-call-known-segment-opening-bracket/FunctionCallKnownSegmentOpeningBracketConcreteSyntaxTreeNode.ts";
import type {WhitespaceConcreteSyntaxTreeNode} from "../whitespace/WhitespaceConcreteSyntaxTreeNode.ts";
export type FunctionCallKnownSegmentConcreteSyntaxTreeNodeChildren = readonly [
	openingBracket: FunctionCallKnownSegmentOpeningBracketConcreteSyntaxTreeNode,
	content:
		| FunctionCallKnownSegmentContentConcreteSyntaxTreeNode
		| WhitespaceConcreteSyntaxTreeNode
		| null,
	closingBracket: FunctionCallKnownSegmentClosingBracketConcreteSyntaxTreeNode,
];
