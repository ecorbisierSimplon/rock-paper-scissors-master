<script context="module" lang="ts">
	// Importez Choice et Resultat ici s'ils ne sont pas déjà importés
	import Choice from './Choice.svelte';
	import Resultat from './Resultat.svelte';

	export let showChoice = true; // Variable pour gérer l'affichage du composant
</script>

<script lang="ts">
	import { onMount } from 'svelte';
	import { ResultatPlayer } from './calcul';
	import { elements } from './load';
	import type { Element } from './load';

	export let idName: string = '';
	export let resultFinal: string[] = [];

	onMount(() => {
		const boutonsList = document.querySelectorAll('.image-at-point');
		boutonsList?.forEach((bouton) => {
			bouton.addEventListener('click', (event) => {
				// Récupérer l'id de l'élément cliqué
				const imageAtPoint = (event.target as HTMLElement).closest('.image-at-point');
				if (imageAtPoint) {
					// Récupérer l'id de l'élément cliqué
					idName = imageAtPoint.id.replace('bouton_', '');
					const player2: Element = elements[Math.floor(Math.random() * elements.length)];
					resultFinal = ResultatPlayer.calcul(idName as Element, player2);
					showChoice = false;
				}
				console.log(resultFinal);
			});
		});
	});
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section class="home">
	<div class="choice">
		{#if showChoice}
			<!-- Afficher le composant Choice -->
			<Choice />
		{:else}
			<!-- Afficher le composant Resultat -->
			<Resultat />
		{/if}
	</div>
	<div class="rules">
		<button>RULES</button>
	</div>
</section>
