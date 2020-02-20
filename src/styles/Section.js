import styled from 'styled-components'


const Section = styled.div`
    position: relative; 
    scroll-snap-align: start;
    scroll-margin: 17px; 
    width: 100%;
    height: calc(100vh - 32px);
    min-height: 836px;
    box-sizing: border-box;
    margin-bottom: 16px;
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

`;


export default Section