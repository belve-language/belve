import type {ParserResult} from "./ParseResult.ts";
export type ErrorParseResult = ParserResult<"error"> &
	Readonly<{
		error: Error;
	}>;
