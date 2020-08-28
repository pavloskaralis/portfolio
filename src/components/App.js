import React,{useEffect} from 'react'
import styled from 'styled-components'
import About from './About.js'
import Cover from './Cover.js'
import Portfolio from './Portfolio.js'
import Technologies from './Technologies.js'
import Nav from './Nav.js'
// import Photography from './Photography.js'
// import portfolio1 from '../images/portfolio1.png'
import portfolio2 from '../images/portfolio2.png'
import portfolio3 from '../images/portfolio3.png'
// import portfolio4 from '../images/portfolio4.png'
import portfolio5 from '../images/portfolio5.png'
import portfolio6 from '../images/portfolio6.png'
import portfolio7 from '../images/portfolio7.png'
// import { connect } from 'react-redux'

// const mapStateToProps = state => {
//   return {
//     status: state.status
//   }
// }

const Wrapper = styled.div`
  position: relative; 
  scroll-behavior: smooth;
  scroll-padding: 16px; 
  scroll-snap-type: y mandatory;
  overflow: scroll; 
  height: 100vh;
  max-width: 100vw;
  padding: 16px;
  box-sizing: border-box; 
  display: flex;
  flex-direction: column; 
  padding-bottom: 0;
  
  @media (max-width: 1200px), (max-height: 736px) {
    scroll-padding: 0; 
    padding: 0; 
  }
  
`;




 

let App = () => {

  useEffect(() => {
    
  })


  return (
    <Wrapper id="container">
      <Cover/>
      <About/>
      <Portfolio id='Appstractor' backgroundImage={portfolio3} project='1' title='Appstractor' href='http://www.appstractorart.com/' />
      <Portfolio id='CafeRacers' backgroundImage={portfolio6} project='2' title='Cafe Racers' href='https://cafe-racers.herokuapp.com/' />
      {/* <Portfolio id='Traveler' backgroundImage={portfolio1} project='3' title='Traveler' href='https://traveler-planning-app.herokuapp.com/' /> */}
      <Portfolio id='Astral' backgroundImage={portfolio7} project='3' title='Astral' href='http://astral-chat-app.herokuapp.com/' />
      <Portfolio id='SpellCheckIt' backgroundImage={portfolio5} project='4' title='Spell &#x2713; It' href='https://spell-check-it.herokuapp.com//' />
      <Portfolio id='GoFish' backgroundImage={portfolio2} project='5' title='Go Fish' href='https://pavloskaralis.github.io/go-fish/' />
      {/* <Portfolio id='portfolio5' backgroundImage={portfolio4} project='5' title='Foodie' href='https://foodie-list-app.herokuapp.com/' /> */}
      <Technologies/>
      {/* <Photography/> */}
      <Nav/> 
      
    </Wrapper>
  )
}


export default App
