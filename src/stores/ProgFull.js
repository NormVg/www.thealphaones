import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useProgStore = defineStore('prog-store', () => {
  const isProgFull = ref(false)
  const ProgFullData = ref()

  const SetIsProgFull = (prop)=>{
    isProgFull.value = prop

  }

  const SetProgFullData = (prop)=>{
    ProgFullData.value = prop
  }

  return { SetIsProgFull , SetProgFullData , isProgFull , ProgFullData }
})
