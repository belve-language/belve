import type {OperatorCharacter} from "../../../characters/OperatorCharacter.ts";
import {createConcreteTreeNode} from "../../createConcreteTreeNode.ts";
import type {StatementsConcreteTreeNode} from "../statements/StatementsConcreteTreeNode.ts";
import type {WhitespaceCharactersConcreteTreeNode} from "../whitespace-characters/WhitespaceCharactersConcreteTreeNode.ts";
import type {StatementsRestStatementsConcreteTreeNode} from "./StatementsRestStatementsConcreteTreeNode.ts";
import {statementsRestStatementsConcreteTreeNodeTypeName} from "./statementsRestStatementsConcreteTreeNodeTypeName.ts";

export function createStatementsRestStatementsConcreteTreeNode(
	beforeOperatorWhitespaceCharacters: WhitespaceCharactersConcreteTreeNode | null,
	operatorCharacter: OperatorCharacter,
	afterOperatorWhitespaceCharacters: WhitespaceCharactersConcreteTreeNode | null,
	statements: StatementsConcreteTreeNode,
): StatementsRestStatementsConcreteTreeNode {
	const treeNode: StatementsRestStatementsConcreteTreeNode = createConcreteTreeNode(
		statementsRestStatementsConcreteTreeNodeTypeName,
		[
			beforeOperatorWhitespaceCharacters,
			operatorCharacter,
			afterOperatorWhitespaceCharacters,
			statements,
		],
	);

	return treeNode;
}
