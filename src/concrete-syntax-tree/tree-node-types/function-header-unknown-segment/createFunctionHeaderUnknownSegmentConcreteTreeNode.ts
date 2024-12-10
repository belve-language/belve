import type {ClosingSquareBracketCharacter} from "../../../characters/ClosingSquareBracketCharacter.ts";
import type {OpeningSquareBracketCharacter} from "../../../characters/OpeningSquareBracketCharacter.ts";
import {createConcreteTreeNode} from "../../createConcreteTreeNode.ts";
import type {FunctionHeaderUnknownSegmentContentConcreteTreeNode} from "../function-header-unknown-segment-content/FunctionHeaderUnknownSegmentContentConcreteTreeNode.ts";
import type {WhitespaceCharactersConcreteTreeNode} from "../whitespace-characters/WhitespaceCharactersConcreteTreeNode.ts";
import type {FunctionHeaderUnknownSegmentConcreteTreeNode} from "./FunctionHeaderUnknownSegmentConcreteTreeNode.ts";
import {functionHeaderUnknownSegmentConcreteTreeNodeTypeName} from "./functionHeaderUnknownSegmentConcreteTreeNodeTypeName.ts";

export function createFunctionHeaderUnknownSegmentConcreteTreeNode(
	openingBracketCharacter: OpeningSquareBracketCharacter,
	content:
		| FunctionHeaderUnknownSegmentContentConcreteTreeNode
		| WhitespaceCharactersConcreteTreeNode
		| null,
	closingBracketCharacter: ClosingSquareBracketCharacter,
): FunctionHeaderUnknownSegmentConcreteTreeNode {
	return createConcreteTreeNode(functionHeaderUnknownSegmentConcreteTreeNodeTypeName, [
		openingBracketCharacter,
		content,
		closingBracketCharacter,
	]);
}
