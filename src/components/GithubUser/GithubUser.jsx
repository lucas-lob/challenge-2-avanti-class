import React from 'react'
import style from './GithubUser.module.css'

import { Header } from '../Header/Header'
import { SearchBar } from '../SearchBar/SearchBar'
import { FoundResult } from '../Result/Result'


export const GithubUser = () => {
  return (
    <div className={style.container}>
      <Header />
      <SearchBar />
      <FoundResult />
    </div>
  )
}
