import type {ClosingRoundBracketCharacter} from "../../../characters/ClosingRoundBracketCharacter.ts";
import type {OpeningRoundBracketCharacter} from "../../../characters/OpeningRoundBracketCharacter.ts";
import {createConcreteTreeNode} from "../../createConcreteTreeNode.ts";
import type {FunctionCallKnownSegmentContentConcreteTreeNode} from "../function-call-known-segment-content/FunctionCallKnownSegmentContentConcreteTreeNode.ts";
import type {WhitespaceCharactersConcreteTreeNode} from "../whitespace-characters/WhitespaceCharactersConcreteTreeNode.ts";
import type {FunctionCallKnownSegmentConcreteTreeNode} from "./FunctionCallKnownSegmentConcreteTreeNode.ts";
import {functionCallKnownSegmentConcreteTreeNodeTypeName} from "./functionCallKnownSegmentConcreteTreeNodeTypeName.ts";

export function createFunctionCallKnownSegmentConcreteTreeNode(
	openingBracketCharacter: OpeningRoundBracketCharacter,
	content:
		| FunctionCallKnownSegmentContentConcreteTreeNode
		| WhitespaceCharactersConcreteTreeNode
		| null,
	closingBracketCharacter: ClosingRoundBracketCharacter,
): FunctionCallKnownSegmentConcreteTreeNode {
	return createConcreteTreeNode(functionCallKnownSegmentConcreteTreeNodeTypeName, [
		openingBracketCharacter,
		content,
		closingBracketCharacter,
	]);
}
