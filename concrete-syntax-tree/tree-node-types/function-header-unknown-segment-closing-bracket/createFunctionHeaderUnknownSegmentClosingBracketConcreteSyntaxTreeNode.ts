import type {ClosingSquareBracketCharacter} from "../../../characters/closing-square-bracket/ClosingSquareBracketCharacter.ts";
import {createLeafConcreteSyntaxTreeNode} from "../../createLeafConcreteSyntaxTreeNode.ts";
import type {Index} from "../../index/Index.ts";
import type {FunctionHeaderUnknownSegmentClosingBracketConcreteSyntaxTreeNode} from "./FunctionHeaderUnknownSegmentClosingBracketConcreteSyntaxTreeNode.ts";
import {functionHeaderUnknownSegmentClosingBracketConcreteSyntaxTreeNodeTypeName} from "./functionHeaderUnknownSegmentClosingBracketConcreteSyntaxTreeNodeTypeName.ts";
export function createFunctionHeaderUnknownSegmentClosingBracketConcreteSyntaxTreeNode(
	character: ClosingSquareBracketCharacter,
	index: Index,
): FunctionHeaderUnknownSegmentClosingBracketConcreteSyntaxTreeNode {
	const treeNode: FunctionHeaderUnknownSegmentClosingBracketConcreteSyntaxTreeNode =
		createLeafConcreteSyntaxTreeNode(
			functionHeaderUnknownSegmentClosingBracketConcreteSyntaxTreeNodeTypeName,
			character,
			index,
		);
	return treeNode;
}
