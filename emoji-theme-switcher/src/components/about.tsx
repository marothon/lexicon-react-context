import React, { useContext } from 'react'
import { ThemeContext } from '../context/theme-provider'

export default function About() {
  const {theme} = useContext(ThemeContext);
  
  return (
    <>
      <h1>About</h1>

      <p>{theme}</p>
    </>
  )
}
