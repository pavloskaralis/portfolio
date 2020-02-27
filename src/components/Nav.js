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
    animation-delay: 1.3s;
    animation-fill-mode: forwards;
    z-index: 2;
    @media (max-width: 1200px), (max-height: 800px) {
        background-color: ${props => `rgba(${props.background})`};
        box-shadow: ${props => props.shadow};
        width: 100vw;
        top: 0;
    }
    @media (max-width: 768px) {
        flex-direction: column;
        min-height: 125px;
    }
    @media (max-width: 499px) {
        padding: 32px 8px;
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
    @media (max-width: 1200px), (max-height: 800px) {
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
        transition: color .5s;
        // text-transform: uppercase;
        cursor: pointer; 
        &:hover {
            color: rgb(255,200,0);
        }
        @media (max-width: 1200px), (max-height: 800px) {
            color: white; 
        }
        @media (max-width: 499px) {
            font-size: 14px;
            margin: 0 6px;
        }
    }
    @media (max-width: 768px) {
        max-width: 312px;
        margin: 0 auto;
        // background: blue;
    }  
`;


function Cover(){
   
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

    const [maxHeight, setMaxHeight] = useState(container.scrollHeight);
    const [scroll, setScroll] = useState(container.scrollTop)

    useEffect( () => {

          const onScroll = () => {
            const scrollCheck1 = container.scrollTop >= 0 && container.scrollTop <= 100;
            const scrollCheck2 = container.scrollTop >= 600 && container.scrollTop%4 === 0;
          

            if (scrollCheck1 || scrollCheck2) {
                setScroll(container.scrollTop);        
            }
        }

        const onResize = () => {
            console.log('inside Resize')
            if((container.scrollHeight > maxHeight + 10) || (container.scrollHeight < maxHeight - 10)) {           
                if(container.scrollHeight > 7216 ) {
                    console.log('resize 1')
                    setMaxHeight(7216) 
                } else if (container.scrollHeight < 6032) {
                    console.log('resize 2')
                    setMaxHeight(6032);
                } else {
                    console.log('resize 3')
                    setMaxHeight(container.scrollHeight)
                }
            }
        }
        
        // container.addEventListener('resize', onResize, {
        //     capture: true,
        //     passive: true
        // })
        window.onresize = onResize;

        container.addEventListener('scroll', onScroll, {
            capture: true,
            passive: true
        })

    }, [scroll, container.scrollHeight])

    return (
        <Wrapper 
            background={ scroll > 0 ? '25,70,85,.85' : '0,0,0,0' } 
            shadow={ scroll > 0 ? '0 5px 10px 0 rgba(0,0,0,.25)' : 'none' }
        >
            <Title href='/' color={ (scroll >= (maxHeight * .12) && scroll <= (maxHeight * .24)) || (scroll >= (maxHeight * .735) && scroll <= (maxHeight * .86)) ? 'black' : 'white' }><div>Pavlos<span>Karalis</span></div></Title>
            <LinkWrap color={ (scroll >= (maxHeight * .12) && scroll <= (maxHeight * .24)) || (scroll >= (maxHeight * .735) && scroll <= (maxHeight * .86)) ? 'black' : 'white' }>
                <a href='/#about'>About</a>
                <a href='/#portfolio'>Portfolio</a>
                <a href='/#technologies'>Technologies</a>
                <a href='/#photography'>Photography</a>
            </LinkWrap>
        </Wrapper>
    )
}

export default Cover
