import React from 'react'
import PropTypes from 'prop-types'

function TeslaClimate(props) {
  return (
    <div className='dark:text-gray-800 dark flex mx-[8%] my-[5px] lg:ml-[0%]'>
      <label className={`rounded-full cursor-pointer block w-[100px] h-[100px] border-[6px] border-solid border-[#f7f7f7] shadow-[0_1px_3px_rgba(0,0,0,0.3) text-[#666] bg-[#fff] ${props.limit && props.value ? 'text-[#fff] bg-[#33a0ff] bg-gradient-to-b to-[#388bff] via-[#33a0ff]' : ''} ${!props.limit && props.value ? 'text-[#fff] bg-[#d64800] bg-gradient-to-b to-[#d20200] via-[#d64800]' : ''}`}>
        <p className='mt-[14px] text-center text-[10px] uppercase'>{props.limit ? 'ac' : 'heat'} {!props.value ? 'off' : 'on'}</p>
        <i className={`block w-[22px] h-[22px] mt-[8px] mx-auto bg-no-repeat bg-center ${!props.limit ? 'bg-heatOff': 'bg-acOff'} active:${!props.limit ? 'bg-heatOn': 'bg-acOn'}`}></i>
        <input 
          className='h-px w-px -m-px overflow-hidden absolute'
          type='checkbox'
          name='climate'
          checked={props.value}
          onChange={() => {props.handleChangeClimate()}}
        />
      </label>
    </div>
  )
}

TeslaClimate.propTypes = {
  value: PropTypes.bool,
  limit: PropTypes.bool,
  handleChangeClimate: PropTypes.func
}

export default TeslaClimate