<template>
<div class="containerbox bg-tdblue text-white flex flex-col gap-14 !py-20">
      <h2 class="font-nerko text-tdgreen text-4xl md:text-5xl text-center">¿Cuál es el proceso?</h2>
      <div class="font-patrick text-xl md:text-3xl flex gap-2 items-center">
        <div class="aspect-square rounded-full w-20 font-nerko flex justify-center items-center bg-tdpink text-5xl border-4">1</div>
        LLena los siguientes datos:</div>
      
      
        <div class="grid grid-cols-1 md:grid-cols-2 gap-y-20 gap-x-5 mt-10">

            <div class="font-patrick text-lg md:text-xl containerbox bg-black/20 flex flex-col gap-2 relative ">
                <NuxtImg width="689" height="377" src="/img/formdogs_1.webp" class="absolute bottom-full right-4 w-40" />
                <div>¿Qué tipo de jingle será?</div>
                <div class="flex flex-wrap gap-2 mt-2">
                    <JingleFormChoose v-model="jingleform.tipo" :items="thetypes" />
                </div>
            </div>

            <div class="font-patrick text-lg md:text-xl containerbox bg-black/20 flex flex-col gap-2 relative ">
                <NuxtImg width="689" height="377" src="/img/formdogs_2.webp" class="absolute bottom-full right-4 w-40" />
                <div>¿Algún género músical que te gustaría?</div>
                <div class="flex flex-wrap gap-2 mt-2">
                    <JingleFormChoose v-model="jingleform.genero" :items="thegenres" ph="Descríbe el género o tipo de canción" />
                </div>
            </div>
            <div class="font-patrick text-lg md:text-xl containerbox bg-black/20 flex flex-col gap-2 relative">
                <NuxtImg width="689" height="377" src="/img/formdogs_3.webp" class="absolute bottom-full right-4 w-40" />
                <div>Platícanos: Puedes incluír ideas generales o frases para añadir en la letra.</div>
                <div class="flex flex-wrap gap-2 mt-2">
                    <JingleFormChoose v-model="jingleform.tema" :items="[]" otrotext="¿De qué trata?" ph="Sobre..." />
                </div>
                <div>También podemos obtener ideas de tus redes sociales o sitio web.</div>
                <div class="flex flex-wrap gap-2 mt-2">
                    <JingleFormChoose v-model="jingleform.enlaces" :items="[]" otrotext="Enlaces" ph="https://..." />
                </div>
            </div>

            <div class="font-patrick text-lg md:text-xl containerbox bg-black/20 flex flex-col gap-2 relative">
                <NuxtImg width="689" height="377" src="/img/formdogs_4.webp" class="absolute bottom-full right-4 w-40" />
                <div class="text-2xl">Para el video requerimos aprox. <strong class="text-tdgreen"> 20 imágenes</strong>.</div>
                <div>Envíalas por Whatsapp, las tomamos de tus redes/sitio, o te podemos generar imagenes nuevas. </div>
                <div class="flex flex-wrap gap-2 mt-2">
                    <JingleFormChoose v-model="jingleform.imagenes" :items="theimgs" ph="¿Cuál es tu opción?" />
                </div>
                <div class="mt-5">Y si quieres incluír un logotipo, también nos lo puedes pasar junto a tus imagenes. Aparecerá al inicio y durante todo el video.</div>
            </div>
            
        </div>

        <div class="font-patrick text-xl md:text-3xl flex gap-2 items-center">
        <div class="aspect-square rounded-full w-20 font-nerko flex justify-center items-center bg-tdpink text-5xl border-4">2</div>
        Alimenta al pobrecito perrito hambriento arrastrándo el snack hacia él:</div>



        <div class="max-w-4xl w-full mx-auto">
            <JingleFeedTheDog>
                <div class="text-center">
                    <NuxtLink @click="sendToWhatsApp" class="mx-auto my-6 containerbutton ">
                        <div class="flex items-center gap-4"><Icon name="logos:whatsapp-icon" /> <span>pedir mi jingle</span></div>
                    </NuxtLink>
                    <div class="font-patrick opacity-70">Se abrirá Whatsapp...</div>
                </div>
            </JingleFeedTheDog>
        </div>

      

   </div>
</template>

<script setup lang="ts">
const props = defineProps({
    
})

const thetypes = ['Negocio', 'Evento', 'Ocasión especial']
const thegenres = ['Pop', 'Rock', 'Hip/hop', 'Mariachi',  '00s', '80s', 'El que quede mejor']
const theimgs = ['Mandaré Whatsapp', 'De mis redes/sitio', 'Imágenes nuevas']
const jingleform = reactive({
    tipo: thetypes[0],
    genero: thegenres[0],
    tema: '',
    enlaces: '',
    imagenes: theimgs[2],
})



const sendToWhatsApp = async () => {
  const baseUrl = "https://api.whatsapp.com/send?phone=";
  const phoneNumber = "+525649648744";
  const message = `
🎵 *Quiero un Jingle* 🐕

🎹 *Tipo*: ${jingleform.tipo}
🎼 *Género*: ${jingleform.genero}
📖 *Tema*: ${jingleform.tema || "No especificado"}
🔗 *Enlaces*: ${jingleform.enlaces || "No especificado"}
🖼 *Imágenes*: ${jingleform.imagenes}
`.trim();

  const encodedMessage = encodeURIComponent(message);
  const url = `${baseUrl}${phoneNumber}&text=${encodedMessage}`;

  umTrackEvent('whatsapp-jingle', { message: message });

  await navigateTo(url, {
        open: {
            target: '_blank',
            windowFeatures: {
                width: 500,
                height: 500
            }
        }
    })
};


</script>