import React, {useState, useCallback} from 'react'
import styled from 'styled-components'
import Section from '../styles/Section.js'



const Wrapper = styled(Section)`
  background-color: rgba(240,240,240);
  display: flex;
  width: 100%;
  padding: 64px;
  margin-bottom: 0px;
  @media (max-width: 1200px) {
    padding: 32px; 
  }
  @media (max-width: 992px) {
    padding: 16px;
  }
`;


function About(){
  
      
    return (
    <Wrapper id='photography'>
  
    </Wrapper>
    )
}

export default About
