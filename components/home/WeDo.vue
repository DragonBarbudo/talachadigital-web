<template>
    <div class="grid grid-cols-2 md:grid-cols-4 gap-2 text-center font-gochi text-xl md:text-3xl lg:text-5xl leading-5 md:leading-10">
        <div class="bg-black text-white ring-inset ring-4 ring-tdgreen border-b-4 border-l-4 border-tdred p-5 flex flex-col gap-2 items-center" v-for="(item,index) in servs">
          <NuxtImg  :src="item.img" class="w-11/12  aspect-square object-contain"/>
          <div class="grow flex justify-center items-center" v-html="item.text"></div>
        </div>
      </div>
</template>
<script setup lang="ts">
const servs = [
    {
        img: '/img/serv-chef.webp',
        text: 'Hacemos deliciosos productos digitales ...'
    },
    {
        img: '/img/serv-mobi.webp',
        text: '... arreglamos tus proyectos inconclusos ...'
    },
    {
        img: '/img/serv-carp.webp',
        text: '... trabajamos en múltiples áreas ...'
    },
    {
        img: '/img/serv-ninj.webp',
        text: '... y con cualquier digitalidad que tengas!'
    },
]
</script>