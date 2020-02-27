import styled from 'styled-components'


const Section = styled.div`
    position: relative; 
    scroll-margin: 16px; 
    width: calc(100%);
    height: calc(100vh - 32px);
    flex-shrink: 0;
    min-height: 736px;
    box-sizing: border-box;
    margin-bottom: 16px;
    @media(min-height: 736px){
        scroll-snap-align: start;
    }
    @media(max-width: 1200px), (max-height: 732px) {
        scroll-snap-align: none;
        height: 576px;
        min-height: 576px;
        scroll-margin: 116px; 
    }
    @media(max-width: 992px){
        height: 466px;
        min-height: 466px;
    }
    @media(max-width: 768px){
        height: 466px;
        min-height: 466px;
        scroll-margin: 141px; 
    }
    @media(max-width: 499px){

    }
`;


export default Section