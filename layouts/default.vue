<template>
    
    <ContactBar />
    <TopBar />
    <div class="mt-5">
      <slot />
    </div>
    <HomeOurSocials />



<!--footer-->
<footer class="relative z-50">
  <div class="mx-auto w-fit mt-10 mb-2"><Darkmode></Darkmode></div>
  <NuxtLink to="/" class=" p-2 text-center cursor-pointer group">
      <ClientOnly>
          <NuxtImg src="/img/talachadigital.svg" class="mx-auto w-1/3 max-w-40 group-hover:scale-110" v-if="colorMode.value=='light'" />
          <NuxtImg src="/img/talachadigital-dark.svg" class="mx-auto w-1/3 max-w-40 group-hover:scale-110" v-if="colorMode.value=='dark'" />
        </ClientOnly>
    </NuxtLink>
</footer>

<div class="text-xs p-2 text-center font-patrick"> {{ new Date().getFullYear() }}. Todo es de todos y somos compartidos 😇.</div>

  </template>
  


<script setup lang="ts">
const colorMode = useColorMode()
</script>