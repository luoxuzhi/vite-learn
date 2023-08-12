<script setup>
import HelloWorld from './components/HelloWorld.vue'
import { useRoute } from 'vue-router'
const route = useRoute()
import {useCounterStore} from './store/index.js'

const props=defineProps({
  name:String
})
const counterStore = useCounterStore()
console.log(route.params)
const handleCountAdd = ()=>{
  counterStore.increment()
}
</script>

<template>
  <div>
    <div @click="handleCountAdd">
    jkljkjljklj
    </div>
    <div>
      {{name}} ???? {{route.params.name}}
      {{counterStore.count}}

    </div>
    <div>
      {{counterStore.double}}
    </div>
  </div>
</template>

<style scoped>

</style>
