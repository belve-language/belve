import type {failureSearchFromHrefValidationResultStatus} from "./failureSearchFromHrefValidationResultStatus.ts";
import type {SearchFromHrefValidationResult} from "./SearchFromHrefValidationResult.ts";
export type FailureSearchFromHrefValidationResult = SearchFromHrefValidationResult<
	typeof failureSearchFromHrefValidationResultStatus
> &
	Readonly<{
		correctedHref: string;
	}>;
