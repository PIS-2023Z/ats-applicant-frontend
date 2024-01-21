<script lang="ts">
	import Offer from '$lib/Offer.svelte';
	let data = [1, 2, 3];
</script>

<h1>Offers</h1>
<div>
	{#each data as offer}
		<div class="offer_div">
			<Offer />
		</div>
	{/each}
	<!-- TODO: offers -->
</div>
