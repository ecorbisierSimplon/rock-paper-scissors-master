<script lang="ts">
	import { flip } from 'svelte/animate';
	import { cubicInOut } from 'svelte/easing';
	import { validation, finish, boutons } from './store';
	import { send, receive } from './translate';
	import fadeScale from './translate';
	import triangle from '$lib/images/bg-triangle.svg';

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
			handleButtonClick(name);
		}
	}

	console.log($boutons);
	console.log($finish);
</script>

<!-- {#if !finish} -->
{#if !$finish}
	<div
		id="play"
		class="triangle"
		transition:fadeScale={{
			delay: 250,
			duration: 1000,
			easing: cubicInOut,
			baseScale: 0.5
		}}
	>
		<img src={triangle} alt="SciPaRo" />

		{#each $boutons.filter((t) => !t.done && !t.loser) as bouton (bouton.id)}
			<div
				in:receive={{ key: bouton.id }}
				out:send={{ key: bouton.id }}
				animate:flip
				on:click={() => {
					bouton.done = true;
					handleButtonClick(bouton.id);
				}}
				on:keydown={(event) => handleKeydown(event, bouton.id)}
				tabindex={bouton.position}
				role="button"
				id={bouton.id}
				class="image-at-point point-{bouton.position}"
				class:position={$finish}
			>
				<div>
					<img src={bouton.path} alt="SciPaRo {bouton.name}" />
				</div>
			</div>
		{/each}
	</div>
{/if}
