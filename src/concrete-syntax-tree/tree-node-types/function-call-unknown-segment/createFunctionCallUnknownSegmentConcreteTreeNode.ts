import type {ClosingSquareBracketCharacter} from "../../../characters/ClosingSquareBracketCharacter.ts";
import type {OpeningSquareBracketCharacter} from "../../../characters/OpeningSquareBracketCharacter.ts";
import {createConcreteTreeNode} from "../../createConcreteTreeNode.ts";
import type {FunctionCallUnknownSegmentContentConcreteTreeNode} from "../function-call-unknown-segment-content/FunctionCallUnknownSegmentContentConcreteTreeNode.ts";
import type {WhitespaceCharactersConcreteTreeNode} from "../whitespace-characters/WhitespaceCharactersConcreteTreeNode.ts";
import type {FunctionCallUnknownSegmentConcreteTreeNode} from "./FunctionCallUnknownSegmentConcreteTreeNode.ts";
import {functionCallUnknownSegmentConcreteTreeNodeTypeName} from "./functionCallUnknownSegmentConcreteTreeNodeTypeName.ts";

export function createFunctionCallUnknownSegmentConcreteTreeNode(
	openingBracketCharacter: OpeningSquareBracketCharacter,
	content:
		| FunctionCallUnknownSegmentContentConcreteTreeNode
		| null
		| WhitespaceCharactersConcreteTreeNode,
	closingBracketCharacter: ClosingSquareBracketCharacter,
): FunctionCallUnknownSegmentConcreteTreeNode {
	const treeNode: FunctionCallUnknownSegmentConcreteTreeNode = createConcreteTreeNode(
		functionCallUnknownSegmentConcreteTreeNodeTypeName,
		[openingBracketCharacter, content, closingBracketCharacter],
	);

	return treeNode;
}
