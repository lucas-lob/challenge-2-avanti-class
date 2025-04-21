import React from 'react'
import githubText from '../../assets/images/github-text.png'
import githubLogo from '../../assets/images/github-logo.png'

import style from './Header.module.css'

export const Header = () => {
  return (
    <div className={style.headerContainer}>
      <img className={style.headerGitHubLogo} src={githubLogo} alt="GitHub logo" />

      <h1 className={style.headerText}>Perfil</h1>
      
      <img class={style.headerGitHubLogoText} src={githubText} alt="GitHub logo text" />
    </div>
  )
}
