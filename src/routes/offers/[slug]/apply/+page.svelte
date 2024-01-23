<script lang="ts">
	import { goto } from '$app/navigation';
	export let data;

	const quit = () => {
		goto(`../${data.slug}`);
	};
</script>

<form method="post" enctype="multipart/form-data">
	<div class="form">
		<label for="cv">CV file (.pdf):</label>
		<input id="cv" type="file" accept=".pdf" name="cv" required />
		<label for="salary">Salary:</label>
		<input type="number" name="salary" required />
		<label for="hours">Hours per week:</label>
		<input type="number" name="hours" required />
	</div>
	<div class="buttons">
		<button type="button" on:click={quit}>Back...</button>
		<button type="submit" class="confirm">Confirm</button>
	</div>
</form>

<style>
	div.form {
		width: 25%;
		display: grid;
		gap: 8px;
		grid-template-columns: 150px, 1fr;
		margin-bottom: 20px;
	}
	label {
		grid-column: 1/2;
	}
	input {
		grid-column: 2/3;
	}
</style>
