import React from 'react'
import styled from 'styled-components'
import Section from '../styles/Section.js'
import about from '../images/about.png'
import ga from '../images/ga.png'
import github from '../images/github.png'
import linkedin from '../images/linkedin.png'
import gmail from '../images/gmail.png'

function About({}){

  const About = styled(Section)`
    background-color: rgba(240,240,240);
    display: flex;
    width: 100%;
    padding: 64px;
    @media (max-width: 1200px) {
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
      font-family: 'Merriweather', serif;
      font-size: 14px;
      font-weight: 600;
      text-transform: uppercase;
      margin: 0 auto;
      width: 75%;
      min-width: 440px;
      display: flex;
      flex-direction: column;
      justify-content: center; 
      @media (max-width: 992px) {
        text-align: center;
      }
    `;

    const Text = styled.div`
      // background: yellow;
      font-family: 'Montserrat', sans-serif;
      font-size: 14px;
      font-weight: 600;
      margin: 0 auto;
      width: 75%;
      min-width: 440px;
      display: flex;
      flex-direction: center;
      justify-content: center; 
      color: rgba(0,0,0,.6);
      @media (max-width: 992px) {
        text-align: center;
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
        width: 50px;
        height: 50px;
        transition: .5s;
        background-position: center;
        background-size: cover;
        background-image: url(${props => props.image});

        &:hover {
          width: 60px;
          height: 60px;
          margin: 0px 8px;
        }
      `;

  const SideB = styled.div`
    background-image: url(${about});
    margin-right: auto;
    margin-left: 64px;
    min-width: 468px;
    height: 699px;
    background-size: cover;
    background-position: top;
    @media (max-width: 1200px) {
      margin-left: 32px;
    }
    @media (max-width: 992px) {
      margin-left: 0px;
    }    


    @media (max-width: 1200px) {
      min-width: 342px;
      height: 512px;
    }
    @media (max-width: 992px) {
      display: none;
    }
  `;

  return (
    <About>
      <SideA>
        <Title>About</Title>
        <Text>
          As a recent graduate of General Assembly’s full stack bootcamp, I am eagerly searching for my first web developer role. At GA, I have established  a foundation that will allow me to build quality software and effectively continue to grow my skills. The program has also given me a hands-on introduction to many different building blocks of modern web applications, and allowed me to explore beyond the course material through open-ended projects.
          <br/><br/>
          For the past 7 years, I have been employed  as a photographer across a number of different work arrangements. This has included  freelance assignments, managing my own business profile, being contracted as a representative for other studios, and working  full time at RedFin. These experiences have taught me to work effectively with clients as well as team members, and to manage my time across several projects in order to quickly deliver a polished product.
        </Text>
        <IconWrap>
          <a target="_blank" href='https://profiles.generalassemb.ly/pavlos-karalis'>
            <Icon image={ga}/>
          </a>
          <a target="_blank" href='https://github.com/pavloskaralis'>
            <Icon image={github}/>
          </a>
          <a target="_blank" href='https://www.linkedin.com/in/pavlos-karalis/'>
            <Icon image={linkedin}/>
          </a>
          <a target="_blank" href='mailto:pavloskaralis@gmail.com'>
            <Icon image={gmail}/>
          </a>
        </IconWrap>
      </SideA>
 
      <SideB/>
     
    </About>
  )
}

export default About
