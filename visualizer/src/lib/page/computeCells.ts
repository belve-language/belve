import type {SupportedConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/SupportedConcreteSyntaxTreeNode.ts";
import type {BranchCell} from "./BranchCell.ts";
import type {EmptyCell} from "./EmptyCell.ts";
import type {LeafCell} from "./LeafCell.ts";
import type {SupportedCell} from "./SupportedCell.ts";
export function computeCells(
	nodes: readonly [SupportedConcreteSyntaxTreeNode, ...SupportedConcreteSyntaxTreeNode[]],
	maximalIndex: number,
): readonly SupportedCell[] {
	const cells: SupportedCell[] = [];
	switch (nodes[0].kind) {
		case "leaf": {
			if (nodes[0].index !== 0) {
				cells.push({
					span: nodes[0].index,
					kind: "empty",
				} as const satisfies EmptyCell);
			}
			cells.push({
				typeName: nodes[0].typeName,
				kind: "leaf",
			} as const satisfies LeafCell);
			break;
		}
		case "branch": {
			if (nodes[0].spanIndexes.starting !== 0) {
				cells.push({
					span: nodes[0].spanIndexes.starting,
					kind: "empty",
				} as const satisfies EmptyCell);
			}
			cells.push({
				typeName: nodes[0].typeName,
				span: nodes[0].spanIndexes.ending - nodes[0].spanIndexes.starting + 1,
				kind: "branch",
			} as const satisfies BranchCell);
			break;
		}
	}
	let currentNode = nodes[0];
	let currentNodeEndingIndex =
		currentNode.kind === "leaf" ? currentNode.index : currentNode.spanIndexes.ending;
	for (const node of nodes.slice(1)) {
		switch (node.kind) {
			case "leaf": {
				if (node.index !== currentNodeEndingIndex + 1) {
					cells.push({
						span: node.index - currentNodeEndingIndex - 1,
						kind: "empty",
					} as const satisfies EmptyCell);
				}
				cells.push({
					typeName: node.typeName,
					kind: "leaf",
				} as const satisfies LeafCell);
				currentNodeEndingIndex = node.index;
				break;
			}
			case "branch":
				if (node.spanIndexes.starting !== currentNodeEndingIndex + 1) {
					cells.push({
						span: node.spanIndexes.starting - currentNodeEndingIndex - 1,
						kind: "empty",
					} as const satisfies EmptyCell);
				}
				cells.push({
					typeName: node.typeName,
					span: node.spanIndexes.ending - node.spanIndexes.starting + 1,
					kind: "branch",
				} as const satisfies BranchCell);
				currentNodeEndingIndex = node.spanIndexes.ending;
				break;
		}
		currentNode = node;
	}
	if (currentNodeEndingIndex !== maximalIndex) {
		cells.push({
			span: maximalIndex - currentNodeEndingIndex,
			kind: "empty",
		} as const satisfies EmptyCell);
	}
	return cells;
}
