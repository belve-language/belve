export type AbstractTreeNode<TypeName extends string, Children> = Readonly<{
	typeName: TypeName;
	children: Children;
}>;
