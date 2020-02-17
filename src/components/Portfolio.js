import React from 'react'
import styled from 'styled-components'
import Section from '../styles/Section.js'
import Text1 from '../texts/Text1.js'
import Text2 from '../texts/Text2.js'
import Text3 from '../texts/Text3.js'
import Text4 from '../texts/Text4.js'


function Portfolio({backgroundImage, project, title, href}){
  const Wrapper = styled(Section)`
    background-image: url(${backgroundImage});
    background-size: cover;
    background-position: center;
  `;

  const Overlay = styled.div`
    background-image: radial-gradient(
      circle, 
      rgba(25,25,25,.6),
      rgba(25,25,25,.8)
    );
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column-reverse;
    padding: 64px;
    box-sizing: border-box;
    @media (max-width: 1200px) {
      padding: 32px; 
    }
    @media (max-width: 992px) {
      padding: 16px;
    }
  `;

  const SideA = styled.div`
    // background: red;
    display: flex;
    width: 100%;
    @media (max-width: 992px) {
     
    }
  `;

    const Column = styled.div`
      // background: green;
      color: white; 
      width: 50%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      
      & a {
        text-decoration-line: none;
        color: white; 
        display: inline;
      }
    `;

      const Project = styled(Column)`
        // background: red;
        font-family: 'Montserrat', sans-serif;
        font-size: 16px;
        font-weight: 600;
        width: 100%;
        text-transform: uppercase;
        @media (max-width: 1200px) {
        }
        @media (max-width: 992px) {
        }
      `;

      const Title = styled(Column)`
        // background: yellow;
        font-family: 'Merriweather', serif;
        text-transform: uppercase;
        font-size: 80px;
        width: 100%;
        @media (max-width: 1200px) {
          font-size: 64px;
        }
        @media (max-width: 992px) {
          font-size: 48px;
        }
        @media (max-width: 768px) {
          font-size: 32px;
        }
        @media (max-width: 576px) {
          font-size: 24px;
        }
      `;

      const Button = styled.div`
        width: 180px;
        height: 40px; 
        margin: 0 auto;
        font-family: 'Montserrat', sans-serif;
        font-weight: 600;
        font-size: 12px;
        text-transform: uppercase;
        text-align: center;
        display: flex; 
        flex-direction: column;
        justify-content: center; 
        border: rgba(255,200,0,.75) solid 2.5px;
        border-radius: 180px;
        cursor: pointer;
        transition: .5s;

        &:hover {
          background-color: rgba(255,200,0,.75);
        }
      `;
    
  const SideB = styled.div`
    // background: blue;
    height: calc(100% - 120px);
    box-sizing: border-box; 
    width: 100%;
    display: flex;
    justify-content: flex-end;
    @media (max-width: 1200px) {
      flex-direction: column;
      justify-content: center;
      height: calc(100% - 99px);
    }
    @media (max-width: 992px) {
      height: calc(100% - 79px);
      padding-bottom: 8px;
    }
    @media (max-width: 768px) {
      height: calc(100% - 59px);
    }
    @media (max-width: 576px) {
      height: calc(100% - 50px);
    }
  `;

    const Text = styled.div`
      // background: orange;
      padding-right: 7px;
      width: 50%;
      font-family: 'Montserrat', sans-serif;
      font-size: 14px; 
      font-weight: 600;
      color: white; 
      overflow-y: hidden;
      display: flex; 
      flex-direction: column;
      justify-content: center;

      & a {
        color: rgb(255,200,0);
      }
      @media (max-width: 1200px) {
        margin: 0 auto;
        width: 768px;
        height: 260px;
        justify-content: flex-start;
      }
      @media (max-width: 992px) {
        width: 576px;
        height: 155px;
      }
      @media (max-width: 768px) {
        width: 480px;
        height: 185px;
      }
      @media (max-width: 576px) {
        width: 400px;
        height: 220px;
      }
    `;

  return (
    <Wrapper>
        <Overlay>
            <SideA>
              <Column>
                <Project>{`Project ${project}`}</Project>
                <Title>{title}</Title>
              </Column>
              <Column>
                <a href={href} target='_blank'> 
                  <Button>Visit Website</Button>
                </a>
              </Column>
            </SideA>
            <SideB>
              <Text>
                {project === 'One' && <Text1/>}
                {project === 'Two' && <Text2/>}
                {project === 'Three' && <Text3/>}
                {project === 'Four' && <Text4/>}
              </Text>
            </SideB>
        </Overlay>
    </Wrapper>
  )
}

export default Portfolio
