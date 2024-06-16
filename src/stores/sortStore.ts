import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useSortStore = defineStore('sortStore', () => {
  const sortField = ref<string>('')
  const sortOrder = ref<string>('0')

  const setSortField = (load: string): void => {
    sortField.value = load
  }

  const setSortOrder = (load: number): void => {
    sortOrder.value = load.toString()
  }

  return { sortField, sortOrder, setSortField, setSortOrder }
})
