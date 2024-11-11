<template>
<div class="grid grid-cols-2 md:grid-cols-4 font-patrick text-center">

    <template  v-for="(item,index) in socials">
        <NuxtLink :href="item.link" target="_blank" class="cursor-pointer flex flex-col justify-center items-center px-3  hover:bg-black ring-0 hover:ring-8 ring-tdgreen hover:z-50 transition" :class="[item.bg, ishome?'py-10 md:py-20':'py-2 md:py-6']">
            <Icon :name="item.icon" class=" mb-3" :class="ishome?'text-4xl md:text-6xl':'text-2xl md:text-4xl'" />
            <div class="text-white leading-5 md:leading-7 text-xl md:text-3xl" :class="ishome?'':'hidden'" v-html="item.text"></div>
        </NuxtLink>
    </template>

</div>
<div class="font-patrick px-2  text-center  flex flex-col gap-2 w-full bg-gray-200 dark:bg-black" :class="ishome?'py-6 md:py-20 text-xl md:text-3xl':'py-4 md:py-10 text-lg md:text-xl'" >
    <div>O si prefieres algo más tradicional... escríbenos en:</div>
    <NuxtLink href="mailto:chamba@talachadigital.com" class="text-tdred font-nerko  hover:text-black" :class="ishome?'text-2xl md:text-5xl':'text-xl md:text-2xl'">chamba@talachadigital.com</NuxtLink>
</div>
</template>

<script setup lang="ts">
const route = useRoute()

const ishome = route.matched[0].name == 'index'

const socials = [
    {
        icon: 'logos:whatsapp-icon',
        bg: 'bg-[#25D366]',
        text: 'Échanos un ladrido por Whatsapp',
        link: 'https://wa.me/message/GSQFJRMWMO76P1?src=qr'
    },
    {
        icon: 'logos:facebook',
        bg: 'bg-[#4267B2]',
        text: 'Chéca nuestras promos en Facebook',
        link: 'https://www.facebook.com/talachadigitalcom/'
    },
    {
        icon: 'skill-icons:instagram',
        bg: 'bg-[#af3daa]',
        text: 'Encuentra nuestros trabajos en Instagram',
        link: 'https://www.instagram.com/talacha.digital/'
    },
    {
        icon: 'logos:tiktok-icon',
        bg: 'bg-[#e71d4f]',
        text: 'Mira el detrás de cámaras en TikTok',
        link: 'https://www.tiktok.com/@talacha.digital'
    }
]
</script>