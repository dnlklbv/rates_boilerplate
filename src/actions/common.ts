import { TAppDispatchThunk } from '../store/models'

const MODULE_NAME = 'COMMON'

export const START_FETCHING = `${MODULE_NAME}/START_FETCHING`
export const STOP_FETCHING = `${MODULE_NAME}/STOP_FETCHING`
export const SET_ERROR = `${MODULE_NAME}/SET_ERROR`

export const startFetching = (): any => async (dispatch: TAppDispatchThunk<never>): Promise<void> => {
  dispatch({
    type: START_FETCHING
  })
}
export const stopFetching = (): any => async (dispatch: TAppDispatchThunk<never>): Promise<void> => {
  dispatch({
    type: STOP_FETCHING
  })
}

export const setError = (error): any => async (dispatch: TAppDispatchThunk<never>): Promise<void> => {
  dispatch({
    type: SET_ERROR,
    payload: error
  })
}
