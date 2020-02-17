import React from 'react'
import styled from 'styled-components'
import Section from '../styles/Section.js'

function Portfolio({backgroundImage, project, title}){
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
      background: green;
      color: white; 
      width: 50%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      @media (max-width: 992px) {
      
      }
    `;

      const Project = styled(Column)`
        background: red;
        font-family: 'Montserrat', sans-serif;
        font-size: 16px;
        font-weight: 600;
        width: 100%;
        max-height: 16px;
        margin-bottom: 16px;
        @media (max-width: 1200px) {
          margin-bottom: 8px;
        }
        @media (max-width: 992px) {
          margin-bottom: 0;
        }
      `;

      const Title = styled(Column)`
        background: yellow;
        font-family: 'Merriweather', serif;
        text-transform: uppercase;
        font-size: 80px;
        font-weight: 600;
        max-height: 64px;
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
        background: pink;
        width: 180px;
        height: 40px; 
        margin: 0 auto;
        @media (max-width: 992px) {
        }
      `;
    

  const SideB = styled.div`
    background: blue;
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: flex-end;
    @media (max-width: 992px) {
    }
  `;

    const Text = styled.div`
      background: orange;
      font-family: 'EB Garamond', serif;
      color: white; 
      width: 50%;
      height: 100%;
      @media (max-width: 992px) {
        width: 100%;
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
                <Button></Button>
              </Column>
            </SideA>
            <SideB>
              <Text></Text>
            </SideB>
        </Overlay>
    </Wrapper>
  )
}

export default Portfolio
