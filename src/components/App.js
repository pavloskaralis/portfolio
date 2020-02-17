import React from 'react'
import styled, {ThemeProvider} from 'styled-components'
import About from './About.js'
import Cover from './Cover.js'
import Portfolio from './Portfolio.js'
import Technologies from './Technologies.js'
import portfolio1 from '../backgrounds/portfolio1.png'
import portfolio2 from '../backgrounds/portfolio2.png'
import portfolio3 from '../backgrounds/portfolio3.png'
import portfolio4 from '../backgrounds/portfolio4.png'



function App({}){
  const Wrapper = styled.div`
    width: 100vw;
    height: calc(700vh - 96px);
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
        <Portfolio backgroundImage={portfolio1} project='One' title='Traveler' href='https://traveler-planning-app.herokuapp.com/' />
        <Portfolio backgroundImage={portfolio2} project='Two' title='Go Fish' href='https://pavloskaralis.github.io/go-fish/' />
        <Portfolio backgroundImage={portfolio3} project='Three' title='Appstractor' href='http://appstractor.herokuapp.com/' />
        <Portfolio backgroundImage={portfolio4} project='Four' title='Foodie' href='https://foodie-list-app.herokuapp.com/' />
        <Technologies/>
      </ThemeProvider>
    </Wrapper>
  )
}

export default App
