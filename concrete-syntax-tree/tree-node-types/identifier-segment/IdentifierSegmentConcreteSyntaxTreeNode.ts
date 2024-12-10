import type {IdentifierCharacter} from "../../../characters/identifier/IdentifierCharacter.ts";
import type {LeafConcreteSyntaxTreeNode} from "../../LeafConcreteSyntaxTreeNode.ts";
import type {identifierSegmentConcreteSyntaxTreeNodeTypeName} from "./identifierSegmentConcreteSyntaxTreeNodeTypeName.ts";
export type IdentifierSegmentConcreteSyntaxTreeNode = LeafConcreteSyntaxTreeNode<
	typeof identifierSegmentConcreteSyntaxTreeNodeTypeName,
	IdentifierCharacter
>;
