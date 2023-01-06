import React from 'react'
import PropTypes from 'prop-types'
import {ChevronUpIcon, ChevronDownIcon} from '@heroicons/react/24/solid'

function TeslaCounter(props) {
  return (
    <div className='relative w-[75%] md:w-[100%] translate-x-[18%] md:translate-x-0 inline-grid grid-cols-1 grid-rows-2 items-center'>
      <p className='dark:text-white tracking-[2px] sm:text-2xl text-lg text-center font-serif'>{props.initValues?.title}</p>
      <div className='min-w-[150px] mt-[-8px] sm:w-[200px] place-self-center'>
        <div className='dark:bg-gray-400 relative items-center w-[100%] h-[65px] border border-1 rounded-full border-solid border-[#ccc] inline-block pt-[18px] pl-[30px] m-auto bg-[#f7f7f7] bg-[left_calc(24.21053%)_top_calc(9px)] bg-no-repeat bg-auto focus:bg-[#f2f2f2] focus:outline-none'>
          <p className='dark:text-white font-serif text-[25px] leading-6 relative'>
            {props.currentValue}
            <span className='font-serif'> {props.initValues?.unit}{props.initValues?.unit === "°" ? "C" : ""}</span>
          </p>
          <div className='absolute m-auto right-[10px] top-[11px]'>
            <button 
              className='dark:text-blue-900 w-[30px] text-[#008dff] cursor-pointer block align-middle bg-center bg-no-repeat bg-transparent disabled:opacity-40 disabled:cursor-not-allowed'
              onClick={(e) => props.increment(e, props.initValues?.title)} 
              disabled={props.currentValue >= props.initValues?.max}
            >
              <ChevronUpIcon className='dark:border-blue-900 h-[20px] border border-b-1 border-t-0 border-x-0 border-neutral-500'/>
            </button>
            <button 
              className='dark:text-blue-900 w-[30px] text-[#008dff] cursor-pointer block align-middle bg-center bg-no-repeat bg-transparent disabled:opacity-40 disabled:cursor-not-allowed'
              onClick={(e) => props.decrement(e, props.initValues?.title)} 
              disabled={props.currentValue <= props.initValues?.min}  
            >
              <ChevronDownIcon className='dark:border-blue-900 h-[20px] border border-t-1 border-b-0 border-x-0 border-neutral-500'/>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

TeslaCounter.propTypes = {
  currentValue: PropTypes.number, 
  increment: PropTypes.func, 
  decrement: PropTypes. func,
  initValues: PropTypes.object
}

export default TeslaCounter