import type {AbstractTreeNode} from "./AbstractTreeNode.ts";

export function createAbstractTreeNode<TypeNameToUse extends string, ChildrenToUse>(
	typeName: TypeNameToUse,
	children: ChildrenToUse,
): AbstractTreeNode<TypeNameToUse, ChildrenToUse> {
	return {
		typeName,
		children,
	};
}
