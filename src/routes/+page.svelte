<script context="module">
	import Counter from './Counter.svelte';
	import welcome from '$lib/images/logo.svg';
	import welcome_fallback from '$lib/images/logo-bonus.svg';
</script>

<script lang="ts">
	import { resultat, elements } from './API/calcul';
	import type { Element } from './API/calcul';

	import { getCookie, setCookie } from 'typescript-cookie';

	// export const _hostname: string = window.location.origin;
	const secureCookie: boolean = false;

	if (!getCookie('withPuit')) {
		setCookie('withPuit', 0, { expires: 365, secure: secureCookie });
	}

	let player1: Element = 'ciseaux';
	// Générer deux indices aléatoires
	let player2: Element = elements[Math.floor(Math.random() * elements.length)];
	console.log(resultat(player1, player2));
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
	<h1>
		<span class="welcome">
			<picture>
				<source srcset={welcome} type="image/webp" />
				<img src={welcome_fallback} alt="Welcome" />
			</picture>
		</span>

		to your new<br />SvelteKit app
	</h1>

	<h2>
		try editing <strong>src/routes/+page.svelte</strong>
	</h2>

	<Counter />
</section>
