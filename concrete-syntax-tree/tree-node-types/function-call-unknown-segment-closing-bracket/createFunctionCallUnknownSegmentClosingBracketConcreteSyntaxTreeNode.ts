import type {ClosingSquareBracketCharacter} from "../../../characters/closing-square-bracket/ClosingSquareBracketCharacter.ts";
import {createLeafConcreteSyntaxTreeNode} from "../../createLeafConcreteSyntaxTreeNode.ts";
import type {Index} from "../../index/Index.ts";
import type {FunctionCallUnknownSegmentClosingBracketConcreteSyntaxTreeNode} from "./FunctionCallUnknownSegmentClosingBracketConcreteSyntaxTreeNode.ts";
import {functionCallUnknownSegmentClosingBracketConcreteSyntaxTreeNodeTypeName} from "./functionCallUnknownSegmentClosingBracketConcreteSyntaxTreeNodeTypeName.ts";
export function createFunctionCallUnknownSegmentClosingBracketConcreteSyntaxTreeNode(
	character: ClosingSquareBracketCharacter,
	index: Index,
): FunctionCallUnknownSegmentClosingBracketConcreteSyntaxTreeNode {
	const treeNode: FunctionCallUnknownSegmentClosingBracketConcreteSyntaxTreeNode =
		createLeafConcreteSyntaxTreeNode(
			functionCallUnknownSegmentClosingBracketConcreteSyntaxTreeNodeTypeName,
			character,
			index,
		);
	return treeNode;
}
