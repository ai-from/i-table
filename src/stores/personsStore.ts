import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import type { IPerson } from '@/services/interfaces'
import { useSearchStore } from './searchStore'
import { usePaginationStore } from './paginationStore'
import usePerson from '@/composables/usePerson'
const {
  getURL,
  getFullName,
  getGender,
  getCountry,
  getDOB,
  getEmail,
  getPhone
} = usePerson()

export const usePersonsStore = defineStore('personsStore', () => {
  const paginationStore = usePaginationStore()
  const searchStore = useSearchStore()

  const persons = ref<any>([] as Array<IPerson>)
  const personsFrom = ref<number>(0)
  const personsOnPage = ref<number>(paginationStore.listPages[0])

  const filteredPersons = computed(() => {
    if (searchStore.searchQuery) {
      return persons.value.filter((item: Record<any, string>, idx: number) => {
        if (
          item.name.includes(searchStore.searchQuery) ||
          item.gender.includes(searchStore.searchQuery) ||
          item.country.includes(searchStore.searchQuery) ||
          item.dob.includes(searchStore.searchQuery) ||
          item.email.includes(searchStore.searchQuery) ||
          item.phone.includes(searchStore.searchQuery)
        )
          return true
        else return false
      })
    } else return persons.value
  })

  const setPersons = (load: Array<IPerson>): void => {
    load.forEach((person: IPerson) => {
      persons.value.push({
        picture: getURL(person, 'medium'),
        name: getFullName(person),
        gender: getGender(person),
        country: getCountry(person),
        dob: getDOB(person),
        email: getEmail(person),
        phone: getPhone(person)
      })
    })
  }

  const setPersonsFrom = (int: number): void => {
    personsFrom.value = int
  }

  const setPersonsOnPage = (int: number): void => {
    personsOnPage.value = int
  }

  return {
    persons,
    personsFrom,
    personsOnPage,
    filteredPersons,
    setPersons,
    setPersonsFrom,
    setPersonsOnPage
  }
})
