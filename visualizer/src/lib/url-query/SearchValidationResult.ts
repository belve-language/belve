import type {Search} from "./Search.ts";
export type SearchValidationResult<Datum> = Readonly<{
	datum: Datum;
	correctedSearch: Search;
}>;
