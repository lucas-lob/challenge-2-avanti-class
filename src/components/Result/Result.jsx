import React from 'react'

import style from './Result.module.css'

import profilePhoto from '../../assets/images/profile.png'

export const FoundResult = () => {
  return (
    <div className={style.FoundResultContainer}>
      <div className={style.FoundResultPhotoContainer}>
      <img src={profilePhoto} alt='User'/>
      </div>

      <div className={style.FoundResultText}>
        <h2 className={style.FoundResultTitle}>Lucas Mendes</h2>

        <p className={style.FoundResultDescription}>
          Desenvolvedor front-end apaixonado por criar interfaces intuitivas e acessíveis. Especialista em UX/UI e e-commerces, transformando design em código eficiente. Sempre explorando novas tecnologias para melhorar a experiência do usuário. 🚀
        </p>
      </div>
    </div>
  )
}

export const NotFoundResult = () => {
  return (
    <div className={style.notFoundResultContainer}>
      <p className={style.notFoundResultText}>Nenhum perfil foi encontrado com esse nome de usuário.</p>
      <p className={style.notFoundResultText}>Tente novamente</p>
    </div>
  )
}

