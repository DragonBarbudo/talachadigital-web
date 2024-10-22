<template>
    <div class="bg-tdgreen w-full">
       <NuxtLink to="/" class=" p-2 text-center cursor-pointer group">
          <NuxtImg src="/img/talachadigital.svg" class="mx-auto max-w-32 group-hover:scale-110" />
       </NuxtLink>
    </div>
    <div class="bg-tdgreen py-20 px-2  flex justify-center items-center">
       <div class="grid grid-cols-2 gap-1 items-center w-fit mx-auto">
          <div class="aspect-square">
             <NuxtImg src="/img/jingle/jingle.webp" width="480" height="480" class="w-full" />
          </div>
          <div class="font-nerko shrink flex flex-col">
             <div class="text-3xl md:text-6xl w-fit">Jingle Musical</div>
             <div class="font-gochi text-2xl md:text-5xl w-fit">3 opciones de canción</div>
             <div class="font-gochi text-2xl md:text-5xl w-fit"><span class="text-tdred">+</span> un video para tus redes sociales</div>
          </div>
       </div>
    </div>



 
    <section class="bg-white px-5 py-10 ">
       <div class="text-center font-gochi text-5xl md:text-8xl">¿Cómo es un jingle?</div>
       <div class="text-center font-patrick text-2xl my-5">
          Es una canción sobre el tema que tu quieras, puede ser sobre tu negocio, una historia o de un evento especial. 
       </div>
 
 
       <div class="grid max-w-3xl mx-auto md:grid-cols-2 gap-1">
 
 <div class="bg-gray-200 text-center p-3 flex flex-col gap-5">
    <div class="font-nerko text-2xl md:text-3xl leading-5">Para un día especial</div>
    <LazyYoutube src="https://www.youtube.com/watch?v=x6_-LDgkw_4" class="mx-auto" />
    <div class="font-nerko text-2xl md:text-3xl leading-5">En una ocasión importante</div>
    <LazyYoutube src="https://www.youtube.com/watch?v=n1HXmQc7-xA" class="mx-auto" />
    
    <div class="font-patrick text-lg leading-5">Tu elije el mejor momento, mándanos tus ideas y nosotros lo transformaremos en una melodía que reflejará todo lo que necesites.</div>
</div>
<div class="bg-tdgreen text-center p-3 flex flex-col gap-5">
    <div class="font-nerko text-2xl md:text-3xl leading-5">Para dar a conocer un tema</div>
    <LazyYoutube src="https://www.youtube.com/watch?v=6Liy9yPGqrA" class="mx-auto" />
    <div class="font-nerko text-2xl md:text-3xl leading-5">Promocional de tu negocio</div>
    <LazyYoutube src="https://www.youtube.com/watch?v=_mqwqtVgKZc" class="mx-auto" />

    <div class="font-patrick text-lg leading-5">No lo dudes... una jingle es el mejor método actual para transmitir un mensaje de forma memorable.</div>
 </div>

</div>
 
       
        
 
    </section>
 
 
 <!--
 
 
    <section class="bg-white px-5 py-10 ">
       <div class="text-center font-gochi text-5xl md:text-8xl">¿... y qué más?</div>
       <div class="text-center font-patrick text-2xl my-5">
          Nuestro menú digital no es un menú cualquiera... te presentamos características que no encontrarás en ningún otro lado.
       </div>
 
       <div class="grid grid-cols-2 md:grid-cols-3 gap-1">
 
          <div class="bg-tdgreen text-center p-3 flex flex-col gap-5">
             <NuxtImg src="/img/menu-digital/panel.webp" class="w-full max-w-60 mx-auto" />
             <div class="font-nerko text-2xl md:text-3xl leading-5">Modificaciones infinitas</div>
             <div class="font-patrick text-lg leading-5">Tu menú incluye un panel desde donde podrás modificarlo todas las veces que lo requieras, editando categorías, platillos, precios y fotos.</div>
          </div>
          <div class="bg-tdpink text-center p-3 flex flex-col gap-5">
             <NuxtImg src="/img/menu-digital/comodo.webp" class="w-full max-w-60 mx-auto" />
             <div class="font-nerko text-2xl md:text-3xl leading-5">Pensado para todos</div>
             <div class="font-patrick text-lg leading-5">¡Es un menú intuitivo. Diseñado para ser fácil y simple! Es cómodo hasta para los que prefieren cartas impresas.</div>
          </div>
          <div class="bg-tdorange text-center p-3 flex flex-col gap-5">
             <NuxtImg src="/img/menu-digital/personalizado.webp" class="w-full max-w-60 mx-auto" />
             <div class="font-nerko text-2xl md:text-3xl leading-5">Menú y QR Personalizados</div>
             <div class="font-patrick text-lg leading-5">Tu menú digital representa fielmente a tu marca. Colores, fotos y fuentes que lo hacen tuyo.</div>
          </div>
          <div class="bg-tdred text-center p-3 flex flex-col gap-5">
             <NuxtImg src="/img/menu-digital/rapido.webp" class="w-full max-w-60 mx-auto" />
             <div class="font-nerko text-2xl md:text-3xl leading-5">El menú más rápido en cargar</div>
             <div class="font-patrick text-lg leading-5">¡Este menú digital carga rápido! Esta programado para ser veloz y mostrar tus platillos casi inmediatamente.</div>
          </div>
          <div class="bg-tdgreen text-center p-3 flex flex-col gap-5">
             <NuxtImg src="/img/menu-digital/adaptable.webp" class="w-full max-w-60 mx-auto" />
             <div class="font-nerko text-2xl md:text-3xl leading-5">Para cualquier dispositivo</div>
             <div class="font-patrick text-lg leading-5">No es una imagen y ya...! Convertimos tu menú palabra por palabra en código para presentar a tus clientes un menú de alta calidad.</div>
          </div>
          <div class="bg-black text-white text-center p-3 flex flex-col gap-5">
             <NuxtImg src="/img/menu-digital/futuro.webp" class="w-full max-w-60 mx-auto" />
             <div class="font-nerko text-2xl md:text-3xl leading-5">Un menú digital con futuro</div>
             <div class="font-patrick text-lg leading-5">Integramos semana tras semana nuevas funciones y aditamentos que lo hacen el mejor menú digital del mundo.</div>
          </div>
       </div>
    </section>
 
 
 
    <section class="bg-white px-5 py-10 ">
       <div class="text-center font-gochi text-5xl md:text-8xl">A ver...</div>
       <div class="text-center font-patrick text-2xl my-5">
          Mira estos ejemplos de menús y anímate a pedir el tuyo.
       </div>
 
       <div class="grid md:grid-cols-3 gap-2 py-2">
          
          <div class="flex flex-col justify-center items-center gap-2">
             <div class="font-nerko text-tdred text-3xl">El código QR</div>
             <NuxtImg src="/img/menu-digital/qr1.svg" />
             <Icon name="fluent:arrow-down-12-filled" class="mx-auto text-tdred text-4xl" />
             <div class="font-nerko text-tdred text-3xl">El menú digital</div>
             <iframe src="https://abrir.xyz/menu/dogstaurante" class="w-full max-w-96 aspect-[2/3] border-4 "></iframe>
          </div>
          <div class="flex flex-col justify-center items-center gap-2">
             <div class="font-nerko text-tdpink text-3xl">El código QR</div>
             <NuxtImg src="/img/menu-digital/qr2.svg" />
             <Icon name="fluent:arrow-down-12-filled" class="mx-auto text-tdpink text-4xl" />
             <div class="font-nerko text-tdpink text-3xl">El menú digital</div>
             <iframe src="https://abrir.xyz/menu/refugiodragon" class="w-full  max-w-96 aspect-[2/3] border-4"></iframe>
          </div>
 
 
          <div class="flex flex-col justify-center items-center gap-2">
             <div class="font-nerko text-tdorange text-3xl">El código QR</div>
             <NuxtImg src="/img/menu-digital/qr3.svg" />
             <Icon name="fluent:arrow-down-12-filled" class="mx-auto text-tdorange text-4xl" />
             <div class="font-nerko text-tdorange text-3xl">El menú digital</div>
             <iframe src="https://abrir.xyz/menu/donrey" class="w-full max-w-96 aspect-[2/3] border-4"></iframe>
          </div>
 
 
       </div>
 
 
    </section>
 
 -->
 
    <section class="bg-white px-5 py-10 ">
       <div class="text-center font-gochi text-5xl md:text-8xl">¿Cuál es el proceso... y cuánto cuesta?</div>
       <div class="text-center font-patrick text-2xl my-5">
         ¡Súuuper! Planear tu jingle es facilísimo. 
      </div>
      <div class="grid md:grid-cols-2 gap-4   p-5  font-patrick text-xl md:text-3xl">
        <div class="bg-tdgreen p-5">

        <div class="font-gochi">Platícanos qué ideas tienes para tu jingle.</div>
        <ul class="my-5">
            <li><Icon name="ph:dot-fill" class="text-tdred align-middle" />¿De qué tratará?.</li>
            <li><Icon name="ph:dot-fill" class="text-tdred align-middle" />Ritmo y género musical.</li>
            <li><Icon name="ph:dot-fill" class="text-tdred align-middle" />Frases, ideas, o algo específico que quieras en la letra.</li>
            <li><Icon name="ph:dot-fill" class="text-tdred align-middle" />Fotos e imagenes para integrar en tu video.</li>
         </ul>
         <div class="font-gochi">Y nosotros te mandaremos 3 opciones de canción y un video.</div>
        </div> 
         <div class="bg-tdgreen flex flex-col">
            <div class="h-1/2 p-5 ">
               Comencemos con tus ideas a través de <NuxtLink class="text-tdred hover:text-black" href="https://wa.me/message/GSQFJRMWMO76P1?src=qr" target="_blank">Whatsapp</NuxtLink> y en un día tendremos listo tu canción!
            </div>
            <div class="grow bg-black text-white p-5 ">
               El precio durante la etapa de introducción es de <span class="font-nerko text-tdgreen">$600 pesos mexicanos</span>  y puedes pagar el día que te entreguemos.
            </div>

         </div>
      </div>
    </section>
 
    
    <div class="m-10 text-center">
       <NuxtImg src="/img/menu-digital/expert.webp" class="mx-auto" />
    </div>
 
 
 
 </template>
 
 
 <script setup lang="ts">
 const compare = [
    {
       desc: 'Pagos',
       v1: '1 solo pago',
       v2: 'Anual'
    },
    {
       desc: 'Precio',
       v1: '$700',
       v2: '$1,700'
    }
 ]
 </script>