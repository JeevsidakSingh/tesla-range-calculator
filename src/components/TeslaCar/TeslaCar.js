import React from 'react'
import PropTypes from 'prop-types'
import './TeslaCar.css'
import car from '../../assets/tesla.jpg'

function TeslaCar(props) {
  return (
    <div className='w-full max-w-[750px] relative m-auto mx-auto bg-white place-content-center items-center justify-center bg-contain'>
      <img className='mx-auto min-w-[500px] max-h-[400px]' src={car} alt='/'>  
      </img>
      <div className={`text-purple-100 text-opacity-0 h-1/4 w-1/6 bottom-[27%] left-[21.25%] absolute bg-no-repeat bg-center bg-contain tesla-wheel-${props.wheelsize}`}>
          IIIIIIIII!1i
        </div>
        <div className={`text-purple-100 text-opacity-0 h-1/4 w-1/6 bottom-[27%] right-[22.75%] absolute bg-no-repeat bg-center bg-contain tesla-wheel-${props.wheelsize}`}>
          IIIIIIIII!1i
        </div>
    </div>
  )
}

TeslaCar.propTypes = {
    wheelsize: PropTypes.number
}

TeslaCar.defaultProps = {
  wheelsize: 19
}

export default TeslaCar