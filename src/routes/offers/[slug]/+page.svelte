<script lang="ts">
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';

	export let data;
</script>

<h1>{data.name}</h1>
<p>Creation date: {data.publishedAt.toDateString()}</p>
<p>Expiration date: {data.expiresAt.toDateString()}</p>
<p>Salary: {data.monthlySalary?.toString() ?? 'not specified.'}</p>
<p>Description: {data.description ?? 'not specified.'}</p>
<p>Status: {data.status}</p>

<button
	on:click={() => {
		goto(`${$page.url}/apply`);
	}}>Apply...</button
>
