<template>
  <div>
    <div class="tools">
      <ul class="tools_ul">
        <li class="tools_li" v-for="( item, index ) in [{},{}]" :key="index">abc</li>
      </ul>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent(function Tools() {
  
})
</script>


<style scoped>
  .tools{
    width:20%;
    margin:40px auto;
    height: 400px;
    border-radius: 5px;
    border:1px solid rgb(139, 112, 112);
    background: #fff;
  }
  .tools_ul{
    list-style:none;
  }
  .tools_li{

  }
</style>