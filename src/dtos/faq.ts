import { LanguageTypes } from './language'

export interface FaqDTO {
  id: string
  question: string
  answer: string
  language: LanguageTypes
}


