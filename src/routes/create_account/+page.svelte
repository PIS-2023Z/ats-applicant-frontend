<script lang="ts">
	import { goto } from '$app/navigation';

	const back = () => {
		goto('/login');
	};
</script>

<h1>Create account:</h1>
<form method="post">
	<div class="form">
		<label for="email">Email:</label>
		<input name="email" type="email" required />
		<label for="phone">Phone number:</label>
		<input name="phone" type="tel" required />
		<label for="password">Password:</label>
		<input name="password" type="password" required />
	</div>
	<div>
		<button type="button" on:click={back}>Back...</button>
		<button type="submit" class="confirm">Create</button>
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
		max-width: 150px;
	}
	input {
		/* float: right;
		width: calc(100% - 200px); */
		grid-column: 3/6;
	}
</style>
