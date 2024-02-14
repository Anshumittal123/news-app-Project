import React, { Component } from 'react'
import DoubleRing from './DoubleRing.gif'

export default class Spinner extends Component {
  render() {
    return (
      <div className='text-center'>
        <img src={DoubleRing} alt="loading" />
      </div>
    )
  }
}
