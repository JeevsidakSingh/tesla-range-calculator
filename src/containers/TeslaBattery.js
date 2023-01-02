import React from 'react'
import TeslaCar from '../components/TeslaCar/TeslaCar'
import TeslaNotice from '../components/TeslaNotice'
import TeslaStats from '../components/TeslaStats'
import { getModelData } from '../services/BatteryService'

class TeslaBattery extends React.Component {
  constructor(props) {
    super(props)

    this.calculateStats = this.calculateStats.bind(this);
    this.statsUpdate = this.statsUpdate.bind(this);

    this.state = {
      carstats: [],
      config: {
        speed: 55,
        temperature: 20,
        climate: true,
        wheels: 19
      }
    }
  }

  calculateStats = (models, value) => {
    const dataModels = getModelData()
    
    return models.map(model => {
      const {speed, temperature, climate, wheels} = value  
      const miles = dataModels[model][wheels][climate ? 'on' : 'off'].speed[speed][temperature]

      return {
        model,
        miles
      }
    })
  }

  statsUpdate() {
    const carModels = ['60', '60D', '75', '75D', '90D', 'P100D']
    
    this.setState({
      carstats: this.calculateStats(carModels, this.state.config)
    })
  }

  componentDidMount() {
    this.statsUpdate()
  }

  render() {
    const {config, carstats} = this.state;
    
    return(
      <form className='m-auto'>
            <h1 className='py-6 font-serif sm:text-5xl font-thin text-4xl text-center tracking-wide'>
                Range Per Charge
            </h1>
            
            <TeslaCar wheelsize={config.wheels}/>
            <TeslaStats carstats={carstats}/>
            <TeslaNotice />
      </form>
    )
  }
}

export default TeslaBattery