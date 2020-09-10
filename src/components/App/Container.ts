import { connect, ConnectedProps } from 'react-redux'

import { IAppState } from 'store'

import Component from './Component'
import { setError } from 'actions/common'

const mapStateToProps = (state: IAppState) => ({
  fetching: state.common.fetching,
  error: state.common.error
})

const mapActionsToProps = (dispatch) => ({
  setError: error => dispatch(setError(error))
})

const connector = connect(mapStateToProps, mapActionsToProps)
export type TReduxProps = ConnectedProps<typeof connector>
export default connector(Component)
