import type {FunctionsConcreteTreeNode} from "../functions/FunctionsConcreteTreeNode.ts";
import type {WhitespaceCharactersConcreteTreeNode} from "../whitespace-characters/WhitespaceCharactersConcreteTreeNode.ts";

export type SourceFileContentConcreteTreeNodeChildren = readonly [
	intialWhitespaceCharacters: WhitespaceCharactersConcreteTreeNode | null,
	functions: FunctionsConcreteTreeNode,
	finalWhitespaceCharacters: WhitespaceCharactersConcreteTreeNode | null,
];
