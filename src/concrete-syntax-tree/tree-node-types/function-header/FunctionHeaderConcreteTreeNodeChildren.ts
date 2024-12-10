import type {FunctionHeaderKnownStartingSegmentsConcreteTreeNode} from "../function-header-known-starting-segments/FunctionHeaderKnownStartingSegmentsConcreteTreeNode.ts";
import type {FunctionHeaderUnknownStartingSegmentsConcreteTreeNode} from "../function-header-unknown-starting-segments/FunctionHeaderUnknownStartingSegmentsConcreteTreeNode.ts";
import type {FunctionHeaderWordStartingSegmentsConcreteTreeNode} from "../function-header-word-starting-segments/FunctionHeaderWordStartingSegmentsConcreteTreeNode.ts";
import type {WhitespaceCharactersConcreteTreeNode} from "../whitespace-characters/WhitespaceCharactersConcreteTreeNode.ts";

export type FunctionHeaderConcreteTreeNodeChildren = readonly [
	segments:
		| FunctionHeaderWordStartingSegmentsConcreteTreeNode
		| FunctionHeaderUnknownStartingSegmentsConcreteTreeNode
		| FunctionHeaderKnownStartingSegmentsConcreteTreeNode,
	finalWhitespaceCharacters: WhitespaceCharactersConcreteTreeNode | null,
];
