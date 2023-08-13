import { defineStore } from 'pinia'

export const useCounterStore = defineStore( {
  id:'counter',
  state: () => ({
     count: 0
  }),
  getters:{
    double:(state)=>(state.count)*2
  },
  // 也可以定义为
  // state: () => ({ count: 0 })
  actions: {
    increment() {
      this.count++
    },
  },
})
