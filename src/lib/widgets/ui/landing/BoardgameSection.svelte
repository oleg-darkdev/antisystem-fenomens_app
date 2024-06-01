<script>
	// import { onMount } from 'svelte';

	export let boardgame;
</script>

<section class="section max-h-screen h-screen">
	<header class="section__header" style='background-color: {boardgame.brandColor}'>
		<h3 class="section__title text-black">{boardgame.title}</h3>
	</header>
	<div  class="section__content " data-content>

		<a name='{boardgame.anchor}' />

		<img
			class="section__img"
	src="/images/logos/{boardgame.logo}"
			alt="Parasaurolophus"
		/>

		<h2 class="section__main-title section__main-title--left max-w-xl">{boardgame.title}</h2>
		<div class="section__intro gentle-giants__intro">
			<p>
				{boardgame.shortDesc}
			</p>
			<p><a href="/" class='text-white'>Find out more</a></p>
		</div>
	</div>
</section>



<style>
	
</style>

	