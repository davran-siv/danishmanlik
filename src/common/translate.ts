import * as i18next from 'i18next'
import { languageKeyInLocalStorage } from '../const/local-storage'
import enTranslation from '../locales/en/en'
import ruTranslation from '../locales/ru/ru'
import trTranslation from '../locales/tr/tr'

const context: any = { resolve: null }

export const translationReady = new Promise(resolve => context.resolve = resolve)

const i18n = i18next.init(
  {
    lng: localStorage.getItem(languageKeyInLocalStorage) || 'ru',
    debug: true,
    resources: {
      EN: {
        translation: {
          ...enTranslation
        }
      },
      RU: {
        translation: {
          ...ruTranslation
        }
      },
      TR: {
        translation: {
          ...trTranslation
        }
      }
    }
  }, () => context.resolve()
)

export default i18n
