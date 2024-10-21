<template>
    <ContactBar />
    <TopBar />

    <slot />



    <HomeOurSocials></HomeOurSocials>


<!--footer-->
<footer class="relative z-50">
    <div class="bg-gray-100 p-5 text-center">
      <NuxtImg src="/img/talachadigital.svg" class="mx-auto w-1/3 max-w-40" />
    </div>
  </footer>

<div class="text-xs p-2 text-center font-patrick"> {{ new Date().getFullYear() }}. Todo es de todos y somos compartidos 😇.</div>

  </template>
  