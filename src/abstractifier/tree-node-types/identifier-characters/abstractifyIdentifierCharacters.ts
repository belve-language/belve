import type {IdentifierCharactersConcreteTreeNode} from "../../../concrete-syntax-tree/tree-node-types/identifier-characters/IdentifierCharactersConcreteTreeNode.ts";

export function abstractifyIdentifierCharacters(
	identifier: IdentifierCharactersConcreteTreeNode,
): string {
	const [firstCharacter, restCharacters] = identifier.children;

	if (restCharacters === null) {
		return firstCharacter;
	}

	const abstractifiedRestCharacters = abstractifyIdentifierCharacters(restCharacters);
	return `${firstCharacter}${abstractifiedRestCharacters}`;
}
