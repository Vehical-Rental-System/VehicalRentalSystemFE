import { createSlice } from "@reduxjs/toolkit";  

const initialState = {
    accessToken: null
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers:{
        updateAccessToken : (state, action) =>{
            state.accessToken = action.payload?.accessToken ? action.payload.accessToken : null;
        },
    }
})

export const { updateAccessToken } = authSlice.actions;


export default authSlice.reducer;