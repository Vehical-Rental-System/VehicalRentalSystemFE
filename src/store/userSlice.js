import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    status: false,
    userData : null,
    accessToken : null,
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers:{
        login: (state, action) =>{
            state.status = true
            state.userData = action.payload.userData
            state.accessToken = action.payload.accessToken
        },
        logout: (state, action) =>{
            state.status = false
            state.userData = null
            state.accessToken = null
        }
    }
})

export const { login, logout } = userSlice.actions

export default userSlice.reducer