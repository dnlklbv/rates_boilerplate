import { connect, ConnectedProps } from 'react-redux'

import { IAppState } from 'store'
import { selectCurrency } from 'actions/currency'

import Component from './Component'

const mapStateToProps = (state: IAppState) => ({
  fetching: state.common.fetching
})
const mapActionsToProps = (dispatch) => ({
  selectCurrency: currency => dispatch(selectCurrency(currency))
})

const connector = connect(mapStateToProps, mapActionsToProps)
export type TReduxProps = ConnectedProps<typeof connector>
export default connector(Component)
