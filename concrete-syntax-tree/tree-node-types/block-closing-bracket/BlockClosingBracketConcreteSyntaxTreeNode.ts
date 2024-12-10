import type {ClosingCurlyBracketCharacter} from "../../../characters/closing-curly-bracket/ClosingCurlyBracketCharacter.ts";
import type {LeafConcreteSyntaxTreeNode} from "../../LeafConcreteSyntaxTreeNode.ts";
import type {blockClosingBracketConcreteSyntaxTreeNodeTypeName} from "./blockClosingBracketConcreteSyntaxTreeNodeTypeName.ts";
export type BlockClosingBracketConcreteSyntaxTreeNode = LeafConcreteSyntaxTreeNode<
	typeof blockClosingBracketConcreteSyntaxTreeNodeTypeName,
	ClosingCurlyBracketCharacter
>;
