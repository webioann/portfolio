import React,{ useState,useEffect } from 'react'
import Container from './Container.js'
import Navigation from './Navigation.js'
import LangSwitch from './LangSwitch.js'
import Summary from './Summary.js'
import Projects from './Projects.js'
import Contacts from './Contacts.js'
import Footer from './Footer.js'
import CryptoCurrency from './CryptoCurrency.js'
import RandomUsers from './RandomUsers.js'
import Portfolio from './Portfolio.js'
import { useWindowWidth } from '../hooks/useWindowWidth'

function App() {

  // === logic for adaptive navbar and burger menu ===
  const [move,setMove] = useState('0px')
  const windowWidth = useWindowWidth()

  useEffect(() => {
      windowWidth > 575 ? setMove('0px') : setMove('-770px')
  },[windowWidth])

  const move_navbar = () => {
    move === '-770px' ? setMove('0px') : setMove('-770px')
  }

  return (
    <Container>
      <Navigation move={move} move_navbar={move_navbar}>
        <LangSwitch/>
      </Navigation>
      <Summary/>
      <Projects>
        <CryptoCurrency/>
        <RandomUsers/>
        <Portfolio/>
      </Projects>
      <Contacts/>
      <Footer/>
    </Container>
  )
}

export default App;

