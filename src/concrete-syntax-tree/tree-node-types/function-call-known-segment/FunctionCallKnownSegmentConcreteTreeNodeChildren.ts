import type {ClosingRoundBracketCharacter} from "../../../characters/ClosingRoundBracketCharacter.ts";
import type {OpeningRoundBracketCharacter} from "../../../characters/OpeningRoundBracketCharacter.ts";
import type {FunctionCallKnownSegmentContentConcreteTreeNode} from "../function-call-known-segment-content/FunctionCallKnownSegmentContentConcreteTreeNode.ts";
import type {WhitespaceCharactersConcreteTreeNode} from "../whitespace-characters/WhitespaceCharactersConcreteTreeNode.ts";

export type FunctionCallKnownSegmentConcreteTreeNodeChildren = readonly [
	openingBracketCharacter: OpeningRoundBracketCharacter,
	content:
		| FunctionCallKnownSegmentContentConcreteTreeNode
		| WhitespaceCharactersConcreteTreeNode
		| null,
	closingBracketCharacter: ClosingRoundBracketCharacter,
];
