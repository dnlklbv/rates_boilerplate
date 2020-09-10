import { TAppDispatchThunk, TGetStateThunk } from '../store/models'
import moment from 'moment'

import { API_URL } from '../constants/api'
import { ICurrency } from './../interfaces/currency'
import shouldFetchDynamics from '../utils/shouldFetchDynamics'
import { startFetching, stopFetching, setError } from './common'

const MODULE_NAME = 'CURRENCY'

export const SELECT_CURRENCY = `${MODULE_NAME}/SELECT_CURRENCY`
export const selectCurrency = (currency) => async (dispatch: TAppDispatchThunk<never>, getState: TGetStateThunk): Promise<void> => {
  dispatch({
    type: SELECT_CURRENCY,
    payload: currency
  })

  const shouldFetch = shouldFetchDynamics(getState().currency.currenciesDynamics, currency)
  if (shouldFetch) dispatch(fetchCurrencyDynamics(currency))
}

export const FETCH_CURRENCY_DYNAMICS = `${MODULE_NAME}/FETCH_CURRENCY_DYNAMICS`
export const fetchCurrencyDynamics = (currency: ICurrency) => async (dispatch: TAppDispatchThunk<never>): Promise<void> => {
  dispatch(startFetching())

  try {
    const urlParams = new URLSearchParams({
      startdate: moment().subtract(6, 'day').format(),
      enddate: moment().format()
    })

    const res = await fetch(`${API_URL}/exrates/rates/dynamics/${currency.id}?${urlParams}`)
    const data = await res.json()

    if (res.ok && data.length) {
      const currencyDynamics = data.map(({ Cur_ID: id, Date: date, Cur_OfficialRate: rate }) => ({ id, date, rate: rate.toFixed(2) }))
      dispatch(receiveCurrencyDynamics(currencyDynamics))
    } else {
      dispatch(setError('Something went wrong, try again later'))
    }
  } catch {
    dispatch(setError('Something went wrong, try again later'))
  }

  dispatch(stopFetching())
}

export const RECEIVE_CURRENCY_DYNAMICS = 'RECEIVE_CURRENCY_DYNAMICS'
export const receiveCurrencyDynamics = (currencyDynamics) => ({
  type: RECEIVE_CURRENCY_DYNAMICS,
  payload: currencyDynamics
})
