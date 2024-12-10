import type {OpeningCurlyBracketCharacter} from "../../../characters/opening-curly-bracket/OpeningCurlyBracketCharacter.ts";
import type {LeafConcreteSyntaxTreeNode} from "../../LeafConcreteSyntaxTreeNode.ts";
import type {blockOpeningBracketConcreteSyntaxTreeNodeTypeName} from "./blockOpeningBracketConcreteSyntaxTreeNodeTypeName.ts";
export type BlockOpeningBracketConcreteSyntaxTreeNode = LeafConcreteSyntaxTreeNode<
	typeof blockOpeningBracketConcreteSyntaxTreeNodeTypeName,
	OpeningCurlyBracketCharacter
>;
