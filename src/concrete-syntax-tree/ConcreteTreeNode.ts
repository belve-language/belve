export type ConcreteTreeNode<
	TypeName extends string,
	Children extends readonly unknown[],
> = Readonly<{
	typeName: TypeName;
	children: Children;
}>;
