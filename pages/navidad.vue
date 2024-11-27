<template>
<section class="max-w-7xl mx-auto px-5 grid grid-cols-1 md:grid-cols-3 gap-5">
   <MainHeadBar class="md:col-span-3" />

   <div class="containerbox bg-tdblue text-white">
      <div class="flex flex-col gap-5">
         <h1 class="font-nerko text-4xl md:text-5xl">Jingle Musical</h1>
         <h2 class="font-nerko text-tdgreen text-3xl md:text-4xl">Para negocios</h2>
         <p class="font-patrick text-white text-xl md:text-2xl">Que te recuerden tus clientes con una canción pegajosa y que nunca se olviden de ti.</p>
         <h2 class="font-nerko text-tdgreen text-3xl md:text-4xl">Para ocasiones especiales</h2>
         <p class="font-patrick text-white text-xl md:text-2xl">Canciones de amor, para la familia, infantiles, temáticas y de cualquier tipo.</p>
      </div>
   </div>

   <div class="containerbox bg-tdblue text-white md:col-span-2 flex flex-col items-center">
      <div class="aspect-square max-w-sm">
         <NuxtImg src="/img/jingle/jingle.webp" width="480" height="480" class="w-full" />
      </div>
      <div class="font-patrick text-3xl md:text-5xl w-fit">3 opciones de canción</div>
      <div class="font-patrick text-2xl md:text-5xl w-fit"><span class="text-tdred">+</span> un video para tus redes sociales</div>
      <div class="font-patrick text-xl opacity-70 mt-2">(Y al final te entregamos todo: 3 canciones .mp3 y el video en .mp4)</div>
   </div>
</section>



<section class="max-w-7xl mx-auto px-5 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-5">
   <div class="col-span-2 md:col-span-3 lg:col-span-4 text-4xl text-center py-5 font-nerko">Chécate estos ejemplos:</div>
   
   <div class="containerbox aspect-square bg-tdblue overflow-hidden !p-0"><LazyYoutube src="https://www.youtube.com/watch?v=PUK2x5BgT2o" class="w-full h-full" /></div>
   <div class="containerbox aspect-square bg-tdblue overflow-hidden !p-0"><LazyYoutube src="https://www.youtube.com/watch?v=1OAWzwXRP4Q" class="w-full h-full" /></div>
   <div class="containerbox aspect-square bg-tdblue overflow-hidden !p-0"><LazyYoutube src="https://www.youtube.com/watch?v=zxJ_jWzve1M" class="w-full h-full" /></div>
   
   <div class="containerbox aspect-square bg-tdblue overflow-hidden !p-0"><LazyYoutube src="https://www.youtube.com/watch?v=7xBUdr1Y2GY" class="w-full h-full" /></div>
   <div class="containerbox aspect-square bg-tdblue overflow-hidden !p-0"><LazyYoutube src="https://www.youtube.com/watch?v=kUkazJViAos" class="w-full h-full" /></div>
   
   <div class="containerbox aspect-square bg-tdblue overflow-hidden !p-0"><LazyYoutube src="https://www.youtube.com/watch?v=R0RAl4JSoIM" class="w-full h-full" /></div>
   <div class="containerbox aspect-square bg-tdblue overflow-hidden !p-0"><LazyYoutube src="https://www.youtube.com/watch?v=hIQSNdlFYmA" class="w-full h-full" /></div>
   <div class="containerbox aspect-square bg-tdblue overflow-hidden !p-0"><LazyYoutube src="https://www.youtube.com/watch?v=c0B6mgL2toY" class="w-full h-full" /></div>
   <div class="containerbox aspect-square bg-tdblue overflow-hidden !p-0"><LazyYoutube src="https://www.youtube.com/watch?v=XVAMJLxCEO4" class="w-full h-full" /></div>
   
   <div class="containerbox aspect-square bg-tdblue overflow-hidden !p-0"><LazyYoutube src="https://www.youtube.com/watch?v=0ifpOG-rQ-c" class="w-full h-full" /></div>
   <div class="containerbox aspect-square bg-tdblue overflow-hidden !p-0"><LazyYoutube src="https://www.youtube.com/watch?v=6Liy9yPGqrA" class="w-full h-full" /></div>
   <div class="containerbox aspect-square bg-tdblue overflow-hidden !p-0"><LazyYoutube src="https://www.youtube.com/watch?v=_mqwqtVgKZc" class="w-full h-full" /></div>
</section>


<section class="max-w-7xl mx-auto px-5  gap-5 mt-5">
<div class="containerbox bg-tdblue text-white">

   <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
      <div class="flex flex-col gap-5">
         <h3 class="font-nerko text-tdgreen text-3xl md:text-4xl">¿Cuánto tiempo y cuantos dineros cuesta?</h3>
         <p class="font-patrick text-white text-xl md:text-2xl">Uno de estos maravillosos jingles nos toma de 1 a 2 días y tiene un costo de sólo <strong class="text-tdred font-nerko">$600 mxn</strong></p>
         <p class="font-patrick text-white text-xl md:text-2xl">Para comenzar te pedimos el 50% y a la entrega el restante.</p>
         <p class="font-patrick text-white text-xl md:text-2xl">Nuestros Jingles son únicos y 100% tuyos, por lo que si quieres tenerlo protegido, también ofrecemos la opción de registrarlos ante el Registro Público del Derecho de Autor.</p>
      </div>
      <div class="flex justify-center items-center"><NuxtImg width="379" height="421"  src="/img/dog_money.webp" class="max-w-60 mx-auto" /></div>
   </div>
</div>
</section>

<section class="max-w-7xl mx-auto px-5  gap-5 mt-5">
   <JingleForm />
</section>



    
    <div class="m-10 text-center">
       <NuxtImg src="/img/menu-digital/expert.webp" class="mx-auto" />
    </div>
 
 
 
 </template>
 
 
 <script setup lang="ts">



useSeoMeta({
  ogTitle: 'Jingle Musical en Talacha Digital',
  ogDescription: 'Una canción sobre el tema que quieras: Promociona tu negocio o  celebra una ocasión especial.',
  ogImage: '/img/ogimage.webp',
  ogUrl: 'https://talachadigital.com/jingle',
  twitterTitle: 'Jingle Musical',
  twitterDescription: '3 canciones + 1 video para redes sociales',
  twitterImage: '/img/ogimage.webp',
  twitterCard: 'summary'
})

useHead({
  title: 'Jingle Musical en Talacha Digital',
  htmlAttrs: {
    lang: 'es'
  },
  meta: [
    { name: 'description', content: 'Una canción sobre el tema que quieras: Promociona tu negocio o  celebra una ocasión especial.' }
  ],
  link: [
    {
      rel: 'icon',
      type: 'image/png',
      href: '/favicon.png'
    }
  ],
  script: [
  ]
})


 </script>