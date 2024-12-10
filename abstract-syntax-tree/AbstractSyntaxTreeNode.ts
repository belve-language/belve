export type AbstractSyntaxTreeNode<TypeName extends string, Children> = Readonly<{
	typeName: TypeName;
	children: Children;
}>;
