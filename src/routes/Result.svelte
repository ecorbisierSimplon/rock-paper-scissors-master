<script lang="ts">
	import { flip } from 'svelte/animate';
	import { cubicInOut } from 'svelte/easing';
	import type { Elements } from './load';
	import type { ResultPlayer } from './calcul';
	import { validation, finish, boutons, resultFinal } from './store';
	import { send, receive } from './translate';
	import fadeScale from './translate';

	const resultFinals: ResultPlayer = $resultFinal as ResultPlayer;

	let player1: Elements = resultFinals.player1 as Elements;
	let player2: Elements = resultFinals.player2 as Elements;
</script>

<div class="result__title">Affichez le résultat ici avec le bouton sélectionné</div>
<div class="result__button">
	<div class="left">
		{#each $boutons.filter((t) => t.done) as bouton (bouton.id)}
			<div
				in:receive={{ key: bouton.id }}
				out:send={{ key: bouton.id }}
				animate:flip
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
	<div>
		<button>Play</button>
	</div>
	<div class="right"></div>

	{#if !$finish}
		<div
			class="loser"
			transition:fadeScale={{
				delay: 250,
				duration: 1000,
				easing: cubicInOut,
				baseScale: 0.5
			}}
		>
			{#each $boutons.filter((t) => t.loser) as bouton (bouton.id)}
				<div
					in:receive={{ key: bouton.id }}
					out:send={{ key: bouton.id }}
					animate:flip
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
</div>
