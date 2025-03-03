import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useNavBarStore = defineStore('nav-bar-store', () => {
  const isNavBar = ref(false)

  function setNavBar(prop) {
    isNavBar.value = prop
  }

  return { isNavBar, setNavBar }
})
