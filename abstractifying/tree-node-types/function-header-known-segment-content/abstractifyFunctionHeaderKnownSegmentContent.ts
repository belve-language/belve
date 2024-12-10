import type {FunctionHeaderKnownSegmentContentConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree/tree-node-types/function-header-known-segment-content/FunctionHeaderKnownSegmentContentConcreteSyntaxTreeNode.ts";
import {abstractifyIdentifier} from "../identifier/abstractifyIdentifier.ts";
export function abstractifyFunctionHeaderKnownSegmentContent(
	content: FunctionHeaderKnownSegmentContentConcreteSyntaxTreeNode,
): string {
	const [, contentIdentifier] = content.children;
	const abstractifiedContentIdentifier = abstractifyIdentifier(contentIdentifier);
	return abstractifiedContentIdentifier;
}
