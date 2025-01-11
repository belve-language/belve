import {parseQueryStringParameterKeyState} from "./parseQueryStringParameterKeyState.ts";
import type {Query} from "./Query.ts";
import type {QueryString} from "./QueryString.ts";
export function parseQueryString(queryString: QueryString): Query {
	const firstCharacter = queryString[0] as undefined | "?";
	if (typeof firstCharacter === "undefined") {
		return [];
	}
	const restCharacters = queryString.slice(1);
	const query = parseQueryStringParameterKeyState(restCharacters, "", []);
	return query;
}
