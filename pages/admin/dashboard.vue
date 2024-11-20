<template>
   <div class="grid  md:grid-cols-4 gap-5">
    <UCard v-for="(item, index) in links"  :class="`border-2 border${item.color}`">
      
      <div v-html="item.label" />
      <template #footer>
        <UButton variant="solid" :href="item.url" target="_blank" color="white" block>Ir</UButton>
      </template>
    </UCard>

   </div>

</template>
<script setup lang="ts">
definePageMeta({
  layout: 'admin'
})



    const props = defineProps({
        
    })


const links = [
  {
    label: 'Admin - Abrir.xyz',
    url: 'https://abrir.pockethost.io/_/',
    color: '-[#7c96f6]',
    palette: 'primo' 
  },
  {
    label: 'Talachadigital.com',
    url: 'https://talachadigital.pockethost.io/_/',
    color: '-tdgreen',
    palette: 'primary' 
  },
  {
    label: 'Umami Analytics',
    url: 'https://umami-production-0033e.up.railway.app/dashboard',
    color: '-[#191919]',
    palette: 'primary' 
  }
]


</script>

<style lang="postcss" module>
.dashbtn{

}
</style>