import type {FunctionHeaderUnknownSegmentContentConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree/tree-node-types/function-header-unknown-segment-content/FunctionHeaderUnknownSegmentContentConcreteSyntaxTreeNode.ts";
import {abstractifyIdentifier} from "../identifier/abstractifyIdentifier.ts";
export function abstractifyFunctionHeaderUnknownSegmentContent(
	content: FunctionHeaderUnknownSegmentContentConcreteSyntaxTreeNode,
): string {
	const [, contentIdentifier] = content.children;
	const abstractifiedContentIdentifier = abstractifyIdentifier(contentIdentifier);
	return abstractifiedContentIdentifier;
}
