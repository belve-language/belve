import type {ClosingRoundBracketCharacter} from "../../../characters/ClosingRoundBracketCharacter.ts";
import type {OpeningRoundBracketCharacter} from "../../../characters/OpeningRoundBracketCharacter.ts";
import type {FunctionHeaderKnownSegmentContentConcreteTreeNode} from "../function-header-known-segment-content/FunctionHeaderKnownSegmentContentConcreteTreeNode.ts";
import type {WhitespaceCharactersConcreteTreeNode} from "../whitespace-characters/WhitespaceCharactersConcreteTreeNode.ts";

export type FunctionHeaderKnownSegmentConcreteTreeNodeChildren = readonly [
	openingBracketCharacter: OpeningRoundBracketCharacter,
	content:
		| FunctionHeaderKnownSegmentContentConcreteTreeNode
		| WhitespaceCharactersConcreteTreeNode
		| null,
	closingBracketCharacter: ClosingRoundBracketCharacter,
];
