import {createConcreteTreeNode} from "../../createConcreteTreeNode.ts";
import type {FunctionCallKnownStartingSegmentsConcreteTreeNode} from "../function-call-known-starting-segments/FunctionCallKnownStartingSegmentsConcreteTreeNode.ts";
import type {FunctionCallUnknownStartingSegmentsConcreteTreeNode} from "../function-call-unknown-starting-segments/FunctionCallUnknownStartingSegmentsConcreteTreeNode.ts";
import type {FunctionCallWordStartingSegmentsConcreteTreeNode} from "../function-call-word-starting-segments/FunctionCallWordStartingSegmentsConcreteTreeNode.ts";
import type {FunctionCallConcreteTreeNode} from "./FunctionCallConcreteTreeNode.ts";
import {functionCallConcreteTreeNodeTypeName} from "./functionCallConcreteTreeNodeTypeName.ts";

export function createFunctionCallConcreteTreeNode(
	segments:
		| FunctionCallWordStartingSegmentsConcreteTreeNode
		| FunctionCallUnknownStartingSegmentsConcreteTreeNode
		| FunctionCallKnownStartingSegmentsConcreteTreeNode,
): FunctionCallConcreteTreeNode {
	return createConcreteTreeNode(functionCallConcreteTreeNodeTypeName, [segments]);
}
