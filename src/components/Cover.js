import React from 'react'
import styled from 'styled-components'
import Section from '../styles/Section.js'

function Cover({}){

  const Cover = styled(Section)`
    background-image: linear-gradient(
      to bottom, 
      rgba(0,35,90,1) 0%, 
      rgba(50,120,160,1) 50%, 
      rgba(255,200,0,1) 100%
    );
  `;

  return (
    <Cover>
       
    </Cover>
  )
}

export default Cover
