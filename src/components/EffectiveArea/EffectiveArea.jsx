import React from 'react'
import style from './EffectiveArea.module.css'

import { Header } from '../Header/Header'
import { SearchBar } from '../SearchBar/SearchBar'
import { FoundResult } from '../Result/Result'


export const EffectiveArea = () => {
  return (
    <div className={style.effectiveArea}>
    <Header/>
    <SearchBar/>
    <FoundResult/>
    </div>
  )
}
