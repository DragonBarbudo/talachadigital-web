<template>
<div class="fixed z-[99] left-0 top-1/3 h-fit w-8 md:w-10 bg-white/90 rounded-r-xl py-2 px-2 flex flex-col gap-2 justify-evenly items-center shadow-xl">
    <template v-for="item in socials">
        <NuxtLink :href="item.link" class="hover:scale-125 hover:-rotate-12 text-xl md:text-2xl" target="_blank">
            <Icon :name="item.icon" />
        </NuxtLink>
    </template>
</div>
</template>

<script setup lang="ts">
const socials = socialsList
</script>