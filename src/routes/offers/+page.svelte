<script lang="ts">
	import { page } from '$app/stores';
	import Offer from '$lib/Offer.svelte';
	export let data;
</script>

{#if data.logged_in}
	<h1>Offers</h1>
	<div>
		<form method="post">
			<label for="phrase">Filter by term:</label>
			<input name="phrase" type="text" value={$page.url.searchParams.get('phrase') ?? ''} />
			<button>Search</button>
		</form>
	</div>
	{#if data.data.length === 0}
		<p>No offers found.</p>
	{:else}
		<div>
			{#each data.data as offer (offer.id)}
				<div class="offer_div">
					<Offer {offer} />
				</div>
			{/each}
		</div>
	{/if}
{:else}
	<h1>Log in to browse offers.</h1>
{/if}

<style>
	.offer_div {
		margin-bottom: 20px;
		margin-top: 20px;
	}
</style>
