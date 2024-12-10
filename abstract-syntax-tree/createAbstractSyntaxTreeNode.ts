import type {AbstractSyntaxTreeNode} from "./AbstractSyntaxTreeNode.ts";
export function createAbstractSyntaxTreeNode<TypeName extends string, Children>(
	typeName: TypeName,
	children: Children,
): AbstractSyntaxTreeNode<TypeName, Children> {
	return {
		typeName,
		children,
	};
}
