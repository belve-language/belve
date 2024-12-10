import type {ClosingRoundBracketCharacter} from "../../../characters/closing-round-bracket/ClosingRoundBracketCharacter.ts";
import {createLeafConcreteSyntaxTreeNode} from "../../createLeafConcreteSyntaxTreeNode.ts";
import type {Index} from "../../index/Index.ts";
import type {FunctionHeaderKnownSegmentClosingBracketConcreteSyntaxTreeNode} from "./FunctionHeaderKnownSegmentClosingBracketConcreteSyntaxTreeNode.ts";
import {functionHeaderKnownSegmentClosingBracketConcreteSyntaxTreeNodeTypeName} from "./functionHeaderKnownSegmentClosingBracketConcreteSyntaxTreeNodeTypeName.ts";
export function createFunctionHeaderKnownSegmentClosingBracketConcreteSyntaxTreeNode(
	character: ClosingRoundBracketCharacter,
	index: Index,
): FunctionHeaderKnownSegmentClosingBracketConcreteSyntaxTreeNode {
	const treeNode: FunctionHeaderKnownSegmentClosingBracketConcreteSyntaxTreeNode =
		createLeafConcreteSyntaxTreeNode(
			functionHeaderKnownSegmentClosingBracketConcreteSyntaxTreeNodeTypeName,
			character,
			index,
		);
	return treeNode;
}
