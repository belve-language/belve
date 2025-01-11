import {parseQuery} from "./parseQuery.ts";
import type {Query} from "./Query.ts";
import type {SearchFromQueryValidationResult} from "./QueryValidationResult.ts";
import type {SearchValidator} from "./SearchValidator.ts";
import {serializeSearch} from "./serializeSearch.ts";
export function validateSearchFromQuery<Datum>(
	query: Query,
	validator: SearchValidator<Datum>,
): SearchFromQueryValidationResult<Datum> {
	const search = parseQuery(query);
	const {datum, correctedSearch} = validator(search);
	const correctedQuery = serializeSearch(correctedSearch);
	return {
		datum,
		correctedQuery,
	};
}
