import { AnyAction } from 'redux'
import {
  START_FETCHING,
  STOP_FETCHING,
  SET_ERROR
} from 'actions/common'

const initState = {
  fetching: false,
  error: ''
}

export interface ICommonState {
  fetching: boolean,
  error: string,
}

function commonReducer (state: ICommonState = initState, { type, payload = null }: AnyAction): ICommonState {
  switch (type) {
    case START_FETCHING: {
      return {
        ...state,
        fetching: true
      }
    }
    case STOP_FETCHING: {
      return {
        ...state,
        fetching: false
      }
    }
    case SET_ERROR: {
      return {
        ...state,
        error: payload
      }
    }
    default:
      return state
  }
}

export default commonReducer
