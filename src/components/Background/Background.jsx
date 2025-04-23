import React from 'react'
import style from './Background.module.css'

import squares from '../../assets/images/bg-squares.png'

export const Background = () => {
  return (
    <>
      <div className={style.squaresBg}>
        <img src={squares} alt="squares background" />
      </div>
      <div className={style.spotLightTop}></div>
      <div className={style.spotLightBottom}></div>
    </>
  )
}
