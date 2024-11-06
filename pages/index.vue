<script setup lang="ts">

const colorMode = useColorMode()
const route = useRoute()

colorMode.value = 'light'

useSeoMeta({
  ogTitle: 'Talacha Digital',
  ogDescription: '¡Pide tu talacha! Chambeamos todo lo que tenga que ver con web, diseño, video, audio y otras variedades.',
  ogImage: '/img/ogimage.webp',
  ogUrl: 'https://talachadigital.com',
  twitterTitle: 'Talacha Digital',
  twitterDescription: '¡Pide tu talacha! Chambeamos todo lo que tenga que ver con web, diseño, video, audio y otras variedades.',
  twitterImage: '/img/ogimage.webp',
  twitterCard: 'summary'
})

useHead({
  title: 'Talacha Digital',
  htmlAttrs: {
    lang: 'es'
  },
  meta: [
    { name: 'description', content: '¡Pide tu talacha! Chambeamos todo lo que tenga que ver con web, diseño, video, audio y otras variedades.' }
  ],
  link: [
    {
      rel: 'icon',
      type: 'image/png',
      href: '/favicon.png'
    }
  ]
})


</script>

<template>
  
  <!--head-->
  <div class="relative z-50">
    <div class="bg-tdgreen p-5 text-center">
      <NuxtImg src="/img/talachadigital.svg" class="mx-auto w-2/3 max-w-60" />
      <div class="font-nerko max-w-xl text-2xl md:text-4xl mx-auto my-5 leading-5 md:leading-8">
        chambeamos todo en web, diseño, video, audio y otras variedades
      </div>
    </div>
    <svg class="w-full -mt-1 absolute" viewBox="0 0 1440 78" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1440 0H0V43C0 43 317.891 4.15628 518 34C598.041 45.9371 639.574 78 720.5 78C801.426 78 842.958 45.9291 923 34C1122.73 4.23404 1440 43 1440 43V0Z" fill="#D6FD18"/></svg>
  </div>


  <HomeBackgroundVideo videourl="video/cooking.mp4" posterurl="video/cooking.webp">
    
    <div class="font-nerko leading-6 text-2xl md:text-6xl text-center bg-tdgreen max-w-2xl p-1 md:p-5">
          <span class="text-tdred">Talachas Digitales</span><br>para lo que necesites
    </div>
    
    
  </HomeBackgroundVideo>

  <div class="bg-tdgreen  w-full flex justify-center flex-col gap-2 px-5 py-20 relative">

    <HomeWeDo></HomeWeDo>

    <div class="font-nerko text-3xl md:text-5xl text-center my-5">
      Te ayudamos a tener el lado digital de tu negocio al 100%!
    </div>
    <div class="grid  grid-cols-1 md:grid-cols-2 gap-5 font-patrick text-2xl leading-6 max-w-4xl  mx-auto">
      <div>
        Además de ofrecerte servicios integrales y personalizados, estamos creando productos de fácil integración, como Jingles Musicales y Menús Digitales para Restaurantes.
      </div>
      <div>
        Cualquiera que sea tu necesidad digital, échanos un <NuxtLink class="text-tdred" href="https://wa.me/message/GSQFJRMWMO76P1?src=qr" target="_blank">Whatsapp®</NuxtLink> y déjanos resolverlo.
        Estamos listos para ayudarte a tener una súper experiencia en el mundo digital.
      </div>
    </div>

    <svg class="w-full -mt-1 absolute top-full left-0 z-10" viewBox="0 0 1440 78" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1440 0H0V43C0 43 317.891 4.15628 518 34C598.041 45.9371 639.574 78 720.5 78C801.426 78 842.958 45.9291 923 34C1122.73 4.23404 1440 43 1440 43V0Z" fill="#D6FD18"/></svg>
  
  </div>





<HomeBackgroundVideo videourl="video/experts.mp4" posterurl="video/experts.webp">
  <div class="font-nerko leading-6  text-2xl md:text-6xl text-center bg-tdgreen max-w-2xl p-1 md:p-5">
          <span class="text-tdred">Somos los más expertos</span><br>del rumbo digital
    </div>
</HomeBackgroundVideo>




  <HomeFastLinks></HomeFastLinks>


  <HomeAlsoDo></HomeAlsoDo>

  <div class="text-center w-full">
  <NuxtImg
  width="480"
  height="240" 
  src="/img/sleepo.webp"
  class="mx-auto"
/>
</div>


<NuxtImg
  src="/img/fin.svg"
  class="w-full"
/>

  <HomeBackgroundVideo videourl="video/happy.mp4" posterurl="video/happy.webp">
    <div class="font-nerko leading-6  text-2xl md:text-6xl text-center bg-tdgreen max-w-2xl p-1 md:p-5">
          ¡<span class="text-tdred">Contáctanos</span> ahoritita ya!
    </div>
  </HomeBackgroundVideo>


  
</template>
