<script>
	import { FactSheet, Carousel, Price } from '$lib/entities/';

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


	<!-- 
		
<section
	id={boardgame.anchor}
	style="background-position: {boardgame.align == 'start' ? 'right' : 'left'};"
	class="{boardgame.bgImage} work-wrap grid  grid-cols-1 bg-black "
>
	<div
		data-aos="fade-down"
		data-aos-delay="80"
		data-aos-duration="800"
		data-aos-once="false"
		data-aos-mirror="true"
		style=""
		class="w-full flex  {boardgame.align == 'start'
			? 'justify-self-start '
			: 'justify-self-end ' }  glass  lg:w-6/12"
	>
  		<div
			style="min-width: 320px;"
			class="flex  min-h-screen w-full flex-col  items-center pt-6  pr-2  pl-2  "
		>
			<div class="h-full p-10">
				<div class="mb-4 flex flex-row space-x-2">
					{#each boardgame.keywords as keyword}
						<span style="color: {boardgame.brandColor};" class="badge-outline badge  badge-lg"
							>{keyword}</span
						>
					{/each}
				</div>

				<a class="" href={boardgame.links.site} target="_blank"
					><h5 class="mb-2 text-4xl font-semibold tracking-tight text-white">
						{boardgame.title}
					</h5></a
				>
				<div class="mb-4 max-w-xl">
					{#each boardgame.description as description}
						<p class="m-2 text-start font-normal leading-tight text-neutral-300 ">
							{description}
						</p>
					{/each}
				</div>

				<a id="#{boardgame.anchor}" />
				<Carousel autoplay="2000" images={boardgame.images} />

				<Price {boardgame} />
			</div>
		</div>
	</div>
</section>

<style>
  .glass {
		background: rgba(12, 10, 9, 0.6);
		overflow: hidden;
    border: none;
		backdrop-filter: blur(10px);
		-webkit-backdrop-filter: blur(10px);
	}

	.work-wrap {
		height: auto;
		background-repeat: no-repeat;
		background-size: contain;
    			min-height: 100vh;

		background-attachment: fixed;
	}
	@media (min-width: 1024px) {
		/* .work-wrap {
			min-height: 100vh;
		} */
		.a-bg {
			background-image: url(/images/games/a-bg.svg);
		}

		.eco-bg {
			background-image: url(/images/games/eco-bg.svg);
		}

		.ror-bg {
			background-image: url(/images/games/ror-bg.png);
		}

		.fnb-bg {
			background-image: url(/images/games/fnb-bg.svg);
		}

		.graffity-bg {
			background-image: url(/images/games/graffity-bg.svg);
		}

		.locators-bg {
			background-image: url(/images/games/fnb-bg.svg);
		}

		.squat-bg {
			background-image: url(/images/games/squat-bg.svg);
		}

    .mks-bg {
			background-image: url(/images/games/mks-bg.png);
		}


    .lgbt-bg {
			background-image: url(/images/games/lgbt-bg.svg);
		}
    .cov-bg {
			background-image: url(/images/games/cov-bg.svg);
		}

    .gulag-bg {
			background-image: url(/images/games/gulag-bg.svg);
		}

    .yakudza-bg {
			background-image: url(/images/games/yakudza-bg.svg);
		}

    .by_pl-bg {
			background-image: url(/images/games/by-pl-bg.svg);
		}

	}
	@media (min-device-width: 320px) and (max-device-width: 1024px) {
		.work-wrap {
			
		}
		.a-bg {
			background-color: #000;
		}
	}
</style>

	 -->