import type {QueryString} from "./QueryString.ts";
export type SearchFromQueryStringValidationResult<Datum> = Readonly<{
	datum: Datum;
	correctedQueryString: QueryString;
}>;
