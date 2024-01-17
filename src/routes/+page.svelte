<script lang="ts">
	import Choice from './Choice.svelte';
	import Result from './Result.svelte';
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section class="home">
	<div class="choice">
		<Choice />
	</div>
	<div class="result">
		<Result />
	</div>
	<div class="rules">
		<button>RULES</button>
	</div>
</section>
