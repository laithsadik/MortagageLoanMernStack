import React, { useState } from "react";
import { FaStarOfLife } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { FaExclamationCircle } from "react-icons/fa";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phonenumber: "",
    subject: "זקוק להמלצה איזה בנק הכי כדאי לי",
    message: "",
  });
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
    const phoneNumberRegex = /^(053|054|050|055|052)\d{7}$/;
    if (!phoneNumberRegex.test(formData.phonenumber)) {
      setError("מספר פלפון לא נכון");
      setLoading(false);
      return;
    }

    try {
      const res = await fetch("/api/contact/contactus", {
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
      navigate("/contactformanswers");
    } catch (error) {
      setLoading(false);
      setError(error.message);
    }
  };
  return (
    <div>
      <main className="">
        <div className="flex flex-col lg:flex-row lg:justify-around gap-2">
          <div className="max-w-sm lg:max-w-5xl w-full mt-8 lg:mt-16 flex flex-col gap-3 lg:gap-6">
            <span className=" text-lg lg:text-3xl font-semibold text-right text-slate-700 ">
              טופס יצירת קשר
            </span>
            <div className="max-w-sm lg:max-w-4xl w-full mt-5 ml-3">
              <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-8 lg:gap-12"
                dir="rtl"
              >
                <div className="flex flex-col lg:flex-row gap-4 lg:gap-44 mx-auto lg:mx-0 ">
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
                <div className="flex flex-col lg:flex-row gap-4 lg:gap-44 mx-auto lg:mx-0 ">
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

                <div className="flex flex-col gap-10">
                  <div className="flex flex-col gap-2 mr-8 lg:mr-0 max-w-xs lg:max-w-4xl w-full">
                    <div className="flex gap-1">
                      <FaStarOfLife className="text-red-700 size-2 mt-1" />
                      <label className="font-semibold ">נושא הפנייה</label>
                    </div>
                    <select
                      required
                      onChange={handleChange}
                      id="subject"
                      className="border-1 border-current rounded-lg p-1 items-center bg-slate-200 font-medium text-slate-600 max-w-3xl w-full"
                    >
                      <option value="זקוק להמלצה איזה בנק הכי כדאי לי">
                        זקוק להמלצה איזה בנק הכי כדאי לי
                      </option>
                      <option value="שעות פעילות">שעות פעילות</option>
                      <option value="שאלה כללית">שאלה כללית</option>
                    </select>
                  </div>
                  <div className="flex flex-col gap-4 mr-8 lg:mr-0">
                    <textarea
                      type="text"
                      placeholder="פרטים נוספים"
                      className="border-1 border-current p-3 rounded-lg max-w-3xl w-full bg-slate-200 font-semibold"
                      id="message"
                      onChange={handleChange}
                      value={formData.message}
                    />

                    <button
                      disabled={loading}
                      type="submit"
                      className=" disabled:opacity-60 border h-12 text-white text-lg w-20 mx-auto lg:mx-0 lg:w-36 bg-slate-600 rounded-lg font-semibold hover:opacity-90"
                    >
                      {loading ? "טוען..." : "שלח"}
                    </button>
                  </div>
                  {error && <p className="text-red-700 text-lg">{error}</p>}
                </div>
              </form>
            </div>
          </div>
          <div
            className="w-[350px] border-l-4 mt-20 mr-5 hidden flex-col lg:block"
            dir="rtl"
          >
            <Link to={"/"} className="no-underline hover:underline">
              <h1 className="text-3xl text-slate-600 mb-4 ">דף הבית</h1>
            </Link>
            <Link to={"/newmortagage"} className="no-underline hover:underline">
              <h2 className="text-xl text-slate-500 ">
                מעוניין לקחת משכנתא חדשה
              </h2>
            </Link>

            <p className="text-slate-500 mr-3 text-base">
              רוצה לבדוק איפה הכי כדאי לי לקחת
              <br /> משכנתא
            </p>

            <Link to={"/loan"} className="no-underline hover:underline">
              <h2 className="text-xl text-slate-500 ">
                מעוניין לקחת הלוואה רגילה
              </h2>
            </Link>
            <Link to={"/loan"} className="no-underline hover:underline">
              <p className="text-slate-500 mr-3 mb-3 text-base">
                {" "}
                מעוניין לקחת הלוואה עד 100 אלף שייח
              </p>
            </Link>
            <div className="flex flex-col gap-2 mr-8 text-slate-500">
              <div className="flex flex-row gap-2 items-center">
                <Link to={"/loan"} className="no-underline hover:underline">
                  <span className="text-slate-500">
                    אני מעוניין לקחת הלוואה אחת
                  </span>
                </Link>
                <Tooltip title="אומדן בלבד. פרטי ההלואה הסופיים הם הקובעים">
                  <IconButton>
                    <FaExclamationCircle className="w-4 h-4" />
                  </IconButton>
                </Tooltip>
              </div>
              <div className="flex flex-row gap-2 items-center">
                <Link
                  to={"/resultmanyloan"}
                  className="no-underline hover:underline"
                >
                  <span className="text-slate-500">
                    אני מעוניין לקחת כמה הלוואות{" "}
                  </span>
                </Link>
                <Tooltip title="אומדן בלבד. פרטי ההלואה הסופיים הם הקובעים">
                  <IconButton>
                    <FaExclamationCircle className="w-4 h-4" />
                  </IconButton>
                </Tooltip>
              </div>
            </div>
            <Link
              to={"/contactformaboveonehandred"}
              className="no-underline hover:underline"
            >
              <p className="text-slate-500 mr-3 text-base mt-4">
                מעוניין לקחת הלוואה מעל 100 אלף שייח
              </p>
            </Link>
            <Link to={"/contactform"} className="no-underline hover:underline">
              <h4 className="text-slate-500 font-bold text-lg">צור קשר</h4>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
