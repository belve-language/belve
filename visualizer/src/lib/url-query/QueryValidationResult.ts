import type {Query} from "./Query.ts";
export type SearchFromQueryValidationResult<Datum> = Readonly<{
	datum: Datum;
	correctedQuery: Query;
}>;
