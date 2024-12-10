import type {ClosingSquareBracketCharacter} from "../../../characters/ClosingSquareBracketCharacter.ts";
import type {OpeningSquareBracketCharacter} from "../../../characters/OpeningSquareBracketCharacter.ts";
import type {FunctionCallUnknownSegmentContentConcreteTreeNode} from "../function-call-unknown-segment-content/FunctionCallUnknownSegmentContentConcreteTreeNode.ts";
import type {WhitespaceCharactersConcreteTreeNode} from "../whitespace-characters/WhitespaceCharactersConcreteTreeNode.ts";

export type FunctionCallUnknownSegmentConcreteTreeNodeChildren = readonly [
	openingBracketCharacter: OpeningSquareBracketCharacter,
	content:
		| FunctionCallUnknownSegmentContentConcreteTreeNode
		| null
		| WhitespaceCharactersConcreteTreeNode,
	closingBracketCharacter: ClosingSquareBracketCharacter,
];
