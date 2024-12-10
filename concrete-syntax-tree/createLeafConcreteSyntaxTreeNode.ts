import type {Index} from "./index/Index.ts";
import type {LeafConcreteSyntaxTreeNode} from "./LeafConcreteSyntaxTreeNode.ts";
export function createLeafConcreteSyntaxTreeNode<
	TypeNameToUse extends string,
	CharacterToUse extends string,
>(
	typeName: TypeNameToUse,
	character: CharacterToUse,
	index: Index,
): LeafConcreteSyntaxTreeNode<TypeNameToUse, CharacterToUse> {
	return {
		typeName,
		character,
		index,
		kind: "leaf",
	} as const;
}
