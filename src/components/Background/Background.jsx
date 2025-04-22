import React from 'react'
import style from './Background.module.css'

import squares from '../../assets/images/bg-squares.png'

export const Background = () => {
  return (
    <>
    <img className={style.squaresBg} src={squares} alt="squares background" />
    </>
  )
}
