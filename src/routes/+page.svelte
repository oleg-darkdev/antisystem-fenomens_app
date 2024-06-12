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



	const faq = [
		{
			id: 0,
			q: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.`,
			a: [`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make`, `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard `]
		},
		{
			id: 1,
			q: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.`,
			a: [`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make`, `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard `]
		},
		{
			id: 2,
			q: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.`,
			a: [`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make`, `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard `]
		},
		{
			id: 3,
			q: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.`,
			a: [`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make`, `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard `]
		}
	]
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
				<h1 class="hero__title font-bebasNeue">Anti-system <br /> Fenomens</h1>
				<p class="hero__intro">Get ready for out the box adventure</p>
			</div>
		</div>
	</section>




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
		<h3 class="section__title ">Our mission</h3>
	</header>
	<div  class="section__content__about " data-content>
		<div class="section__intro__about px-2">
		<h2 class="mb-6 section__main-title section__main-title--left max-w-2xl font-bebasNeue">Our mission</h2>


		<div class='mb-6'>
			<!-- <h3 class="mb-2 section__main-title section__main-title--left max-w-xl">OBJECTIVE</h3> -->
			<p class='lg:text-left xl:text-left md:text-left text-center'>
      A research project demonstrating the impact of anti-systemic movements on modern society and familiarizing users with forms of countercultural practices in an interactive and educational format.			</p>
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



<section class="section max-h-screen w-full bg-black h-screen">
  	<a name='faq' />
       <div  class="section__content__about " data-content>
		<div style="max-width: 100ch;" class="w-full px-2 section__intro__about">
		<h2 class="mb-8 font-bebasNeue text-center">F.A.Q.</h2>
		<div class='mb-4  w-full '>
			<!-- <h3 class="mb-2 section__main-title section__main-title--left max-w-xl">OBJECTIVE</h3> -->
        <ul class="flex  w-full flex-col">
          {#each faq as dataFaq (dataFaq.id)}
          <li class="bg-white w-full my-2 shadow-lg rounded-md">
            <p
              on:click={()=> dataFaq.showData = !dataFaq.showData}
              class="flex flex-row justify-between items-center font-semibold p-3 text-black cursor-pointer"
            >
              <span>{dataFaq.q}</span>
              <svg
                class:rotate-180={dataFaq.showData}
                class="fill-current text-black h-16 w-16 transform transition-transform duration-500"
                viewBox="0 0 20 20"
              >
                <path d="M13.962,8.885l-3.736,3.739c-0.086,0.086-0.201,0.13-0.314,0.13S9.686,12.71,9.6,12.624l-3.562-3.56C5.863,8.892,5.863,8.611,6.036,8.438c0.175-0.173,0.454-0.173,0.626,0l3.25,3.247l3.426-3.424c0.173-0.172,0.451-0.172,0.624,0C14.137,8.434,14.137,8.712,13.962,8.885 M18.406,10c0,4.644-3.763,8.406-8.406,8.406S1.594,14.644,1.594,10S5.356,1.594,10,1.594S18.406,5.356,18.406,10 M17.521,10c0-4.148-3.373-7.521-7.521-7.521c-4.148,0-7.521,3.374-7.521,7.521c0,4.147,3.374,7.521,7.521,7.521C14.148,17.521,17.521,14.147,17.521,10"></path>
              </svg>
            </p>

            {#if dataFaq.showData}
              <div
                class="pl-6"
              >
                 {#each dataFaq.a as answer}
                <p class="p-3 text-black">
                  {answer}
                </p>
                {/each}
              </div>
            {/if}
          </li>
          {/each}
        </ul>
		</div>
	</div>

</section>


<footer class="section max-h-screen w-full bg-black h-screen">
   <div  class="section__content__about " data-content>
		<div style="max-width: 100ch;" class="px-2 section__intro__about">
		<h2 class="mb-8 font-bebasNeue max-w-xl text-center">Contact</h2>
		<div class='mb-4'>
			<!-- <h3 class="mb-2 section__main-title section__main-title--left max-w-xl">OBJECTIVE</h3> -->
      <div class=' max-w-2xl mx-auto my-auto'>
          <div class='w-full max-w-md mb-4 mx-auto'>
            <p class=' text-center'>This is an open-source project, with <a class='font-bold' href="" target='_blank'>open repository on github </a> and is distributed under a license <a class='font-bold' href="https://creativecommons.org/licenses/by-nc-sa/4.0/" target='_blank'>CC BY-NC-SA</a>.</p>
          </div>

          <div class='w-full  lg:mb-4 xl:mb-4 md:mb-4 mb-6  '>
            <p class='text-center '>Idea Author: <a class='font-bold' href="https://oleg-darkdev.vercel.app/" target='_blank'>Oleg DarkDEV</a></p>
          </div>
          <div class='w-full mb-6 flex flex-wrap flex-row lg:justify-between xl:justify-between md:justify-between justify-center mx-auto'>
              <div class='hover:scale-110 hover:transition hover:duration-1000  hover:ease-in-out'>
                <a class='' href="https://darkdev-foundation.vercel.app/" target='_blank'>
                <figure class=''>
                  <figcaption class='text-sm '>Development by DarkDev.Foundation</figcaption>
                  <img src="images/logos/darkdev.svg" class='h-16 transform-none scale-0' alt="DarkDEV logo" />
                </figure>
                </a>
              </div>
              <div class='w-[60px] xl:flex lg:flex md:flex hidden '>
                  <div class='w-1 mx-auto bg-neutral-200 h-14 my-auto mx-auto'>
                  </div>
                </div>
              <div class='mx-auto hover:scale-110 hover:transition lg:mt-0 xl:mt-0 md:mt-0 mt-4 hover:duration-1000  hover:ease-in-out'>
                <a class='' href="https://44games.vercel.app/" target='_blank'>
                <figure class=''>
                  <figcaption class='text-sm mb-1 text-center'>Production by 44Games</figcaption>
                  <img src="images/logos/44games.svg" class='h-16 transform-none scale-0' alt="44Games logo" />
                </figure>
                </a>
              </div>
          </div>
        </div>
  	  </div>
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
