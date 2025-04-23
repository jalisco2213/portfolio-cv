import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import en from '@/locales/en.json'
import ru from '@/locales/ru.json'
import ua from '@/locales/ua.json'

export const useLanguageStore = defineStore('language', () => {
  const currentLanguage = ref('ru')
  const translations = ref({})
  
  const languages = [
    { code: 'en', label: 'EN' },
    { code: 'ru', label: 'RU' },
    { code: 'ua', label: 'UA' }
  ]

  const translationMap = {
    en,
    ru,
    ua
  }
  
  function loadTranslations(lang) {
    translations.value = translationMap[lang] || translationMap['ru']
  }

  function setLanguage(lang) {
    loadTranslations(lang)
    currentLanguage.value = lang
  }

  function t(key) {
    const keys = key.split('.')
    let result = translations.value
    
    for (const k of keys) {
      result = result?.[k]
      if (result === undefined) {
        console.warn(`Translation missing for key: ${key}`)
        return key
      }
    }
    
    return result
  }

  loadTranslations(currentLanguage.value)

  return { 
    currentLanguage, 
    languages, 
    setLanguage,
    t
  }
})