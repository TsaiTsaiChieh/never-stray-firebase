import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import LocaleZhCN from '../assets/locals/zh.json'

const defaultNS = 'zh'
const resources = {
  zh: {
    translation: LocaleZhCN,
  },
} as const

i18n.use(initReactI18next).init({
  resources,
  lng: defaultNS,
  fallbackLng: defaultNS,
  interpolation: {
    escapeValue: false,
  },
})

export default i18n
