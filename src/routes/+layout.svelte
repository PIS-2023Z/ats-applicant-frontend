<script lang="ts">
	import { invalidateAll } from '$app/navigation';
	import '$lib/global_style.css';
	export let data;
</script>

<header>
	<nav>
		<a href="/">Home</a>
		<a href="/offers">Search offers</a>
		<a href="/applications">Your applications</a>
	</nav>
	{#if data.logged_in}
		<div class="login_div">
			<label for="logout">
				Logged in as: {data.email}
			</label>
			<a href="/logout" on:click={invalidateAll}>
				<button name="logout" class="login_button">Logout</button>
			</a>
		</div>
	{:else}
		<a href="/login">
			<button class="login_button">Login</button>
		</a>
	{/if}
</header>
<slot />

<style>
	nav {
		display: flex;
		justify-content: space-between;
		align-items: center;
		column-gap: 8px;
	}
	.login_button {
		margin-left: auto;
	}
	header {
		padding: 10px;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.login_div {
		display: flex;
		gap: 100px;
	}
</style>
