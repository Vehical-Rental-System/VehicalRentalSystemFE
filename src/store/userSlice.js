import { createSlice } from "@reduxjs/toolkit";  

const initialState = {
    status: false,
    userData : null,
    darkMode : true,
}
 

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers:{
        login: (state, action) =>{
            state.status = true
            state.userData = action.payload?.userData || state.userData
        },
        logout: (state, action) =>{
            state.status = false
            state.userData = null   
        },
        darkModeToggle: (state, action) =>{
            state.darkMode = !state.darkMode 
        }
    }
})

export const { login, logout, darkModeToggle } = userSlice.actions

export default userSlice.reducer