import React, { useState } from "react";
import { FaStarOfLife } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

export default function SignUp() {
  const [formData, setFormData] = useState({});
  const [successAlert, setSuccessAlert] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const navigate = useNavigate();
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false);
    setLoading(true);
    const { passwordok, ...rest } = formData;
    const phoneNumberRegex = /^(053|054|050|055|052)\d{7}$/;
    if (!phoneNumberRegex.test(formData.phonenumber)) {
      setError("מספר פלפון לא נכון");
      setLoading(false);
      return;
    }

    if (formData.passwordok !== formData.password) {
      setError("סיסמה וגם אישור סיסמה לא זהים");
      setLoading(false);
      return;
    }
    try {
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(rest),
      });
      const data = await res.json();
      if (data.success === false) {
        setError(data.message);
        setLoading(false);
        return;
      }
      setError(false);
      setLoading(false);
      setSuccessAlert(true);
      setTimeout(() => {
        navigate("/signin");
      }, 1000);
    } catch (error) {
      setLoading(false);
      setError(error.message);
    }
  };
  return (
    <div className="max-w-sm lg:max-w-6xl mx-auto mt-12 p-3">
      {successAlert ? (
        <div
          dir="rtl"
          className="flex items-center gap-4 max-w-4xl h-12 static object-right-top bg-white border border-slate-700 text-green-500 rounded ml-44 mb-20"
          role="alert"
        >
          <span className="">✔️</span>
          <span className="text-xl">{" הרשמה התבצעה בהצלחה"}</span>
        </div>
      ) : (
        <span></span>
      )}
      <h1 className="text-2xl lg:text-3xl font-semibold text-right text-slate-600 ">
        משתמש חדש
      </h1>
      <div className="max-w-sm lg:max-w-5xl w-full mt-5 ml-3">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-8 lg:gap-12 mr-16 lg:mr-0"
          dir="rtl"
        >
          <div className="flex flex-col lg:flex-row gap-6  lg:gap-64 ">
            <div className="flex flex-col gap-2 max-w-xs w-full">
              <div className="flex gap-1">
                <FaStarOfLife className="text-red-700 size-2 mt-1" />
                <label className="font-semibold">שם פרטי</label>
              </div>
              <input
                type="text"
                className="border p-2 rounded-lg bg-slate-200 "
                id="firstname"
                placeholder="שם פרטי"
                onChange={handleChange}
                required
              />
            </div>
            <div className="flex flex-col gap-2 max-w-xs w-full">
              <div className="flex gap-1">
                <FaStarOfLife className="text-red-700 size-2 mt-1" />
                <label className="font-semibold">שם משפחה</label>
              </div>
              <input
                type="text"
                className="border p-2 rounded-lg bg-slate-200"
                id="lastname"
                placeholder="שם משפחה"
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="flex flex-col lg:flex-row gap-6 lg:gap-64 ">
            <div className="flex flex-col gap-2 max-w-xs w-full">
              <div className="flex gap-1">
                <FaStarOfLife className="text-red-700 size-2 mt-1" />
                <label className="font-semibold"> מספר טלפון נייד</label>
              </div>
              <input
                type="text"
                className="border p-2 rounded-lg bg-slate-200 "
                id="phonenumber"
                placeholder="טלפון"
                onChange={handleChange}
                required
              />
            </div>
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
          </div>
          <div className="flex flex-col lg:flex-row gap-4 lg:gap-52 ">
            <div className="flex flex-col gap-2 max-w-xs w-52">
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
            <div className="flex flex-col gap-2 max-w-xs w-52">
              <div className="flex  gap-1">
                <FaStarOfLife className="text-red-700 size-2 mt-1" />
                <label className="font-semibold"> אישור סיסמה</label>
              </div>
              <input
                type="password"
                className="border p-2 rounded-lg bg-slate-200"
                id="passwordok"
                placeholder="אישור סיסמה"
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <div className="flex items-center">
              <span className="font-semibold">כבר רשום? </span>
              <Link to={"/signin"} className="no-underline hover:underline">
                <span className="text-blue-600 font-bold">התחברות</span>
              </Link>
            </div>
            <Link
              to={"/changepassword"}
              className="no-underline hover:underline"
            >
              <span className="text-blue-600 font-bold">שיחזור סיסמה</span>
            </Link>
            <button
              disabled={loading}
              type="submit"
              className=" disabled:opacity-60 mr-4 mt-4 lg:mt-1 border h-12 text-white text-lg max-w-xs bg-slate-600 rounded-lg font-semibold hover:opacity-90"
            >
              {loading ? "טוען..." : " יצירת חשבון חדש"}
            </button>
            {error && <p className="text-red-700 text-lg">{error}</p>}
          </div>
        </form>
      </div>
    </div>
  );
}
