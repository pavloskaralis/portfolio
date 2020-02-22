import React, { useEffect, useState } from 'react'
import styled, {keyframes} from 'styled-components'

const fade = keyframes`
  0% { opacity: 0; }
  100% { opacity: 1; }
`;

const Wrapper = styled.nav`
    background-color: rgb(0,0,0,0);
    position: fixed;
    box-sizing: border-box;
    width: calc(100vw - 32px);
    min-height: 100px;
    margin: 0 auto;
    padding: 32px;
    display: flex;
    opacity: 0;
    top: 16px;
    justify-content: space-between;
    transition: background-color .5s, box-shadow .5s;
    animation: ${fade}  2s linear;
    animation-delay: 1.2s;
    animation-fill-mode: forwards;
    z-index: 2;
    @media (max-width: 1200px) {
        background-color: ${props => `rgba(${props.background})`};
        box-shadow: ${props => props.shadow};
        width: calc(100vw - 14.5px);
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
    transition: color .5s;
    color: ${props => props.color}; 
    & span {
        color: rgba(255,200,0,1);
    }
    @media (max-width: 1200px) {
        color: white; 
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
        color: ${props => props.color}; 
        font-family: Helvetica;
        font-size: 14px;
        margin: 0 12px;
        text-decoration-line: none;
        transition: .5s;
        transition: color .5s;
        // text-transform: uppercase;
        cursor: pointer; 
        &:hover {
            color: rgb(255,200,0);
        }
        @media (max-width: 1200px) {
            color: white; 
        }
    }
    @media (max-width: 768px) {
        max-width: 312px;
        margin: 0 auto;
        // background: blue;
    }  
`;


function Cover(){
    const[navBG, toggleNavBG] = useState(false);
    const[scrollPos, updatedScrollPos] = useState(0)

    useEffect( () => {
        function throttle(fn, wait) {
            var time = Date.now();
            return function() {
              if ((time + wait - Date.now()) < 0) {
                fn();
                time = Date.now();
              }
            }
        }

        const container = document.getElementById('container');

        const onscroll = () => {
            if ((navBG === false && container.scrollTop > 0) || (navBG === true && container.scrollTop < 1)) {
                toggleNavBG(!navBG);
                updatedScrollPos(container.scrollTop);
                console.log('changed')
            }
        }
        // container.addEventListener('scroll', throttle(onscroll, 250))
    }, [navBG])
    

    return (
        <Wrapper 
            background={ scrollPos > 0 ? '25,70,85,.85' : '0,0,0,0' } 
            shadow={ scrollPos > 0 ? '0 5px 10px 0 rgba(0,0,0,.25)' : 'none' }
        >
            <Title href='/' color={ (scrollPos >= 836 && scrollPos <= 1672) || scrollPos >= 5000 ? 'black' : 'white' }><div>Pavlos<span>Karalis</span></div></Title>
            <LinkWrap color={ (scrollPos >= 836 && scrollPos <= 1672) || scrollPos >= 5000 ? 'black' : 'white' }>
                <a href='/#about'>About</a>
                <a href='/#portfolio'>Portfolio</a>
                <a href='/#technologies'>Technologies</a>
                {/* <a href='/#photography'>Photography</a> */}
            </LinkWrap>
        </Wrapper>
    )
}

export default Cover
