import React, { useEffect } from 'react'
import styled, {keyframes} from 'styled-components'
import Section from '../styles/Section.js'
import cover from '../images/cell.jpg'
import { connect } from 'react-redux'
import toggleStatus from '../toggleStatus.js'
import {useSelector} from 'react-redux'

const mapDispatchToProps = {
  toggleStatus
}


const Wrapper = styled(Section)`
  position: absolute;
  top: 0;
  min-width: calc(100vw - 32px);
  display: flex;
  justify-content: space-evenly;
  flex-direction: row;
  flex-wrap: wrap; 
  pointer-events: none;
  opacity: 1;
  overflow: hidden; 
  @media (max-width: 1200px), (max-height: 732px) {
    width: 100%;
  }
  @media (max-width: 499px){
    max-width: 100vw;
  }
`;



let Canvas = ({toggleStatus}) => {
    const status = useSelector(state => state.status);
  
    useEffect(()=> setTimeout(()=> toggleStatus(),0),[]);
      
    const rows = [];


    for(let i = 0; i < 12; i++){

      const blocks = [];

      const rowStyle= {
        width: '100%',
        display: 'flex',
        flexGrow: 1,
      }

      const row = (
        <div style={rowStyle}>
          {blocks}
        </div>
      )

      for(let j = 0; j < 18; j++){
        const cells = []; 

        const randomA = Math.round(Math.random() * 2);
        const randomB = Math.round(Math.random() * 1);

        const blockStyle= {
          display: 'flex',
          flexGrow: [1,2,3][randomA],
          flexDirection: ['column','row'][randomB],
        }

        let shuffled = [0,1,2];
        for(let l = 0; l < shuffled.length; l++){
          let randomD = Math.round(Math.random() * 2);
          let temp = shuffled[l];
          shuffled[l] = shuffled[randomD];
          shuffled[randomD] = temp; 
        }

        for(let k = 0; k < 3; k++ ){
          const randomC = Math.round(Math.random() * 2);

          const backgroundPositionXMin = j * (100/18) + (100/18 * shuffled[k]);
          const backgroundPositionXMax = (j + 1) * (100/18) + (100/18 * shuffled[k]);
          const XDifference = (backgroundPositionXMax - backgroundPositionXMin)/3

          const backgroundPositionYMin = i * (100/12) + (100/12 * shuffled[k]);
          const backgroundPostitonYMax = (i + 1) * (100/12) + (100/12 * shuffled[k]);
          const YDifference = (backgroundPostitonYMax - backgroundPositionYMin)/3

          const delay = Math.random() * 1.8 + .2; 
          const cellStyle= {
            opacity: status ? 1 : 0,
            transition: `opacity .8s linear ${delay}s`,
            flexGrow: [1,3,5][randomC],
            backgroundImage: `url(${cover})`,
            backgroundSize: '100000%',              
            backgroundPositionX: blockStyle.flexDirection === 'row' ? `${backgroundPositionXMin + (XDifference * shuffled[k])}%` : `${backgroundPositionXMin}%`,
            backgroundPositionY: blockStyle.flexDirection === 'row' ?  `${backgroundPositionYMin}%` : `${backgroundPositionYMin + (YDifference * shuffled[k])}%`
          }
  
          const cell = (
            <div style={cellStyle}/>
          )
          cells.push(cell);
        }

        const block = (
          <div style={blockStyle}>
            {cells}
          </div>
        )

        blocks.push(block)

      }

      rows.push(row);
    }


  return (
      <Wrapper> 
        {rows}
      </Wrapper>
  )
}

Canvas = connect(
  null,
  mapDispatchToProps
)(Canvas)
export default Canvas
