import type {ClosingRoundBracketCharacter} from "../../../characters/closing-round-bracket/ClosingRoundBracketCharacter.ts";
import type {LeafConcreteSyntaxTreeNode} from "../../LeafConcreteSyntaxTreeNode.ts";
import type {functionCallKnownSegmentClosingBracketConcreteSyntaxTreeNodeTypeName} from "./functionCallKnownSegmentClosingBracketConcreteSyntaxTreeNodeTypeName.ts";
export type FunctionCallKnownSegmentClosingBracketConcreteSyntaxTreeNode =
	LeafConcreteSyntaxTreeNode<
		typeof functionCallKnownSegmentClosingBracketConcreteSyntaxTreeNodeTypeName,
		ClosingRoundBracketCharacter
	>;
