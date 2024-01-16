<script lang="ts">
	import { Boutons } from './bouton';
	import { Load } from './load';
	import type { Element } from './load';
	import { onMount } from 'svelte';

	let boutons: string[] = [];
	const elements: Element[] = Load.load();
	boutons = elements.map((name) => new Boutons(name).getDisplay());
</script>

<div class=" result">
	{@html boutons[0]}
</div>
