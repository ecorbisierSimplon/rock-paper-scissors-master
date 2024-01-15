<script context="module">
	import triangle from '$lib/images/bg-triangle.svg';
	import rock from '$lib/images/icon-rock.svg';
	import paper from '$lib/images/icon-paper.svg';
	import scissors from '$lib/images/icon-scissors.svg';
</script>

<div class="triangle">
	<img src={triangle} alt="SciPaRo" />

	<div class="image-at-point point-1"><img src={rock} alt="SciPaRo" /></div>
	<div class="image-at-point point-2"><img src={paper} alt="SciPaRo" /></div>
	<div class="image-at-point point-3"><img src={scissors} alt="SciPaRo" /></div>
</div>
