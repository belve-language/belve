import type {WhitespaceCharacter} from "../../../characters/whitespace/WhitespaceCharacter.ts";
import type {LeafConcreteSyntaxTreeNode} from "../../LeafConcreteSyntaxTreeNode.ts";
import type {whitespaceSegmentConcreteSyntaxTreeNodeTypeName} from "./whitespaceSegmentConcreteSyntaxTreeNodeTypeName.ts";
export type WhitespaceSegmentConcreteSyntaxTreeNode = LeafConcreteSyntaxTreeNode<
	typeof whitespaceSegmentConcreteSyntaxTreeNodeTypeName,
	WhitespaceCharacter
>;
