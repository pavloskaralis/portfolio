import styled from 'styled-components'


const Section = styled.div`
    position: relative; 
    scroll-snap-align: start;
    scroll-margin: 16px; 
    width: calc(100%);
    height: calc(100 - 32px);
    flex-shrink: 0;
    min-height: 800px;
    box-sizing: border-box;
    margin-bottom: 16px;
    @media(min-width: 1200px){
        height: calc(100vh - 32px);
    }
    @media(max-width: 1200px){
        scroll-snap-align: none;
        height: 576px;
        min-height: 576px;
        scroll-margin: 100px; 
    }
    @media(max-width: 992px){
        height: 466px;
        min-height: 466px;
    }
    @media(max-width: 768px){
        height: 466px;
        min-height: 466px;
        scroll-margin: 125px; 
    }
    @media(max-width: 499px){

    }
`;


export default Section