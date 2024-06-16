import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useSearchStore = defineStore('searchStore', () => {
  const searchQuery = ref<string>('')

  const setSearchQuery = (load: string): void => {
    searchQuery.value = load
  }

  return { searchQuery, setSearchQuery }
})
