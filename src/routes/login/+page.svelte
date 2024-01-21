<script lang="ts">
	import { afterNavigate, goto } from '$app/navigation';
	import { base } from '$app/paths';

	let previous_page: string = base;

	afterNavigate(({ from }) => {
		previous_page = from?.url.pathname ?? previous_page;
	});

	const back = () => {
		goto(previous_page);
	};
</script>

<form method="post">
	<div class="form">
		<label for="email">Email:</label>
		<input name="email" type="email" required />
		<label for="password">Password:</label>
		<input name="password" type="password" required />
	</div>
	<div class="buttons">
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
