<script>
	import { faq } from '$lib/shared';
</script>


<section class="section max-h-screen w-full bg-black h-screen">
  	<a name='faq' />
       <div  class="section__content__about " data-content>
		<div style="max-width: 100ch;" class="w-full px-2 section__intro__about">
		<h2 class="mb-8 font-bebasNeue text-center">F.A.Q.</h2>
		<div class='mb-4  w-full '>
			<!-- <h3 class="mb-2 section__main-title section__main-title--left max-w-xl">OBJECTIVE</h3> -->
        <ul class="flex  w-full flex-col">
          {#each faq as dataFaq}
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