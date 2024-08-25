import React from 'react'
import { Link,NavLink,useNavigate } from 'react-router-dom'
import axios from 'axios'
import Logout from '../Profile/Logout'


import activeRide from './assets/activeRide.svg'
import customers from './assets/customers.svg'
import plus from './assets/plus.svg'
import profile from './assets/profile.svg'
import setting from './assets/setting.svg'
import logout from './assets/logout.svg'
import dashboard from './assets/dashboard.svg'
// import { useUser } from '../../contexts/UserContext'


function Sidebar() {
    const navigate = useNavigate();
    // const {setUser} = useUser();

    // const handleLogout = () =>{
    //     axios.post(`${process.env.REACT_APP_BASE_URL}/users/logout`)
    //     .then((res) =>{
    //         console.log(res.data)
    //     })
    //     .catch((error) =>{
    //         console.log("error: ", error);
    //     })

    //     // setUser('')
    //     // localStorage.removeItem('firstName')
    //     // localStorage.removeItem('lastName')
    //     navigate('/');
    // }

  return (
    <aside className='rounded-lg shadow-customShadow bg-gray-200 hover:bg-gra-300
     h-[622px] w-[214px] left-2 top-2 flex flex-col'>
        <h1 className='text-[25px] font-bold mt-3 ml-3 py-1 px-3 w-[190px] bg-red-100 rounded-lg shadow-customShadow'>Vehicle Rental</h1>
        <div className='mt-8 w-[200px]'>
            <div className='p-1'>
                <img src={dashboard} className='absolute left-2 '/>
                <label className='font-bold text-[20px] ml-[50px] '>Dashboard</label>
            </div>
            <div className='mt-2 flex flex-col'>

                <NavLink to={'newRide'} 
                    className={({isActive})=>`${isActive ? " shadow-customShadow bg-gray-100 " : ""}
                    flex justify-center rounded-lg hover:shadow-customShadow mt-2 ml-3 px-3 py-2 text-[18px] text-gray-600 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700`}
                 
                >
                    <img src={plus} className='absolute left-6 w-6 h-6'/>
                    <span className=''>New Ride</span>
                </NavLink> 

                <NavLink to={'activeRide'}
                className={({isActive}) =>`${isActive ? "shadow-customShadow bg-gray-100 " : ""} flex justify-center rounded-lg hover:shadow-customShadow mt-2 ml-3 text-[18px] text-gray-600 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700`}
                >
                    <img src={activeRide}
                        className='absolute left-4'
                    />
                    <span className='ml-4 py-2'>Active Rides</span>
                </NavLink> 

                <NavLink to={'history'}
                className={({isActive})=>`${isActive ? "shadow-customShadow bg-gray-100 ":""} flex justify-center rounded-lg hover:shadow-customShadow mt-2 ml-3 px-3 py-2 text-[18px] text-gray-600 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700`}
                >
                    <img src={customers} className='absolute left-5'/>
                    <span className=''>History</span>
                </NavLink> 

                {/* <NavLink to={'history'}
                className='flex justify-center rounded-lg hover:shadow-customShadow mt-2 px-3 py-2 text-[18px] text-gray-600 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700
                '>
                    <span>Vehicles</span>
                </NavLink>  */}

                <NavLink to={'vehicles'}
                className={({isActive})=>`${isActive ? "shadow-customShadow bg-gray-100 ":""} flex justify-center rounded-lg hover:shadow-customShadow mt-2 ml-3 px-3 py-2 text-[18px] text-gray-600 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700`}
                >
                    <img src=""/>
                    <span className=''>Vehicles</span>
                </NavLink>
            </div>
        </div>
        <div className='mt-3 w-[200px]'>
            <div className='p-1 inline-block'>
                <img src={profile} className='absolute left-2 w-8 h-9'/>
                <label className='font-bold text-[20px] absolute mt-1 ml-12'>Profile</label>
            </div>
            <div className='mt-2 flex flex-col'>

                <NavLink to={'setting'}
                className={({isActive}) =>`${isActive ? "shadow-customShadow bg-gray-100 ":""} flex justify-center rounded-lg hover:shadow-customShadow px-3 py-2 mt-9 ml-3 text-[18px] text-gray-600 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700`}>
                    <img src={setting} className='absolute left-10'/>
                    <span className=''>Setting</span>
                </NavLink>

                {/* <button
                className='flex justify-center rounded-lg hover:shadow-customShadow px-3 py-2 mt-3 ml-3 text-[18px] text-gray-600 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700'
                type='button'
                onClick={handleLogout}
                >
                    <img src={logout} className='absolute left-10'/>
                    <span>Logout</span>
                </button>  */}
                <Logout/>
                  
            </div>
        </div>
    </aside>
  )
}

export default Sidebar
