<template>
  <div>
    <p class="mini-serve">Micro Server</p>
    <HelloMsComponents />
    <msModule />
  </div>
</template>

<script>
import { defineAsyncComponent } from 'vue';
import HelloMsComponents from './HelloMsComponents.vue'

const msModule = defineAsyncComponent(() => import('ms1/tools'))

export default {
  components:{
    msModule, 
    HelloMsComponents
  },
  setup() {

  }
}
</script>

<style scoped>
  .mini-serve{
    width:100%;
    font-size:40px;
    overflow: hidden;
    line-height: 100px;
    text-align: center;
  }
</style>