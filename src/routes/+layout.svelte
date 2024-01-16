<script lang="ts">
	import { onMount } from 'svelte';
	import { getCookie, setCookie } from 'typescript-cookie';
	import '../css/style.min.css';
	import Header from '$lib/component/Header.svelte';
	export let hostname: string = '';

	onMount(() => {
		hostname = window.location.origin;
		const secureCookie: boolean = false;
		if (!getCookie('withOther')) {
			setCookie('withOther', 0, { expires: 365, secure: secureCookie });
		}
	});
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
