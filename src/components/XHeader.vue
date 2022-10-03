<template>

    <div class="flex">
        <h1 class="text-2xl text-white cursor-pointer">> CM.</h1>
        <div class="flex ml-32 justify-around w-3/12">
            <h2 class="text-slate-400 hover:text-slate-200 cursor-pointer hover:bg-slate-800 w-20 text-center p-1 rounded "><router-link to="/">Accueil</router-link></h2>
            <h2 class="text-slate-400 hover:text-slate-200 cursor-pointer hover:bg-slate-800 w-20 text-center p-1 rounded"><router-link to="/about">Moi</router-link></h2>
            <h2 class="text-slate-400 hover:text-slate-200 cursor-pointer hover:bg-slate-800 w-20 text-center p-1 rounded "><router-link to="/project">Projets</router-link></h2>
            <h2 class="text-slate-400 hover:text-slate-200 cursor-pointer hover:bg-slate-800 w-20 text-center p-1 rounded">Contact</h2>
        </div>
    </div>
    
</template>

<script>
export default {
  name: 'XHeader',
  props: {

  }
  
}
</script>