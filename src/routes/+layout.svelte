<script lang="ts">
	import '$lib/global_style.css';
	let logged_in = false;
</script>

<nav>
	<a href="/">Home</a>
	<a href="/offers">Search offers</a>
	<a href="/applications">Your applications</a>
	{#if logged_in}
		<a class="login_button" href="/logout">
			<button>Logout</button>
		</a>
	{:else}
		<a class="login_button" href="/login">
			<button>Login</button>
		</a>
	{/if}
</nav>
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
</style>
