import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { usePersonsStore } from './personsStore'
import { usePaginationStore } from './paginationStore'
import { useSearchStore } from './searchStore'
import { useSortStore } from './sortStore'

export const useUrlStore = defineStore('urlStore', () => {
  const personStore = usePersonsStore()
  const paginationStore = usePaginationStore()
  const searchStore = useSearchStore()
  const sortStore = useSortStore()

  const isReset = ref<boolean>(false)

  const URLQuery = computed((): Record<any, string | number> => {
    return {
      search: searchStore.searchQuery,
      sortField: sortStore.sortField,
      sortOrder: sortStore.sortOrder,
      page: Math.ceil((personStore.personsFrom + 1) / personStore.personsOnPage).toString(),
      rows: personStore.personsOnPage
    } as {}
  })

  const resetURL = (): void => {
    searchStore.searchQuery = ''
    sortStore.sortField = ''
    sortStore.sortOrder = ''
    personStore.personsFrom = 0
    personStore.personsOnPage = paginationStore.listPages[0]
    isReset.value = true
  }

  return { isReset, URLQuery, resetURL }
})
