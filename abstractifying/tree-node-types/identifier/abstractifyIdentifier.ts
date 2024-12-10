import type {Identifier} from "../../../abstract-syntax-tree/identifier/Identifier.ts";
import type {IdentifierConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree/tree-node-types/identifier/IdentifierConcreteSyntaxTreeNode.ts";
import {abstractifyIdentifierSegments} from "../identifier-segments/abstractifyIdentifierSegments.ts";
export function abstractifyIdentifier(identifier: IdentifierConcreteSyntaxTreeNode): Identifier {
	const [identifierSegments] = identifier.children;
	const abstractifiedIdentifierSegments = abstractifyIdentifierSegments(identifierSegments);
	return abstractifiedIdentifierSegments;
}
