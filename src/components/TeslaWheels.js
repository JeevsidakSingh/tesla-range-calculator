import React from 'react'
import PropTypes from 'react'
import wheel19 from '../assets/wheels/19.svg'
import wheel21 from '../assets/wheels/21.svg'

function LabelLists(props) {
  const value = props.wheels.value
  const changeHandler = props.wheels.handleChangeWheels
  const sizes = [19, 21]
  const LabelItems = sizes.map(size => (
    <label key={size} className={`dark:bg-gray-400 cursor-pointer w-[47%] h-[65px] inline-block border-1 border-solid border- pt-[20px] pl-[90px] bg-[#f7f7f7] mr-2 ${value === size ? 'border-2 border-[#39f] shaddow-[inset_0_0_0_1px_#39f]' : ''}`}>
      <img className='-translate-x-16 -translate-y-3' src={size === '19' ? wheel19 : wheel21} alt='w'/>
      <input 
        className='h-[1px] w-[1px] m-[-1px] overflow-hidden absolute cursor-pointer'
        type='radio'
        name='wheelsize'
        value={size}
        checked={value === size}
        onChange={() => {changeHandler(size)}}
      />
      <p className='dark:text-white h-[100%] font-serif text-[18px] text-[#333] -translate-y-[45px]'> {size}° </p>
    </label>
  ))
  return (
    <div>
      {LabelItems}
    </div>
  )
}

const TeslaWheels = (props) => (
  <div className='float-left w-[355px]'>
    <p className='dark:text-white tracking-[2px] font-serif sm:text-2xl text-lg'>Wheels</p>
    <div className='mt-[10px] cf'>
      <LabelLists wheels={props} />
    </div>
  </div>
);

TeslaWheels.propTypes = {
  value: PropTypes.number,
  handleChangeWheels: PropTypes.func
}
export default TeslaWheels