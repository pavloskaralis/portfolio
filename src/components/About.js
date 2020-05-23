import React from 'react'
import styled from 'styled-components'
import Section from '../styles/Section.js'
import about from '../images/about.png'
import ga from '../images/ga.png'
import github from '../images/github.png'
import linkedin from '../images/linkedin.png'
import gmail from '../images/gmail.png'
import cv from '../images/cv.png'
import resume from '../images/PK_Resume.pdf'

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

      &:hover {
        width: 50px;
        height: 50px;
        margin: 0px 8px;
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
        I’m a Full-Stack Developer capable of tackling a project from multiple-perspectives, and can dependably deliver tailored, maintainable results via a crafted approach. My General Assembly education has established a foundation that allows me to create quality software and effectively continue to grow my skills. To date, I have built several backends using Node.js, Java, PHP, Python and Ruby, along with frontends composed of React, Vue, Angular, and jQuery. 
          <br/><br/>
          For the past 8 years, I’ve also been employed as a photographer across a number of different work arrangements. This has included freelance assignments, managing my own business profile, being contracted as a representative for other studios, and working full time at RedFin. These experiences have taught me to work effectively with clients as well as team members, and to manage my time across several projects in order to quickly deliver a polished product.
        </Text>
        <IconWrap>
          <a target="_blank" href={resume} rel="noopener noreferrer" download='PK_Resume.pdf' >
            <Icon image={cv}/>
          </a>
          <a target="_blank" rel="noopener noreferrer" href='https://profiles.generalassemb.ly/pavlos-karalis'>
            <Icon image={ga}/>
          </a>
          <a target="_blank" rel="noopener noreferrer" href='https://github.com/pavloskaralis'>
            <Icon image={github}/>
          </a>
          <a target="_blank" rel="noopener noreferrer" href='https://www.linkedin.com/in/pavlos-karalis/'>
            <Icon image={linkedin}/>
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
