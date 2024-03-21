import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaExclamationCircle } from "react-icons/fa";
import { FaStarOfLife } from "react-icons/fa6";
import MarkPlacment from "../components/MarkPlacment";
import Switch from "@mui/material/Switch";
import pdfFile from "../assesst/MortgageFinalWork.pdf";
import CommissionTable from "../components/CommissionTable";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
export default function Loan() {
  const { currentUser } = useSelector((state) => state.user);
  const [showPdf, setShowPdf] = useState(false);
  const [isClick, setIsClick] = useState(false);
  const openPdf = () => {
    setShowPdf(true);
  };

  const goBack = () => {
    setShowPdf(false);
  };

  const [sliderValue, setSliderValue] = useState(50);
  const [isChecked, setIsChecked] = useState(false);
  const [formData, setFormData] = useState({
    interest: "ריבית פריים",
    banks: "בנק דיסקונט לישראל בעם",
    international: "ישראלית",
  });
  const navigate = useNavigate();
  const handleSwitchChange = () => {
    setIsChecked((prevChecked) => !prevChecked); // Toggle the state
  };

  useEffect(() => {
    setFormData({ ...formData, slideValue: 50 });
  }, [formData]);
  function handleSilde(value) {
    setSliderValue(value);
    setFormData({ ...formData, slideValue: value });
  }
  const handleChange = (e) => {
    if (
      e.target.id === "interest" ||
      e.target.id === "banks" ||
      e.target.id === "international"
    ) {
      setFormData({ ...formData, [e.target.id]: e.target.value });
    }
  };

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false);
    setLoading(true);

    try {
      const res = await fetch("/api/user/loan", {
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
      setIsClick(true);
      setError(false);
      setLoading(false);
      localStorage.setItem("locate", "loan");
      navigate("/resultoneloan");
    } catch (error) {
      setLoading(false);
      setError(error.message);
    }
  };

  return (
    <main className="">
      <div className="flex flex-col lg:flex-row lg:justify-around gap-2">
        <div className="max-w-sm lg:max-w-5xl w-full mt-8 lg:mt-16 flex flex-col gap-8 lg:gap-12">
          <div dir="rtl">
            <div className="flex flex-col">
              <span className="text-black mr-4 text-base font-semibold">
                מעוניין לקחת הלוואה רגילה
              </span>
              <span className="text-black mr-4 text-base font-semibold">
                מעוניין לקחת הלוואה עד 100 אלף ש"ח
              </span>
              <span className="text-2xl text-green-500 mr-4 font-semibold">
                אני מעוניין לקחת הלוואה אחת
              </span>
            </div>
            <hr className="h-[4px] lg:h-[8px] my-0 bg-gray-700 max-w-3xl " />
          </div>

          <form
            onSubmit={handleSubmit}
            className="mr-8 font-normal flex flex-col gap-10 lg:gap-14 "
            dir="rtl"
          >
            <div className="font-normal flex flex-col gap-12">
              <div className="flex flex-col lg:flex-row gap-y-4 lg:gap-y-0 gap-x-48 ">
                <div className="flex flex-col gap-2 max-w-xs w-full">
                  <div className="flex gap-1">
                    <FaStarOfLife className="text-red-700 size-2 mt-1" />
                    <label> שם בנק בו מתנהל חשבונך</label>
                  </div>
                  <select
                    required
                    onChange={handleChange}
                    id="banks"
                    className="border-2 border-current rounded-lg p-1 items-center max-w-xs bg-slate-200 font-medium"
                  >
                    <option value="בנק דיסקונט לישראל בעם">
                      בנק דיסקונט לישראל בע"מ
                    </option>
                    <option value="בנק הפועלים בעם">בנק הפועלים בע"מ</option>
                    <option value="בנק יהב לעובדי המדינה בעם">
                      בנק "יהב" לעובדי המדינה בע"מ
                    </option>
                    <option value="בנק ירושלים בעם">בנק ירושלים בע"מ</option>
                    <option value="בנק לאומי לישראל בעם">
                      בנק לאומי לישראל בע"מ{" "}
                    </option>
                    <option value="וואן זירו הבנק הדיגיטלי בעם">
                      וואן זירו הבנק הדיגיטלי בע"מ{" "}
                    </option>
                    <option value="בנק מזרחי טפחות בעם">
                      בנק מזרחי טפחות בע"מ
                    </option>
                    <option value="בנק מסד בעם">בנק מסד בע"מ</option>
                    <option value="בנק מרכנתיל דיסקונט בעם">
                      בנק מרכנתיל דיסקונט בע"מ{" "}
                    </option>
                    <option value="בנק הבינלאומי הראשון לישראל בעם">
                      הבנק הבינלאומי הראשון לישראל בע"מ
                    </option>
                  </select>
                </div>

                <div className="flex flex-col gap-2">
                  <div className="flex gap-1">
                    <FaStarOfLife className="text-red-700 size-2 mt-1" />
                    <label>כמה כסף אתה מעוניין להלוות</label>
                    {"?"}
                    <span>[בשייח]</span>
                  </div>
                  <MarkPlacment
                    handleSlideChange={handleSilde}
                    value={sliderValue}
                  />
                </div>
              </div>
              <div className="flex flex-col lg:flex-row gap-x-48 gap-y-4 lg:gap-y-0 ">
                <div className="flex flex-col gap-2 max-w-xs w-full">
                  <div className="flex gap-1">
                    <FaStarOfLife className="text-red-700 size-2 mt-1" />
                    <label> בחר שיטת החזר רצוייה</label>
                  </div>

                  <select
                    required
                    onChange={handleChange}
                    id="interest"
                    className="border-2 border-current rounded-lg p-1 items-center bg-slate-200 font-medium max-w-xs"
                  >
                    <option value="ריבית פריים"> ריבית פריים</option>
                    <option value="ריבית קבועה צמודה">
                      ריבית קבועה צמודה{" "}
                    </option>
                    <option value="ריבית קבועה לא צמודה">
                      ריבית קבועה לא צמודה
                    </option>
                  </select>
                </div>
                <div className="flex flex-col gap-2 max-w-xs w-full">
                  <div className="flex gap-1">
                    <FaStarOfLife className="text-red-700 size-2 mt-1" />
                    <label>אזרחות נוכחית</label>
                  </div>
                  <select
                    required
                    onChange={handleChange}
                    id="international"
                    className="border-2 border-current rounded-lg p-1 items-center bg-slate-200 font-medium max-w-xs"
                  >
                    <option value={"ישראלית"}> ישראלית</option>
                    <option value={"אמריקאית"}>אמריקאית</option>
                    <option value={"אירופאית"}>אירופאית </option>
                  </select>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex flex-col gap-8 mt-2">
                <div className="flex gap-2">
                  <div className="gap-1 items-center flex">
                    <FaStarOfLife className="text-red-700 size-2 mb-2" />
                    <span>ידוע לי שההצעה היא רק לאומדן בלבד</span>
                    <Tooltip title="אומדן בלבד. פרטי ההלואה הסופיים הם הקובעים">
                      <IconButton>
                        <FaExclamationCircle className="w-4 h-4" />
                      </IconButton>
                    </Tooltip>
                    <input
                      type="checkbox"
                      id="vote"
                      className="w-5 h-5"
                      required
                    />
                  </div>
                </div>
                <div className="flex flex-col lg:flex-row lg:gap-1">
                  <div className="flex flex-row gap-1"> 
                  <FaStarOfLife className="text-red-700 size-2 mt-1" />
                  <span>קראיתי ואני מסכים לתקנון האתר</span>
                  </div>
                  <div className="flex gap-1 items-center">
                    <Switch
                      className="mt-[2px] border-1 rounded-lg bg-slate-200"
                      checked={isChecked}
                      onChange={handleSwitchChange}
                      required
                      size="small"
                    />
                    <div>
                      {!showPdf ? (
                        <button
                          onClick={openPdf}
                          style={{
                            fontSize: "16px",
                            border: "none",
                            borderRadius: "4px",
                            cursor: "pointer",
                            textDecoration: "underline", // Add underline
                          }}
                        >
                          תקנון
                        </button>
                      ) : (
                        <div>
                          {/* Replace with your actual PDF viewer component */}
                          <iframe className="w-[200x] sm:w-[800px] h-[300px] sm:h-[400px]"
                            src={pdfFile}
                            title="PDF Viewer"
                          />
                          <button
                            onClick={goBack}
                            style={{
                              marginTop: "20px",
                              padding: "10px 20px",
                              fontSize: "16px",
                              backgroundColor: "black",
                              color: "#FFFFFF",
                              border: "none",
                              borderRadius: "4px",
                              cursor: "pointer",
                            }}
                          >
                            close
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <button
                  disabled={loading}
                  type="submit"
                  className="disabled:opacity-80 hover:opacity-90 bg-slate-500 rounded-lg max-w-28 text-center h-12 text-white mr-2"
                >
                  {loading ? "טוען..." : "חשב"}
                </button>
                {error && <p className="text-red-700 text-lg">{error}</p>}
                {(isChecked === false && isClick === false) ||
                (isChecked === true && isClick === false) ||
                (isChecked === false && isClick === true) ? (
                  <span></span>
                ) : currentUser ? (
                  <CommissionTable />
                ) : (
                  <Navigate to={"/signin"} />
                )}
              </div>
            </div>
          </form>
        </div>

        <div
          className="w-[350px] border-l-4 mt-20 mr-5 hidden flex-col lg:block"
          dir="rtl"
        >
          <Link to={"/"} className="no-underline hover:underline">
            <h1 className="text-3xl text-slate-600 font-bold mb-4 ">דף הבית</h1>
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
                <span className="font-bold text-slate-500">
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
            <h4 className="text-slate-500 text-lg">צור קשר</h4>
          </Link>
        </div>
      </div>
    </main>
  );
}
