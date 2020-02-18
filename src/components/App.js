import React from 'react'
import styled, {ThemeProvider} from 'styled-components'
import About from './About.js'
import Cover from './Cover.js'
import Portfolio from './Portfolio.js'
import Technologies from './Technologies.js'
import portfolio1 from '../images/portfolio1.png'
import portfolio2 from '../images/portfolio2.png'
import portfolio3 from '../images/portfolio3.png'
import portfolio4 from '../images/portfolio4.png'



function App({}){
  const minHeight = window.innerHeight + 96; 
  const Wrapper = styled.div`
    width: 100vw;
    height: calc(700vh - 96px);
    min-height: ${minHeight}px;
    padding: 16px;
    box-sizing: border-box; 
    display: flex;
    flex-direction: column; 
    justify-content: space-between;

    @media (max-width: 1200px) {
      height: 4128px;
      padding: 0; 
    }
    @media (max-width: 992px) {
      height: 3358px;
    }
  `;
  
  const theme = {
    w: '100%',
    h: 'calc(100vh - 32px)',
    bs: 'border-box',
    bg: 'blue',
    mb: '16px',
    h2: '576px',
    h3: '466px'
  }

  return (
    <Wrapper>
      <ThemeProvider theme={theme}>
        <Cover/>
        <About/>
        <Portfolio backgroundImage={portfolio1} project='1' title='Traveler' href='https://traveler-planning-app.herokuapp.com/' />
        <Portfolio backgroundImage={portfolio2} project='2' title='Go Fish' href='https://pavloskaralis.github.io/go-fish/' />
        <Portfolio backgroundImage={portfolio3} project='3' title='Appstractor' href='http://appstractor.herokuapp.com/' />
        <Portfolio backgroundImage={portfolio4} project='4' title='Foodie' href='https://foodie-list-app.herokuapp.com/' />
        <Technologies/>
      </ThemeProvider>
    </Wrapper>
  )
}

export default App
