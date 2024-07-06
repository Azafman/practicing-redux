import { combineReducers } from '@reduxjs/toolkit'
import userSlice from './user/slice'
import cartSlice from './cart/slice'

const rootReducer = combineReducers({
    userSlice,
    cartSlice
})

export default rootReducer;
export type RootReducerType = ReturnType<typeof rootReducer>;