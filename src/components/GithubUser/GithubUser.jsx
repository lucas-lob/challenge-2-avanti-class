import React from 'react'
import style from './GithubUser.module.css'

import { Header } from '../Header/Header'
import { FoundResult } from '../Result/Result'


export const GithubUser = () => {
  return (
    <div className={style.container}>
      <Header />

      <div className={style.searchBarContainer}>
        <input className={style.searchBarInput} type="text" placeholder="Digite um usuário do Github" />

        <button className={style.searchBarButton}>
          <span className={style.searchBarButtonIcon}>search</span>
        </button>
      </div>

      <FoundResult />
    </div>
  )
}
