<template>
<!--top-1/3-->
<div class="fixed z-[99] right-0 bottom-4 h-fit w-8 md:w-10 bg-black/20 rounded-l-xl py-1 px-2 flex flex-col gap-0.5 justify-evenly items-center shadow-xl">
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