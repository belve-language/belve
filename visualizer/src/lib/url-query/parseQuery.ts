import type {Query} from "./Query.ts";
import type {Search} from "./Search.ts";
export function parseQuery(query: Query): Search {
	const search = new Map<string, readonly [null | string, ...(null | string)[]]>();
	for (const parameter of query) {
		const [key, value] = typeof parameter === "string" ? [parameter, null] : parameter;
		const alreadyPresentValues = search.get(key);
		if (typeof alreadyPresentValues === "undefined") {
			search.set(key, [value]);
		} else {
			search.set(key, [...alreadyPresentValues, value]);
		}
	}
	return search;
}
