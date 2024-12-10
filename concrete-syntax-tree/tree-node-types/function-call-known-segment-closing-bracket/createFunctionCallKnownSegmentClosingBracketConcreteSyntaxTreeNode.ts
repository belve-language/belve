import type {ClosingRoundBracketCharacter} from "../../../characters/closing-round-bracket/ClosingRoundBracketCharacter.ts";
import {createLeafConcreteSyntaxTreeNode} from "../../createLeafConcreteSyntaxTreeNode.ts";
import type {Index} from "../../index/Index.ts";
import type {FunctionCallKnownSegmentClosingBracketConcreteSyntaxTreeNode} from "./FunctionCallKnownSegmentClosingBracketConcreteSyntaxTreeNode.ts";
import {functionCallKnownSegmentClosingBracketConcreteSyntaxTreeNodeTypeName} from "./functionCallKnownSegmentClosingBracketConcreteSyntaxTreeNodeTypeName.ts";
export function createFunctionCallKnownSegmentClosingBracketConcreteSyntaxTreeNode(
	character: ClosingRoundBracketCharacter,
	index: Index,
): FunctionCallKnownSegmentClosingBracketConcreteSyntaxTreeNode {
	const treeNode: FunctionCallKnownSegmentClosingBracketConcreteSyntaxTreeNode =
		createLeafConcreteSyntaxTreeNode(
			functionCallKnownSegmentClosingBracketConcreteSyntaxTreeNodeTypeName,
			character,
			index,
		);
	return treeNode;
}
