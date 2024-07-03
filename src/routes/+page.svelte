<script>
  // import {  } from '$lib/entities/';
  import {
    antISystems
  } from '$lib/shared';

  import {
    BoardgameSection,
    Faq,
    Api,
    Footer,
  } from '$lib/widgets';

  import {
    onMount
  } from 'svelte';

  onMount(() => {
    const sections = [...document.querySelectorAll('section')];
    let options = {
      rootMargin: '0px',
      threshold: 0.75
    };
    const callback = (entries, observer) => {
      entries.forEach((entry) => {
        const {
          target
        } = entry;
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
      <img class="hero__img" src="/images/bg.png" alt="Rainforest view with sunset" />
    </div>
    <div class="hero__content" data-content>
      <div class="hero__text">
        <img class="hero__footprint" src="/images/logo.svg" alt="Logo anti-system" />
        <h1 class="hero__title font-bebasNeue">Anti-system <br /> Fenomens </h1>
        <p class="hero__intro">Get ready for out the box adventure</p>
      </div>
    </div>
  </section>
  <!-- <section class="section hero"><div class="hero__bg"><img
				class="hero__img"
				src="/images/bg.png"
				alt="Rainforest view with sunset"
			/></div><div class="hero__content flex flex-col" data-content></div></section> -->
  <section class="section max-h-screen w-full bg-black h-screen">
    <header class="section__header__about bg-black" style=''>
      <h3 class="section__title ">Our mission</h3>
    </header>
    <div class="section__content__about " data-content>
      <div class="section__intro__about px-2">
        <h2 class="mb-6 section__main-title section__main-title--left max-w-2xl font-bebasNeue">Our mission</h2>
        <div class='mb-6'>
          <!-- <h3 class="mb-2 section__main-title section__main-title--left max-w-xl">OBJECTIVE</h3> -->
          <p class='lg:text-left xl:text-left md:text-left text-center'> A research project demonstrating the impact of anti-systemic movements on modern society and familiarizing users with forms of countercultural practices in an interactive and educational format. </p>
        </div>
        <a name='about' /> 
          {#each antISystems as boardgame}
            <p class='flex flex-row  my-2'>
              <img src='/images/logos/{boardgame.logo}' class='lg:h-12 md:h-12 h-8 lg:mr-4 md:mr-4 mr-2 w-auto' alt='Boardgame {boardgame.title} logo'/>
              <a class='lg:text-4xl md:text-4xl  text-lg text-black lg:px-6 md:px-4 px-2 lg:py-2 md:py-2 py-1 rounded-md' style='color: {boardgame.brandColor}'  href="#{boardgame.anchor}">{boardgame.title}  »</a>
            </p>
					{/each}
			</div>
		</div>
	</section>


  {#each antISystems as boardgame}    
    <BoardgameSection {boardgame} />
  {/each}

	<Api />
	<Faq />
	<Footer />
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