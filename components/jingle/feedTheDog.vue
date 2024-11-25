<template>

    <ClientOnly>
    <div class="flex justify-between" v-if="!fed">
      <!-- Draggable Snack -->
      <div
        class="snack cursor-grab "
        :class="moveSnackClass"
        draggable="true"
        @dragstart="handleDragStart"
        @dragend="handleDragEnd"
        @click="movesnack"
      >
        <NuxtImg
          width="240"
          height="222"
          src="/snackdog-snack.webp"
          class="w-20 md:w-52"
        />
      </div>
  
      <!-- Animated Arrow -->
    <div class="flex  items-center justify-center relative ">
      <Icon name="tabler:arrow-wave-right-down" class="text-tdgreen text-9xl animated-arrow" />
    </div>
  
      <!-- Snackdog drop zone -->
      <div
        class="snackdog transition-all"
        :class="snackdogClass"
        @dragover.prevent="handleDragOver"
        @dragenter="handleDragEnter"
      >
        <NuxtImg
          :width="480"
          :height="540"
          :src="snackdogImage"
          class="w-32 md:w-60 mt-20"
        />
      </div>

    </div>

    <div class="flex justify-between mt-5" v-if="!fed">
       <div class="bg-black font-patrick text-xl w-fit px-4 py-1 rounded mx-auto cursor-pointer hover:bg-tdpink" @click="jumpFed">Saltar alimentación y pedir mi jingle</div>
    </div>

    <div v-if="fed" class="text-center">
        <NuxtImg width="822" height="528"  src="/snackdog-3.webp" class="w-full max-w-lg mx-auto" v-if="!jumped" />
        <slot />

    </div>
</ClientOnly>
  </template>
  

  
  <script setup lang="ts">
if (process.client){ 
   import("@/assets/dragdroptouch.js")
}
  
  // State to track the current image
  const snackdogImage = ref("/snackdog_1.webp");
  const snackdogClass = ref('');
  const moveSnackClass = ref('animated-snack');
  const fed = ref(false)
  const jumped = ref(false)

  
  // Event handlers
  const handleDragStart = (event: DragEvent) => {
    event.dataTransfer?.setData("text", "snack");
    snackdogImage.value = "/snackdog_2.webp";
    snackdogClass.value = 'scale-125 rotate-2'
  };

  const jumpFed = () => {
    fed.value=true
    jumped.value=true
  }
  
  const handleDragOver = (event: DragEvent) => {
    fed.value = true
  };
  const handleDragEnter = () => {
    fed.value = true
  };

  
  const handleDragEnd = () => {
    snackdogImage.value = "/snackdog_1.webp";
    snackdogClass.value = 'scale-100'
  };


  const movesnack = () => {
    moveSnackClass.value = 'transition-all duration-1000'
    snackdogImage.value = "/snackdog_2.webp";
    setTimeout(()=>{
        moveSnackClass.value += '  translate-x-44 translate-y-20 md:translate-x-96'
        setTimeout(()=>{
            fed.value = true
        },1000)
    }, 100)
  }
  </script>


<style lang="postcss" scoped>
@keyframes slide-arrow {
    0% {
        transform: translateX(-10%);
    }
    50% {
        transform: translateX(10%);
    }
    100% {
        transform: translateX(-10%);
    }
  }
  .animated-arrow {
    animation: slide-arrow 1s infinite ease-in-out;
    position: relative;
  }
@keyframes call-snack {
    10% {
        transform: translateY(0) rotateZ(0deg);
    }
    12% { transform:  rotateZ(5deg); }
    14% { transform:  rotateZ(-10deg); }
    16% { transform:  rotateZ(10deg); }
    18% { transform:  rotateZ(-5deg); }
    20% {
        transform: translateY(0) rotateZ(0deg);
    }
  }
  .animated-snack {
    animation: call-snack 4s infinite ease-in-out;
    position: relative;
  }
</style>