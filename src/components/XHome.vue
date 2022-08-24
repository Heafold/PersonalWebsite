<template>

    <div class="flex mt-32 ml-64">
        <div class="memoji w-40 h-40 bg-slate-700  shadow rounded-full">
            
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
</style>