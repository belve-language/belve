import {parseQueryString} from "./parseQueryString.ts";
import type {QueryString} from "./QueryString.ts";
import type {SearchFromQueryStringValidationResult} from "./SearchFromQueryStringValidationResult.ts";
import type {SearchValidator} from "./SearchValidator.ts";
import {serializeQuery} from "./serializeQuery.ts";
import {validateSearchFromQuery} from "./validateSearchFromQuery.ts";
export function validateSearchFromQueryString<Datum>(
	queryString: QueryString,
	validator: SearchValidator<Datum>,
): SearchFromQueryStringValidationResult<Datum> {
	const query = parseQueryString(queryString);
	const {datum, correctedQuery} = validateSearchFromQuery(query, validator);
	const correctedQueryString = serializeQuery(correctedQuery);
	return {
		datum,
		correctedQueryString,
	};
}
