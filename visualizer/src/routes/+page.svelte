<script lang="ts">
	import Page from "../lib/page/Page.svelte";
	const {data: parsingConfiguration} = $props();
</script>

<Page {parsingConfiguration} />
