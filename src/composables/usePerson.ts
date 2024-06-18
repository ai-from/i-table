import type { IPerson } from '@/services/interfaces'

export default function usePerson(): Record<any, Function> {
  const getURL = (person: IPerson, size: string): string => {
    return person.picture[size as keyof typeof person.picture]
  }

  const getFullName = (person: IPerson): string => {
    return `${person.name.title} ${person.name.first} ${person.name.last}`
  }

  const getGender = (person: IPerson): string => {
    return person.gender === 'male' ? 'мужской' : 'женский'
  }

  const getCountry = (person: IPerson): string => {
    return person.location.country
  }

  const getDOB = (person: IPerson): string => {
    return new Date(person.dob.date).toLocaleDateString('ru-ru', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  const getEmail = (person: IPerson): string => {
    return person.email
  }

  const getPhone = (person: IPerson): string => {
    return person.phone
  }

  return {
    getURL,
    getFullName,
    getGender,
    getCountry,
    getDOB,
    getEmail,
    getPhone
  }
}