import React, {useEffect, useState} from 'react'
import styled, {keyframes} from 'styled-components'
import Section from '../styles/Section.js'
import cover from '../images/cover.jpg'
import Canvas from './Canvas.js'


const Wrapper = styled(Section)`
  background-image: linear-gradient(
    to bottom, 
    rgba(0,35,90,1) 0%, 
    rgba(50,120,160,1) 50%, 
    rgba(255,200,0,1) 100%
  );
`;

const Overlay = styled(Section)`
  background-image: linear-gradient(
    to bottom, 
    rgba(0,35,90,1) 0%, 
    rgba(50,120,160,.5) 50%, 
    rgba(255,200,0,1) 100%
  );
  width: calc(100% - 32px);
  position: absolute; 
  filter: saturate(120%);
  pointer-events: none;
  @media (max-width: 1200px){
    width: 100%;
  }
`;


const Image = styled(Overlay)`
  background-image: url(${cover});
  background-size: cover; 
  background-position: center; 
`;

const spin = keyframes`
  0% { opacity: .75; transform: rotate(0deg); }
  100% { opacity: .75; transform: rotate(360deg); }
`;

const Loader = styled.div`
  border: 5px solid black;
  border-top: 5px solid white;
  margin: 0 auto;
  border-radius: 50%;
  width: 35px;
  height: 35px;
  animation: ${spin} 2s linear;
  animation-iteration-count: 2;
  opacity: 0;
`;

const LoaderWrap = styled(Section)`
  display: flex;  
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100%;
  background: red;
`;

function Cover(){

  const [delay, updateDelay] = useState(false);

  useEffect(()=> {
    setTimeout(()=>updateDelay(true), 100);
  },[delay])
 

  return (
    <Wrapper>
      <Image/>
      {delay && <Canvas/>}
      <Overlay/>
      <LoaderWrap>
        <Loader/>
      </LoaderWrap>
    </Wrapper>
  )
}

export default Cover
