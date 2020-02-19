import React from 'react'
import styled from 'styled-components'
import Section from '../styles/Section.js'
import cover from '../images/cover.png'

const Wrapper = styled(Section)`
  background-image: linear-gradient(
    to bottom, 
    rgba(0,35,90,1) 0%, 
    rgba(50,120,160,1) 50%, 
    rgba(255,200,0,1) 100%
  );
`;

const Canvas = styled(Section)`
  position: absolute;
  display: flex;
  justify-content: space-between;
  flex-direction: row-reverse;
  flex-wrap: wrap-reverse; 
  // background-color: red;
  pointer-events: none;
  opacity: .5;
  // overflow-hidden; 
`;

const Block = styled.div`
  display: flex; 
  flex-direction: ${props => props.blockDirection};
  width: ${props => props.blockWidth};
  max-height: 8.5%;
  min-height: 8.5%;
  overflow: hidden; 
`;

const Cell = styled.div`
  width: 100%;
  height: 100%; 
  min-width: ${props => props.cellWidth};
  min-height: ${props => props.cellHeight};
  background-image: url(${cover});
  // background-color: ${props => props.background};

  background-size: 1000%;
  background-position-x: ${props => props.cellX};
  background-position-y: ${props => props.cellY};
`;



function Cover(){

  const blocks = []; 
  let x = 95;
  let y = 95; 

  for(let i = 0; i < 170; i ++) {
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
      cells.push({
        maxWidth: r2 === 0 ? ['10%','20%','30%'][r4] : '100%',
        maxHeight: r2 === 1 ? ['10%','20%','40%'][r4] : '100%',
        posX: `${[x - 35, x, x + 35][r5]}%`,
        posY: `${[y - 5, y, y + 5][r6]}%`,
        key: j
      })
    }
   
    x -= 7;
    if(x < 0) x = 95;
    if((i%14 === 0) && (i > 13)) y -= 7.5;

    blocks.push(
      <Block blockDirection={r2 === 0 ? 'row' : 'column'} blockWidth={r3 === 0 ? '5%' : '10%'} key={i} id={i}>
          {cells.map(cell => {
             console.log(i, cell.posX, cell.posY)
            return(
              <Cell key={`${i}${cell.key}`} cellX={cell.posX} cellY={cell.posY} cellWidth={cell.maxWidth} cellHeight={cell.maxHeight}  background={`rgb(${Math.random() * 255},${Math.random() * 255},${Math.random() * 255})`}/>
            )
          })}
      </Block>
    )
  }

  return (
    <Wrapper>
      <Canvas> 
        {blocks}
      </Canvas>
    </Wrapper>
  )
}

export default Cover
