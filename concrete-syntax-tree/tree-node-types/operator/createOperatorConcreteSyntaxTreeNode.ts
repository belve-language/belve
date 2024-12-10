import type {OperatorCharacter} from "../../../characters/operator/OperatorCharacter.ts";
import {createLeafConcreteSyntaxTreeNode} from "../../createLeafConcreteSyntaxTreeNode.ts";
import type {Index} from "../../index/Index.ts";
import type {OperatorConcreteSyntaxTreeNode} from "./OperatorConcreteSyntaxTreeNode.ts";
import {operatorConcreteSyntaxTreeNodeTypeName} from "./operatorConcreteSyntaxTreeNodeTypeName.ts";
export function createOperatorConcreteSyntaxTreeNode(
	character: OperatorCharacter,
	index: Index,
): OperatorConcreteSyntaxTreeNode {
	const treeNode: OperatorConcreteSyntaxTreeNode = createLeafConcreteSyntaxTreeNode(
		operatorConcreteSyntaxTreeNodeTypeName,
		character,
		index,
	);
	return treeNode;
}
