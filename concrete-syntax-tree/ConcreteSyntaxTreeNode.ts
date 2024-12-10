export type ConcreteSyntaxTreeNode<
	TypeNameToUse extends string,
	Kind extends "leaf" | "branch",
> = Readonly<{
	typeName: TypeNameToUse;
	kind: Kind;
}>;
