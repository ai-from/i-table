import { usePersonsStore } from '@/stores/personsStore'
import { useSearchStore } from '@/stores/searchStore'
import { useSortStore } from '@/stores/sortStore'
import type { LocationQuery } from 'vue-router'

export const checkUrl = (query: LocationQuery): void => {
  const personsStore = usePersonsStore()
  const searchStore = useSearchStore()
  const sortStore = useSortStore()

  searchStore.setSearchQuery((query.search as string) || '')
  personsStore.setPersonsFrom((Number(query.page) - 1) * Number(query.rows) || 0)
  sortStore.setSortField((query.sortField as string) || '')
  if (query.sortOrder === '1' || query.sortOrder === '-1')
    sortStore.setSortOrder(Number(query.sortOrder))
  else sortStore.setSortOrder(0)
  personsStore.setPersonsOnPage(Number(query.rows) || personsStore.personsOnPage)
}
