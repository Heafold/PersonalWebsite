<template>

    <div>
        <XHeader></XHeader>
        <div class="mt-[5%]">
            <h1 class=" text-center text-white text-4xl underline">Mes projets.</h1>

            <div class="lg:flex">
                
                <div class=" mt-12 lg:ml-[35%]">
                    <h2 class="text-white text-3xl underline text-center">SHADOW</h2>
                    <p class="text-white text-lg text-center mt-5 mb-5">Reproduction du site web https://shadow.tech/fr/ avec TailWind</p>
                    <p class="text-red-400 underline text-center"><a href="https://github.com/Heafold/SHADOW" target="_blank" >GitHub</a></p>
                </div>

                <div class="shadow w-80 h-48 mt-10 ml-[6%] lg:ml-[3%]"></div>

            </div>

            <p class="text-center text-white mt-8">-</p>

            <div class="lg:flex">
                
                <div class=" mt-12 lg:ml-[35%]">
                    <h2 class="text-white text-3xl underline text-center">Memory en JS</h2>
                    <p class="text-white text-lg text-center mt-5 mb-5">Jeu du MEMORY en Javascript natif</p>
                    <p class="text-red-400 underline text-center"><a href="https://github.com/Heafold/MemoryJS" target="_blank" >GitHub</a></p>
                </div>

                <div class="memory w-80 h-48 mt-10 ml-[6%] lg:ml-[3%]"></div>

            </div>

            <p class="text-center text-white mt-8">-</p>

            <div class="lg:flex">
                
                <div class=" mt-12 lg:ml-[35%]">
                    <h2 class="text-white text-3xl underline text-center">WebImmo</h2>
                    <p class="text-white text-lg text-center mt-5 mb-5">Création d'un site web de ventes immobilières avec LARAVEL</p>
                    <p class="text-red-400 underline text-center"><a href="https://github.com/Heafold/WebImmo" target="_blank" >GitHub</a></p>
                </div>

                <div class="webimmo w-80 h-48 mt-10 ml-[6%] lg:ml-[3%]"></div>

            </div>

            


        </div>
    </div>
    
</template>

<script>
import XHeader from './XHeader.vue'
export default {
  name: 'XAbout',
  components: {
    XHeader,
}
  
  
}
</script>

<style>
    .shadow{
        background-image: url('../assets/ShadowImg.png');
        background-size: contain;
    }
    .memory{
        background-image: url('../assets/MemoryImg.png');
        background-size: contain;
    }
    .webimmo{
        background-image: url('../assets/WebImoImg.png');
        background-size: contain;
    }
</style>

