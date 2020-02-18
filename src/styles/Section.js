import styled from 'styled-components'


const Section = styled.div`
    width: 100%;
    height: calc(100vh - 32px);
    min-height: 550px;
    box-sizing: border-box;
    margin-bottom: 16px;
    @media(max-width: 1200px){
        height: 576px;
        min-height: 576px;
    }
    @media(max-width: 992px){
        height: 466px;
        min-height: 466px;
    }
    @media(max-width: 768px){

    }
`;


export default Section