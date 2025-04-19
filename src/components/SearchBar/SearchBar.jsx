import React from 'react'

import style from './SearchBar.module.css'

export const SearchBar = () => {
  return (
    <div className={style.searchBarContainer}>
      <input className={style.searchBarInput} type="text" placeholder="Digite um usuário do Github" />

      <button className={style.searchBarIconButton}>
        <span class="material-symbols-outlined">search</span>
      </button>
    </div>
  )
}
