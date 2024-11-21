<template>
    <div class="text-center my-10">
        <h1 class=" text-center">
            <div class="font-gochi text-4xl">Aquí estan</div>
            <div class="font-nerko text-6xl text-tdred">tus jingles</div>
        </h1>
    </div>

    <template v-if="project.amount-project.paid == 0">
        <div class="border-4 border-tdred rounded-t-xl max-w-4xl mx-auto mt-5 p-5">
            <div class="text-center font-nerko text-4xl">¡NOS ENCANTÓ TRABAJAR CONTIGO!</div>
            <div class="text-center font-nerko text-2xl">Esperamos seguir creando productos divertidos y funcionales para tí</div>
            <div class="text-center font-nerko text-xl text-tdred">Nos vemos pronto.</div>
        </div>
        <div class="rounded-b-xl bg-tdred text-white dark:text-white max-w-4xl mx-auto mb-5 p-5">
            <div class="font-gochi text-center text-4xl">Descarga aquí tus Jingles</div>
            <div class="my-10 flex flex-col gap-4">
                <template v-for="(item, index) in project.videos.concat(project.jingles)">
                    <div class="grid md:grid-cols-2 gap-10 items-center p-3 rounded bg-slate-800/10  outline-1 outline-dashed">
                        <div class=" flex gap-2 items-center">

                            <Icon v-if="item.file.includes('.mp4')" name="fluent:video-clip-optimize-16-regular" class="text-3xl" />
                            <Icon v-else="item.file.includes('.mp4')" name="fluent:music-note-2-play-20-regular" class="text-3xl" />

                            <div>
                                <div class="text-xs font-bold">{{item.file.includes('.mp4')?'Video':'Audio'}}</div>
                                <div class="font-bold text-lg" v-html="item.name" />
                            </div>
                        </div>
                        <div class="flex flex-col gap-2">
                            <div class="flex gap-2">
                                <input disabled :value="fileurl(item)" class="p-1 rounded grow text-black dark:text-black text-xs" />
                                <UButton size="xs" color="white" :variant="text == fileurl(item)?'ghost':'outline'"  icon="fluent:copy-16-regular" @click="copy(fileurl(item))">
                                    {{ text == fileurl(item) ? 'Copiado' : 'Copiar' }}
                                </UButton>
                            </div>
                            <div class="flex justify-end items-center gap-2 ">
                                <UButton size="xs" target="_blank" :to="fileurl(item)" icon="fluent:open-20-filled" label="Abrir" variant="outline" color="white"></UButton>
                                <UButton size="xs" target="_blank" @click="downloadMe(fileurl(item), (item.file.includes('.mp4')?'Video-':'Audio-') + item.name)" icon="fluent:arrow-download-32-regular" label="Descargar zip" variant="outline" color="white"></UButton>
                            </div>
                        </div>
                    </div>

                </template>

                
            </div>
        </div>


    </template>


    <div class="gap-5 my-20 grid " :class="project?.videos?.length==1?'md:grid-cols-1':'md:grid-cols-2'">
            <UCard v-for="(item, index) in project?.videos" class="border-2 border-tdgreen">
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
            <UCard v-for="(item, index) in project?.jingles" class="border-2 border-tdgreen">
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
    <UNotifications>
        <template #title="{ title }">
            <span v-html="title" />
        </template>
    </UNotifications>
</template>


<script setup lang="ts">

    const props = defineProps({
        project: Object
    })


    const loading = ref(false)
    const toast = useToast()



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



const downloadMe = (theurl, name) => {
    loading.value = true
    toast.add({ title: 'Preparando descarga:<br><b>' + name +'.zip</b>' })
    fetch(theurl)
        .then(response => {
            if (!response.ok) throw new Error(`Failed to fetch: ${response.statusText}`);
            return response.blob(); // Retrieve the file as a Blob
        })
        .then(blob => {
            var zip = new JSZip();
            const fileName = theurl.split('/').pop() || "file"; // Extract the file name from the URL
            zip.file(fileName, blob); // Add the file to the ZIP archive
            zip.generateAsync({ type: "blob" })
                .then(content => {
                    saveAs(content, name+".zip"); // Save the ZIP file
                    loading.value = false
                });
        })
        .catch(error => console.error('Error fetching the file:', error));
};

const source = ref('')
const { text, copy, copied, isSupported } = useClipboard({source})



const loadCDNFile = () => {
    const scripts = [
        {
          src: "https://cdnjs.cloudflare.com/ajax/libs/FileSaver.js/2.0.5/FileSaver.min.js",
          crossOrigin: "anonymous",
          referrerPolicy: "no-referrer"
        },
    {
      src: "https://cdnjs.cloudflare.com/ajax/libs/jszip/3.10.1/jszip.min.js",
      crossOrigin: "anonymous",
      referrerPolicy: "no-referrer"
    }
  ];

  scripts.forEach(({ src, integrity, crossOrigin, referrerPolicy }) => {
    const script = document.createElement('script');
    script.src = src;
    script.integrity = integrity;
    script.crossOrigin = crossOrigin;
    script.referrerPolicy = referrerPolicy;
    script.onload = () => console.log(`${src} loaded successfully`);
    script.onerror = () => console.error(`Failed to load ${src}`);
    document.head.appendChild(script);
  });
}

// Call the function to load the file
onMounted(()=>{
    loadCDNFile();
})


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