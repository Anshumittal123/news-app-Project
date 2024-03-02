import React from 'react'
import DoubleRing from './DoubleRing.gif'

const  Spinner = ()=>{
    return (
      <div className='text-center'>
        <img className='my-3' src={DoubleRing} alt="loading" />
      </div>
    )
}

export default Spinner