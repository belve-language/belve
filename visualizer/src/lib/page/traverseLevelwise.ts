import type {SupportedConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/SupportedConcreteSyntaxTreeNode.ts";
import type {Level} from "./Level.ts";
export function* traverseLevelwise(node: SupportedConcreteSyntaxTreeNode | null): Generator<Level> {
	if (node === null) {
		return;
	}
	let levelNumber = 0;
	let nodes: readonly [SupportedConcreteSyntaxTreeNode, ...SupportedConcreteSyntaxTreeNode[]] = [
		node,
	];
	for (;;) {
		yield {number: levelNumber, nodes};
		levelNumber += 1;
		const newNodes = nodes
			.flatMap((node): readonly (SupportedConcreteSyntaxTreeNode | null)[] => {
				if (node.kind === "leaf") {
					return [] as const;
				}
				return node.children;
			})
			.filter((node) => node !== null);
		if (newNodes.length === 0) {
			break;
		}
		nodes = newNodes as unknown as readonly [
			SupportedConcreteSyntaxTreeNode,
			...SupportedConcreteSyntaxTreeNode[],
		];
	}
}
