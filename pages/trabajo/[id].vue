<template>
    <UContainer class="py-20">
        <ClientOnly>
            <NuxtImg src="/img/talachadigital.svg" class="mx-auto w-1/3 max-w-40 group-hover:scale-110" v-if="colorMode.value=='light'" />
            <NuxtImg src="/img/talachadigital-dark.svg" class="mx-auto w-1/3 max-w-40 group-hover:scale-110" v-if="colorMode.value=='dark'" />
        </ClientOnly>

        <WorkTypeJingle v-if="project.work=='jingle'" :project="project" />


    </UContainer>

</template>
<script setup lang="ts">
const route = useRoute()
const pb = usePB()
const colorMode = useColorMode()
const props = defineProps({
    
})


const remapItem = (item) => {
  let newItem = {...item}
  if(item.expand && item.expand['storageJingles(owner)']){
    newItem.jingles = item.expand['storageJingles(owner)']
    }
    if(item.expand && item.expand['storageImg(owner)']){
      newItem.imgs = item.expand['storageImg(owner)']
    }
    if(item.expand && item.expand['storageVideo(owner)']){
      newItem.videos = item.expand['storageVideo(owner)']
    }
    delete newItem.expand
  return newItem
}

const record = await pb.collection('projects').getOne( route.params.id, { expand: 'storageJingles(owner), storageImg(owner), storageVideo(owner)'})
const project = remapItem(record)


</script>