import React, {useEffect, useState} from 'react'
import styled, {keyframes} from 'styled-components'
import { connect } from 'react-redux'
import Section from '../styles/Section.js'
import cover from '../images/cover.jpg'
import Canvas from './Canvas.js'
import cover2 from '../images/cover2.jpg'
import icon4 from '../images/icon4.png';
import icon1 from '../images/icon1.png';
// import icon2 from '../images/icon2.png';
import icon3 from '../images/icon3.png';
import icon5 from '../images/icon5.png';
import icon6 from '../images/icon6.png';

const mapStateToProps = state => {
  return {
    status: state.status
  }
}

const fade = keyframes`
    from{opacity: 0}
    to{opacity: 1}
`

const Wrapper = styled(Section)`
  background-image: url(${cover});
  background-size: cover; 
  background-position: center; 
  background-color: rgba(50,120,160,1);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  @media not all and (min-resolution:.001dpcm)
  { @supports (-webkit-appearance:none) {
      background-image: url(${cover2}); 
  }}
`;

const Overlay = styled(Section)`
  background-image: linear-gradient(
    to bottom, 
    rgba(0,35,90,1) 0%, 
    rgba(50,120,160,.7) 50%, 
    rgba(255,200,0,1) 100%
  );
  min-width: calc(100% - 32px);
  position: absolute; 
  top: 0;
  filter: saturate(120%);
  pointer-events: none;
  @media (max-width: 1200px), (max-height: 732px) {
    width: 100%;
  }
  @media not all and (min-resolution:.001dpcm)
    { @supports (-webkit-appearance:none) {
        background-image: none; 
    }}
`;

const FullStack = styled.div`
    font-family: Palatino;
    font-size: 80px;
    font-weight: 600;
    max-width: 100%;
    box-sizing: border-box;
    text-align: right;
    z-index: ;
    color: white; 
    padding: 16px 32px;
    cursor: default;

    opacity: 0; 
    animation: ${fade};
    animation-timing-function: linear;
    animation-fill-mode: forwards; 
    animation-duration: .2s;
    animation-delay: 1.5s;

    @media (max-width: 1200px), (max-height: 732px) {
      font-size: 64px;
    }
    @media (max-width: 992px) {
      font-size: 48px;
    }
    @media (max-width: 768px) {
      font-size: 32px;
      text-align: center;
    }
    @media (max-width: 576px) {
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
  animation: ${spin} 2s linear infinite; 
`;

const LoaderWrap = styled(Section)`
  pointer-events: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: absolute;
  top: 0;
  margin: 0 auto;
  z-index: 1; 
  width: calc(100% - 32px);
  height: 100%;
  @media (max-width: 1200px), (max-height: 732px) {
    width: 100%;
  }
`;

const IconsWrap = styled(Section)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: absolute;
  top: 0;
  box-sizing: border-box; 

  // backdrop-filter: blur(.5px);
  // opacity: 0; 
  // animation: ${fade};
  // animation-timing-function: linear;
  // animation-fill-mode: forwards; 
  // animation-duration: .2s;

  @media (max-width: 768px) {
    padding-top: 32px;
  }
`;

const Icons = styled('div')`
  display: flex;
  // max-width: 500px;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly; 
  flex-wrap: wrap;
  position: relative; 
`;

const IconWrap = styled('a')`
  display: flex;
  flex-direction: column;
  cursor: pointer; 
  margin: 4px;
  text-decoration: none;
  color: white; 
  transition: .5s;
  opacity: 0;
  width: 80px;
  &:hover {
    color: rgb(255,200,0);
  }

  animation: ${fade};
  animation-timing-function: linear;
  animation-fill-mode: forwards; 
  animation-duration: .2s;
  animation-delay: ${props => props.delay};
`

const Icon = styled('div')`
  width: 60px;
  height: 60px; 
  transition: .5s;
  background-image: ${props => `url(${props.image})`};
  background-size: cover;
  background-repeat: no-repeat; 
  margin: 0 auto;
  box-shadow: 0 0 5px 0 rgba(0,0,0,.5);
`;
   
const IconText = styled('div')`
  font-family: Helvetica;
  padding-top: 8px;
  font-size: 14px;
  text-align: center;
  text-shadow: 0 0 5px rgba(0,0,0,.5);
`;

const projects = [
  {url: icon4, text: 'Appstractor', delay: '0s', href:'#Appstractor'}, 
  {url: icon1, text: 'Café Racers', delay: '.3s', href:'#CafeRacers'}, 
  // {url: icon2, text: 'Traveler', delay: '.25s', href:'#Traveler'}, 
  {url: icon6, text: 'Astral', delay: '.65s', href:'#Astral'},
  {url: icon3, text: 'Spell ✓ It', delay: '.9s', href:'#SpellCheckIt'}, 
  {url: icon5, text: 'Go Fish', delay: '1.2s', href:'#GoFish'}
];

let Cover = ({status}) => {

  const [delay, updateDelay] = useState(false);

  useEffect(()=> {
    setTimeout(()=>updateDelay(true), 100);
  },[delay])
 

  return (
    <Wrapper>
        {(navigator.userAgent.indexOf('Safari') !== -1 && navigator.userAgent.indexOf('Chrome') === -1) ?
          <>
            <Overlay/>
            <IconsWrap>
              <Icons>
                { projects.map((project, index) => {
                  return(
                    <IconWrap href={project.href} delay={project.delay} key={index}>
                      <Icon image={project.url}></Icon>
                      <IconText>{project.text}</IconText>
                    </IconWrap>
                  )
                })

                }
              </Icons>
            </IconsWrap>
                
            <FullStack>Fullstack Developer</FullStack>
          </> :
          <>
            {delay && <Canvas/>}
            {!status && 
              <LoaderWrap>
                <Loader/>
              </LoaderWrap>
            }
            <Overlay/>
            {status &&
              <IconsWrap>
                <Icons>
                  { projects.map((project, index) => {
                    return(
                      <IconWrap href={project.href} delay={project.delay} key={index}>
                        <Icon image={project.url}></Icon>
                        <IconText>{project.text}</IconText>
                      </IconWrap>
                    )
                  })

                  }
                </Icons>
              </IconsWrap>
            }
            {status && 
              <FullStack>Fullstack Developer</FullStack>        
            }
          </>
        }
      </Wrapper>
    )
}

Cover = connect(
  mapStateToProps,
  null
)(Cover)

export default Cover
