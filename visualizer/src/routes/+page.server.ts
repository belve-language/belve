import {redirect} from "@sveltejs/kit";
import type {PageServerLoad} from "./$types.ts";
import type {ParsingConfiguration} from "../lib/page/ParsingConfiguration.ts";
import {validateSearchParamsFromUrl} from "../lib/validateSearchParamsFromUrl.ts";
export const load: PageServerLoad = async ({url}) => {
	const searchValidationResult = validateSearchParamsFromUrl(
		url,
		(searchParams: URLSearchParams) => {
			const sourceCode = searchParams.get("source-code") ?? "";
			const isAnimated = searchParams.get("animated") === "yes";
			const parsingConfiguration: ParsingConfiguration = {
				sourceCode,
				isAnimated,
			};
			const correctedSearchParams = new URLSearchParams();
			correctedSearchParams.set("source-code", sourceCode);
			correctedSearchParams.set("animated", isAnimated ? "yes" : "no");
			return {
				datum: parsingConfiguration,
				correctedSearchParams,
			};
		},
	);
	console.log(searchValidationResult);
	switch (searchValidationResult.status) {
		case "success": {
			return searchValidationResult.datum;
		}
		case "failure": {
			redirect(301, searchValidationResult.correctedUrl);
		}
	}
};
