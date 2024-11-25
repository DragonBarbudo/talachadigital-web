<template>
    
    <div class="containerbox bg-tdblue text-white flex justify-between relative">
      <NuxtLink to="/" class=" w-full max-w-40 md:max-w-60 hover:-rotate-3 hover:scale-110">
        <TalachadigitalLogo words="fill-tdgreen" shadows="fill-tdred" class="max-w-40 md:max-w-60" />
      </NuxtLink>
      <div class="overflow-hidden absolute bottom-0 right-5">
        <NuxtImg
            class="transition-all w-10 md:w-52"
            width="207"
            height="219" 
            :src="item"
            :class="animateClass"
            />
        </div>  
    </div>

</template>
<script setup lang="ts">
    const props = defineProps({
        
    })
    const items = [
        '/img/heads/dog_head1.webp',
        '/img/heads/dog_head2.webp',
        '/img/heads/dog_head3.webp',
        '/img/heads/dog_head4.webp',
        '/img/heads/dog_head5.webp',
    ]
    const item = ref(items[0])



    const enterClass = 'translate-y-0'
    const exitClass = 'translate-y-full'
    const animateClass = ref(enterClass)
    onMounted(()=>{

        const timer =  setInterval(() => {
            animateClass.value = exitClass
            setTimeout(()=>{
                item.value = items[Math.floor(Math.random()*items.length)]
                setTimeout(()=>{
                animateClass.value = enterClass
                }, 300)
            }, 100)
        }, 4000);

  
        })

</script>