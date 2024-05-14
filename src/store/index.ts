import { RootState } from './rootReducer'
import { counterActions } from './counterSlice'
import { appDispatch } from './store'

export type { RootState }
export { counterActions, appDispatch }