import { defineStore } from 'pinia'
import { ref } from 'vue'

export const usePaginationStore = defineStore('paginationStore', () => {
  const listPages = ref<number[]>([3, 10, 15])

  return { listPages }
})
