import type {ConcreteSyntaxTreeNode} from "./ConcreteSyntaxTreeNode.ts";
import type {Index} from "./index/Index.ts";
export type LeafConcreteSyntaxTreeNode<
	TypeNameToUse extends string,
	CharacterToUse extends string,
> = ConcreteSyntaxTreeNode<TypeNameToUse, "leaf"> &
	Readonly<{
		character: CharacterToUse;
		index: Index;
	}>;
