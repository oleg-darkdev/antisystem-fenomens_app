<script>
	import { antISystems } from '$lib/shared';
</script>

<section class="section max-h-screen w-full bg-black h-screen">
	<!-- <header class="section__header__about bg-black" style=''>
		<h3 class="section__title text-black">Public API</h3>
	</header> -->
	<div  class="section__content__about " data-content>
		<div style="max-width: 100ch;" class="px-2 section__intro__about">
		<h2 class="mb-8 section__main-title font-bebasNeue section__main-title--left max-w-xl">Public API</h2>
		<div class='mb-4'>
			<!-- <h3 class="mb-2 section__main-title section__main-title--left max-w-xl">OBJECTIVE</h3> -->
			<p class='lg:text-left xl:text-left md:text-left text-center'>
				To showcase the impact of anti-system movements on contemporary society and introduce you to unique forms of countercultural practices in an interactive and educational format.
			</p>


		</div>

			<a name='api' />


			{#each antISystems as boardgame}
				<p class='mx-auto flex flex-row  my-2 '>
					<img src='/images/logos/{boardgame.logo}' class='lg:h-12 md:h-12 h-8 lg:mr-6 md:mr-4 mr-2 w-auto' alt='Boardgame {boardgame.title} logo'/>
					<a class='lg:text-4xl md:text-4xl  text-lg text-black lg:px-6 md:px-4 px-2 lg:py-2 md:py-2 py-1 rounded-md cuttedText' style='background-color: {boardgame.brandColor}'  href="{boardgame.api}">{boardgame.api.substring(30, boardgame.api.length)}</a></p>
			{/each}
		</div>
	</div>
</section>