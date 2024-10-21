<template>
<ClientOnly>
  <video-background 
    :src="videourl"
     :poster="posterurl"
    style=""
    class="w-full h-auto aspect-video"
 >
    <div class="h-full w-full flex flex-col justify-center items-center">
      <slot></slot>
  </div>
 </video-background>

</ClientOnly>
</template>
  
  <script setup lang="ts">
  const props = defineProps({
    videourl: String,
    posterurl: String,
  })
</script>
