import { useState, useRef, useEffect } from 'react'
import style from './GithubUser.module.css'

import { Header } from '../Header/Header'
import { FoundResult, NotFoundResult, withoutResult } from '../Result/Result'
import { Background } from '../Background/Background'


export const GithubUser = () => {

  // useStates
  const [user, setUser] = useState("")
  const [userInfos, setUserInfos] = useState({})
  const [resultComponent, setResultComponent] = useState(withoutResult)

  // useEffects
  const isFirstRender = useRef(true)

  useEffect(() => {
    // Disables useEffect in first render
    if (isFirstRender.current) {
      isFirstRender.current = false
      return
    }

    if ("status" in userInfos) {
      setResultComponent(NotFoundResult)
    } else {
      setResultComponent(FoundResult(
        {
          userName: userInfos.name,
          userImageSrc: userInfos.avatar_url,
          userBiography: userInfos.bio
        }
      ))
    }
  }, [userInfos])

  // Function to call Github User API 
  const searchUser = () => {
    fetch(`https://api.github.com/users/${user.trim()}`)
      .then(response => response.json())
      .then(data => setUserInfos(data))
  }

  return (
    <div className={style.container}>
      <Background />

      <div className={style.containerElements}>
        <Header />

        <div className={style.searchBarContainer}>
          <input
            className={style.searchBarInput}
            type="text"
            placeholder="Digite um usuário do Github"
            value={user}
            onChange={(element) => { setUser(element.target.value) }} />

          <button onClick={searchUser} type="button" className={style.searchBarButton}>
            <span className={style.searchBarButtonIcon}>search</span>
          </button>
        </div>

        {resultComponent}
      </div>
    </div>
  )
}
