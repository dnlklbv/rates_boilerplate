import { connect, ConnectedProps } from 'react-redux'

import { IAppState } from 'store'
import Component from './Component'

const mapStateToProps = (state: IAppState) => ({
  currenciesDynamics: state.currency.currenciesDynamics,
  selectedCurrency: state.currency.selectedCurrency
})

const connector = connect(mapStateToProps)
export type TReduxProps = ConnectedProps<typeof connector>
export default connector(Component)
