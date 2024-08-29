import axios from "axios";  
import { logout } from "../store/userSlice";
import { updateAccessToken } from "../store/authSlice";
import store from "../store/store";

import refreshToken from "./refreshToken";

const api = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
})


api.interceptors.request.use(
    (config) => { 
        const accessToken = store.getState().auth.accessToken;

        if(accessToken){
            config.headers['Authorization'] = `Bearer ${accessToken}`;
        }

        return config;
    },
    (error) =>{
        return Promise.reject(error);
    }
)


api.interceptors.response.use(
    (response) => {
        return response;
    },
    async (error) => { 
        const originalRequest = error.config;  

        if(error.response.status === 401 && !originalRequest._retry){ 
            originalRequest._retry = true;
            // console.log("here")

            try {
                const state = store.getState();
                const userId = state.user.userData._id;   
                await refreshToken(userId);  

                // console.log("updated access token : ", state.auth.accessToken);
                // updated state 
                const newState = store.getState();
                const newAccessToken = newState.auth.accessToken;
                if(newAccessToken){
                    originalRequest.headers['Authorization'] = `Bearer ${newAccessToken}`;  // request header is updated with new access token
                    return api(originalRequest);   // retrying the original request with new access token
                }


            } catch (error) {
                store.dispatch(logout());             // clearing user data if request fail and logout user
                store.dispatch(updateAccessToken());  // clearing access token if request fail
            }
        }

        return Promise.reject(error);
    }
)

export default api;