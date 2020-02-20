import React, { useEffect, useState } from 'react'
import styled, {keyframes} from 'styled-components'
import { Link } from "react-scroll";


const fade = keyframes`
  0% { opacity: 0; }
  100% { opacity: 1; }
`;

const Wrapper = styled.nav`
    background-color: ${props => `rgba(${props.background})`};
    box-shadow: ${props => props.shadow};
    position: fixed;
    box-sizing: border-box;
    width: calc(100vw - 32px);
    height: 100px;
    min-height: 100px;
    margin: 0 auto;
    padding: 32px;
    display: flex;
    opacity: 0;
    top: ${props => props.top};
    justify-content: space-between;
    transition: background-color .5s, box-shadow .5s, top .25s;
    animation: ${fade}  2s linear;
    animation-delay: 1.2s;
    animation-fill-mode: forwards;
    z-index: 2;
    @media (max-width: 1200px) {
        width:100%;
        top: 0;
    }
    @media (max-width: 768px) {
        flex-direction: column;
        min-height: 125px;
    }
`;

const Title = styled.a`
    // background: red;
    letter-spacing: 4px;
    font-weight: 600;
    font-size: 22px;
    text-transform: uppercase;
    font-family: Helvetica;
    align-content: center;
    display: flex;
    flex-direction: column;
    justify-content: center; 
    text-decoration-line: none;
    color: white; 
    & span {
        color: rgba(255,200,0,1);
    }
    @media (max-width: 768px) {
        margin: 0 auto;
    }  
`;

const LinkWrap = styled.div`
    display: flex;
    justify-content: space-between;
    & a {
        display: flex;
        flex-direction: column; 
        justify-content: center;
        color: white;
        font-family: Helvetica;
        font-size: 14px;
        margin: 0 12px;
        text-decoration-line: none;
        transition: .5s;
        // text-transform: uppercase;
        cursor: pointer; 
        &:hover {
            color: rgb(255,200,0);
        }
    }
    @media (max-width: 768px) {
        max-width: 312px;
        margin: 0 auto;
        // background: blue;
    }  
`;


function Cover(){
    const[navTop, toggleNavTop] = useState(false);
    const[navBG, toggleNavBG] = useState(false);
    const[scrollPos, updatedScrollPos] = useState(0)

    useEffect( () => {
        
        const container = document.getElementById('container');

        const onresize = () => {
            if ((navTop === false && window.innerWidth < 1200) || (navTop === true && window.innerWidth > 1200)) {
                toggleNavTop(!navTop);
            }
        }

        const onscroll = () => {
            if ((navBG === false && container.scrollTop > 0) || (navBG === true && container.scrollTop < 1)) {
                toggleNavBG(!navBG);
                updatedScrollPos(container.scrollTop)
            }
        }
        window.addEventListener('resize',onresize);
        container.addEventListener('scroll', onscroll)
    }, [navBG,navTop])
    

    return (
        <Wrapper 
            background={ scrollPos > 0 ? '25,70,85,.9' : '0,0,0,0' } 
            shadow={ scrollPos > 0 ? '0 5px 10px 0 rgba(0,0,0,.25)' : 'none' }
            top={ window.innerWidth > 1200 & scrollPos < 1 ? '16px' : '0'}
        >
            <Title href='/'><div>Pavlos<span>Karalis</span></div></Title>
            <LinkWrap>
                <a href='/#about'>About</a>
                <a href='/#portfolio'>Portfolio</a>
                <a href='/#technologies'>Technologies</a>
            </LinkWrap>
        </Wrapper>
    )
}

export default Cover
