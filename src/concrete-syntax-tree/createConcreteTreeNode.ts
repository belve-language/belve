import type {ConcreteTreeNode} from "./ConcreteTreeNode.ts";

export function createConcreteTreeNode<
	TypeNameToUse extends string,
	ChildrenToUse extends readonly unknown[],
>(
	typeName: TypeNameToUse,
	children: ChildrenToUse,
): ConcreteTreeNode<TypeNameToUse, ChildrenToUse> {
	return {
		typeName,
		children,
	};
}
