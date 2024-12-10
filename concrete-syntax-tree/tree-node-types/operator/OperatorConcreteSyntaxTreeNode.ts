import type {OperatorCharacter} from "../../../characters/operator/OperatorCharacter.ts";
import type {LeafConcreteSyntaxTreeNode} from "../../LeafConcreteSyntaxTreeNode.ts";
import type {operatorConcreteSyntaxTreeNodeTypeName} from "./operatorConcreteSyntaxTreeNodeTypeName.ts";
export type OperatorConcreteSyntaxTreeNode = LeafConcreteSyntaxTreeNode<
	typeof operatorConcreteSyntaxTreeNodeTypeName,
	OperatorCharacter
>;
