import type {OpeningRoundBracketCharacter} from "../../../characters/opening-round-bracket/OpeningRoundBracketCharacter.ts";
import type {LeafConcreteSyntaxTreeNode} from "../../LeafConcreteSyntaxTreeNode.ts";
import type {functionCallKnownSegmentOpeningBracketConcreteSyntaxTreeNodeTypeName} from "./functionCallKnownSegmentOpeningBracketConcreteSyntaxTreeNodeTypeName.ts";
export type FunctionCallKnownSegmentOpeningBracketConcreteSyntaxTreeNode =
	LeafConcreteSyntaxTreeNode<
		typeof functionCallKnownSegmentOpeningBracketConcreteSyntaxTreeNodeTypeName,
		OpeningRoundBracketCharacter
	>;
