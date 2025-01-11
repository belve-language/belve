import type {Query} from "./Query.ts";
import type {QueryString} from "./QueryString.ts";
export function serializeQuery(query: Query): QueryString {
	return [
		...(query.length === 0 ? [] : [""]),
		query
			.map((parameter) => {
				if (typeof parameter === "string") {
					return parameter;
				}
				return parameter.join("=");
			})
			.join("&"),
	].join("?") as QueryString;
}
