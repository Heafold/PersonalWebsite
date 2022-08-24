<template>

  <div>
    <XHeader></XHeader>

    <XHome></XHome>
  </div>


</template>

<script>
import XHeader from './components/XHeader.vue'
import XHome from './components/XHome.vue'

export default {
  name: 'App',
  components: {
    XHeader,
    XHome,
  }
}
</script>

<style>
#app {
     
}
html{
  background-color: #0a192f;
  padding: 50px;
}
</style>
