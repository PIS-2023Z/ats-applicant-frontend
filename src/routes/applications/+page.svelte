<script lang="ts">
	import Offer from '$lib/Offer.svelte';

	export let data;
</script>

{#if data.logged_in}
	{#if data.data.length !== 0}
		<h1>Your applications</h1>
		<div>
			{#each data.data as offer (offer.id)}
				<Offer {offer} />
			{/each}
		</div>
	{:else}
		<h1>No applications found.</h1>
	{/if}
{:else}
	<h1>Log in to see your applications.</h1>
{/if}
