import React from 'react'
export default function Cell({data,updateFlag,revealCell}) {

    const style={
        cellStyle:{
            width:40,
            height:40,
            backgroundColor:data.revealed && data.value!==0?data.value==='X'?'red':' #00226d':data.revealed&&data.value===0?'#00226f':'#000',
            opacity:'0.8',
            border:'3px solid white',
            display:'flex',
            justifyContent:'center',
            alignItems:'center',
            fontSize:'20px',
            cursor:'pointer',
            color:'cyan',
            fontWeight:'1000'
        },
    }

    // Playing Sound on differents Clicks
    
    const click=()=>{
        // calling revealcell for specific cell x and y
        revealCell(data.x,data.y);  
    }
    
    // Right Click Function
    
    const rightclick=(e)=>{
        updateFlag(e,data.x,data.y)
    }
    // rendering the cell component and showing the different values on right and left clicks 
    
    return (
        <div style={style.cellStyle} onClick={click} onContextMenu={rightclick}>
            {!data.revealed && data.flagged ? (
        "🚩"
      ) : data.revealed && data.value !== 0 ? (
        data.value === "X" ? (
          "💣"
        ) : (
          data.value
        )
      ) : (
        ""
      )}
        </div>
    )
}