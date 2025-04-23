import React from 'react'

import style from './Result.module.css'

export const FoundResult = ({ userImageSrc, userName, userBiography }) => {
  return (
    <>
      <div className={style.FoundResultContainer}>
        <div className={style.FoundResultPhotoContainer}>
          <img className={style.FoundResultPhoto} src={userImageSrc} alt='User' />
        </div>

        <div className={style.FoundResultText}>
          <h2 className={style.FoundResultTitle}>
            {userName}
          </h2>

          <p className={style.FoundResultDescription}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus culpa provident maiores, necessitatibus est hic aperiam sequi officiis rem quod praesentium facere velit ab impedit dolor quae, perferendis, fugiat tempora.
          </p>
        </div>
      </div>
    </>
  )
}

export const NotFoundResult = () => {
  return (
    <div className={style.resultContainer}>
      <div className={style.notFoundResultContainer}>
        <p className={style.notFoundResultText}>Nenhum perfil foi encontrado com esse nome de usuário.</p>
        <p className={style.notFoundResultText}>Tente novamente</p>
      </div>
    </div>
  )
}

export const withoutResult = () => {
  return (
    <div className={style.resultContainer}>
    </div>
  )
}

