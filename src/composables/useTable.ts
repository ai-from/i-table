import type { IPerson } from '@/services/interfaces'
import type { filterType } from '@/services/types'

export default function useTable(): Record<string, Function> {
  const showItemsOnPage = (items: Array<IPerson>, filter: filterType): IPerson[] => {
    return items.filter(
      (i: IPerson, idx: number) => idx >= filter.from && idx < filter.from + filter.count
    ) as Array<IPerson>
  }

  return {showItemsOnPage}
}
