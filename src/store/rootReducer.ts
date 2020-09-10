import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import routeHistory from 'route-history'

import commonReducer from 'reducers/common'
import currencyReducer from 'reducers/currency'
import { IAppState } from './models'

const rootReducer = combineReducers<IAppState>({
  router: connectRouter(routeHistory),
  common: commonReducer,
  currency: currencyReducer
})

export default rootReducer
