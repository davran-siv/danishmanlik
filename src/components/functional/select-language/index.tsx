import * as React from 'react'
import { languageKeyInLocalStorage } from '../../../const/local-storage'

const SelectLanguage = () => {
  const availableLanguages = ['RU', 'EN', 'TR']
  const selectedLanguage = localStorage.getItem(languageKeyInLocalStorage) || availableLanguages[0]
  const handleChangeLanguage = (e: any) => {
    const newSelectedLanguage = e.target.value
    localStorage.setItem(languageKeyInLocalStorage, newSelectedLanguage)
    location.reload()
  }
  const optionList = availableLanguages.map((it, i) => (
    <option value={it} key={i}>{it}</option>)
  )
  return (
    <select onChange={handleChangeLanguage} defaultValue={selectedLanguage}>
      {optionList}
    </select>
  )
}

export default SelectLanguage
