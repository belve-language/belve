import type {ClosingCurlyBracketCharacter} from "../../../characters/ClosingCurlyBracketCharacter.ts";
import type {OpeningCurlyBracketCharacter} from "../../../characters/OpeningCurlyBracketCharacter.ts";
import type {BlockContentConcreteTreeNode} from "../block-content/BlockContentConcreteTreeNode.ts";
import type {WhitespaceCharactersConcreteTreeNode} from "../whitespace-characters/WhitespaceCharactersConcreteTreeNode.ts";

export type BlockConcreteTreeNodeChildren = readonly [
	openingBracketCharacter: OpeningCurlyBracketCharacter,
	content: BlockContentConcreteTreeNode | null | WhitespaceCharactersConcreteTreeNode,
	closingBracketCharacter: ClosingCurlyBracketCharacter,
];
