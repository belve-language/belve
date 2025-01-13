import {redirect} from "@sveltejs/kit";
import type {PageLoad} from "./$types.js";
import type {ParsingConfiguration} from "../lib/page/ParsingConfiguration.ts";
import {validateSearchParamsFromUrl} from "../lib/validateSearchParamsFromUrl.ts";
import {modeSearchParamName} from "../lib/modeSearchParamName.ts";
import {sourceCodeSearchParamName} from "../lib/sourceCodeSearchParamName.ts";
export const load: PageLoad = async ({url}) => {
	const searchValidationResult = validateSearchParamsFromUrl(
		url,
		(searchParams: URLSearchParams) => {
			const sourceCode = searchParams.get(sourceCodeSearchParamName) ?? "";
			const rawMode = searchParams.get(modeSearchParamName);
			const mode =
				rawMode === "animated" ||
				rawMode === "none" ||
				rawMode === "instant" ||
				rawMode === "abstract-syntax-tree"
					? rawMode
					: "none";
			const parsingConfiguration: ParsingConfiguration = {
				sourceCode,
				mode,
			};
			const correctedSearchParams = new URLSearchParams();
			correctedSearchParams.set(sourceCodeSearchParamName, sourceCode);
			correctedSearchParams.set(modeSearchParamName, mode);
			return {
				datum: parsingConfiguration,
				correctedSearchParams,
			};
		},
	);
	switch (searchValidationResult.status) {
		case "success": {
			return searchValidationResult.datum;
		}
		case "failure": {
			redirect(301, searchValidationResult.correctedUrl);
		}
	}
};
