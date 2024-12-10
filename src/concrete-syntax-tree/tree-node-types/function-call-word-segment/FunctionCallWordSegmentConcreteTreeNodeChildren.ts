import type {IdentifierCharactersConcreteTreeNode} from "../identifier-characters/IdentifierCharactersConcreteTreeNode.ts";

export type FunctionCallWordSegmentConcreteTreeNodeChildren = readonly [
	identifierCharacters: IdentifierCharactersConcreteTreeNode,
];
