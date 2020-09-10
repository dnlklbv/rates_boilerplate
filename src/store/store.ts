import { createStore, Store } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

import { IAction, IAppState } from './models'
import rootReducer from './rootReducer'
import enhancer from './enhancer'

export type TAppStore = Store<IAppState>

let composedEnhancers = enhancer

if (process.env.NODE_ENV === 'development') {
  composedEnhancers = composeWithDevTools(enhancer)
}

const store: TAppStore = createStore<IAppState, IAction<any>, any, any>(rootReducer, composedEnhancers)

store.subscribe(() => {
  localStorage.setItem('currenciesDynamics', JSON.stringify(store.getState().currency.currenciesDynamics))
})

export default store
