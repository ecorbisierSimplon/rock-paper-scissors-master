<script>
	import '../css/style.min.css';
	import Header from './component/Header.svelte';
</script>

<Header />
<div class="app">
	<main>
		<slot />
	</main>
</div>
<footer>
	<p>
		visit <a
			href="https://o.fortboyard.tv/defis/pierre_feuille_ciseau_puits.php#description"
			target="_blank"
		>
			play instruction</a
		>
	</p>
</footer>
