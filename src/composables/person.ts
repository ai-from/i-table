import type { IPerson } from '@/services/interfaces'

export const getURL = (person: IPerson, size: string): string => {
  return person.picture[size as keyof typeof person.picture]
}

export const getFullName = (person: IPerson): string => {
  return `${person.name.title} ${person.name.first} ${person.name.last}`
}

export const getGender = (person: IPerson): string => {
  return person.gender === 'male' ? 'мужской' : 'женский'
}

export const getCountry = (person: IPerson): string => {
  return person.location.country
}

export const getDOB = (person: IPerson): string => {
  return new Date(person.dob.date).toLocaleDateString('ru-ru', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}

export const getEmail = (person: IPerson): string => {
  return person.email
}

export const getPhone = (person: IPerson): string => {
  return person.phone
}
