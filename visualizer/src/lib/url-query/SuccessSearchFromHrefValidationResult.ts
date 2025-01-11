import type {SearchFromHrefValidationResult} from "./SearchFromHrefValidationResult.ts";
import type {successSearchFromHrefValidationResultStatus} from "./successSearchFromHrefValidationResultStatus.ts";
export type SuccessSearchFromHrefValidationResult<Datum> = SearchFromHrefValidationResult<
	typeof successSearchFromHrefValidationResultStatus
> &
	Readonly<{
		datum: Datum;
	}>;
