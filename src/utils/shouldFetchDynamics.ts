import { ICurrency } from './../interfaces/currency'
import { ICurrenciesDynamics } from '../interfaces/currency'
import isToday from './isToday'

const shouldFetchDynamics = (currenciesDynamics: ICurrenciesDynamics | null, currency: ICurrency): boolean => {
  if (!currenciesDynamics || !currency) return true

  const currencyDynamics = currenciesDynamics[currency.id]
  if (!currencyDynamics) return true

  const lastCurrencyDynamic = currencyDynamics[currencyDynamics.length]
  if (!isToday(lastCurrencyDynamic.date)) return true

  return false
}

export default shouldFetchDynamics
