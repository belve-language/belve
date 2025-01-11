import {parseQueryStringParameterValueState} from "./parseQueryStringParameterValueState.ts";
import type {Query} from "./Query.ts";
export function parseQueryStringParameterKeyState(
	restQueryString: string,
	key: string,
	accumulatedQuery: Query,
): Query {
	const firstCharacter = restQueryString[0];
	if (typeof firstCharacter === "undefined") {
		return [...accumulatedQuery, key];
	}
	const restCharacters = restQueryString.slice(1);
	switch (firstCharacter) {
		case "=": {
			const query = parseQueryStringParameterValueState(restCharacters, key, "", accumulatedQuery);
			return query;
		}
		case "&": {
			const newAccumulatedQuery = [...accumulatedQuery, key];
			const query = parseQueryStringParameterKeyState(restCharacters, "", newAccumulatedQuery);
			return query;
		}
	}
	const query = parseQueryStringParameterKeyState(
		restCharacters,
		`${key}${firstCharacter}`,
		accumulatedQuery,
	);
	return query;
}
