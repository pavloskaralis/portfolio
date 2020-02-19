import React from 'react'
import styled, {keyframes} from 'styled-components'
import Section from '../styles/Section.js'

const Wrapper = styled.nav`
    background-color: ${props => `rgba(${props.background})`};
    position: ${props => props.position};
    top: 0;
    box-sizing: border-box;
    width: calc(100vw - 32px);
    min-height: 100px;
    margin: 0 auto;
    padding: 32px;
    display: flex;
    justify-content: space-between;
    @media (max-width: 1200px) {
        max-width:100%;
    }
`;

const Title = styled.a`
    letter-spacing: 4px;
    font-weight: 600;
    font-size: 20px;
    text-transform: uppercase;
    font-family: Helvetica;
    min-height: 100%;
    align-content: center;
    display: flex;
    flex-direction: column;
    justify-content: center; 
    text-decoration-line: none;
    color: white; 
    & span {
        color: rgba(255,200,0,1);
    }
  
`;

const LinkWrap = styled.div`
    display: flex;
    justify-content: space-between;
    background: red;
    & a {
        display: flex;
        flex-direction: column; 
        justify-content: center;
        color: white;
        font-family: Helvetica; 
        text-decoration-line: none;
    }
`;


function Cover({type}){



  return (
    <Wrapper position={type==='cover' ? 'absolute' : 'fixed'} background={type==='cover' ? '0,0,0,0' : '50,120,160'}>
        <Title href='/'><div>Pavlos<span>Karalis</span></div></Title>
        <LinkWrap>
            <a>About</a>
            <a>Portfolio</a>
            <a>Technologies</a>
        </LinkWrap>
    </Wrapper>
  )
}

export default Cover
