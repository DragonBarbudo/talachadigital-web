<template>
   <div class="bg-tdgreen w-full">
      <NuxtLink to="/" class=" p-2 text-center cursor-pointer group">
         <NuxtImg src="/img/talachadigital.svg" class="mx-auto max-w-32 group-hover:scale-110" />
      </NuxtLink>
   </div>
   <div class="bg-tdgreen py-20 px-2  flex justify-center items-center">
      <div class="grid grid-cols-2 gap-1 items-center w-fit mx-auto">
         <div class="aspect-square">
            <NuxtImg src="/img/menu-digital/menu-digital.webp" width="480" height="480" class="w-full" />
         </div>
         <div class="font-nerko shrink flex flex-col">
            <div class="text-3xl md:text-6xl w-fit">Menú digital personalizado</div>
            <div class="font-gochi text-2xl md:text-5xl w-fit"><span class="text-tdred">+</span> código QR</div>
            <div class="font-gochi text-2xl md:text-5xl w-fit"><span class="text-tdred">+</span> cambios infinitos</div>
         </div>
      </div>
   </div>

   <section class="bg-white px-5 py-10 ">
      <div class="text-center font-gochi text-5xl md:text-8xl">¿Qué?</div>
      <div class="text-center font-patrick text-2xl my-5">
         Un menú digital es manera rápida de entregar a tus clientes un carta de tus platillos en su dispositivo móvil.
      </div>


      <article class="flex flex-col sm:flex-row gap-0.5 items-center justify-center">

      
         <div class="my-2 grid md:grid-cols-2 gap-2 items-center bg-tdred mx-auto p-3 shadow-xl">
            <div class=" text-center">
               <div class="font-nerko text-white text-6xl">1.</div> 
               <span class="text-3xl font-gochi">Escanéa código QR</span>
            </div>
            <div class="flex justift-center items-center">
               <NuxtImg src="/img/menu-digital/step1-qr.webp" class="max-w-full w-40 mx-auto" />
            </div>
         </div>
         <div>
            <Icon name="fluent:arrow-right-12-filled" class="text-black text-5xl hidden sm:block" />
            <Icon name="fluent:arrow-down-12-filled" class="text-black text-5xl sm:hidden" />
         </div>
         <div class=" bg-tdred my-2 grid md:grid-cols-2 gap-2 items-center   mx-auto p-3  shadow-xl">
            <div class=" text-center">
               <div class="font-nerko text-white text-6xl">2.</div> 
               <span class="text-3xl font-gochi">Se abre tu menú digital</span>
            </div>
            <div class="flex justift-center items-center">
               <NuxtImg src="/img/menu-digital/step2.webp" class="max-w-full w-40 mx-auto" />
            </div>
         </div>
      </article>


   </section>





   <section class="bg-white px-5 py-10 ">
      <div class="text-center font-gochi text-5xl md:text-8xl">¿... y qué más?</div>
      <div class="text-center font-patrick text-2xl my-5">
         Nuestro menú digital no es un menú cualquiera... te presentamos características que no encontrarás en ningún otro lado.
      </div>

      <div class="grid grid-cols-2 md:grid-cols-3 gap-1">

         <div class="bg-tdgreen text-center p-3 flex flex-col gap-5">
            <NuxtImg src="/img/menu-digital/panel.webp" class="w-full max-w-60 mx-auto" />
            <div class="font-nerko text-2xl md:text-3xl leading-5">Modificaciones infinitas</div>
            <div class="font-patrick text-lg leading-5">Tu menú incluye un panel desde donde podrás modificarlo todas las veces que lo requieras, editando categorías, platillos, precios y fotos.</div>
         </div>
         <div class="bg-tdpink text-center p-3 flex flex-col gap-5">
            <NuxtImg src="/img/menu-digital/comodo.webp" class="w-full max-w-60 mx-auto" />
            <div class="font-nerko text-2xl md:text-3xl leading-5">Pensado para todos</div>
            <div class="font-patrick text-lg leading-5">¡Es un menú intuitivo. Diseñado para ser fácil y simple! Es cómodo hasta para los que prefieren cartas impresas.</div>
         </div>
         <div class="bg-tdorange text-center p-3 flex flex-col gap-5">
            <NuxtImg src="/img/menu-digital/personalizado.webp" class="w-full max-w-60 mx-auto" />
            <div class="font-nerko text-2xl md:text-3xl leading-5">Menú y QR Personalizados</div>
            <div class="font-patrick text-lg leading-5">Tu menú digital representa fielmente a tu marca. Colores, fotos y fuentes que lo hacen tuyo.</div>
         </div>
         <div class="bg-tdred text-center p-3 flex flex-col gap-5">
            <NuxtImg src="/img/menu-digital/rapido.webp" class="w-full max-w-60 mx-auto" />
            <div class="font-nerko text-2xl md:text-3xl leading-5">El menú más rápido en cargar</div>
            <div class="font-patrick text-lg leading-5">¡Este menú digital carga rápido! Esta programado para ser veloz y mostrar tus platillos casi inmediatamente.</div>
         </div>
         <div class="bg-tdgreen text-center p-3 flex flex-col gap-5">
            <NuxtImg src="/img/menu-digital/adaptable.webp" class="w-full max-w-60 mx-auto" />
            <div class="font-nerko text-2xl md:text-3xl leading-5">Para cualquier dispositivo</div>
            <div class="font-patrick text-lg leading-5">No es una imagen y ya...! Convertimos tu menú palabra por palabra en código para presentar a tus clientes un menú de alta calidad.</div>
         </div>
         <div class="bg-black text-white text-center p-3 flex flex-col gap-5">
            <NuxtImg src="/img/menu-digital/futuro.webp" class="w-full max-w-60 mx-auto" />
            <div class="font-nerko text-2xl md:text-3xl leading-5">Un menú digital con futuro</div>
            <div class="font-patrick text-lg leading-5">Integramos semana tras semana nuevas funciones y aditamentos que lo hacen el mejor menú digital del mundo.</div>
         </div>
      </div>
   </section>



   <section class="bg-white px-5 py-10 ">
      <div class="text-center font-gochi text-5xl md:text-8xl">A ver...</div>
      <div class="text-center font-patrick text-2xl my-5">
         Mira estos ejemplos de menús y anímate a pedir el tuyo.
      </div>

      <div class="grid md:grid-cols-3 gap-2 py-2">
         
         <div class="flex flex-col justify-center items-center gap-2">
            <div class="font-nerko text-tdred text-3xl">El código QR</div>
            <NuxtImg src="/img/menu-digital/qr1.svg" />
            <Icon name="fluent:arrow-down-12-filled" class="mx-auto text-tdred text-4xl" />
            <div class="font-nerko text-tdred text-3xl">El menú digital</div>
            <iframe src="https://abrir.xyz/menu/dogstaurante" class="w-full max-w-96 aspect-[2/3] border-4 "></iframe>
         </div>
         <div class="flex flex-col justify-center items-center gap-2">
            <div class="font-nerko text-tdpink text-3xl">El código QR</div>
            <NuxtImg src="/img/menu-digital/qr2.svg" />
            <Icon name="fluent:arrow-down-12-filled" class="mx-auto text-tdpink text-4xl" />
            <div class="font-nerko text-tdpink text-3xl">El menú digital</div>
            <iframe src="https://abrir.xyz/menu/refugiodragon" class="w-full  max-w-96 aspect-[2/3] border-4"></iframe>
         </div>


         <div class="flex flex-col justify-center items-center gap-2">
            <div class="font-nerko text-tdorange text-3xl">El código QR</div>
            <NuxtImg src="/img/menu-digital/qr3.svg" />
            <Icon name="fluent:arrow-down-12-filled" class="mx-auto text-tdorange text-4xl" />
            <div class="font-nerko text-tdorange text-3xl">El menú digital</div>
            <iframe src="https://abrir.xyz/menu/donrey" class="w-full max-w-96 aspect-[2/3] border-4"></iframe>
         </div>


      </div>


   </section>



   <section class="bg-white px-5 py-10 ">
      <div class="text-center font-gochi text-5xl md:text-8xl">¿Cómo pido mi menú digital... y cuánto cuesta?</div>
      <div class="text-center font-patrick text-2xl my-5">
         ¡Súuuper! Requerimos lo más mínimo para comenzar:
      </div>
      <div class="grid md:grid-cols-2 gap-4   p-5  font-patrick text-xl md:text-3xl">
         <ul class="bg-tdgreen p-5">
            <li><Icon name="ph:dot-fill" class="text-tdred align-middle" /> Nombre de tu restaurante.</li>
            <li><Icon name="ph:dot-fill" class="text-tdred align-middle" />Logotipo.</li>
            <li><Icon name="ph:dot-fill" class="text-tdred align-middle" />Teléfono.</li>
            <li><Icon name="ph:dot-fill" class="text-tdred align-middle" />Dirección.</li>
            <li><Icon name="ph:dot-fill" class="text-tdred align-middle" />Correo electrónico.</li>
            <li><Icon name="ph:dot-fill" class="text-tdred align-middle" />Tu menú actual.</li>
            <li><Icon name="ph:dot-fill" class="text-tdred align-middle" />Y cualquier otra información que quieras mostrar en tu menú digital.</li>
         </ul>
         <div class="bg-tdgreen flex flex-col">
            <div class="h-1/2 p-5 ">
               Mándanos tu información por <NuxtLink class="text-tdred hover:text-black" href="https://wa.me/message/GSQFJRMWMO76P1?src=qr" target="_blank">Whatsapp</NuxtLink> y en un día tendremos listo tu menú!
            </div>
            <div class="grow bg-black text-white p-5 ">
               El precio durante la etapa de introducción es de <span class="font-nerko text-tdgreen">$700 pesos mexicanos</span> por un tiempo de 999999 días (o sea por siempre) y puedes pagar hasta que te entreguemos.
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
  ogTitle: 'Menú Digital en Talacha Digital',
  ogDescription: 'Un menú digital para tu restaurante con cambios ilimitados.',
  ogImage: '/img/ogimage.webp',
  ogUrl: 'https://talachadigital.com/jingle',
  twitterTitle: 'Jingle Musical',
  twitterDescription: 'Menú Digital + Código QR + Panel para modificarlo.',
  twitterImage: '/img/ogimage.webp',
  twitterCard: 'summary'
})

useHead({
  title: 'Menú Digital en Talacha Digital',
  htmlAttrs: {
    lang: 'es'
  },
  meta: [
    { name: 'description', content: 'Un menú digital para tu restaurante con cambios ilimitados.' }
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