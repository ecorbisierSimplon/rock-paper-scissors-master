<script context="module">
	import triangle from '$lib/images/bg-triangle.svg';
	import welcome from '$lib/images/logo.svg';
	import welcome_fallback from '$lib/images/logo-bonus.svg';
</script>

<script lang="ts">
	import { onMount } from 'svelte';
	import { Resultat, elements } from './typescript/calcul';
	import type { Element } from './typescript/calcul';

	import { getCookie, setCookie } from 'typescript-cookie';
	import Choice from './component/Choice.svelte';
	export let hostname: string = '';
	onMount(() => {
		hostname = window.location.origin;
		const secureCookie: boolean = false;

		if (!getCookie('withPuit')) {
			setCookie('withPuit', 0, { expires: 365, secure: secureCookie });
		}

		let player1: Element = 'ciseaux';
		// Générer deux indices aléatoires
		let player2: Element = elements[Math.floor(Math.random() * elements.length)];
		console.log(new Resultat().calcul(player1, player2));
	});
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section class="home">
	<div class="choice">
		<Choice />
	</div>
	<div class="rules">
		<button>RULES</button>
	</div>
</section>
