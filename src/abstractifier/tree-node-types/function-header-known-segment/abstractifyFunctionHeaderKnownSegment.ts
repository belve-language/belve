import type {FunctionHeaderKnownSegmentAbstractTreeNode} from "../../../abstract-syntax-tree/tree-node-types/function-header-known-segment/FunctionHeaderKnownSegmentAbstractTreeNode.ts";
import type {FunctionHeaderKnownSegmentConcreteTreeNode} from "../../../concrete-syntax-tree/tree-node-types/function-header-known-segment/FunctionHeaderKnownSegmentConcreteTreeNode.ts";
import {whitespaceCharactersConcreteTreeNodeTypeName} from "../../../concrete-syntax-tree/tree-node-types/whitespace-characters/whitespaceCharactersConcreteTreeNodeTypeName.ts";

export function abstractifyFunctionHeaderKnownSegment(
	segment: FunctionHeaderKnownSegmentConcreteTreeNode,
): FunctionHeaderKnownSegmentAbstractTreeNode {
	const [, content] = segment.children;

	if (content === null || content.typeName === whitespaceCharactersConcreteTreeNodeTypeName) {
		throw new Error("Unexpected whitespace characters in function header known segment.");
	}

	const abstractifiedContent = abstractifyFunctionHeaderKnownSegmentContent(content);

	const abstractifiedSegment =
		createFunctionHeaderKnownSegmentAbstractTreeNode(abstractifiedContent);
	return abstractifiedSegment;
}
