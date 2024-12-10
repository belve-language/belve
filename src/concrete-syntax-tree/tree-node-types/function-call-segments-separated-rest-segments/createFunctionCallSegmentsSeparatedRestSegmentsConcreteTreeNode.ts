import {createConcreteTreeNode} from "../../createConcreteTreeNode.ts";
import type {FunctionCallKnownStartingSegmentsConcreteTreeNode} from "../function-call-known-starting-segments/FunctionCallKnownStartingSegmentsConcreteTreeNode.ts";
import type {FunctionCallUnknownStartingSegmentsConcreteTreeNode} from "../function-call-unknown-starting-segments/FunctionCallUnknownStartingSegmentsConcreteTreeNode.ts";
import type {WhitespaceCharactersConcreteTreeNode} from "../whitespace-characters/WhitespaceCharactersConcreteTreeNode.ts";
import type {FunctionCallWordStartingSegmentsConcreteTreeNode} from "../function-call-word-starting-segments/FunctionCallWordStartingSegmentsConcreteTreeNode.ts";
import {functionCallSegmentsSeparatedRestSegmentsConcreteTreeNodeTypeName} from "./functionCallSegmentsRestSegmentsConcreteTreeNodeTypeName.ts";
import type {FunctionCallSegmentsSeparatedRestSegmentsConcreteTreeNode} from "./FunctionCallSegmentsSeparatedRestSegmentsConcreteTreeNode.ts";

export function createFunctionCallSegmentsSeparatedRestSegmentsConcreteTreeNode(
	whitespaceCharacters: WhitespaceCharactersConcreteTreeNode,
	segments:
		| FunctionCallKnownStartingSegmentsConcreteTreeNode
		| FunctionCallUnknownStartingSegmentsConcreteTreeNode
		| FunctionCallWordStartingSegmentsConcreteTreeNode,
): FunctionCallSegmentsSeparatedRestSegmentsConcreteTreeNode {
	const treeNode: FunctionCallSegmentsSeparatedRestSegmentsConcreteTreeNode =
		createConcreteTreeNode(functionCallSegmentsSeparatedRestSegmentsConcreteTreeNodeTypeName, [
			whitespaceCharacters,
			segments,
		]);

	return treeNode;
}
