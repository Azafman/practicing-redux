import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { User } from "../../data/User";

interface initialStateProps {
    currentUser: User | null
}
const initialState:initialStateProps = {
    currentUser: null
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        login: (state, {payload}: PayloadAction<User | null>) => {
            state.currentUser = payload
        },
        logout: (state, {payload}: PayloadAction<null>) => {
            state.currentUser = payload;
        }
    }
});

export const {login, logout} = userSlice.actions;
export default userSlice;
export type UserReducerType = ReturnType<typeof userSlice.reducer>