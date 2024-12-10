import type {ClosingRoundBracketCharacter} from "../../../characters/ClosingRoundBracketCharacter.ts";
import type {OpeningRoundBracketCharacter} from "../../../characters/OpeningRoundBracketCharacter.ts";
import {createConcreteTreeNode} from "../../createConcreteTreeNode.ts";
import type {FunctionHeaderKnownSegmentContentConcreteTreeNode} from "../function-header-known-segment-content/FunctionHeaderKnownSegmentContentConcreteTreeNode.ts";
import type {WhitespaceCharactersConcreteTreeNode} from "../whitespace-characters/WhitespaceCharactersConcreteTreeNode.ts";
import type {FunctionHeaderKnownSegmentConcreteTreeNode} from "./FunctionHeaderKnownSegmentConcreteTreeNode.ts";
import {functionHeaderKnownSegmentConcreteTreeNodeTypeName} from "./functionHeaderKnownSegmentConcreteTreeNodeTypeName.ts";

export function createFunctionHeaderKnownSegmentConcreteTreeNode(
	openingBracketCharacter: OpeningRoundBracketCharacter,
	content:
		| FunctionHeaderKnownSegmentContentConcreteTreeNode
		| WhitespaceCharactersConcreteTreeNode
		| null,
	closingBracketCharacter: ClosingRoundBracketCharacter,
): FunctionHeaderKnownSegmentConcreteTreeNode {
	return createConcreteTreeNode(functionHeaderKnownSegmentConcreteTreeNodeTypeName, [
		openingBracketCharacter,
		content,
		closingBracketCharacter,
	]);
}
