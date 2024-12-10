import type {ConcreteSyntaxTreeNode} from "./ConcreteSyntaxTreeNode.ts";
import type {SpanIndexes} from "./span-indexes/SpanIndexes.ts";
export type BranchConcreteSyntaxTreeNode<
	TypeNameToUse extends string,
	ChildrenToUse extends readonly unknown[],
> = ConcreteSyntaxTreeNode<TypeNameToUse, "branch"> &
	Readonly<{
		children: ChildrenToUse;
		spanIndexes: SpanIndexes;
	}>;
