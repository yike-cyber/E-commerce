import React from "react";
import AccountIcon from "../../../assets/icons/user.svg";

import { useAuth } from "../../../contexts/AuthContext";
import UserProfile from "./UserProfile";

function UserDashboard() {
  const { user } = useAuth();

  if (!user) return <div className="w-44 h-14 bg-green-500">loading...</div>;

  return (
    <div>
      <div className="mx-6 my-2 py-2 flex flex-row">
        <p>
          {" "}
          <span className="text-gray-600 mx-2">🏠 Home </span>
          <span>➡️</span>
        </p>
        <p>
          <span className="text-gray-600 mx-2">Pages</span>
          <span>➡️</span>
        </p>
        <p>
          <span className="text-gray-600 mx-2">My Account</span>
        </p>
      </div>
      <hr className=" border-gray-300 my-2" />

      <div className="grid grid-cols-6  mx-auto">
        <div className="col-span-6 sm:col-span-2 mx-auto py-2">
          <ul className="px-2 py-1 shadow-md shadow-gray-400 z-20 align-middle items-center mx-10 mt-2">
            <li className="w-64 bg-green-600 py-2 mr-5  text-white text-sm font-semibold text-start ps-2  rounded-md">
              <h2> 👩‍🏫 Profile</h2>
            </li>
            <li className="flex flex-rowi items-center w-64 py-2 my-2 border border-gray-300 text-gray-600 text-sm font-semibold text-start ps-2 pr-5 rounded-md">
              <span>
                <img
                  src={AccountIcon}
                  alt="account_det_img"
                  className="w-4 h-4"
                />
              </span>
              <h2 className="ms-2">Dashboard</h2>
            </li>
            <li className="flex flex-rowi items-center w-64 py-2 my-2 border border-gray-300 text-gray-600 text-sm font-semibold text-start ps-2 pr-5 rounded-md">
              <span>
                <img
                  src={AccountIcon}
                  alt="account_det_img"
                  className="w-4 h-4"
                />
              </span>
              <h2 className="ms-2">Orders</h2>
            </li>
            <li className="flex flex-rowi items-center w-64 py-2 my-2 border border-gray-300 text-gray-600 text-sm font-semibold text-start ps-2 pr-5 rounded-md">
              <span>
                <img
                  src={AccountIcon}
                  alt="account_det_img"
                  className="w-4 h-4"
                />
              </span>
              <h2 className="ms-2">Track your Order</h2>
            </li>

            <li className="flex flex-rowi items-center w-64 py-2 my-2 border border-gray-300 text-gray-600 text-sm font-semibold text-start ps-2 pr-5 rounded-md">
              <span>
                <img
                  src={AccountIcon}
                  alt="account_det_img"
                  className="w-4 h-4"
                />
              </span>
              <h2 className="ms-2">My Address</h2>
            </li>
            <li className="flex flex-rowi items-center w-64 py-2 my-2 border border-gray-300 text-gray-600 text-sm font-semibold text-start ps-2 pr-5 rounded-md">
              <span>
                <img
                  src={AccountIcon}
                  alt="account_det_img"
                  className="w-4 h-4"
                />
              </span>
              <h2 className="ms-2">Account Detail</h2>
            </li>
          </ul>
        </div>

        <div className="sm:col-span-4   py-2 ">
          <UserProfile />
        </div>
      </div>
    </div>
  );
}

export default UserDashboard;