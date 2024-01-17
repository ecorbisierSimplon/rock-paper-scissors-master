<script lang="ts">
	import { writable, type Writable } from 'svelte/store';
	import { Boutons, type objectButton } from './bouton';
	import type { Elements } from './load';
	import type { ResultPlayer } from './calcul';
	import { validation, finish, boutons, resultFinal, idName } from './store';
	const resultFinals: ResultPlayer = $resultFinal as ResultPlayer;
	let player1: Elements = resultFinals.player1 as Elements;
	let player2: Elements = resultFinals.player2 as Elements;
</script>

<div id="result" class:opac={finish} class:playEnd={!finish}>
	Affichez le résultat ici avec le bouton sélectionné

	<div
		id="bouton_result_{player1}"
		class:image-at-point={true}
		class:position={$finish}
		class="image-at-point point-{Boutons.getDisplay(player1).position}"
	>
		<div>
			{$finish}
			<img src={Boutons.getDisplay(player1).path} alt="SciPaRo {player1}" />
			{$idName}
		</div>
	</div>
	<div>
		<button>Play</button>
	</div>
	<div
		id="bouton_result_{player2}"
		class:image-at-point={true}
		class:position={$finish}
		class="image-at-point point-{Boutons.getDisplay(player2).position}"
	>
		<div>
			<span>your play </span>
			<img src={Boutons.getDisplay(player2).path} alt="SciPaRo {player2}" />
		</div>
	</div>
</div>
