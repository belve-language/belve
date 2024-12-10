import type {Identifier} from "../../../abstract-syntax-tree/identifier/Identifier.ts";
import type {IdentifierSegmentsConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree/tree-node-types/identifier-segments/IdentifierSegmentsConcreteSyntaxTreeNode.ts";
export function abstractifyIdentifierSegments(
	identifier: IdentifierSegmentsConcreteSyntaxTreeNode,
): Identifier {
	const [identifierFirstSegment, identifierRestSegments] = identifier.children;
	if (identifierRestSegments === null) {
		return identifierFirstSegment.character;
	}
	const abstractifiedIdentifierRestSegments = abstractifyIdentifierSegments(identifierRestSegments);
	return `${identifierFirstSegment}${abstractifiedIdentifierRestSegments}`;
}
