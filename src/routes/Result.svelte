<script lang="ts">
	import { flip } from 'svelte/animate';
	import { cubicInOut } from 'svelte/easing';
	import type { Elements } from './load';
	import type { ResultPlayer } from './calcul';
	import { validation, finish, boutons, resultFinal, textResult } from './store';
	import { send, receive } from './translate';
	import fadeScale from './translate';
	import Reset from './Reset.svelte';

	const resultFinals: ResultPlayer = $resultFinal as ResultPlayer;

	let player1: Elements = resultFinals.player1 as Elements;
	let player2: Elements = resultFinals.player2 as Elements;
</script>

<div class="result__title" class:actived={$finish}>
	{@html $textResult}
</div>
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
			>
				<div>
					<img src={bouton.path} alt="SciPaRo {bouton.name}" />
				</div>
			</div>
		{/each}
	</div>
	<div class="center" class:actived={$finish}>
		<Reset />
	</div>
	<div class="right">
		{#if $finish}
			<div class="image-at-point point-99">
				<div>
					<!-- <img src={bouton.path} alt="SciPaRo {bouton.name}" /> -->
				</div>
			</div>
		{/if}
		{#each $boutons.filter((t) => t.play2) as bouton (bouton.id)}
			<div
				in:receive={{ key: bouton.id }}
				out:send={{ key: bouton.id }}
				animate:flip
				tabindex={bouton.position}
				role="button"
				id={bouton.id}
				class="image-at-point point-{bouton.position}"
			>
				<div>
					<img src={bouton.path} alt="SciPaRo {bouton.name}" />
				</div>
			</div>
		{/each}
	</div>

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
				>
					<div>
						<img src={bouton.path} alt="SciPaRo {bouton.name}" />
					</div>
				</div>
			{/each}
		</div>
	{/if}
</div>
