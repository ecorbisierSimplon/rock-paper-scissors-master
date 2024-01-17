<script lang="ts">
	import { onMount } from 'svelte';
	import { spring } from 'svelte/motion';

	let selectedCircle: number | null = null;
	let circle1 = spring(0);
	let circle2 = spring(100);
	let circle3 = spring(200);

	const moveCircles = () => {
		if (selectedCircle !== null) {
			const targetPosition1 = selectedCircle * 100;
			const targetPosition2 = selectedCircle % 2 === 0 ? 100 : 200;

			circle1.set(targetPosition1);
			circle2.set(targetPosition2);
			circle3.set(targetPosition2);

			selectedCircle = null;
		}
	};

	onMount(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (!event.target || !(event.target instanceof HTMLElement)) return;

			if (!event.target.closest('.circle-container')) {
				moveCircles();
			}
		};

		document.addEventListener('click', handleClickOutside);

		return () => {
			document.removeEventListener('click', handleClickOutside);
		};
	});
</script>

<div class="circle-container">
	<div
		bind:this={$circle1}
		class="circle"
		style="left: 0px; top: 50px;"
		on:click={() => (selectedCircle = 0)}
	>
		1
		<div class="triangle"></div>
	</div>

	<div
		bind:this={$circle2}
		class="circle"
		style="left: 100px; top: 50px;"
		on:click={() => (selectedCircle = 1)}
	>
		2
		<div class="triangle"></div>
	</div>

	<div
		bind:this={$circle3}
		class="circle"
		style="left: 200px; top: 50px;"
		on:click={() => (selectedCircle = 2)}
	>
		3
		<div class="triangle"></div>
	</div>
</div>

<div class="circle-container player1">
	{#if selectedCircle !== null && selectedCircle % 2 === 0}
		<div class="circle" style="left: 0; top: 50px;">
			{selectedCircle + 1}
			<div class="triangle"></div>
		</div>
	{/if}
</div>

<div class="circle-container player2">
	{#if selectedCircle !== null && selectedCircle % 2 !== 0}
		<div class="circle" style="left: 0; top: 50px;">
			{selectedCircle + 1}
			<div class="triangle"></div>
		</div>
	{/if}
</div>

<style>
	.circle-container {
		position: relative;
		width: 300px;
		height: 200px;
		border: 1px solid #ccc;
		margin-bottom: 20px;
		overflow: hidden;
	}

	.circle {
		position: absolute;
		width: 50px;
		height: 50px;
		border-radius: 50%;
		background-color: lightblue;
		display: flex;
		align-items: center;
		justify-content: center;
		cursor: pointer;
		transition: transform 0.3s ease-in-out;
	}

	.triangle {
		position: absolute;
		width: 0;
		height: 0;
		border-style: solid;
		border-width: 15px 0 15px 26px;
		border-color: transparent transparent transparent lightblue;
		pointer-events: none;
	}

	.player1 {
		background-color: lightcoral;
	}

	.player2 {
		background-color: lightgreen;
	}

	.circle.selected {
		border: 2px solid darkblue;
		transform: scale(1.2);
	}
</style>
