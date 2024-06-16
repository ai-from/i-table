import type { PictureType } from './types'
import type { NameType } from './types'
import type { LocationType } from './types'
import type { DOBType } from './types'

export interface IPerson {
  picture: PictureType
  name: NameType
  gender: string
  location: LocationType
  dob: DOBType
  email: string
  phone: string
}
