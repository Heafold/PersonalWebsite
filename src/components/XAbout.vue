<template>
  <div>
    <XHeader></XHeader>
    <div class="flex ml-[15%] mt-[5%] text-white text-xl">
      <div>
        <h1 class="mb-12 text-5xl underline">A propos de moi</h1>
        <p class="text-4xl mb-5">Bonjour 👋,</p>
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
        <h2 class="mt-12 text-3xl">Languages :</h2>
        <p class="mb-12">Entre autres j'utilise et j'apprend de ces langages et frameworks quotidiennement :</p>
        <div class="flex">
          <div class="mr-20">
            <ul>
              <li class="mb-3">° HTML & CSS</li>
              <li class="mb-3">° JavaScript</li>
              <li>° PHP</li>
            </ul>
          </div>
          <div>
            <ul>
              <li class="mb-3"> ° Tailwind & Bootstrap</li>
              <li class="mb-3">° Vue.js</li>
              <li>° Symfony</li>
            </ul>
          </div>
        </div>
      </div>
      <div >
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