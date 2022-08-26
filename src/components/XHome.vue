<template>
    <div class="flex">
      <div class="flex mt-[5%] ml-[20%]">
            <div class="memoji w-40 h-40 bg-slate-700  shadow rounded-full"></div>
        </div>
    <div class="text-white mt-[8%] ml-[5%]">
        <h3 class="text-5xl">Bonjour 👋,</h3>
        <h3 class="text-5xl">Je suis Corentin Maese.</h3>
        <p class="mt-5 text-2xl">Développeur Front-End Vue.Js Junior</p>
        <p class="text-2xl">passionné par le développement Web/Web mobile.</p>
        <div class="flex">
            <div class="w-24 bg-slate-600 hover:bg-slate-700 p-1 text-center rounded mt-5 cursor-pointer duration-150 ">Explorer ></div>
            <div class="w-28 bg-red-600 hover:bg-red-700 p-1 text-center rounded mt-5 ml-5 cursor-pointer duration-150">Me contacter</div>
            <a href="https://github.com/Heafold" target="_blank" class="github w-5 h-5 mt-[4.5%] ml-5"></a>
        </div>
        
    </div>  
    </div>
    
    
</template>

<script>
export default {
  name: 'XHome',
  props: {

  }
  
}
</script>

<style>
    .memoji{
        background-image: url('../assets/memoji.png');
        background-size: cover;
        background-position-y: -25px;
    }
    .github{
        background-image: url('../assets/github.png');
        background-size: cover;
    }
</style>