<template>
<div class="max-w-7xl mx-auto px-5 grid grid-cols-2 md:grid-cols-5 gap-5 font-patrick text-center">

    <template  v-for="(item,index) in socials">
        <NuxtLink :href="item.link" target="_blank" class="cursor-pointer flex flex-col justify-center items-center px-3 rounded-xl hover:-rotate-12 hover:z-50 transition" :class="[item.bg, ishome?'py-5 md:py-10':'py-2 md:py-6']">
            <Icon :name="item.icon" class=" mb-3" :class="ishome?'text-4xl md:text-6xl':'text-2xl md:text-4xl'" />
            <div class="text-white leading-5 md:leading-7 text-xl md:text-2xl" :class="ishome?'':'hidden'" v-html="item.text"></div>
        </NuxtLink>
    </template>

</div>
<div class="max-w-7xl font-patrick my-5 px-5 rounded-xl mx-auto text-center " :class="ishome?'text-xl md:text-3xl':'py-4 md:py-10 text-lg md:text-xl'" >
    <div class="containerbox bg-slate-200 dark:bg-slate-800">
        <div>O si prefieres algo más tradicional... escríbenos en:</div>
        <NuxtLink href="mailto:chamba@talachadigital.com" class="text-tdred font-nerko  hover:text-black" :class="ishome?'text-2xl md:text-5xl':'text-xl md:text-2xl'">chamba@talachadigital.com</NuxtLink>
    </div>
</div>
</template>

<script setup lang="ts">
const route = useRoute()

const ishome = route.matched[0].name == 'index'
const socials = socialsList

</script>