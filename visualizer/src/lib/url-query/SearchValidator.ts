import type {Search} from "./Search.ts";
import type {SearchValidationResult} from "./SearchValidationResult.ts";
export type SearchValidator<Datum> = (search: Search) => SearchValidationResult<Datum>;
