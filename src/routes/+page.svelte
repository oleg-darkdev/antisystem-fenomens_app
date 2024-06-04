<script>
	// import { FactSheet, Carousel, Price } from '$lib/entities/';
	import { antISystems } from '$lib/shared';
	import { BoardgameSection, Footer, } from '$lib/widgets';

	import { onMount } from 'svelte';

	onMount(() => {
		const sections = [...document.querySelectorAll('section')];

		let options = {
			rootMargin: '0px',
			threshold: 0.75
		};

		const callback = (entries, observer) => {
			entries.forEach((entry) => {
				const { target } = entry;

				if (entry.intersectionRatio >= 0.75) {
					target.classList.add('is-visible');
				} else {
					target.classList.remove('is-visible');
				}
			});
		};

		const observer = new IntersectionObserver(callback, options);

		sections.forEach((section, index) => {
			const sectionChildren = [...section.querySelector('[data-content]').children];

			sectionChildren.forEach((el, index) => {
				el.style.setProperty('--delay', `${index * 250}ms`);
			});

			observer.observe(section);
		});
	});

	// export let boardgame;
</script>

<svelte:head>
  <title>Anti-system Fenomens</title>
</svelte:head>

<header data-header class="page-header">
	<nav>
		<ul class="nav__list">
			<li class="nav__item">
				<a href="#about">Mission</a>
			</li>
			<li class="nav__item">
				<a href="#api">API</a>
			</li>
      	<li class="nav__item">
				<a href="#faq">FAQ</a>
			</li>
			<li class="nav__item nav__item--cta">
				<a href="/">Log in</a>
			</li>
		</ul>
	</nav>
</header>

<main>
	<section class="section hero">
		<div class="hero__bg">
			<img
				class="hero__img"
				src="/images/bg.png"
				alt="Rainforest view with sunset"
			/>
		</div>
		<div class="hero__content" data-content>
			<div class="hero__text">
				<img
					class="hero__footprint"

					src="/images/logo.svg"
					alt="Logo anti-system"
				/>
				<h1 class="hero__title">Anti-system <br /> Fenomens</h1>
				<p class="hero__intro">Get ready for out the box adventure</p>
			</div>
		</div>
	</section>


	<a name='faq' />

  <!-- <section class="section hero">
		<div class="hero__bg">
			<img
				class="hero__img"
				src="/images/bg.png"
				alt="Rainforest view with sunset"
			/>
		</div>
		<div class="hero__content flex flex-col" data-content>

		</div>
	</section> -->

<section class="section max-h-screen w-full bg-black h-screen">
	<header class="section__header__about bg-black" style=''>
		<h3 class="section__title text-black">Our mission</h3>
	</header>
	<div  class="section__content__about " data-content>
		<div class="section__intro__about px-2">
		<h2 class="mb-6 section__main-title section__main-title--left max-w-2xl">Our mission</h2>


		<div class='mb-6'>
			<!-- <h3 class="mb-2 section__main-title section__main-title--left max-w-xl">OBJECTIVE</h3> -->
			<p class='lg:text-left xl:text-left md:text-left text-center'>
				To showcase the impact of anti-system movements on contemporary society and introduce you to unique forms of countercultural practices in an interactive and educational format.
			</p>
		</div>
			<a name='about' />

			{#each antISystems as boardgame}
				<p class='flex flex-row  my-2'>
					<img src='/images/logos/{boardgame.logo}' class='lg:h-12 md:h-12 h-8 lg:mr-4 md:mr-4 mr-2 w-auto' alt='Boardgame {boardgame.title} logo'/>
					<a class='lg:text-4xl md:text-4xl  text-lg text-black lg:px-6 md:px-4 px-2 lg:py-2 md:py-2 py-1 rounded-md' style='color: {boardgame.brandColor}'  href="#{boardgame.anchor}">{boardgame.title}  »</a></p>

					{/each}


		</div>
	</div>
</section>


  {#each antISystems as boardgame}
    <BoardgameSection {boardgame} />
  {/each}

  <!-- faq -->
  <!-- <section class="section max-h-screen h-screen">
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
			<p><a href="">Find out more</a></p>
		</div>
	</div>
</section> -->

<footer class="section max-h-screen w-full bg-black h-screen">
	<!-- <header class="section__header__about bg-black" style=''>
		<h3 class="section__title text-black">Public API</h3>
	</header> -->
	<div  class="section__content__about " data-content>
		<div style="max-width: 100ch;" class="px-2 section__intro__about">
		<h2 class="mb-8 section__main-title section__main-title--left max-w-xl">Public API</h2>
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
</footer>
</main>




<style>
	@media (max-width: 60em) {
		.cuttedText {
			display: block;
			width: 230px;
			overflow: hidden;
			white-space: nowrap;
			text-overflow: ellipsis;
		}
	}
</style>
