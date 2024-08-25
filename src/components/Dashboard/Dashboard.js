import React, { useEffect } from "react";
import Sidebar from "./Sidebar"; 
// import Vehicle from "./Vehicles";
import { Outlet, useLocation, NavLink } from "react-router-dom";
// import { useUser } from "../../contexts/UserContext";
import { useSelector } from "react-redux";

import profile from "./assets/profile.svg";

const Dashboard = () => {
  const location = useLocation();
  const userData = useSelector((state) => state.user.userData)
  console.log(userData);
  const isNewRideActive = location.pathname.startsWith("/newRide");

  // const { user, setUser } = useUser(); // user context
  // useEffect(() => {
  //   const firstName = localStorage.getItem("firstName");
  //   const lastName = localStorage.getItem("lastName");
  //   if (firstName && lastName) {
  //     setUser({
  //       firstName: firstName,
  //       lastName: lastName,
  //     });
  //   }
  // }, []);
  return (
    <>
      <nav
        className="h-16 rounded-lg shadow-customShadow bg-gray-200 hover:bg-gra-300
            mt-2 mr-3 ml-[230px] p-1"
      >
        {isNewRideActive && (
          <div className="absolute flex mt-1.5 ml-8">
            <NavLink
              to={"newRide/newrideform"}
              className={({ isActive }) => `${isActive ? "shadow-customShadow" : ""}        hover:shadow-customShadow bg-gray-100 rounded-md py-2 px-3 
                w-[150px] text-center ml-7 border border-gray-300`}
            >
              New Ride
            </NavLink>

            <NavLink
              to={"newRide/qrform"}
              className={({ isActive }) => `${
                isActive ? "shadow-customShadow" : ""
              } hover:shadow-customShadow bg-gray-100 rounded-md py-2 px-3
          w-[150px] text-center ml-10 border border-gray-300`}
            >
              QR Code Form
            </NavLink>
          </div>
        )}

        <p className="absolute font-semibold end-28 top-7">
          {userData?.firstName} {userData?.lastName}
        </p>
        <div className="bg-red-300 hover:bg-red-400 w-[55px] h-[55px] absolute end-6 rounded-full p-[12px] shadow-customShadow">
          <img src={profile} className=" h-10"/>
        </div>
      </nav>
      {/* <div className='h-16 w-[210px] rounded-lg shadow-customShadow bg-gray-200 hover:bg-gray-300 absolute
             top-2 left-2 flex justify-center'>
                <h1 className='text-[25px] font-bold mt-3'>Vehicle Rental</h1>
        </div> */}
      <div className="absolute top-2 left-1">
        <Sidebar />
      </div>
      <div
        className="rounded-lg shadow-customShadow bg-gray-200 hover:bg-gra-300
            h-[545px]  ml-[230px] mt-3 mr-3 px-1 py-1"
      > 
         <div className="">
         <Outlet />
         </div>
      </div>
    </>
  );
};

export default Dashboard;
