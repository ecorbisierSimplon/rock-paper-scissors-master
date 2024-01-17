<script lang="ts">
	import { writable, type Writable } from 'svelte/store';
	import triangle from '$lib/images/bg-triangle.svg';
	import { validation, finish, boutons } from './store';
	import type { objectButton } from './bouton';

	let selectedButtonId: string | null = null;
	function handleButtonClick(name: string) {
		selectedButtonId = name;
		validation(name);
	}

	function handleKeydown(
		event: KeyboardEvent & {
			currentTarget: EventTarget & HTMLDivElement;
		},
		name: string
	) {
		if (event.key === 'Enter' || event.key === 'Space') {
			// Gérer l'événement clavier ici
			handleButtonClick(name);
		}
	}

	console.log($boutons);
</script>

<!-- {#if !finish} -->
<div id="play" class="triangle">
	<img src={triangle} alt="SciPaRo" class:opac={!$finish} class:playEnd={$finish} />
	{#each $boutons as bouton}
		<div
			on:click={() => handleButtonClick(bouton.name)}
			on:keydown={(event) => handleKeydown(event, bouton.name)}
			tabindex={bouton.position}
			role="button"
			id="bouton_{bouton.name}"
			class="image-at-point point-{bouton.position}"
			class:position={$finish}
		>
			<div>
				<img src={bouton.path} alt="SciPaRo {bouton.name}" />
			</div>
		</div>
	{/each}
</div>
{$finish}
<!-- {/if} -->
