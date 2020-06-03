import React, { useEffect, useState, useRef } from 'react'
import styled, {keyframes} from 'styled-components'

const fade = keyframes`
    from{opacity: 0}
    to{opacity: 1}
`

const Wrapper = styled.nav`
    background-color: rgb(0,0,0,0);
    position: fixed;
    box-sizing: border-box;
    width: calc(100% - 32px);
    min-height: 100px;
    margin: 0 auto;
    padding: 32px;
    display: flex;
    top: 16px;
    justify-content: space-between;
    transition: background-color .5s, box-shadow .5s;
    z-index: 2;


    opacity: 0; 
    animation: ${fade};
    animation-timing-function: linear;
    animation-fill-mode: forwards; 
    animation-duration: .2s;

    @media (max-width: 1200px), (max-height: 732px) {
        background-color: ${props => `rgba(${props.background})`};
        box-shadow: ${props => props.shadow};
        width: 100%;
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
    @media (max-width: 1200px), (max-height: 732px) {
        color: white; 
    }
    @media (max-width: 768px) {
        text-align: center;
        margin: 0 auto;
    }  
`;

const LinkWrap = styled.div`
    display: flex;
    justify-content: space-between;
    max-width: 100%;
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
        cursor: pointer; 
        &:hover {
            color: rgb(255,200,0);
        }
        @media (max-width: 1200px), (max-height: 732px) {
            color: white; 
        }
        @media (max-width: 499px) {
            font-size: 14px;
            margin: 0 6px;
        }
    }

    @media (max-width: 768px) {
        width: 350px;
        margin: 0 auto;
    }  
`;


function Cover(){

        let root = document.querySelector('#root')
        //set container to app.js; use root div as backup for first load.
        let container = useRef(document.querySelector('#container') || root);
        //set scroll height to app.js scroll height; use window height * 9 as backup for first load
        let scrollHeight = container.current.scrollHeight > 0 ? container.current.scrollHeight : window.innerHeight * 9;
        //total page height relative to current browser size
        const [maxHeight, setMaxHeight] = useState(scrollHeight);
        //current scroll height 
        const [scroll, setScroll] = useState(container.current.scrollTop)

        useEffect( () => {

            container.current = document.querySelector('#container');
           
            
            const onScroll = () => {
                //if viewing cover
                const scrollCheck1 = container.current.scrollTop >= 0 && container.current.scrollTop <= 950;
                //if viewing past cover, buffering every 2 pixels 
                const scrollCheck2 = container.current.scrollTop >= 950 && container.current.scrollTop%2 === 0;
            

                if (scrollCheck1 || scrollCheck2) {
                    //reset current scroll height
                    setScroll(container.current.scrollTop);        
                }
            }

            const onResize = () => {
                //if user resizes client, reset maxheight 
                if((container.current.scrollHeight > maxHeight + 10) || (container.current.scrollHeight < maxHeight - 10)) {           
                    setMaxHeight(container.current.scrollHeight)
                }
            }
            //sync method to resize event listener 
            window.onresize = onResize;
            //add scroll event listener to app.js
            container.current.addEventListener('scroll', onScroll, {
                capture: true,
                passive: true
            });
    
            
    }, [scroll, container.current.scrollHeight, maxHeight])

    //safari scroll bug
    const onClick = () => {
        if(navigator.userAgent.indexOf('Safari') !== -1 && navigator.userAgent.indexOf('Chrome') === -1){
            const container = document.querySelector('#container');
            const scrollCheck1 = container.scrollTop >= 0 && container.scrollTop <= 950;
            const scrollCheck2 = container.scrollTop >= 950;

            if (scrollCheck1 || scrollCheck2) {
               setTimeout(()=> setScroll(container.scrollTop), 0);        
            }
        }
    }
    return (
        <Wrapper 
        // when not in full screen, give color and shadow to background when scrolling down from initial page load position
            background={ scroll > 0 ? '25,70,85,.85' : '0,0,0,0' } 
            shadow={ scroll > 0 ? '0 5px 10px 0 rgba(0,0,0,.25)' : 'none' }
        >    
            {/* when in full screen, change text color over white background sections */}
            <Title href='/' color={ (scroll >= (maxHeight * .10) && scroll <= (maxHeight * .20)) || (scroll >= (maxHeight * .84) && scroll <= (maxHeight * .94)) ? 'black' : 'white' }><div>Pavlos<span>Karalis</span></div></Title>
            <LinkWrap color={ (scroll >= (maxHeight * .10) && scroll <= (maxHeight * .20)) || (scroll >= (maxHeight * .84) && scroll <= (maxHeight * .94)) ? 'black' : 'white' }>
                <a href='/#About' onClick={onClick}>About</a>
                <a href='/#CafeRacers' onClick={onClick}>Portfolio</a>
                <a href='/#Technologies' onClick={onClick}>Technologies</a>
                <a href='/#Photography' onClick={onClick}>Photography</a>
            </LinkWrap>
        </Wrapper>
    )
}

export default Cover
