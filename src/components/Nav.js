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
    top: 0;
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
    transition: background-color .5s, box-shadow .5s;
    animation: ${fade}  2s linear;
    animation-delay: 1s;
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
    useEffect( () => {

        const onresize = () => {
            if ((navTop === false && window.innerWidth < 1200) || (navTop === true && window.innerWidth > 1200)) {
                toggleNavTop(!navTop);
                console.log(navTop)
            }
        }

        const onscroll = () => {
            if ((navBG === false && window.scrollY > 0) || (navBG === true && window.scrollY < 1)) {
                toggleNavBG(!navBG);
                console.log(navBG)
            }
        }

        window.addEventListener('resize',onresize);
        window.addEventListener('scroll', onscroll)
    }, [navBG,navTop])
    

    return (
        <Wrapper 
            background={ window.scrollY > 0 ? '25,70,85,.95' : '0,0,0,0' } 
            shadow={ window.scrollY > 0 ? '0 5px 10px 0 rgba(0,0,0,.25)' : 'none' }
            top={ window.innerWidth > 1200 & window.scrollY < 1 ? '16px' : '0'}
        >
            <Title href='/'><div>Pavlos<span>Karalis</span></div></Title>
            <LinkWrap>
            <Link activeClass="active" to="about" spy={true} smooth={true} offset={-100}duration= {500}>
                About
            </Link>
            <Link activeClass="active" to="portfolio" spy={true} smooth={true} offset={-100}duration= {1000}>
                Portfolio
            </Link>
            <Link activeClass="active" to="technologies" spy={true} smooth={true} offset={-100}duration= {500}>
                Technologies
            </Link>
            </LinkWrap>
        </Wrapper>
    )
}

export default Cover
