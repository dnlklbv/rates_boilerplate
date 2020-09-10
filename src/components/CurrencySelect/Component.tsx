import React from 'react'
import { Select } from 'antd'
import currencies from '../../constants/currencies'
import { TReduxProps } from './Container'

const { Option } = Select

export type TComponentProps = {
} & TReduxProps

const CurrencySelect: React.FC<TComponentProps> = ({ selectCurrency, fetching }) => {
  const handleChange = (currencyIndex) => {
    selectCurrency(currencies[currencyIndex])
  }

  return (
    <Select placeholder="Select Currency" style={{ width: '100%', maxWidth: '90vw', margin: '0 50px' }} onChange={handleChange} disabled={fetching}>
      {currencies.map(({ label, id }, index) => <Option key={id} value={index}>{label}</Option>)}
    </Select>
  )
}

export default CurrencySelect
