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

 {/each}      </div>
 				<a id="#{boardgame.anchor}" />

			<div class="location">
        {#each boardgame.description as description}
						<p class="m-2 text-start font-normal leading-tight text-neutral-300 ">
							{description}
						</p>
					{/each}
      </div>
			<div class="type">
				   				<!-- <Price {boardgame} /> -->

				<a id="#{boardgame.anchor}" />
				<Carousel autoplay="2000" images={boardgame.images} />


			<div class="date"><span class="side-title">Roast Date</span>$84.00</div>
			<div class="weight"><span class="side-title"> <a class='' href={boardgame.links.site} target="_blank">
				BGG: {boardgame.bggRaiting} </a></span> </div>
			<div class="footnote">
        <a class='' href={boardgame.links.download} target="_blank">
				Free Download for Print and Play </a>
        </div>
			<div class="site">{boardgame.links.site}</div>
			<div class="pattern ">
				<!-- <Carousel autoplay="2000" images={boardgame.images} /> -->

      </div>
			<div class="square one" style="background-color: {boardgame.brandColor};"/>
			<div class="square two" style="background-color: {boardgame.brandColor};"/>
			<div class="strip" />
		</div>
</div>

<style>
	strong {
		font-weight: 500;
	}

	.coffee-card {

		flex: 1;

		min-width: 380px;
		display: grid;
		grid-template-columns: 1.2fr 1fr min-content;
		grid-auto-rows: min-content;
		/* margin: 2rem; */
		line-height: 1.5;
		position: relative;
		box-shadow: 0 4px 0 -2px #ddd, 1px 1px 0 0 #f7f7f7;
	}
	.coffee-card:before,
	.coffee-card:after {
		z-index: -1;
		position: absolute;
		content: '';
		bottom: 35px;
		left: 10px;
		width: 50%;
		top: 80%;
		max-width: 300px;

	}
	.coffee-card::after {
		transform: rotate(4deg);
		right: 10px;
		left: auto;
	}
	.coffee-card > * {
		padding: 0.6rem 1.2rem;
	}
	.coffee-card h5 {
		font-size: clamp(2.2rem, 4.2vw, 3rem);
		line-height: 1;
		font-weight: 500;
	}
	.coffee-card .name {
		grid-column: 1/-1;
		grid-row: 2;
		padding-bottom: 1.2rem;
	}
	.coffee-card .info,
	.coffee-card .location,
	.coffee-card .type,
	.coffee-card .pattern {
		grid-column: 1 / span 2;
	}
	.coffee-card .date,
	.coffee-card .weight {
		transform: rotate(180deg);
		writing-mode: vertical-lr;
		padding: 1.2rem 0;
	}
	.coffee-card .date,
	.coffee-card .weight,
	.coffee-card .footnote,
	.coffee-card .site {
		font-size: 85%;
	}
	.coffee-card .date {
		grid-row: 3 / span 4;
		grid-column: 3/4;
	}
	.coffee-card .footnote {
		grid-column: 1/2;
	}
	.coffee-card .weight {
		grid-row: 7 / span 1;
		grid-column: 3/4;
		min-height: 10rem;
	}
	.coffee-card .pattern {
		grid-row: 6 / span 2;
		min-height: 13.5rem;
		background-repeat: repeat;
	}

	.side-title {
		display: inline-block;
		margin-bottom: 0.75rem;
		border-bottom: 0.5px dashed;
		padding: 0 0.8rem 0.75rem;
	}

	.name,
	.info,
	.location,
	.weight {
		border-bottom: 0.5px dashed;
	}

	.info,
	.location,
	.type,
	.footnote {
		border-right: 0.5px dashed;
	}


	.strip {
		grid-column: 1/3;
		grid-row: 1;
	}

	.square {
		background: white;

	}
	.square.one {
		grid-row: 1;
		grid-column: 3/4;
		height: 2.5rem;
	}


	.glass {
		background: rgba(12, 10, 9, 0.6);
		border: none;
		backdrop-filter: blur(10px);
		-webkit-backdrop-filter: blur(10px);
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