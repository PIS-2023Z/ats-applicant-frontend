<script lang="ts">
	import { goto } from '$app/navigation';
	import type { ApiOffer } from '$lib/types';

	export let offer: ApiOffer;
</script>

<button
	class="offer"
	on:click={() => {
		goto(`/offers/${offer.id}`);
	}}
>
	<h2 class="name">{offer.name}</h2>
	<h3 class="salary">
		Salary: {offer.monthlySalary?.toString() ?? 'not specified'}
	</h3>
	<div class="dates">
		<p class="published_date">
			Date published: {offer.publishedAt.toDateString()}
		</p>
		<p class="expiration_date">
			Expiration date: {offer.expiresAt.toDateString()}
		</p>
	</div>
</button>

<style>
	.offer {
		width: 50%;
		border-radius: 30px;
		border-width: 5px;
	}
	.dates {
		display: flex;
		justify-content: space-between;
		margin: 0 40px;
	}
</style>
