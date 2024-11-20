<template>
    <div class="bg-tdgreen w-full">
       <NuxtLink to="/" class=" p-2 text-center cursor-pointer group">
          <NuxtImg src="/img/talachadigital.svg" class="mx-auto max-w-32 group-hover:scale-110" />
       </NuxtLink>
    </div>
    <div class="bg-tdgreen py-20 px-2  flex justify-center items-center">
       <div class="grid grid-cols-2 gap-1 items-center w-fit mx-auto">
          <div class="aspect-square">
             <NuxtImg src="/img/jingle/jingle.webp" width="480" height="480" class="w-full" />
          </div>
          <div class="font-nerko shrink flex flex-col dark:text-black">
             <div class="text-3xl md:text-6xl w-fit">Jingle Musical</div>
             <div class="font-gochi text-2xl md:text-5xl w-fit">3 opciones de canción</div>
             <div class="font-gochi text-2xl md:text-5xl w-fit"><span class="text-tdred">+</span> un video para tus redes sociales</div>
          </div>
       </div>
    </div>

 
    <section class="px-5 py-10 ">
       <div class="text-center font-gochi text-5xl md:text-8xl">¿Cómo es un jingle?</div>
       <div class="text-center font-patrick text-2xl my-5">
          Es una canción sobre el tema que tu quieras, puede ser sobre tu negocio, una historia o de un evento especial. 
       </div>
 
 
       <div class="grid max-w-3xl mx-auto md:grid-cols-2 gap-1">
 
 <div class=" text-center p-3 flex flex-col gap-5">
    <div class="font-nerko text-2xl md:text-3xl leading-5">Para un día especial</div>
    <LazyYoutube src="https://www.youtube.com/watch?v=x6_-LDgkw_4" class="mx-auto" />
    <div class="font-nerko text-2xl md:text-3xl leading-5">En una ocasión importante</div>
    <LazyYoutube src="https://www.youtube.com/watch?v=n1HXmQc7-xA" class="mx-auto" />
    
    <div class="font-patrick text-lg leading-5">Tu elije el mejor momento, mándanos tus ideas y nosotros lo transformaremos en una melodía que reflejará todo lo que necesites.</div>
</div>
<div class=" text-center p-3 flex flex-col gap-5">
    <div class="font-nerko text-2xl md:text-3xl leading-5">Para dar a conocer un tema</div>
    <LazyYoutube src="https://www.youtube.com/watch?v=6Liy9yPGqrA" class="mx-auto" />
    <div class="font-nerko text-2xl md:text-3xl leading-5">Promocional de tu negocio</div>
    <LazyYoutube src="https://www.youtube.com/watch?v=_mqwqtVgKZc" class="mx-auto" />

    <div class="font-patrick text-lg leading-5">No lo dudes... una jingle es el mejor método actual para transmitir un mensaje de forma memorable.</div>
 </div>

</div>
 

    </section>
 
 
 
    <section class=" px-5 py-10 ">
       <div class="text-center font-gochi text-5xl md:text-8xl">¿Cuál es el proceso... y cuánto cuesta?</div>
       <div class="text-center font-patrick text-2xl my-5">
         ¡Súuuper! Planear tu jingle es facilísimo. 
      </div>
      <div class="grid md:grid-cols-2 gap-4   p-5  font-patrick text-xl md:text-3xl">
        <div class="bg-tdgreen dark:bg-slate-800 p-5">

        <div class="font-gochi">Platícanos qué ideas tienes para tu jingle.</div>
        <ul class="my-5">
            <li><Icon name="ph:dot-fill" class="text-tdred align-middle" />¿De qué tratará?.</li>
            <li><Icon name="ph:dot-fill" class="text-tdred align-middle" />Ritmo y género musical.</li>
            <li><Icon name="ph:dot-fill" class="text-tdred align-middle" />Frases, ideas, o algo específico que quieras en la letra.</li>
            <li><Icon name="ph:dot-fill" class="text-tdred align-middle" />Fotos e imagenes para integrar en tu video.</li>
         </ul>
         <div class="font-gochi">Y nosotros te mandaremos 3 opciones de canción y un video.</div>
        </div> 
         <div class="bg-tdgreen dark:bg-slate-800 flex flex-col">
            <div class="h-1/2 p-5 ">
               Comencemos con tus ideas a través de <NuxtLink class="text-tdred hover:text-black" href="https://wa.me/message/GSQFJRMWMO76P1?src=qr" target="_blank">Whatsapp</NuxtLink> y en un día tendremos listo tu canción!
            </div>
            <div class="grow bg-black text-white p-5 ">
               El precio durante la etapa de introducción es de <span class="font-nerko text-tdgreen">$600 pesos mexicanos</span>  y puedes pagar el día que te entreguemos.
            </div>

         </div>
      </div>
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
  ]
})


 const compare = [
    {
       desc: 'Pagos',
       v1: '1 solo pago',
       v2: 'Anual'
    },
    {
       desc: 'Precio',
       v1: '$700',
       v2: '$1,700'
    }
 ]
 </script>