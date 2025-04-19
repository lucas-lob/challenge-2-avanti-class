import React from 'react'
import githubText from '../../assets/images/github-text.png'
import githubLogo from '../../assets/images/github-logo.png'

import style from './Header.module.css'

export const Header = () => {
  return (
    <div className={style.headerContainer}>
      <img src={githubLogo} alt="GitHub logo" />

      <p className={style.headerText}>Perfil</p>
      
      <img src={githubText} alt="GitHub logo text" />
    </div>
  )
}
