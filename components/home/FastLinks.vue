<template>
    <div class="py-20 px-2 flex justify-center items-center  flex-wrap gap-2">
        <div class="w-full text-center">
            <NuxtImg
  width="240"
  height="113" 
  src="/img/fastlinks.webp"
  class="mx-auto"
/>
        </div>
        <div class="w-full font-gochi text-3xl text-center">Accesos rápidos:</div>
        
        
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 p-5 gap-5">
          
            <NuxtLink :to="item.to" class="shadow-2xl group transition-all hover:scale-110 border-b-4 border-b-black rounded-xl  bg-tdgreen p-1  hover:bg-tdred hover:text-tdgreen "  v-for="(item, index) in links">
                    <div class="bg-black/10 transition-all delay-100 h-full p-1 flex gap-2 items-center rounded-lg border-4 border-black shadow-sm group-hover:bg-black">
                        <NuxtImg :src="item.img" class="w-11/12  aspect-square object-contain"/>
                        <div>
                            <div class="text-2xl  leading-5 font-nerko" v-html="item.title"></div>
                            <p class="text-lg  leading-5 font-patrick" v-html="item.description"></p>
                        </div>
                    </div>
            </NuxtLink>
        </div>
  
      </div>
</template>

<script setup lang="ts">
const links = [
    {
        img: '/img/fast-menu.webp',
        to: '/menu-digital',
        title: 'Menú digital para tu restaurante',
        description: 'Un moderno menú digital con tu personalizad que podrás actualizar infinitamente.'
    },
    {
        img: '/img/fast-jingle.webp',
        to: '/jingle',
        title: 'Jingle musical',
        description: 'Que te recuerden tus clientes con una canción pegajoza y nunca se olviden de ti.'
    },
    {
        img: '/img/fast-web.webp',
        to: '/sitio-web',
        title: 'Sitio web informativo',
        description: 'Funcionales y atractivos que representan tu negocio y te acercan a tus clientes, ¡hechos a la medida! '
    },
    {
        img: '/img/fast-brand.webp',
        to: '/logo-marca',
        title: 'Logo y marca',
        description: 'Elevamos tu logo e identidad a la calidad de tu negocio. No todo lo bonito es caro.'
    },
    {
        img: '/img/fast-video.webp',
        to: '/videos-tiktoks-reels',
        title: 'Videos, tiktoks y reels',
        description: 'Atrae y engancha en redes sociales. Ideal para viralizar tus mensajes.'
    },
    {
        img: '/img/fast-dare.webp',
        to: '/reto',
        title: 'Échanos un reto!',
        description: '¿Qué tienes en mente? Te ayudamos a aterrizar tu idea y lo hacemos realidad. Contáctanos!'
    },

]
</script>