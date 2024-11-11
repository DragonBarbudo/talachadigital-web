<template>
    <div class="text-center my-10">
        <h1 class=" text-center">
            <div class="font-gochi text-4xl">Te presentamos</div>
            <div class="font-nerko text-6xl text-tdred">tus jingles</div>
        </h1>
    </div>
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-5 my-20">
        <div v-for="(item, index) in project.jingles">
            <UCard>
                <template #header>
                    <div class="font-gochi text-3xl ">{{ item.name }}</div>
                </template>
                <ClientOnly>
                    <vue-plyr :options="ops(item)">
                        <audio controls crossorigin playsinline>
                            <source :src="fileurl(item)" type="audio/mp3"/>
                        </audio>
                    </vue-plyr>
                </ClientOnly>
                <template #footer>
                    <div class="max-h-48 overflow-y-auto p-2 font-patrick">
                        <div class="text-base whitespace-pre-wrap" v-html="item.lyrics"></div>
                    </div>
                </template>
            </UCard>
        </div>
    </div>
</template>
<script setup lang="ts">
    const props = defineProps({
        project: Object
    })



const fileurl = (item) => {
  return `https://talachadigital.pockethost.io/api/files/${item.collectionId}/${item.id}/${item.file}`
}

const ops = (item) => {
    let op = {
        controls: ['play-large', 'play', 'progress', 'current-time'],
        mediaMetadata: { title: item.name, artist: 'Talacha Digital' }
        //album: '', artwork: []
    }
    return op
}
</script>

<style lang="postcss">
:root{
    --plyr-color-main: #e02e2e;
    --plyr-audio-controls-background: #d6fd18;
    --plyr-font-family: 'Just Another Hand';
    --plyr-audio-control-color: #000;
    --plyr-audio-range-track-background: #000;
    --plyr-font-size-time: 1.6rem;
}
</style>