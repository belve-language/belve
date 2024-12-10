import type {FunctionCallAbstractTreeNode} from "../function-call/FunctionCallAbstractTreeNode.ts";
import type {OperatedStatementAbstractTreeNode} from "../operated-statement/OperatedStatementAbstractTreeNode.ts";
import type {BlockAbstractTreeNode} from "./BlockAbstractTreeNode.ts";

export type BlockAbstractTreeNodeChildren = Readonly<{
	statements:
		| readonly [
				BlockAbstractTreeNode | FunctionCallAbstractTreeNode,
				...OperatedStatementAbstractTreeNode[],
		  ]
		| null;
}>;
