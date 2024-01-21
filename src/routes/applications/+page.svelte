<script lang="ts">
	export let data;
</script>

{#if data.logged_in}
	<h1>Your applications</h1>
	<div>
		<!-- TODO: offers -->
	</div>
{:else}
	<h1>Log in to see your applications.</h1>
{/if}
