<script setup>
import HelloWorld from './components/HelloWorld.vue'
import { useRoute } from 'vue-router'
const route = useRoute()
const props=defineProps({
  name:String
})
console.log(route.params)
</script>

<template>
  <div>
    jkljkjljklj
    <div>
      {{name}} ???? {{route.params.name}}
    </div>
  </div>
</template>

<style scoped>

</style>
