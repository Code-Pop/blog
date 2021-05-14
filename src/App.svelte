<script>
	let firstName = '';
	let lastName = '';

	$: fullName = firstName + ' ' + lastName;

	function reset() {
		firstName = '';
		lastName = '';
	}
</script>

<main>
	<p>Hi, please enter your name:</p>
	<p>First: <input bind:value={firstName} /></p>
	<p>Last: <input bind:value={lastName} /></p>
	<p>{ fullName }</p>
	<p><button on:click={reset}>Reset</button></p>
</main>

<style>
	main {
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
		background-color:#eee;
	}
</style>