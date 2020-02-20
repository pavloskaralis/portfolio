import React from 'react'
import styled, {keyframes} from 'styled-components'
import Section from '../styles/Section.js'
import cover from '../images/cover.jpg'
import { connect } from 'react-redux'
import toggleStatus from '../toggleStatus.js'


const mapDispatchToProps = {
  toggleStatus
}

const fade = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;


const Wrapper = styled(Section)`
  position: absolute;
  width: calc(100% - 32px);
  display: flex;
  justify-content: space-evenly;
  flex-direction: row-reverse;
  flex-wrap: wrap-reverse; 
  pointer-events: none;
  opacity: 1;
  overflow: hidden; 
  @media (max-width: 1200px){
    width: 100%;
  }
`;

const Block = styled.div`
  display: flex; 
  flex-direction: ${props => props.blockDirection};
  min-width: ${props => props.blockWidth};
  max-height: 10%;
  min-height: 10%;
  overflow: hidden; 
`;



const Cell = styled.div`
  width: 100%;
  height: 100%; 
  min-width: ${props => props.cellWidth};
  min-height: ${props => props.cellHeight};
  background-image: url(${cover});
  background-size: 750%;
  background-position-x: ${props => props.cellX};
  background-position-y: ${props => props.cellY};
  animation: ${fade} .5s linear;
  animation-delay: ${props => props.delay};
  opacity: 0;
  animation-fill-mode: forwards;
`;




function Canvas({toggleStatus}){
   
    const blocks = [];

    const promise = async () => {


      let x = 95;
      let y = 95; 
      let base = 0;


      const loop = () => { 
          for(let i = 0; i < 135; i ++) {
          //cell quantity
          const r1 = Math.floor(Math.random() * 3 + 3);
          //block direction
          const r2 = Math.round(Math.random());
          //block width
          const r3 = Math.round(Math.random());

          const cells = [];
          
          for(let j = 0; j < r1; j ++) {
          //cell size
            const r4 = Math.floor(Math.random() * 3);
            //x position 
            const r5 = Math.floor(Math.random() * 3);
            //y position 
            const r6 = Math.floor(Math.random() * 3);
            //delay
            const r7 = Math.floor(Math.random() * 3);
            cells.push({
                maxWidth: r2 === 0 ? ['10%','20%','30%'][r4] : '100%',
                maxHeight: r2 === 1 ? ['10%','20%','40%'][r4] : '100%',
                posX: `${[x - 40, x, x + 40][r5]}%`,
                posY: `${[y - 10, y, y + 10][r6]}%`,
                key: j,
                delay: [base, base + .5, base + 1][r7]
            })
          }

          x -= 7.5;
          if(x < 0) x = 95;
          if((i%14 === 0) && (i > 13)) y -= 10;
          if((i%14 === 0) && (i > 13)) base += .2;

          blocks.push(
          <Block blockDirection={r2 === 0 ? 'row' : 'column'} blockWidth={r3 === 0 ? '6%' : '9%'} key={i} id={i}>
              {cells.map(cell => {
                  return(
                  <Cell key={`${i}${cell.key}`} delay={`${cell.delay}s`} cellX={cell.posX} cellY={cell.posY} cellWidth={cell.maxWidth} cellHeight={cell.maxHeight}  background={`rgb(${Math.random() * 255},${Math.random() * 255},${Math.random() * 255})`}/>
                  )
              })}
          </Block>
          )     
        }
      }

      await loop();
      toggleStatus();
    }

    promise();

  return (
      <Wrapper> 
        {blocks}
      </Wrapper>
  )
}

Canvas = connect(
  null,
  mapDispatchToProps
)(Canvas)
export default Canvas
