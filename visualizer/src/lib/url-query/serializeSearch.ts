import type {Query} from "./Query.ts";
import type {Search} from "./Search.ts";
export function serializeSearch(search: Search): Query {
	return [...search.entries()].flatMap(([key, values]) =>
		values.map((value) => (value === null ? key : [key, value])),
	);
}
