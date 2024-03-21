import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaStarOfLife } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import {
  signInFailure,
  signInStart,
  signInSuccess,
} from "../redux/user/userSlice";

export default function SignIn() {
  const [formData, setFormData] = useState({});
  const { loading, error } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(signInStart());

    try {
      const res = await fetch("/api/auth/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success === false) {
        dispatch(signInFailure(data.message));
        return;
      }
      dispatch(signInSuccess(data));
      const locate = localStorage.getItem("locate");
      navigate(`/${locate}`);
    } catch (error) {
      dispatch(signInFailure(error.message));
    }
  };

  return (
    <div className="max-w-sm sm:max-w-6xl mx-auto mt-12 p-3">
      <h1 className="text-xl sm:text-3xl font-semibold text-right text-slate-600 ">
        כניסה לחשבון שלי
      </h1>
      <div className="max-w-sm sm:max-w-5xl w-full mt-5 ml-3">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-12 mr-16 sm:mr-32"
          dir="rtl"
        >
          <div className="flex flex-col gap-2 max-w-xs w-full">
            <div className="flex gap-1">
              <FaStarOfLife className="text-red-700 size-2 mt-1" />
              <label className="font-semibold">דואר אלקטרוני</label>
            </div>
            <input
              type="email"
              className="border p-2 rounded-lg bg-slate-200"
              id="email"
              placeholder="דואר אלקטרוני"
              onChange={handleChange}
              required
            />
          </div>

          <div className="flex flex-col gap-2 max-w-xs w-full">
            <div className="flex gap-1">
              <FaStarOfLife className="text-red-700 size-2 mt-1" />
              <label className="font-semibold">סיסמה</label>
            </div>
            <input
              type="password"
              className="border p-2 rounded-lg bg-slate-200 "
              id="password"
              placeholder="סיסמה"
              onChange={handleChange}
              required
            />
          </div>

          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-1">
              <Link
                to={"/getpassword"}
                className="no-underline hover:underline"
              >
                <span className="text-blue-600 font-bold">שיחזור סיסמה</span>
              </Link>
              <div className="flex items-center">
                <span className="font-semibold">עדיין לא רשום? </span>
                <Link to={"/signup"} className="no-underline hover:underline">
                  <span className="text-blue-600 font-bold"> הרשם</span>
                </Link>
              </div>
            </div>
            <button
              disabled={loading}
              type="submit"
              className="disabled:opacity-60 hover:opacity-90 mt-1 border h-12 text-white text-lg max-w-xs bg-slate-600 rounded-lg font-semibold"
            >
              {loading ? "טוען..." : "כניסה"}
            </button>
            {error && <p className="text-red-700 text-lg">{error}</p>}
          </div>
        </form>
      </div>
    </div>
  );
}
