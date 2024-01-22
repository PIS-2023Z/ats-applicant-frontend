<script lang="ts">
	import { afterNavigate, goto } from '$app/navigation';

	let previous_page: string = '/';

	afterNavigate(({ from }) => {
		previous_page = from?.url.pathname ?? previous_page;
	});

	const back = () => {
		goto('/');
	};
</script>

<h1>Log in:</h1>
<form method="post">
	<div class="form">
		<label for="email">Email:</label>
		<input name="email" type="email" required />
		<label for="password">Password:</label>
		<input name="password" type="password" required />
	</div>

	<p>
		No account? <a class="create_link" href="/create_account">Create one.</a>
	</p>

	<div>
		<button type="button" on:click={back}>Back...</button>
		<button type="submit" class="confirm">Login</button>
	</div>
</form>

<style>
	div.form {
		width: 25%;
		min-width: 500px;
		display: grid;
		gap: 8px;
		margin-bottom: 20px;
	}
	label {
		grid-column: 1/3;
		max-width: 60px;
	}
	input {
		grid-column: 3/6;
	}
</style>
