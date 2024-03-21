import React, { useState } from "react";

import { FaStarOfLife } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function GetPassword() {
  const [formData, setFormData] = useState({});
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

    try {
      const res = await fetch("/api/auth/getpassword", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success === false) {
        setError(data.message);
        setLoading(false);
        return;
      }
      setError(false);
      setLoading(false);
      localStorage.setItem('userEmail', data.email);
      navigate("/changepassword");
    } catch (error) {
      setLoading(false);
      setError(error.message);
    }
  };

  return (
    <div className="max-w-6xl mx-auto mt-12 p-3">
      <h1 className="text-3xl font-semibold text-right text-slate-600 ">
        שחזור סיסמה
      </h1>
      <div className="max-w-5xl w-full mt-5 ml-3">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-20 mr-32"
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

          <button
            disabled={loading}
            type="submit"
            className=" disabled:opacity-60 hover:opacity-90 mt-1 border h-12 text-white text-lg max-w-xs bg-slate-600 rounded-lg font-semibold"
          >
            {loading ? "טוען..." : "שחזר סיסמה"}
          </button>
          {error && <p className="text-red-700 text-lg">{error}</p>}
        </form>
      </div>
    </div>
  );
}
