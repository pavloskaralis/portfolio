import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import photos from '../photos.js'
import Section from '../styles/Section.js'



const Wrapper = styled(Section)`
  background-color: rgba(240,240,240);
  display: flex;
  animation-delay: 2s; 
  transition: background-image 0s;
  transition-delay: .2s; 
  background-image: ${props => `url(${props.image})`};
  background-size: cover;
  background-position: center; 
  width: 100%;
  @media (max-width: 1200px) {
    margin-bottom: 0;
  }
`;

const ButtonContainer = styled.div`
  height: 100%;
  width: 50%;
  padding: 64px;
  box-sizing: border-box; 
  font-family: Palatino;
  color: rgba(0,0,0,0); 
  text-align: ${props => props.align};
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 160px;
  cursor: pointer;
  -webkit-text-stroke: 2.5px white;

  &:hover {
    color: white; 
  }
  @media (max-width: 1200px) {
    padding: 32px; 
  }
  @media (max-width: 992px) {
    padding: 16px;
  }
`;

const Text = styled.div`
  cursor: default;
  letter-spacing: 4px;
  font-family: Helvetica;
  font-size: 14px;
  text-transform: uppercase;
  max-width: 560px;
  min-width: 440px;
  color: white; 
  display: flex;
  font-weight: 600;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  position: absolute; 
  bottom: 64px;
  min-width: 100%; 
  @media (max-width: 1200px) {
    bottom: 32px; 
  }
  @media (max-width: 992px) {
    bottom: 16px;
  }
`;


function About(){
  
    const[index, setIndex] = useState(0);

    const toggleIndex = (num) => {
      let newIndex = index + num; 
      if(newIndex === 15) newIndex = 0; 
      if(newIndex === -1) newIndex = 14; 
      setIndex(newIndex);
    }

    const handleKeyDown = e => {
      console.log('works')
      console.log(e.keyCode)
      if (e.keyCode === 37) toggleIndex(-1);
      if (e.keyCode === 39) toggleIndex(1);
    }

    // useEffect(() => {document.addEventListener("keydown", handleKeyDown)},[index])

    return (
    <Wrapper image={photos[index]}>
      <ButtonContainer onClick={()=> toggleIndex(-1)}>
        &#8249;
      </ButtonContainer>
      <ButtonContainer align='right' onClick={()=> toggleIndex(1)}>
        &#8250;
      </ButtonContainer>
      <Text>{`${index + 1}/15`}</Text>
    </Wrapper>
    )
}

export default About
