import type {OpeningRoundBracketCharacter} from "../../../characters/opening-round-bracket/OpeningRoundBracketCharacter.ts";
import {createLeafConcreteSyntaxTreeNode} from "../../createLeafConcreteSyntaxTreeNode.ts";
import type {Index} from "../../index/Index.ts";
import type {FunctionHeaderKnownSegmentOpeningBracketConcreteSyntaxTreeNode} from "./FunctionHeaderKnownSegmentOpeningBracketConcreteSyntaxTreeNode.ts";
import {functionHeaderKnownSegmentOpeningBracketConcreteSyntaxTreeNodeTypeName} from "./functionHeaderKnownSegmentOpeningBracketConcreteSyntaxTreeNodeTypeName.ts";
export function createFunctionHeaderKnownSegmentOpeningBracketConcreteSyntaxTreeNode(
	character: OpeningRoundBracketCharacter,
	index: Index,
): FunctionHeaderKnownSegmentOpeningBracketConcreteSyntaxTreeNode {
	const treeNode: FunctionHeaderKnownSegmentOpeningBracketConcreteSyntaxTreeNode =
		createLeafConcreteSyntaxTreeNode(
			functionHeaderKnownSegmentOpeningBracketConcreteSyntaxTreeNodeTypeName,
			character,
			index,
		);
	return treeNode;
}
