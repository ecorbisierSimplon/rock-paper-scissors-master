<script>
	import { page } from '$app/stores';
	import logo from '$lib/images/logo.svg';
	// import github from '$lib/images/logo-bonus.svg';
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
			<span>99</span>
		</div>
	</div>
	<nav>
		<ul>
			<li aria-current={$page.url.pathname === '/' ? 'page' : undefined}>
				<a href="/">Home</a>
			</li>
			<li aria-current={$page.url.pathname === '/about' ? 'page' : undefined}>
				<a href="/about">About</a>
			</li>
			<!-- <li aria-current={$page.url.pathname.startsWith('/sverdle') ? 'page' : undefined}>
				<a href="/sverdle">Sverdle</a>
			</li> -->
		</ul>
	</nav>
</header>
