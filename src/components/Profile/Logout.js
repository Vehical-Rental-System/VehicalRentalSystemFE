import logoutSvg from '../Dashboard/assets/logout.svg'
// import axios from 'axios'
import api from '../../auth/auth'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { logout } from '../../store/userSlice'
import { updateAccessToken } from '../../store/authSlice'

const Logout = () =>{
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleLogout = async () =>{
        await api.post(`${process.env.REACT_APP_BASE_URL}/users/logout`)
        .then((res) =>{
            console.log(res.data)
        })
        .catch((error) =>{
            console.log("error: ", error);
        })
        .finally(() =>{
            dispatch(logout());
            dispatch(updateAccessToken());
            navigate('/');
        })

        // setUser('')
        // localStorage.removeItem('firstName')
        // localStorage.removeItem('lastName')
    }

    return(
        <button
                className='flex justify-center rounded-lg hover:shadow-customShadow px-3 py-2 mt-3 ml-3 text-[18px] text-gray-600 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700'
                type='button'
                onClick={handleLogout}
                >
                    <img src={logoutSvg} className='absolute left-10'/>
                    <span>Logout</span>
        </button> 
    )
}


export default Logout