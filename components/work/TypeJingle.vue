<template>
    <div class="text-center my-10">
        <h1 class=" text-center">
            <div class="font-gochi text-4xl">Te presentamos</div>
            <div class="font-nerko text-6xl text-tdred">tus jingles</div>
        </h1>
    </div>

    <template v-if="project.amount-project.paid == 0">
        <div class="border-4 border-tdred rounded-t-xl max-w-4xl mx-auto mt-5 p-5">
            <div class="text-center font-nerko text-4xl">¡NOS ENCANTÓ TRABAJAR CONTIGO!</div>
            <div class="text-center font-nerko text-2xl">Esperamos seguir creando productos divertidos y funcionales para tí</div>
            <div class="text-center font-nerko text-xl text-tdred">Nos vemos prónto.</div>
        </div>
        <div class="rounded-b-xl bg-tdred text-white dark:text-white max-w-4xl mx-auto mb-5 p-5">
            <div class="font-gochi text-center text-4xl">Descarga aquí tus Jingles</div>
            <div class="grid grid-cols-2 md:grid-cols-3 gap-10 text-center my-10">
                <template v-for="(item, index) in project.videos">
                    <UButton target="_blank" @click="downloadMe(fileurl(item))" color="white" icon="fluent:video-28-regular" :label="`${item.name} (.mp4)`">
                        <template #trailing>
                                <UIcon name="fluent:arrow-download-32-regular" class="w-5 h-5" />
                        </template>
                    </UButton>
                </template>
                <template v-for="(item, index) in project.jingles">
                    <UButton target="_blank" @click="downloadMe(fileurl(item))" color="white" icon="fluent:music-note-2-16-regular" :label="`${item.name} (.mp3)`">
                        <template #trailing>
                                <UIcon name="fluent:arrow-download-32-regular" class="w-5 h-5" />
                        </template>
                    </UButton>
                </template>
            </div>
        </div>


    </template>


    <div class="flex flex-col gap-5 my-20">
            <UCard v-for="(item, index) in project.videos" class="border-2 border-tdgreen">
                <div class="text-center">
                    <div class="py-5 px-2">
                        <div class="sticky top-0 flex flex-col gap-5">
                            <div class="font-gochi text-5xl ">{{ item.name }}</div>
                            <div class="w-fit mx-auto">
                                <ClientOnly>
                                    <vue-plyr :options="ops(item)" class="mx-auto p-2 rounded max-w-xl">
                                        <video controls crossorigin playsinline>
                                            <source :src="fileurl(item)" type="video/mp4"/>
                                        </video>
                                    </vue-plyr>
                                </ClientOnly>
                            </div>
                        </div>
                    </div>
                    <div class=" overflow-y-auto p-2 font-sans dark:text-tdgreen">
                        <div class="text-lg whitespace-pre-wrap" v-html="item.lyrics"></div>
                    </div>
                </div>
            </UCard>
    </div>

    <div class="flex flex-col gap-5 my-20">
            <UCard v-for="(item, index) in project.jingles" class="border-2 border-tdgreen">
                <div class="grid sm:grid-cols-2 gap-5">
                    <div class="py-5 px-2">
                        <div class="sticky top-0 flex flex-col gap-5"><div class="font-gochi text-5xl ">{{ item.name }}</div>
                            <ClientOnly>
                                <vue-plyr :options="ops(item)">
                                    <audio controls crossorigin playsinline>
                                        <source :src="fileurl(item)" type="audio/mp3"/>
                                    </audio>
                                </vue-plyr>
                            </ClientOnly>
                        </div>
                    </div>
                    <div class=" overflow-y-auto p-2 font-sans dark:text-tdgreen">
                        <div class="text-lg whitespace-pre-wrap" v-html="item.lyrics"></div>
                    </div>
                </div>
            </UCard>
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

const downloadMe = (theurl) => {
    const link = document.createElement('a')
    link.href = theurl
    link.download = theurl
    link.target = '_blank'
    link.click()
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