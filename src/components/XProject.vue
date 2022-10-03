<template>

    <div>
        <XHeader></XHeader>
        <div class="mt-20">
            <h1 class=" text-center text-white text-4xl underline">Projets récents</h1>
            <div class="flex">
                <div class="bg-white w-80 h-48 mt-10 ml-[30%]">

                </div>
                <div class="ml-12 mt-12 ">
                    <h2 class="text-white text-3xl underline ">NOM PROJET</h2>
                </div>
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