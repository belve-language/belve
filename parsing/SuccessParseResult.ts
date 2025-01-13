import type {ConcreteSyntaxTree} from "../concrete-syntax-tree/ConreteSyntaxTree.ts";
import type {ParserResult} from "./ParseResult.ts";
export type SuccessParseResult = ParserResult<"success"> &
	Readonly<{
		tree: ConcreteSyntaxTree;
	}>;
