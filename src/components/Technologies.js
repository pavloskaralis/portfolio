import React from 'react'
import styled from 'styled-components'
import Section from '../styles/Section.js'
import react from '../images/react.png'
import redux from '../images/redux.png'
import postgresql from '../images/postgresql.png'
import mongodb from '../images/mongodb.png'
import axios from '../images/axios.png'
import passport from '../images/passport.png'
import jquery from '../images/jquery.png'
import rails from '../images/rails.png'
import bcrypt from '../images/bcrypt.png'
import express from '../images/express.png'
import style from '../images/styled.png'
import photoshop from '../images/photoshop.png'
import sass from '../images/sass.png'
import bootstrap from '../images/bootstrap.png'
import chart from '../images/chart.png'

const Wrapper = styled(Section)`
  background-color: rgba(240,240,240);
  width: 100%;
  max-height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 64px;
  @media (max-width: 1200px), (max-height: 732px) {
    justify-content: space-between;
    padding: 32px; 
  }
  @media (max-width: 576px) {
    padding: 16px; 
    justify-content: space-evenly; 
  }
  @media (max-width: 499px) {
    padding: 4px;
  }
`;

const Title = styled.div`
  // background: red;
  cursor: default;
  letter-spacing: 4px;
  font-family: Helvetica;
  font-size: 14px;
  max-height: 100%;
  text-transform: uppercase;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const IconWrap = styled.div`
  background-color: rgba(0,0,0,.2);
  min-height: 594px;
  width: 891px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap; 
  box-sizing: border-box;
  margin: 0 auto;
  @media (max-width: 1200px), (max-height: 732px) {
    min-height: 466px;
    width: 699px;
  }
  @media (max-width: 992px) {
    min-height: 356px;
    width: 534px;
  }
 
  @media (max-width: 576px) {
    min-height: 240px;
    width: 360px;
  }
  @media (max-width: 499px) {
    min-height: 200px;
    width: 300px;
  }
`;

const Overlay = styled.div`
  border: 2px solid rgb(240,240,240);
  position: absolute;
  min-height: 594px;
  width: 891px;
  box-sizing: border-box;
  pointer-events: none;
  @media (max-width: 1200px), (max-height: 732px) {
    min-height: 466px;
    width: 699px;
  }
  @media (max-width: 992px) {
    min-height: 356px;
    width: 534px;
  }

  @media (max-width: 576px) {
    min-height: 240px;
    width: 360px;
  }
  @media (max-width: 499px) {
    min-height: 200px;
    width: 300px;
  }
`;

const Icon = styled.a`
  background-image: url(${props => props.image});
  background-position: center;
  background-size: 65%; 
  background-repeat: no-repeat;
  width: calc(20%);
  background-color: rgb(240,240,240);
  box-sizing: border-box; 
  border: .5px rgba(0,0,0,.1) solid;
  transition: .5s;
  cursor: pointer;

  &:hover {
    background-size: 80%;
  }


`;

function Technologies(){

 

  return (
    <Wrapper id='technologies'>
      <Title>Technologies</Title>
      <IconWrap>
        <Overlay/>
        <Icon rel="noopener noreferrer" href="https://reactjs.org/" target="__blank" image={react}/>
        <Icon rel="noopener noreferrer" href="https://redux.js.org/" target="__blank" image={redux}/>
        <Icon rel="noopener noreferrer" href="https://styled-components.com/" target="__blank" image={style}/>
        <Icon rel="noopener noreferrer" href="https://expressjs.com/" target="__blank" image={express}/>
        <Icon rel="noopener noreferrer" href="https://rubyonrails.org/" target="__blank" image={rails}/>

        <Icon rel="noopener noreferrer" href="https://jquery.com/" target="__blank" image={jquery}/>
        <Icon rel="noopener noreferrer" href="https://sass-lang.com/" target="__blank" image={sass}/>
        <Icon rel="noopener noreferrer" href="https://www.axios.com/" target="__blank" image={axios}/>
        <Icon rel="noopener noreferrer" href="https://www.mongodb.com/" target="__blank" image={mongodb}/>
        <Icon rel="noopener noreferrer" href="https://www.postgresql.org/" target="__blank" image={postgresql}/>


        <Icon rel="noopener noreferrer" href="https://www.adobe.com/products/photoshopfamily.html" target="__blank" image={photoshop}/>
        <Icon rel="noopener noreferrer" href="https://getbootstrap.com/" target="__blank" image={bootstrap}/>
        <Icon rel="noopener noreferrer" href="https://www.chartjs.org/" target="__blank" image={chart}/>
        <Icon rel="noopener noreferrer" href="http://www.passportjs.org/" target="__blank" image={passport}/>
        <Icon rel="noopener noreferrer" href="https://www.npmjs.com/package/bcrypt" target="__blank" image={bcrypt}/>

      </IconWrap>
    </Wrapper>
  )
}

export default Technologies
