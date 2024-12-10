import type {Identifier} from "../../../abstract-syntax-tree/identifier/Identifier.ts";
import type {FunctionCallUnknownSegmentContentConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree/tree-node-types/function-call-unknown-segment-content/FunctionCallUnknownSegmentContentConcreteSyntaxTreeNode.ts";
import {abstractifyIdentifier} from "../identifier/abstractifyIdentifier.ts";
export function abstractifyFunctionCallUnknownSegmentContent(
	content: FunctionCallUnknownSegmentContentConcreteSyntaxTreeNode,
): Identifier {
	const [, contentIdentifier] = content.children;
	const serializedContentIdentifier: Identifier = abstractifyIdentifier(contentIdentifier);
	return serializedContentIdentifier;
}
