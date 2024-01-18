<script lang="ts">
	import { validation, finish, boutons, resultFinal, textResult } from './store';

	function reset() {
		finish.set(false);
		textResult.set('Résultat en attente !!!');
		boutons.set(
			$boutons.map((bouton) => ({
				...bouton,
				loser: false,
				play2: false,
				done: false
			}))
		);
	}
</script>

<button on:click={reset}> Play again </button>
