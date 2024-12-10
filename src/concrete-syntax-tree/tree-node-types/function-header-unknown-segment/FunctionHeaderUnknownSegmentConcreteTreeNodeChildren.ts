import type {ClosingSquareBracketCharacter} from "../../../characters/ClosingSquareBracketCharacter.ts";
import type {OpeningSquareBracketCharacter} from "../../../characters/OpeningSquareBracketCharacter.ts";
import type {FunctionHeaderUnknownSegmentContentConcreteTreeNode} from "../function-header-unknown-segment-content/FunctionHeaderUnknownSegmentContentConcreteTreeNode.ts";
import type {WhitespaceCharactersConcreteTreeNode} from "../whitespace-characters/WhitespaceCharactersConcreteTreeNode.ts";

export type FunctionHeaderUnknownSegmentConcreteTreeNodeChildren = readonly [
	openingBracketCharacter: OpeningSquareBracketCharacter,
	content:
		| FunctionHeaderUnknownSegmentContentConcreteTreeNode
		| WhitespaceCharactersConcreteTreeNode
		| null,
	closingBracketCharacter: ClosingSquareBracketCharacter,
];
