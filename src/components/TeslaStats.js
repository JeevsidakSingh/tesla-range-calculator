import React from 'react'
import PropTypes from 'prop-types'

function TeslaStats(props) {
  const listItems = props.carstats.map((stat) => (
    <li key={stat.model} className='inline-block w-[130px] relative mx-3'>
      
      <div className={`h-[20px] bg-auto mt-8 bg-center bg-no-repeat bg-icon${stat.model.toLowerCase()}`}></div>
      <p className="text-5xl font-normal font-serif block pr-[18px] relative text-[#008dff] text-right sm:after:text-xl after:text-md after:text-normal after:font-serif after:content-['MI'] after:relative after:top-0 after:pl-1">{stat.miles}</p>
    </li>
  ))

  
  return (
    <div className='mt-[-60px] justify-center mx-0 mb-[30px]'>
      <ul className='text-center'>
        {listItems}
      </ul>
    </div>
  )
}

TeslaStats.propTypes = {
  carstats: PropTypes.array
}

export default TeslaStats