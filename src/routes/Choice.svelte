<script lang="ts">
	import triangle from '$lib/images/bg-triangle.svg';
	import { Boutons } from './bouton';
	import { Load } from './load';
	import type { Element } from './load';

	let boutons: string[] = [];
	const elements: Element[] = Load.load();
	boutons = elements.map((name) => new Boutons(name).getDisplay());
</script>

<div class="triangle">
	<img src={triangle} alt="SciPaRo" />

	{#each boutons as bouton (bouton)}
		{@html bouton}
	{/each}
</div>
