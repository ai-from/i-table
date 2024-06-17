import { defineStore } from 'pinia'
import { ref } from 'vue'

export const usePaginationStore = defineStore('paginationStore', () => {
  const listPages = ref<number[]>([3, 10, 15])
  const defaultVisibleBtn = ref<number>(5)
  const visibleBtns = ref<number>(defaultVisibleBtn.value)
  const checkVisibleBtns = (width: number): void => {
    if(width < 425) visibleBtns.value = 1
    else if(width < 768) visibleBtns.value = 2
    else visibleBtns.value = defaultVisibleBtn.value
  }
  return { listPages, visibleBtns, defaultVisibleBtn, checkVisibleBtns }
})
