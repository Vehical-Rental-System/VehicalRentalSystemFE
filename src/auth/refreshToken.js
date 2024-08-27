import axios from "axios";
import store from "../store/store";
import { updateAccessToken } from "../store/authSlice";


const refreshToken = async (userId) =>{ 
    const data = {
        userId : userId
    }
    
    await axios.post(`${process.env.REACT_APP_BASE_URL}/users/refresh-token`, data)
    .then((res)=>{ 
        const newAccessToken = res.data.data.accessToken; 
        store.dispatch(updateAccessToken({accessToken: newAccessToken}));
    })
    .catch((error) =>{
        console.log("ERRor in refreshtoken function")
    })
 
}

export default refreshToken;