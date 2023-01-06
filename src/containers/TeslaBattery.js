import React from 'react'
import TeslaCar from '../components/TeslaCar/TeslaCar'
import TeslaNotice from '../components/TeslaNotice'
import TeslaStats from '../components/TeslaStats'
import TeslaCounter from '../components/TeslaCounter'
import TeslaClimate from '../components/TeslaClimate'
import TeslaWheels from '../components/TeslaWheels'
import { getModelData } from '../services/BatteryService'

class TeslaBattery extends React.Component {
  constructor(props) {
    super(props)

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

  componentWillUnmount() {
    this.calculateStats = this.calculateStats.bind(this)
    this.statsUpdate = this.statsUpdate.bind(this)
    this.increment = this.increment.bind(this)
    this.decrement = this.decrement.bind(this)
    this.updateCounterState = this.updateCounterState.bind(this)
    this.handleChangeClimate = this.handleChangeClimate.bind(this)
    this.handleChangeWheels = this.handleChangeWheels.bind(this);
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

  updateCounterState(title, newValue) {
    const config = { ...this.state?.config}
    title === 'Speed' ? config['speed'] = newValue : config['temperature'] = newValue

    this.setState({config}, () => {this.statsUpdate()})
  }

  increment(e, title) {
    e.preventDefault();
    let currentValue, maxValue, step;
    const { speed, temperature } = this.props.counterDefaultVal

    if (title === 'Speed') {
      currentValue = this.state.config.speed
      maxValue = speed.max
      step = speed.step
    } else {
      currentValue = this.state.config?.temperature
      maxValue = temperature.max
      step = temperature.step
    }

    if (currentValue < maxValue) {
      const newValue = currentValue + step
      this.updateCounterState(title, newValue)
    }
  }

  decrement(e, title) {
    e.preventDefault();
    let currentValue, minValue, step;
    const { speed, temperature } = this.props.counterDefaultVal;
    if (title === 'Speed') {
      currentValue = this.state.config.speed;
      minValue = speed.min;
      step = speed.step;
    } else {
      currentValue = this.state.config.temperature;
      minValue = temperature.min;
      step = temperature.step;
    }
    if (currentValue > minValue) {
      const newValue = currentValue - step;
      this.updateCounterState(title, newValue);
    }
  }  

  handleChangeClimate() {
    const config = {...this.state.config}
    config['climate'] = !this.state.config.climate
    this.setState({ config }, () => {this.statsUpdate()})
  }

  handleChangeWheels(size) {
    const config = {...this.state.config}
    config['wheels'] = size
    this.setState({config}, () => {this.statsUpdate()})
  }
  
  render() {
    const {config, carstats} = this.state;
    
    return(
      <form className='dark:bg-slate-600 m-auto'>
          <h1 className='dark:text-white py-6 font-serif sm:text-5xl font-thin text-4xl text-center tracking-wide'>
              Range Per Charge
          </h1>
          <TeslaCar wheelsize={config.wheels}/>
          <TeslaStats carstats={carstats}/>
          <div className='lg:flex pb-5 w-[100%] content-center'>
            <div className='flex pb-10 w-[100%] items-center lg:w-[50%]'>
              <div className='w-[100%] lg:pl-[10%] xl:pl-[30%]'>
                <TeslaCounter
                  currentValue={this.state?.config?.speed}
                  initValues={this.props.counterDefaultVal?.speed}
                  increment={this.increment}
                  decrement={this.decrement}
                />
              </div>
              <div className="w-[100%]">
                <TeslaCounter
                  currentValue={this.state?.config?.temperature}
                  initValues={this.props.counterDefaultVal?.temperature}
                  increment={this.increment}
                  decrement={this.decrement}
                />
              </div>
            </div>
            <div className='flex pb-10 w-[100%] justify-center items-center lg:w-[50%]'>
              <div className='w-[30%] lg:mt-10 place-self-center lg:pr-4'>
                <TeslaClimate 
                  value={this.state.config.climate}
                  limit={this.state.config.temperature > 10}
                  handleChangeClimate={this.handleChangeClimate}
                />  
              </div>
              <hr className='mx-auto w-1 h-[80px] bg-gray-100 lg:translate-y-6 lg:-translate-x-[800%] md:hidden lg:flex'/>
              <div className='lg:mt-10 lg:mr-[5%] xl:mr-[20%] lg:w-[70%] text-center'>
                <TeslaWheels 
                  value={this.state.config.wheels}
                  handleChangeWheels={this.handleChangeWheels}
                />
              </div>
            </div>
          </div>
          <div className='pb-10 dark:lg:pb-24'>
            <TeslaNotice />
          </div>
      </form>
    )
  }
}

export default TeslaBattery