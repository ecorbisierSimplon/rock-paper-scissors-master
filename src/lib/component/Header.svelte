<script lang="ts">
	import logo from '$lib/images/logo.svg';
	import { score } from '../../routes/store';
	import { spring } from 'svelte/motion';

	const displayed_count1 = spring();
	$: displayed_count1.set($score.play1);
	$: offset1 = modulo($displayed_count1, 1);

	const displayed_count2 = spring();
	$: displayed_count2.set($score.play2);
	$: offset2 = modulo($displayed_count2, 1);

	function modulo(n: number, m: number) {
		// handle negative numbers
		return ((n % m) + m) % m;
	}
</script>

<header>
	<div class="header">
		<div class="logo">
			<a href="javascript(void:0)">
				<img src={logo} alt="SciPaRo" />
			</a>
		</div>
		<div class="score">
			<span>SCORE</span>
			<div>
				<div>
					<label for="player1">Player1</label>
					<div class="counter">
						<div class="counter-viewport">
							<div class="counter-digits" style="transform: translate(0, {100 * offset1}%)">
								<strong class="hidden" aria-hidden="true">
									{Math.floor($displayed_count1 + 1)}
								</strong>
								<strong>
									{Math.floor($displayed_count1)}
								</strong>
							</div>
						</div>
					</div>
				</div>
				<div>
					<label for="player2">Player2</label>
					<div class="counter">
						<div class="counter-viewport">
							<div class="counter-digits" style="transform: translate(0, {100 * offset2}%)">
								<strong class="hidden" aria-hidden="true">
									{Math.floor($displayed_count2 + 1)}
								</strong>
								<strong>
									{Math.floor($displayed_count2)}
								</strong>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</header>

<style>
	/* .counter {
		display: flex;
		border-top: 1px solid rgba(0, 0, 0, 0.1);
		border-bottom: 1px solid rgba(0, 0, 0, 0.1);
		margin: 1rem 0;
	}

	.counter-viewport {
		width: 8em;
		height: 4em;
		overflow: hidden;
		text-align: center;
		position: relative;
	}

	.counter-viewport strong {
		position: absolute;
		display: flex;
		width: 100%;
		height: 100%;
		font-weight: 400;
		color: var(--color-theme-1);
		font-size: 3rem;
		align-items: center;
		justify-content: center;
	}

	.counter-digits {
		position: absolute;
		width: 100%;
		height: 100%;
	}

	.hidden {
		top: -100%;
		user-select: none;
	} */
</style>
