<template>
  <div >
    <router-view></router-view>
  </div>
</template>

<script>
import { ref, defineAsyncComponent } from 'vue';

export default {
  setup() {
    let a = ref('bb')
    return {
      a
    }
  }
}
</script>

<style scoped>

</style>