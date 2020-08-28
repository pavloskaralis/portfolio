import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Section from '../styles/Section.js'
import cover from '../images/cell.jpg'
import { connect } from 'react-redux'
import toggleStatus from '../toggleStatus.js'

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
  
    useEffect(()=> {
      setTimeout(()=> toggleStatus(),0)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);
      
    const rows = [];


    for(let i = 0; i < 12; i++){

      const blocks = [];

      const rowStyle= {
        width: '100%',
        display: 'flex',
        flexGrow: 1,
      }

      const row = (
        <div key={Math.random() * 1000000} style={rowStyle}>
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

          const cellStyle= {
            flexGrow: [1,3,5][randomC],
            backgroundImage: `url(${cover})`,
            backgroundSize: '1000%',              
            backgroundPositionX: blockStyle.flexDirection === 'row' ? `${backgroundPositionXMin + (XDifference * shuffled[k])}%` : `${backgroundPositionXMin}%`,
            backgroundPositionY: blockStyle.flexDirection === 'row' ?  `${backgroundPositionYMin}%` : `${backgroundPositionYMin + (YDifference * shuffled[k])}%`
          }
  
          const Cell = () => {
            const [visible, toggleVisible] = useState(false)
            useEffect(()=> {
              const delay = Math.random() * 2500 + 1250; 

              const interval = setInterval(()=>{
                toggleVisible(visible => !visible)
              },delay)

              return ()=> clearInterval(interval)
              // eslint-disable-next-line react-hooks/exhaustive-deps
            },[])
            return <div style={{...cellStyle, opacity: visible ? .95 : 0, transition: 'opacity 1s linear'}}/>

          }
        
          cells.push(<Cell key={Math.random() * 1000000}/>);
        }

        const block = (
          <div key={Math.random() * 1000000} style={blockStyle}>
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
