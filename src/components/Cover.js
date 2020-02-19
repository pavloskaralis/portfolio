import React, {useEffect, useState} from 'react'
import styled, {keyframes} from 'styled-components'
import Section from '../styles/Section.js'
import cover from '../images/cover.jpg'
import Canvas from './Canvas.js'
import Nav from './Nav.js'


const fade = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const Wrapper = styled(Section)`
  background-image: url(${cover});
  background-size: cover; 
  background-position: center; 
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
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

const FullStack = styled.div`
    font-family: Palatino;
    text-transform: uppercase;
    font-size: 80px;
    font-weight: 600;
    max-width: 100%;
    text-align: right;
    z-index: 1;
    height: 76px;
    color: white;
    opacity: 0;
    animation: ${fade} 1.5s linear;
    animation-delay: 5.5s;
    animation-fill-mode: forwards;
    padding: 32px;
    @media (max-width: 1200px) {
      height: 64px;
      font-size: 64px;
    }
    @media (max-width: 992px) {
      height: 44px;
      font-size: 48px;
    }
    @media (max-width: 768px) {
      height: 28px;
      font-size: 32px;
      text-align: center;
    }
    @media (max-width: 576px) {
      height: 20px;
      font-size: 24px;
    }
`;

const spin = keyframes`
  0% { opacity: 1; transform: rotate(0deg); }
  100% { opacity: 1; transform: rotate(360deg); }
`;

const Loader = styled.div`
  border: 5px solid rgba(50,120,160,1);
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
  position: absolute;
  margin: 0 auto;
  top: 0;
  width: calc(100% - 32px);
  height: 100%;
  @media (max-width: 1200px) {
    width: 100%;
  }
  // background: red;
`;

function Cover(){

  const [delay, updateDelay] = useState(false);

  useEffect(()=> {
    setTimeout(()=>updateDelay(true), 100);
  },[delay])
 

  return (
    <Wrapper>
      {delay && <Canvas/>}
      <Overlay/>
      <LoaderWrap>
        <Loader/>
      </LoaderWrap>
      <Nav type='cover'/>
      <FullStack>Full-Stack Developer</FullStack>
    </Wrapper>
  )
}

export default Cover
