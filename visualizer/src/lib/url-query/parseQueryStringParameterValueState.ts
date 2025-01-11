import {parseQueryStringParameterKeyState} from "./parseQueryStringParameterKeyState.ts";
import type {Query} from "./Query.ts";
export function parseQueryStringParameterValueState(
	restQueryString: string,
	key: string,
	value: string,
	accumulatedQuery: Query,
): Query {
	const firstCharacter = restQueryString[0];
	if (typeof firstCharacter === "undefined") {
		return [...accumulatedQuery, [key, value]];
	}
	const restCharacters = restQueryString.slice(1);
	if (firstCharacter === "&") {
		const newAccumulatedQuery: Query = [...accumulatedQuery, [key, value]];
		const query = parseQueryStringParameterKeyState(restCharacters, "", newAccumulatedQuery);
		return query;
	}
	const query = parseQueryStringParameterValueState(
		restCharacters,
		key,
		`${value}${firstCharacter}`,
		accumulatedQuery,
	);
	return query;
}
