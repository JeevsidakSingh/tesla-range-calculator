import React from 'react'
import PropTypes from 'prop-types'

function TeslaCar(props) {
  return (
    <div className='w-full min-h-[350px] bg-white bg-carImage bg-no-repeat bg-center bg-contain'>
        {console.log(props.wheelsize)}
        <div className='h-[247] w-[555] relative m-auto'>
            <div className={`tesla-wheel tesla-wheel-front tesla-wheel-${props.wheelsize}`}></div>
            <div className={`tesla-wheel tesla-wheel-rear tesla-wheel-${props.wheelsize}`}></div>
        </div>
    </div>
  )
}

TeslaCar.propTypes = {
    wheelsize: PropTypes.number
}

export default TeslaCar