import type {Identifier} from "../../../abstract-syntax-tree/identifier/Identifier.ts";
import type {FunctionCallKnownSegmentContentConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree/tree-node-types/function-call-known-segment-content/FunctionCallKnownSegmentContentConcreteSyntaxTreeNode.ts";
import {abstractifyIdentifier} from "../identifier/abstractifyIdentifier.ts";
export function abstractifyFunctionCallKnownSegmentContent(
	content: FunctionCallKnownSegmentContentConcreteSyntaxTreeNode,
): Identifier {
	const [, contentIdentifier] = content.children;
	const serializedContentIdentifier = abstractifyIdentifier(contentIdentifier);
	return serializedContentIdentifier;
}
