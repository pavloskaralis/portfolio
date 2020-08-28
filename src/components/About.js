import React from 'react'
import styled from 'styled-components'
import Section from '../styles/Section.js'
import about from '../images/about.png'
// import ga from '../images/ga.png'
import github from '../images/github.png'
import linkedin from '../images/linkedin.png'
import gmail from '../images/gmail.png'
import cv from '../images/cv.png'
import resume from '../images/PK_Resume.pdf'
import stackoverflow from '../images/stackoverflow.png'

const Wrapper = styled(Section)`
  background-color: rgba(240,240,240);
  display: flex;
  width: 100%;
  padding: 64px;
  @media (max-width: 1200px), (max-height: 732px) {
    padding: 32px; 
  }
  @media (max-width: 992px) {
    padding: 16px;
  }
`;

const SideA = styled.div`
  // background: blue;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

  const Title = styled.div`
    // background: red;
    cursor: default;
    letter-spacing: 4px;
    font-family: Helvetica;
    font-size: 14px;
    text-transform: uppercase;
    margin: 0 auto;
    width: 75%;
    max-width: 560px;
    min-width: 440px;
    display: flex;
    flex-direction: column;
    justify-content: center; 
    @media (max-width: 992px) {
      text-align: center;
    }
    @media (max-width: 499px) {
      min-width: 280px;
    }
  `;

  const Text = styled.div`
    // background: yellow;
    cursor: default;
    font-family: Helvetica;
    font-size: 14px;
    line-height: 20px;
    margin: 0 auto;
    width: 75%;
    max-width: 560px;
    min-width: 440px;
    display: flex;
    flex-direction: center;
    justify-content: center; 
    color: rgba(0,0,0,.5);
    @media (max-width: 992px) {
      text-align: center;
      max-width: 540px;
    }
    @media (max-width: 499px) {
      min-width: 280px;
      font-size: 10px;
    }
  `;

  const IconWrap = styled.div`
    // background: orange;
    display: flex;
    margin: 0 auto;
    // height: 100px;
  `;

    const Icon = styled.div`
      margin: 5px 8px;
      cursor: pointer;
      width: 40px;
      height: 40px;
      transition: .5s;
      background-position: center;
      background-size: cover;
      background-image: url(${props => props.image});

      @media(max-width: 499px) {
        width: 30px;
        height: 30px;
      }
      
      &:hover {
        width: 50px;
        height: 50px;
        margin: 0px 8px;

        @media(max-width: 499px) {
          width: 40px;
          height: 40px;
        }
      }

    
    `;

const SideB = styled.div`
  background-image: url(${about});
  margin-right: auto;
  margin-left: 64px;
  min-width: 499px;
  max-height: 756px;
  background-size: cover;
  background-position: top;
  @media (max-width: 1200px), (max-height: 732px) {
    min-width: 342px;
    height: 512px;
  }
  @media (max-width: 992px) {
    display: none;
  }
`;

function About(){

  return (
    <Wrapper id='About'>
      <SideA>
        <Title>About</Title>
        <Text>
        As a frontend developer, I’ve devoted a lot of time toward mastering the React framework and have implemented even its more obscure features many times over. Summarily, I’m practiced in building functional and class components, writing unit tests, implementing state containers, and styling with libraries. My knowledge does not end with React, however, since I’ve also built SPAs using Angular and Vue. I believe that learning these other frameworks has equipped me with a comparative understanding of React’s strengths. When it comes to backend, I’m equally confident in my ability to configure REST oriented APIs, and have done so using 6 different frameworks: Express, Firebase, Rails, Laravel, Django, and Spring Boot. I’ve integrated these applications with both noSQL and SQL databases, user authentication, and occasionally web sockets. In parallel with this freelance work, I continue to develop my online image editor: Appstractor, and promote its steady user growth. 
        </Text>
        <IconWrap>
          <a target="_blank" href={resume} rel="noopener noreferrer" download='PK_Resume.pdf' >
            <Icon image={cv}/>
          </a>
          {/* <a target="_blank" rel="noopener noreferrer" href='https://profiles.generalassemb.ly/pavlos-karalis'>
            <Icon image={ga}/>
          </a> */}
            <a target="_blank" rel="noopener noreferrer" href='https://www.linkedin.com/in/pavlos-karalis/'>
            <Icon image={linkedin}/>
          </a>
          <a target="_blank" rel="noopener noreferrer" href='https://stackoverflow.com/users/12364678/pavlos-karalis?tab=profile'>
            <Icon image={stackoverflow}/>
          </a>
          <a target="_blank" rel="noopener noreferrer" href='https://github.com/pavloskaralis'>
            <Icon image={github}/>
          </a>
        
         
          <a target="_blank" rel="noopener noreferrer" href='mailto:pavloskaralis@gmail.com'>
            <Icon image={gmail}/>
          </a>
        </IconWrap>
      </SideA>
 
      <SideB/>
     
    </Wrapper>
  )
}

export default About
