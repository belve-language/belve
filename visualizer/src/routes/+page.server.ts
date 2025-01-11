import {redirect} from "@sveltejs/kit";
import type {Search} from "../lib/url-query/Search.ts";
import {validateSearchFromHref} from "../lib/url-query/validateSearchFromHref.ts";
import type {PageServerLoad} from "./$types.ts";
import type {ParsingConfiguration} from "$lib/page/ParsingConfiguration.ts";

export const load: PageServerLoad = async ({url}) => {
	const searchValidationResult = validateSearchFromHref(url.href, (search: Search) => {
		const sourceCode = search.get("source-code")?.[0] ?? "";
		const isAnimated = search.has("animated");
		const parsingConfiguration: ParsingConfiguration = {
			sourceCode,
			isAnimated,
		};
		const correctedSearch: Search = new Map([
			["source-code", [sourceCode]],
			...(isAnimated ? [["animated", [null]] as const] : []),
		]);
		return {
			datum: parsingConfiguration,
			correctedSearch,
		};
	});
	switch (searchValidationResult.status) {
		case "success": {
			return searchValidationResult.datum;
		}
		case "failure": {
			console.log(url.href, searchValidationResult.correctedHref);
			redirect(301, searchValidationResult.correctedHref);
		}
	}
};
