import React, { useEffect, useState } from 'react'
import ApexChart from 'react-apexcharts'

import { TReduxProps } from './Container'
import { StyledContainer } from './style'
import CurrencySelect from '../CurrencySelect'

export type TComponentProps = {
} & TReduxProps

const Rates: React.FC<TComponentProps> = ({ currenciesDynamics, selectedCurrency }) => {
  const [chartDimensions, setChartDimensions] = useState({
    width: Math.min(window.innerWidth - 50, 700),
    height: Math.min(window.innerHeight - 200, 400)
  })

  const updateChardDimensions = () => {
    setChartDimensions({
      width: Math.min(window.innerWidth - 50, 700),
      height: Math.min(window.innerHeight - 200, 400)
    })
  }

  useEffect(() => {
    window.addEventListener('resize', updateChardDimensions)
    return () => {
      window.removeEventListener('resize', updateChardDimensions)
    }
  }, [])

  const chartOptions = {
    xaxis: { type: 'datetime' },
    yaxis: { title: { text: 'BYN' } }
  }
  let chartSeries: {data: any[], name: string}[] = [{ data: [{ x: new Date().getDate(), y: 0 }], name: 'BYN' }]

  if (currenciesDynamics && selectedCurrency) {
    const currencyDynamics = currenciesDynamics[selectedCurrency.id]
    if (currencyDynamics) {
      chartSeries = [{
        data: currencyDynamics.map(({ date, rate }) => ({ x: date, y: rate })),
        name: 'BYN'
      }]
    }
  }

  return (
    <StyledContainer>
      <ApexChart
        options={chartOptions}
        width={chartDimensions.width}
        height={chartDimensions.height}
        series={chartSeries}
      />
      <CurrencySelect />
    </StyledContainer>
  )
}

export default Rates
