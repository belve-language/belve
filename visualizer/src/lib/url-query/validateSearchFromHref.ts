import {failureSearchFromHrefValidationResultStatus} from "./failureSearchFromHrefValidationResultStatus.ts";
import type {QueryString} from "./QueryString.ts";
import type {SearchValidator} from "./SearchValidator.ts";
import {successSearchFromHrefValidationResultStatus} from "./successSearchFromHrefValidationResultStatus.ts";
import type {SupportedSearchFromHrefValidationResult} from "./SupportedSearchFromHrefValidationResult.ts";
import {validateSearchFromQueryString} from "./validateSearchFromQueryString.ts";
export function validateSearchFromHref<Datum>(
	href: string,
	validator: SearchValidator<Datum>,
): SupportedSearchFromHrefValidationResult<Datum> {
	const {rawQueryString, beforeQueryString} = (
		/^(?<beforeQueryString>[^?]*)(?<rawQueryString>(?:\?.*)?)$/u.exec(href) as RegExpExecArray
	).groups as Readonly<{
		rawQueryString: QueryString;
		beforeQueryString: string;
	}>;
	const queryString = decodeURI(rawQueryString) as QueryString;
	const {datum, correctedQueryString} = validateSearchFromQueryString(queryString, validator);
	console.log({queryString, correctedQueryString});
	if (queryString === correctedQueryString) {
		return {
			status: successSearchFromHrefValidationResultStatus,
			datum,
		};
	}
	const correctedHref = beforeQueryString + encodeURI(correctedQueryString);
	return {
		status: failureSearchFromHrefValidationResultStatus,
		correctedHref,
	};
}
