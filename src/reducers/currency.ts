import { IAction } from '../store/models'
import { ICurrency, ICurrenciesDynamics } from '../interfaces/currency'
import { RECEIVE_CURRENCY_DYNAMICS, SELECT_CURRENCY } from 'actions/currency'

const initState = {
  selectedCurrency: null,
  currenciesDynamics: JSON.parse(localStorage.getItem('currenciesDynamics') || '{}')
}

export interface ICurrencyState {
  selectedCurrency: ICurrency | null,
  currenciesDynamics: ICurrenciesDynamics
}

function currencyReducer (state: ICurrencyState = initState, { type, payload }: IAction<any>): ICurrencyState {
  switch (type) {
    case SELECT_CURRENCY: {
      return {
        ...state,
        selectedCurrency: payload
      }
    }
    case RECEIVE_CURRENCY_DYNAMICS: {
      return {
        ...state,
        currenciesDynamics: { ...state.currenciesDynamics, [payload[0].id]: payload }
      }
    }
    default:
      return state
  }
}

export default currencyReducer
