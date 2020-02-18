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

function Technologies({}){

  const Technologies = styled(Section)`
    background-color: rgba(240,240,240);
    width: 100%;
    max-height: 100%;
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
  display: flex;
  flex-direction: column;
  justify-content: center; 
`;

  const IconWrap = styled.div`
    background-color: rgba(0,0,0,.2);
    height: 621px;
    width: 932px;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap; 
    box-sizing: border-box;
    margin: 0 auto;
    @media (max-width: 1200px) {
      height: 466px;
      width: 699px;
    }
    @media (max-width: 992px) {
      height: 404px;
      width: 606px;
    }
    @media (max-width: 768px) {
      height: 340px;
      width: 510px;
    }
    @media (max-width: 576px) {
      height: 240px;
      width: 360px;
    }
  `;

  const Overlay = styled.div`
    border: 2px solid rgb(240,240,240);
    position: absolute;
    height: 621px;
    width: 932px;
    box-sizing: border-box;
    pointer-events:
    @media (max-width: 1200px) {
      height: 466px;
      width: 699px;
    }
    @media (max-width: 992px) {
      height: 404px;
      width: 606px;
    }
    @media (max-width: 768px) {
      height: 340px;
      width: 510px;
    }
    @media (max-width: 576px) {
      height: 240px;
      width: 360px;
    }
  `;

  const Icon = styled.div`
    background-image: url(${props => props.image});
    background-position: center;
    background-size: 70%; 
    background-repeat: no-repeat;
    width: calc(20%);
    background-color: rgb(240,240,240);
    box-sizing: border-box; 
    border: 1px rgba(0,0,0,.1) solid;
    transition: .5s;
    cursor: pointer;

    &:hover {
      background-size: 80%;
    }
  `;

  return (
    <Technologies>
      <Title>Technologies</Title>
      <IconWrap>
        <Overlay/>
        <Icon image={react}/>
        <Icon image={redux}/>
        <Icon image={style}/>
        <Icon image={express}/>
        <Icon image={rails}/>

        <Icon image={jquery}/>
        <Icon image={sass}/>
        <Icon image={axios}/>
        <Icon image={mongodb}/>
        <Icon image={postgresql}/>


        <Icon image={photoshop}/>
        <Icon image={bootstrap}/>
        <Icon image={chart}/>
        <Icon image={passport}/>
        <Icon image={bcrypt}/>

      </IconWrap>
    </Technologies>
  )
}

export default Technologies
