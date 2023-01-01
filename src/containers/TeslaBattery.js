import React from 'react'
import TeslaCar from '../components/TeslaCar/TeslaCar'
import TeslaNotice from '../components/TeslaNotice'

function TeslaBattery() {
  return (
    <div>
        <form className='m-auto'>
            <h1 className='py-6 font-serif sm:text-5xl font-thin text-3xl text-center tracking-wide'>
                Range Per Charge
            </h1>
            <TeslaCar wheelsize={19} />
            <TeslaNotice />
        </form>
    </div>
  )
}

export default TeslaBattery