import React from 'react'
import styled from 'styled-components'
import Section from '../styles/Section.js'
import Text1 from '../texts/Text1.js'
import Text2 from '../texts/Text2.js'
import Text3 from '../texts/Text3.js'
import Text4 from '../texts/Text4.js'
import Fade from 'react-reveal/Fade';


const Wrapper = styled(Section)`
  background-image: url(${props => props.backgroundImage});
  background-size: cover;
  background-position: center;
`;

const Overlay = styled(Section)`
  background-image: radial-gradient(
    circle, 
    rgba(25,25,25,.7),
    rgba(25,25,25,.85)
  );
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column-reverse;
  // justify-content: space-evenly; 
  padding: 64px;
  box-sizing: border-box;
  @media (max-width: 1200px), (max-height: 732px) {
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
      cursor: default;
      font-family: Helvetica;
      font-size: 14px;
      width: 100%;
      text-transform: uppercase;
      height: 100%;
    `;

    const Title = styled(Column)`
      // background: yellow;
      cursor: default;
      font-family: Palatino;
      text-transform: uppercase;
      font-size: 80px;
      font-weight: 600;
      width: 100%;
      @media (max-width: 1200px), (max-height: 732px) {
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
      font-family: Helvetica;
      font-weight: 600;
      font-size: 12px;
      text-transform: uppercase;
      text-align: center;
      display: flex; 
      flex-direction: column;
      justify-content: center; 
      border: rgba(255,200,0) solid 2.5px;
      border-radius: 180px;
      cursor: pointer;
      transition: .5s;
      margin-bottom: 4px;
      &:hover {
        background-color: rgba(255,200,0,.85);
      }
      @media (max-width: 499px) {
        font-size: 10px;
        width: 140px;
        height: 30px; 
      }
    `;
  
const SideB = styled.div`
      // background: blue; 
  height: calc(100% - 120px);
  box-sizing: border-box; 
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;

  @media (max-width: 1200px), (max-height: 799px) {
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
    width: 50%;
    font-family: Helvetica;
    font-size: 14px; 
    line-height: 22px;
    color: white; 
    overflow-y: hidden;
    display: flex; 
    flex-direction: column;
    justify-content: center;
    cursor: default;
    min-width: 570px; 
    & span {
      max-height: 100%;
    }
    & a {
      color: rgb(255,200,0);
    }
    @media  (max-height: 799px) {
      // margin:  auto 0;
      width: 600px;
      height:  335px;
    }
    @media (max-width: 1200px) {
      min-width:0;
      margin: 0 auto;
      width: 768px;
      height: 267px;
      justify-content: flex-start;
    }
   
    @media (max-width: 992px) {
      width: 576px;
      height: 155px;
    }
    @media (max-width: 768px) {
      width: 480px;
      height: 195px;
    }
    @media (max-width: 576px) {
      width: 400px;
      height: 220px;
    }
    @media (max-width: 499px) {
      font-size: 10px;
    }
  `;

  const InnerWrap = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
  `;

function Portfolio({backgroundImage, project, title, href, id}){
  

  return (
    <Wrapper backgroundImage={backgroundImage} id={id || ''}>
        <Overlay>
            <SideA>
              <Column>
                <Fade>
                  <Project>{`Project ${project}`}</Project>
                  <Title>{title}</Title>
                </Fade>
              </Column>
              <Column>
                <Fade>
                  <a href={href} rel="noopener noreferrer" target='_blank'> 
                    <Button>Visit Website</Button>
                  </a>
                </Fade>
              </Column>
            </SideA>
              <SideB>
                <Fade>
                  <InnerWrap>
                    <Text>
                      {project === '1' && <Text1/>}
                      {project === '2' && <Text2/>}
                      {project === '3' && <Text3/>}
                      {project === '4' && <Text4/>}
                    </Text>
                  </InnerWrap>
                </Fade>
              </SideB>
        </Overlay>
    </Wrapper>
  )
}

export default Portfolio
