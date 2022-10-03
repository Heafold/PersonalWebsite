<template>
  <div>
    <XHeader></XHeader>
    <div class="flex ml-[5%] lg:ml-[15%] mt-[5%] text-white lg:text-xl">
      <div>
        <h1 class="mb-12 text-3xl lg:text-5xl underline">A propos de moi</h1>
        <p class="text-2xl lg:text-4xl mb-5">Bonjour 👋,</p>
        <p>
          Je m'appelle Corentin Maëse, je suis développeur front-end junior.
        </p>
        <p>
          J'ai effectué ma formation à M2I formation afin d'obtenir mon titre
          professionel de développeur web et web mobile.
        </p>
        <p>
          Je n'ai pas d'expérience en particulier mais j'ai soif d'apprendre et
          je suis motivé à travailler
        </p>
        <p>et apprendre des autres dans ce secteur que j'aime tant.</p>
        <h2 class="mt-12 text-xl lg:text-3xl">Languages :</h2>
        <p class="mb-12">Entre autres j'utilise et j'apprend de ces langages et frameworks quotidiennement :</p>
        <div class="text-sm lg:text-xl text-red-500 text-center">
            <p>HTML/CSS - Tailwind/Bootstrap</p>
            <p>Javascript - Vuejs</p>
            <p>PHP - Laravel</p>
          
        </div>
      </div>
      <div class="hidden lg:block" >
          <img src="../assets/visage.png" >
      </div>
    </div>
  </div>
</template>

<script>
import XHeader from "./XHeader.vue";
export default {
  name: "XAbout",
  components: {
    XHeader,
  },
};
</script>