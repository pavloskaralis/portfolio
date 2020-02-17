import styled from 'styled-components'

const Section = styled.div`
    width: ${props => props.theme.w};
    height: ${props => props.theme.h};
    box-sizing: ${props => props.theme.bs};
    @media(max-width: 1200px){
        height: ${props => props.theme.h2};
    }
    @media(max-width: 992px){
        height: ${props => props.theme.h3};
    }
    @media(max-width: 768px){

    }
`;

export default Section