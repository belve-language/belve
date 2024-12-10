import type {FunctionHeaderKnownStartingSegmentsConcreteTreeNode} from "../function-header-known-starting-segments/FunctionHeaderKnownStartingSegmentsConcreteTreeNode.ts";
import type {FunctionHeaderUnknownStartingSegmentsConcreteTreeNode} from "../function-header-unknown-starting-segments/FunctionHeaderUnknownStartingSegmentsConcreteTreeNode.ts";
import type {WhitespaceCharactersConcreteTreeNode} from "../whitespace-characters/WhitespaceCharactersConcreteTreeNode.ts";
import type {FunctionHeaderWordStartingSegmentsConcreteTreeNode} from "../function-header-word-starting-segments/FunctionHeaderWordStartingSegmentsConcreteTreeNode.ts";

export type FunctionHeaderSegmentsSeparatedRestSegmentsConcreteTreeNodeChildren = readonly [
	initialWhitespaceCharacters: WhitespaceCharactersConcreteTreeNode,

	segments:
		| FunctionHeaderKnownStartingSegmentsConcreteTreeNode
		| FunctionHeaderUnknownStartingSegmentsConcreteTreeNode
		| FunctionHeaderWordStartingSegmentsConcreteTreeNode,
];
