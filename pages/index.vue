<script setup lang="ts">

const colorMode = useColorMode()
const route = useRoute()



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
  
  <section class="max-w-7xl mx-auto px-5 grid grid-cols-1 md:grid-cols-5 gap-5">
    <MainHeadBar class="md:col-span-5 " />
    
    <div class="md:col-span-2 bg-black text-white containerbox  flex flex-col gap-5 justify-between">
      <p class="font-nerko text-3xl">Chambeamos todo en web, diseño, video, audio y otras variedades</p>
      <NuxtImg
        class="ml-auto -mb-5  w-40 md:w-80"
        width="278"
        height="227" 
        src="/img/dog-work.webp"
      />
    </div>

    <div class="md:col-span-3 flex flex-col gap-5">
      <div class="col-span-1 bg-black text-white  containerbox text-right flex flex-col md:flex-row items-center">
        <NuxtImg width="240" height="212"  src="/img/dog-help.webp" class="-mb-5 -mt-10 w-40 md:w-4/5 order-2 md:order-1 mt-10 md:mt-0 mr-auto" />
        <p class="font-patrick text-2xl md:text-3xl">Te ayudamos a tener el lado digital de tu negocio al 100%!</p>
    </div>
    <div class="col-span-1 bg-tdgreen containerbox  text-right font-patrick">
        <p class="text-black font-patrick text-xl md:text-2xl">Además de ofrecerte servicios integrales y personalizados, estamos creando productos con nuevas tecnologías, como
          <br /><NuxtLink class="text-tdred" to="/jingle">Jingles Musicales Personalizados</NuxtLink></p>
      </div>
    </div>
  </section>

  <section class="max-w-7xl mx-auto p-5 grid md:grid-cols-5 gap-5">
    <div class="containerbox bg-tdblue text-tdgreen col-span-5 flex flex-col md:flex-row justify-between relative items-center">
      <TalachadigitalLogo words="fill-tdgreen" shadows="fill-tdred" class="max-w-40 md:max-w-60" />
      <div class="text-center mt-5 md:mt-0 md:text-right">
        <p class="font-nerko text-2xl md:text-4xl">
          <span class="text-4xl md:text-5xl">Jingles musicales</span> <br />
          Canciones personalizadas</p>
        </div>
      </div>

      <div class="containerbox bg-tdblue text-tdgreen col-span-5 flex flex-col md:flex-row justify-between relative items-center ">
        <div class="flex flex-col gap-5">
          <h2 class="font-nerko text-4xl md:text-4xl">Para negocios</h2>
          <p class="font-patrick text-white text-2xl md:text-3xl">Que te recuerden tus clientes con una canción pegajoza y que nunca se olviden de ti.</p>
          <h2 class="font-nerko text-4xl md:text-5xl">Para ocasiones especiales</h2>
          <p class="font-patrick text-white text-2xl md:text-3xl">Canciones de amor, para la familia, infantiles, temáticas y de cualquier tipo.</p>
          <NuxtLink to="/jingle" class="mx-auto my-6 containerbutton">púshale aquí</NuxtLink>
        </div>
        <div class="relative min-h-[300px] w-5/6 h-full">
          <NuxtImg
          width="334"
          height="356" 
          src="/img/dog-jingle.webp"
          class="-mb-5 absolute bottom-0 right-0 w-full max-h-full object-contain object-right-bottom"
          />
        </div>
      </div>
      <div class="containerbox bg-tdblue text-tdgreen col-span-5 flex flex-col md:flex-row justify-between relative items-center ">
        <div class="flex flex-col gap-5">
          <h2 class="font-nerko text-4xl md:text-5xl">Para navidad y año nuevo</h2>
          <p class=" font-patrick text-white text-2xl md:text-3xl">Esta navidad felicita a tu equipo de trabajo con una postal navideña sonora.</p>
          <p class=" font-patrick text-white text-2xl md:text-3xl">Deséales lo mejor (o lo que le sigue) a todos tus conocidos.</p>
          <p class=" font-patrick text-white text-2xl md:text-3xl">Elige las palabras y las convertimos en canción.</p>
          <NuxtLink href="/jingle" class="mx-auto my-6 containerbutton">pícale acá</NuxtLink>
        </div>
        <div class="relative min-h-[300px] w-5/6 h-full">
          <NuxtImg
          width="380" height="409"  src="/img/dog-xmas.webp"
          class="-mb-5  absolute bottom-0 right-0 w-full max-h-full object-contain object-right-bottom"
          />
        </div>
      </div>


  </section>
  
</template>
