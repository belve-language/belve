import {createConcreteTreeNode} from "../../createConcreteTreeNode.ts";
import type {FunctionsConcreteTreeNode} from "../functions/FunctionsConcreteTreeNode.ts";
import type {WhitespaceCharactersConcreteTreeNode} from "../whitespace-characters/WhitespaceCharactersConcreteTreeNode.ts";
import type {SourceFileContentConcreteTreeNode} from "./SourceFileContentConcreteTreeNode.ts";
import {sourceFileContentConcreteTreeNodeTypeName} from "./sourceFileContentConcreteTreeNodeTypeName.ts";

export function createSourceFileContentConcreteTreeNode(
	intialWhitespaceCharacters: WhitespaceCharactersConcreteTreeNode | null,
	functions: FunctionsConcreteTreeNode,
	finalWhitespaceCharacters: WhitespaceCharactersConcreteTreeNode | null,
): SourceFileContentConcreteTreeNode {
	return createConcreteTreeNode(sourceFileContentConcreteTreeNodeTypeName, [
		intialWhitespaceCharacters,
		functions,
		finalWhitespaceCharacters,
	]);
}
