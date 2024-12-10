<script lang="ts">
	import {building as isBeingBuilt} from "$app/environment";
	import {page} from "$app/state";
	import Page from "../lib/page/Page.svelte";
	const sourceCode = $derived(isBeingBuilt ? null : page.url.searchParams.get("source-code"));
</script>

<Page {sourceCode} />
