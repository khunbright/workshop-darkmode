import React from 'react'
import { ThemeContext } from '../App'
import light from '../image/light.svg'
import { useContext } from 'react'
import dark from '../image/dark.svg'

const  Content = () => {
  const {theme} = useContext(ThemeContext)
  return (
    <main className={theme==="dark"? "dark":"light"}> 
      <div>
        <h1>Peerawitch</h1>
        <h1>Lertsuksombut</h1>
        <p>Light / Dark mode</p>
      </div>
      <img src={theme==="dark"? dark : light} alt="Logo"></img>
    </main>
  )
}

export default  Content