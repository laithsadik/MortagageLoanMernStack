import React from "react";
import { CgProfile } from "react-icons/cg";
import { IoHome } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import {
  signOutFailure,
  signOutStart,
  signOutSuccess,
} from "../redux/user/userSlice";
import SideBar from "./SideBar";
export default function Header() {
  const { currentUser } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleClick = async () => {
    try {
      dispatch(signOutStart());
      const res = await fetch("/api/auth/signout", {
        method: "GET",
      });
      const data = await res.json();
      if (data.success === false) {
        dispatch(signOutFailure(data.message));
        return;
      }
      dispatch(signOutSuccess());
      navigate("/");
    } catch (error) {
      dispatch(signOutFailure(error.message));
    }
  };

  return (
    <header className="bg-slate-200 shadow-md p-3">
      <div className="flex justify-between items-center">
        {currentUser ? (
          <Link to={"/"}>
            <ul className="mt-1">
              <li className="gap-2 flex items-center">
                <CgProfile className="text-3xl mt-1" />
                <h1 className="text-xl font-semibold mt-1">
                  {currentUser.firstname} {currentUser.lastname}
                </h1>
              </li>
            </ul>
          </Link>
        ) : (
          <Link to={"/signin"}>
            <ul className="mt-1">
              <li className="gap-2 flex items-center">
                <CgProfile className="text-3xl mt-1" />
                <h1 className="text-xl font-semibold mt-1">משתמש אנונימי</h1>
              </li>
            </ul>
          </Link>
        )}

        <div className="  flex gap-2 lg:gap-4 items-center">
          {currentUser ? (
            <Link to={"/signout"}>
              <h2
                onClick={handleClick}
                className="text-xl font-bold mt-1 text-red-700"
              >
                התנתק
              </h2>
            </Link>
          ) : (
            <Link to={"/signin"}>
              <h2 className="text-xl font-bold mt-1 text-green-700 ">התחבר</h2>
            </Link>
          )}
          <Link to={"/"}>
            <IoHome className="h-10 w-10 lg:mr-0 text-black hidden lg:inline-block " />
          </Link>
          <div className="">
          <SideBar />
          </div>
        </div>
      </div>
    </header>
  );
}
