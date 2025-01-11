import type {FailureSearchFromHrefValidationResult} from "./FailureSearchFromHrefValidationResult.ts";
import type {SuccessSearchFromHrefValidationResult} from "./SuccessSearchFromHrefValidationResult.ts";
export type SupportedSearchFromHrefValidationResult<Datum> =
	| SuccessSearchFromHrefValidationResult<Datum>
	| FailureSearchFromHrefValidationResult;
