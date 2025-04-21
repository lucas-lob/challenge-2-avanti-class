import React from 'react'

import style from './Result.module.css'

export const FoundResult = ({userImageSrc, userName, userBiography}) => {
  return (
    <div className={style.FoundResultContainer}>
      <div className={style.FoundResultPhotoContainer}>
      <img className={style.FoundResultPhoto} src={userImageSrc} alt='User'/>
      </div>

      <div className={style.FoundResultText}>
        <h2 className={style.FoundResultTitle}>
           {userName}
        </h2>

        <p className={style.FoundResultDescription}>
          {userBiography}
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

