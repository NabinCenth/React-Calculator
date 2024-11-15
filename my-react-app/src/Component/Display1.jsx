import React from 'react'

const Display1 = ({val}) => {
  return (
    <>
   <input type="text" disabled value={val} onChange={(e)=>{e.target.value}}/>
   </>
  )
}

export default Display1