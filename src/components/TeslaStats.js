import React from 'react'
import PropTypes from 'prop-types'

function TeslaStats(props) {
  const listItems = props.carstats.map((stat) => (
    <li key={stat.model} className='inline-block w-[130px] relative'>
      {console.log(`tesla-stats-icon-${stat.model.toLowerCase()}`)}
      <div className={`h-[20px] bg-auto bg-right-top bg-no-repeat tesla-stats-icon-${stat.model.toLowerCase()}`}></div>
      <p className="text-5xl font-normal font-serif block py-0 pl-0 pr-[18px] relative text-[#008dff] text-right sm:after:text-xl after:text-md after:text-normal after:font-serif after:content-['MI'] after:relative after:top-0 after:pl-1">{stat.miles}</p>
    </li>
  ))

  
  return (
    <div className='mt-[-40px] justify-center mx-0 pb-8 mb-[30px]'>
      <ul className='text-center px-16'>
        {listItems}
      </ul>
    </div>
  )
}

TeslaStats.propTypes = {
  carstats: PropTypes.array
}

export default TeslaStats