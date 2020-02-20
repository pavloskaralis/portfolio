import React from 'react'
import styled from 'styled-components'
import About from './About.js'
import Cover from './Cover.js'
import Portfolio from './Portfolio.js'
import Technologies from './Technologies.js'
import Nav from './Nav.js'
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
  max-width: 100vw;
  padding: 16px;
  box-sizing: border-box; 
  display: flex;
  flex-direction: column; 
  @media (max-width: 1200px) {
    padding: 0; 
  }
`;

let App = ({status}) => {

  return (
    <Wrapper>
      <Cover/>
      <About/>
      <Portfolio id='portfolio' backgroundImage={portfolio1} project='1' title='Traveler' href='https://traveler-planning-app.herokuapp.com/' />
      <Portfolio backgroundImage={portfolio2} project='2' title='Go Fish' href='https://pavloskaralis.github.io/go-fish/' />
      <Portfolio backgroundImage={portfolio3} project='3' title='Appstractor' href='http://appstractor.herokuapp.com/' />
      <Portfolio backgroundImage={portfolio4} project='4' title='Foodie' href='https://foodie-list-app.herokuapp.com/' />
      <Technologies/>
      {status && <Nav/>}
    </Wrapper>
  )
}

App = connect(
  mapStateToProps,
  null
)(App)
export default App
