<template>
    <ContactBar />
    <TopBar />

    <slot />



    <HomeOurSocials></HomeOurSocials>


<!--footer-->
<footer class="relative z-50 bg-gray-100">
  <NuxtLink to="/" class=" p-2 text-center cursor-pointer group">
         <NuxtImg src="/img/talachadigital.svg" class="mx-auto w-1/3 max-w-40 group-hover:scale-110" />
      </NuxtLink>
  </footer>

<div class="text-xs p-2 text-center font-patrick"> {{ new Date().getFullYear() }}. Todo es de todos y somos compartidos 😇.</div>

  </template>
  