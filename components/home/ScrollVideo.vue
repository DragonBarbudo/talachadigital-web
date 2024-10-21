<template>
    <ClientOnly>
      <div
        class="scrollervi min-h-screen w-full relative flex justify-center items-center bg-cover bg-center"
        :style="bgPoster"
        :class="{ 'scrollervi-ios': isIosSafari }"
      >
        
        <!-- Hide video on iOS Safari -->
        <video
          v-if="!isIosSafari"
          ref="scrollervideo"
          class="relative h-auto bottom-0 min-w-full"
          :src="videourl"
        ></video>
        <div class="absolute w-full z-20">
          <slot></slot>
        </div>
        <div
          class="scrollervi-top absolute -bottom-1 left-0 w-full z-10 h-1/6 bg-[url(/img/separator-bottom.svg)] bg-contain bg-right-bottom bg-no-repeat"
        ></div>
      </div>
    </ClientOnly>
  </template>
  
  <script setup lang="ts">
  import { ref, onMounted, onBeforeUnmount, computed } from 'vue'
  
  const props = defineProps({
    videourl: String,
    posterurl: String,
  })
  

  // Detect if the browser is iOS Safari
  const isIosSafari = ref(false)
  const checkIosSafari = () => {
    const ua = window.navigator.userAgent
    const isIOS = /iPad|iPhone|iPod/.test(ua)
    const isSafari = /^((?!chrome|android).)*safari/i.test(ua)
    if (isIOS && isSafari) {
      isIosSafari.value = true
    }
  }
  
  const scrollervideo = ref<HTMLVideoElement | null>(null)
  
  const bgPoster = computed(() => {
    return { backgroundImage: `url('${props.posterurl}')` }
  })
  
  // Throttle function to limit how often scroll event fires
  function throttle(fn, limit) {
    let inThrottle: boolean
    return function (...args) {
      if (!inThrottle) {
        fn(...args)
        inThrottle = true
        setTimeout(() => (inThrottle = false), limit)
      }
    }
  }
  
  const syncScrollToVideo = () => {
    if (!scrollervideo.value) return
  
    const scrollTop = window.scrollY
    const documentHeight = document.documentElement.scrollHeight
    const windowHeight = window.innerHeight
    const scrollPercent = scrollTop / (documentHeight - windowHeight)
  
    const videoDuration = scrollervideo.value.duration
    if (!isNaN(videoDuration)) {
      scrollervideo.value.currentTime = scrollPercent * videoDuration
    }
  }
  
  onMounted(() => {
    checkIosSafari()
  
    if (!isIosSafari.value) {
      const throttledScroll = throttle(syncScrollToVideo, 100) // Throttle to 100ms
      window.addEventListener('scroll', throttledScroll)
  
      onBeforeUnmount(() => {
        window.removeEventListener('scroll', throttledScroll)
      })
    }
  })
  </script>
  
  <style scoped>
  .scrollervi {
    height: 200vh; /* Making the container scrollable */
  }
  
  .scrollervi-ios {
    height: auto; /* On iOS Safari, don't take up full height */
  }
  
  video {
    position: sticky;
    top: 0;
    height: 100vh; /* Full viewport on non-iOS Safari */
    width: auto; /* Maintain aspect ratio */
    object-fit: cover; /* Ensures video covers the viewport without distortion */
  }
  </style>