import React, { useEffect, useState } from 'react'
import styled, {keyframes} from 'styled-components'
import { Link } from "react-scroll";


const fade = keyframes`
  0% { opacity: 0; }
  100% { opacity: 1; }
`;

const Wrapper = styled.nav`
    background-color: ${props => `rgba(${props.background})`};
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
    justify-content: space-between;
    transition: background-color .5s;
    animation: ${fade}  2s linear;
    animation-delay: 1s;
    animation-fill-mode: forwards;
    z-index: 1;
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

    const[scrollHeight, updateScrollHeight] = useState(window.scrollY);
    useEffect( () => {

        const onscroll = () => {
            if (scrollHeight > window.scrollY + 50 || scrollHeight < window.scrollY - 50 ){
                updateScrollHeight({scrollHeight: window.scrollY})
            }
        }
        window.addEventListener('scroll', onscroll)
        // console.log(scrollHeight > window.scrollY + 100 || scrollHeight < window.scrollY - 100 )
    }, [scrollHeight])
    

    return (
        <Wrapper background={ window.scrollY > 250 ? '25,70,85,.95' : '0,0,0,0' } >
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
