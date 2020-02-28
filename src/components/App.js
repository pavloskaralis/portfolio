import React,{useEffect} from 'react'
import styled from 'styled-components'
import About from './About.js'
import Cover from './Cover.js'
import Portfolio from './Portfolio.js'
import Technologies from './Technologies.js'
import Nav from './Nav.js'
import Photography from './Photography.js'
import portfolio1 from '../images/portfolio1.png'
import portfolio2 from '../images/portfolio2.png'
import portfolio3 from '../images/portfolio3.png'
import portfolio4 from '../images/portfolio4.png'
import { connect } from 'react-redux'

const mapStateToProps = state => {
  return {
    status: state.status
  }
}

const Wrapper = styled.div`
  position: relative; 
  scroll-behavior: smooth;
  scroll-snap-type: y mandatory;
  overflow: scroll; 
  height: 100vh;
  max-width: 100vw;
  padding: 16px;
  box-sizing: border-box; 
  display: flex;
  flex-direction: column; 
  @media (max-width: 1200px), (max-height: 800px) {
    padding: 0; 
  }
`;




 

let App = ({status}) => {

  useEffect(() => {
    
  })


  return (
    <Wrapper id="container">
      <Cover/>
      <About/>
      <Portfolio id='portfolio' backgroundImage={portfolio1} project='1' title='Traveler' href='https://traveler-planning-app.herokuapp.com/' />
      <Portfolio id='portfolio2' backgroundImage={portfolio2} project='2' title='Go Fish' href='https://pavloskaralis.github.io/go-fish/' />
      <Portfolio id='portfolio3' backgroundImage={portfolio3} project='3' title='Appstractor' href='http://appstractor.herokuapp.com/' />
      <Portfolio id='portfolio4' backgroundImage={portfolio4} project='4' title='Foodie' href='https://foodie-list-app.herokuapp.com/' />
      <Technologies/>
      <Photography/>
      {(navigator.userAgent.indexOf('Safari') !== -1 && navigator.userAgent.indexOf('Chrome') === -1) ?
        <Nav/> :
        status && <Nav/> 
      }
    </Wrapper>
  )
}

App = connect(
  mapStateToProps,
  null
)(App)
export default App
