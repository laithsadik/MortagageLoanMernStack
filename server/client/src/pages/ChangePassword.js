import { FaStarOfLife } from "react-icons/fa";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ChangePassword() {
  const [formData, setFormData] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const navigate = useNavigate();
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    const useremail = localStorage.getItem("userEmail");
    localStorage.clear();
    e.preventDefault();
    setError(false);
    setLoading(true);
    const { passwordok, ...rest } = formData;
    console.log(rest);
    if (passwordok !== formData.password) {
      setError("סיסמה וגם אישור סיסמה לא זהים");
      setLoading(false);
      return;
    }
    try {
      const res = await fetch("/api/auth/changepassword", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: useremail, password: formData.password }),
      });
      const data = await res.json();
      if (data.success === false) {
        setError(data.message);
        setLoading(false);
        return;
      }
      setError(false);
      setLoading(false);
      localStorage.setItem("locate", "");
      navigate("/signin");
    } catch (error) {
      setLoading(false);
      setError(error.message);
    }
  };

  return (
    <div className="max-w-6xl mx-auto mt-12 p-3">
      <h1 className="text-3xl font-semibold text-right text-slate-600 ">
        שינוי סיסמה
      </h1>
      <div className="max-w-5xl w-full mt-5 ml-3">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-20 mr-32"
          dir="rtl"
        >
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-2 max-w-xs w-full">
              <div className="flex gap-1">
                <FaStarOfLife className="text-red-700 size-2 mt-1" />
                <label className="font-semibold">סיסמה</label>
              </div>
              <input
                type="text"
                className="border p-2 rounded-lg bg-slate-200"
                id="password"
                placeholder="סיסמה"
                required
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col gap-2 max-w-xs w-full">
              <div className="flex gap-1">
                <FaStarOfLife className="text-red-700 size-2 mt-1" />
                <label className="font-semibold">אישור סיסמה</label>
              </div>
              <input
                type="password"
                className="border p-2 rounded-lg bg-slate-200"
                id="passwordok"
                placeholder="סיסמה"
                required
                onChange={handleChange}
              />
            </div>
          </div>
          <button
            disabled={loading}
            type="submit"
            className=" disabled:opacity-80 hover:opacity-90 mt-1 border h-12 text-white text-lg max-w-xs bg-slate-600 rounded-lg font-semibold"
          >
            {loading ? "טוען..." : "שחזר סיסמה"}
          </button>
          {error && <p className="text-red-700 text-lg">{error}</p>}
        </form>
      </div>
    </div>
  );
}
